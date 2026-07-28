import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "../../lib/contact-schema";

export const runtime = "nodejs";
// Credentials are read per-request from the environment; nothing to prerender.
export const dynamic = "force-dynamic";

/**
 * Per-IP throttle. In-memory, so on serverless it is per-instance rather than
 * global — enough to blunt casual abuse of a public send endpoint without
 * pulling in a datastore.
 */
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: requiredEnv("SMTP_HOST"),
    port: Number(process.env.SMTP_PORT ?? 587),
    // Port 587 uses STARTTLS, so `secure` stays false; 465 needs it true.
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: requiredEnv("SMTP_USER"),
      pass: requiredEnv("SMTP_PASS"),
    },
  });

  return transporter;
}

const stripNewlines = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char]!,
  );

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const { email, message, company } = parsed.data;

  // Honeypot tripped — accept silently so bots do not learn they were caught.
  if (company) return NextResponse.json({ ok: true });

  // These two land in mail headers, where a stray CR/LF would let a sender
  // inject headers of their own. Nodemailer guards this, but stripping at the
  // boundary is cheaper than trusting it.
  const name = stripNewlines(parsed.data.name);
  const subject = stripNewlines(parsed.data.subject);

  try {
    await getTransporter().sendMail({
      from: process.env.SMTP_FROM ?? requiredEnv("SMTP_USER"),
      to: process.env.CONTACT_TO ?? requiredEnv("SMTP_USER"),
      // Replying in the mail client goes straight to the sender.
      replyTo: `${name} <${email}>`,
      subject: `Portfolio enquiry: ${subject}`,
      text: `${message}\n\n—\nFrom: ${name} <${email}>\nSubject: ${subject}`,
      html: `
        <div style="font-family:system-ui,-apple-system,sans-serif;line-height:1.6;color:#0f172a">
          <p style="white-space:pre-wrap;margin:0 0 24px">${escapeHtml(message)}</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0" />
          <table style="font-size:14px;color:#475569">
            <tr><td style="padding-right:12px"><strong>From</strong></td><td>${escapeHtml(name)}</td></tr>
            <tr><td style="padding-right:12px"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding-right:12px"><strong>Subject</strong></td><td>${escapeHtml(subject)}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    // Log server-side only — SMTP errors can contain credentials or host detail.
    console.error("Contact form send failed:", error);
    return NextResponse.json(
      { error: "Message could not be sent." },
      { status: 502 },
    );
  }
}

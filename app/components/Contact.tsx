"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "../data/site";
import { contactSchema, type ContactFormData } from "../lib/contact-schema";

type Status = "idle" | "success" | "error";

const fieldClass = (hasError: boolean) =>
  `w-full rounded-lg border bg-white px-4 py-2.5 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-accent-400 dark:focus:ring-accent-400/20 ${
    hasError
      ? "border-red-500 dark:border-red-500"
      : "border-slate-300 dark:border-slate-700"
  }`;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  /** Holds the last failed submission so it can be recovered via mailto. */
  const [failed, setFailed] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Request failed");
      }

      setStatus("success");
      setFailed(null);
      reset();
    } catch (error) {
      // Keep the message recoverable rather than making the sender retype it.
      console.error("Contact form submission failed:", error);
      setFailed(data);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoFallback = failed
    ? `mailto:${site.email}?subject=${encodeURIComponent(
        failed.subject,
      )}&body=${encodeURIComponent(
        `${failed.message}\n\n—\n${failed.name}\n${failed.email}`,
      )}`
    : `mailto:${site.email}`;

  const details = [
    { Icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { Icon: Phone, label: site.phone, href: site.phoneHref },
    { Icon: MapPin, label: `${site.location} · Remote-first`, href: null },
  ];

  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your system"
          description="Payments, lending, partner integrations, or a backend that has stopped keeping up. Tell me what you are building and I'll tell you honestly whether I'm the right fit."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="rounded-xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Direct
            </h3>
            <div className="mt-5 space-y-4">
              {details.map(({ Icon, label, href }) => {
                const content = (
                  <>
                    <Icon className="h-[18px] w-[18px] shrink-0 text-accent-700 dark:text-accent-400" />
                    <span className="text-sm">{label}</span>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 text-slate-600 transition-colors hover:text-accent-700 dark:text-slate-400 dark:hover:text-accent-400"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex gap-2 border-t border-slate-200 pt-6 dark:border-slate-800">
              {[
                { href: site.github, Icon: Github, label: "GitHub profile" },
                {
                  href: site.linkedin,
                  Icon: Linkedin,
                  label: "LinkedIn profile",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-accent-600 hover:text-accent-700 dark:border-slate-800 dark:text-slate-400 dark:hover:border-accent-400 dark:hover:text-accent-300"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-1">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Honeypot — hidden from people, tempting to bots. */}
              <div aria-hidden className="absolute left-[-9999px]">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("company")}
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={fieldClass(Boolean(errors.name))}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={fieldClass(Boolean(errors.email))}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject")}
                  className={fieldClass(Boolean(errors.subject))}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={fieldClass(Boolean(errors.message))}
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {isSubmitting ? "Sending…" : "Send message"}
              </button>

              {status === "success" && (
                <p
                  role="status"
                  className="mt-4 flex items-center gap-2 rounded-lg bg-accent-50 px-4 py-3 text-sm text-accent-800 dark:bg-accent-400/10 dark:text-accent-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Thanks — your message is through. I usually reply within a
                  day.
                </p>
              )}
              {status === "error" && (
                <div
                  role="alert"
                  className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-400"
                >
                  <p className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      That didn&apos;t send — the mail service rejected it.
                      Nothing you typed is lost.
                    </span>
                  </p>
                  <a
                    href={mailtoFallback}
                    className="mt-3 inline-flex items-center gap-2 rounded-lg border border-red-300 px-3.5 py-2 font-medium transition-colors hover:bg-red-100 dark:border-red-500/40 dark:hover:bg-red-500/10"
                  >
                    <Mail className="h-4 w-4" />
                    Send it from your email app instead
                  </a>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

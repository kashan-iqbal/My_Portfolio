import Image from "next/image";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import profileImage from "@/public/profile.jpg";
import Reveal from "./Reveal";
import ScrollLink from "./ScrollLink";
import { metrics, site } from "../data/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-28 pb-20 dark:bg-slate-950"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 text-slate-900 dark:text-slate-100" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white dark:via-slate-950/60 dark:to-slate-950" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="w-full lg:w-[58%]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-600/25 bg-accent-50 px-3 py-1.5 dark:border-accent-400/25 dark:bg-accent-400/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-600 dark:bg-accent-400" />
              </span>
              <span className="font-mono text-xs tracking-wide text-accent-800 dark:text-accent-300">
                Available for fintech engagements
              </span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl dark:text-white">
              {site.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-slate-700 md:text-2xl dark:text-slate-300">
              Full Stack Engineer building{" "}
              <span className="text-accent-700 dark:text-accent-400">
                fintech systems
              </span>
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Three years shipping payment and lending services on Node.js and
              PostgreSQL, and the React and Next.js interfaces in front of them.
              Currently at a UAE fintech, where I own the APIs our banking
              partners integrate against.
            </p>

            <p className="mt-5 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
              <MapPin className="h-4 w-4" />
              {site.location} · Remote-first
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ScrollLink
                target="contact"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </ScrollLink>
              <a
                href={site.resume}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-400 dark:hover:text-white"
              >
                <Download className="h-4 w-4" />
                Download résumé
              </a>

              <div className="ml-1 flex items-center gap-1">
                {[
                  { href: site.github, Icon: Github, label: "GitHub profile" },
                  {
                    href: site.linkedin,
                    Icon: Linkedin,
                    label: "LinkedIn profile",
                  },
                  {
                    href: `mailto:${site.email}`,
                    Icon: Mail,
                    label: "Email Kashan",
                  },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.12}
            className="w-full max-w-[280px] lg:w-[34%] lg:max-w-none"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
              <Image
                src={profileImage}
                alt="Kashan Iqbal"
                fill
                sizes="(max-width: 1024px) 280px, 360px"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>

        {/* Proof points — each tied to where it happened, not floating numbers. */}
        <Reveal
          as="dl"
          delay={0.2}
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-slate-200 pt-10 lg:grid-cols-4 dark:border-slate-800"
        >
          {metrics.map((metric) => (
            <div key={metric.context}>
              <dt className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-white">
                {metric.value}{" "}
                <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                  {metric.unit}
                </span>
              </dt>
              <dd className="mt-1.5 text-sm leading-snug text-slate-500 dark:text-slate-500">
                {metric.context}
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/site";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Three years, three roles"
          description="Full-time since June 2023, freelance before that. Titles and dates match my résumé exactly."
        />

        <div className="relative">
          {/* Timeline rail */}
          <div className="absolute top-2 bottom-2 left-0 hidden w-px bg-slate-200 md:block dark:bg-slate-800" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <Reveal
                as="article"
                key={job.company}
                delay={index * 0.1}
                className="relative md:pl-10"
              >
                <span
                  className={`absolute top-2 -left-[5px] hidden h-[11px] w-[11px] rounded-full md:block ${
                    job.current
                      ? "bg-accent-600 ring-4 ring-accent-600/15 dark:bg-accent-400 dark:ring-accent-400/15"
                      : "bg-slate-300 dark:bg-slate-700"
                  }`}
                />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {job.role}
                  </h3>
                  <span className="rounded-full border border-slate-200 px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-500">
                    {job.domain}
                  </span>
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="font-medium text-accent-700 dark:text-accent-400">
                    {job.company}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-500">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-slate-600 dark:text-slate-400"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-600 dark:bg-accent-400"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-400"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

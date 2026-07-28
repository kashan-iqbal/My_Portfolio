import { ExternalLink, Lock } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/site";

const groups = [
  {
    key: "Fintech",
    label: "Fintech",
    note: "Production systems handling money and partner integrations.",
  },
  {
    key: "High-traffic consumer",
    label: "High-traffic consumer platforms",
    note: "Where the performance and scale habits come from.",
  },
] as const;

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-200 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="What I have shipped"
          description="Four projects rather than a long list. The fintech work is the core; the consumer platforms are where I learned to keep things fast under load."
        />

        <div className="space-y-14">
          {groups.map((group) => {
            const items = projects.filter((p) => p.category === group.key);
            if (items.length === 0) return null;

            return (
              <div key={group.key}>
                <div className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-900 dark:text-white">
                    {group.label}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    {group.note}
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {items.map((project, index) => (
                    <Reveal
                      as="article"
                      key={project.name}
                      delay={index * 0.08}
                      className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-accent-600/40 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-accent-400/40"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {project.name}
                          </h4>
                          <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                            {project.tagline}
                          </p>
                        </div>
                        {project.link ? (
                          <a
                            href={project.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex shrink-0 items-center gap-1.5 text-sm text-accent-700 hover:underline dark:text-accent-400"
                          >
                            {project.link.label}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <span
                            className="mt-1 inline-flex shrink-0 items-center gap-1.5 text-xs text-slate-400 dark:text-slate-600"
                            title="Internal product — source and URL not public"
                          >
                            <Lock className="h-3.5 w-3.5" />
                            Private
                          </span>
                        )}
                      </div>

                      <ul className="mt-5 flex-1 space-y-2.5">
                        {project.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                          >
                            <span
                              aria-hidden
                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-600 dark:bg-accent-400"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-6 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

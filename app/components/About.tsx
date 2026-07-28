import { Gauge, Landmark, Layers, Plug } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about } from "../data/site";

const icons = { Landmark, Plug, Gauge, Layers } as const;

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-200 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="Where I do my best work" />

        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-lg leading-relaxed text-slate-600 dark:text-slate-400"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {about.focus.map((item, index) => {
              const Icon = icons[item.icon as keyof typeof icons];
              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                  className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                >
                  <Icon className="h-5 w-5 text-accent-700 dark:text-accent-400" />
                  <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

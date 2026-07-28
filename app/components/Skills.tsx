import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/site";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Stack"
          title="Tools I use in production"
          description="Grouped the way my résumé groups them — these are things I have shipped and operated, not a list of everything I have read about."
        />

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal
              key={group.group}
              delay={index * 0.06}
              className="border-t border-slate-200 pt-5 dark:border-slate-800"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent-700 dark:text-accent-400">
                {group.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

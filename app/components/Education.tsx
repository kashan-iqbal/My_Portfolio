import { GraduationCap, Trophy } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { achievements, education } from "../data/site";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Background" title="Education & recognition" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Reveal
                key={edu.institution}
                delay={index * 0.08}
                className="flex gap-4"
              >
                <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-200 dark:border-slate-800">
                  <GraduationCap className="h-5 w-5 text-accent-700 dark:text-accent-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <p className="mt-0.5 text-slate-600 dark:text-slate-400">
                    {edu.degree}
                  </p>
                  <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-500">
                    {edu.period} · {edu.location}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-2.5">
                <Trophy className="h-5 w-5 text-accent-700 dark:text-accent-400" />
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Achievements
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

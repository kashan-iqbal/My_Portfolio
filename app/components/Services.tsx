import { CreditCard, Gauge, Plug, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services } from "../data/site";

const icons = { CreditCard, Plug, Gauge, Rocket } as const;

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-slate-200 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          description="Four ways I work with teams — all of them things I do day to day, not aspirational offerings."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <Reveal
                key={service.title}
                delay={index * 0.08}
                className="rounded-xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent-50 dark:bg-accent-400/10">
                  <Icon className="h-5 w-5 text-accent-700 dark:text-accent-400" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

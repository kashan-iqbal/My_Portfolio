import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-700 dark:text-accent-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </Reveal>
  );
}

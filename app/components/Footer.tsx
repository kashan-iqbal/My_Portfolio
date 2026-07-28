import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-slate-900 dark:text-white">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
            {site.headline} · {site.location}
          </p>
        </div>

        <div className="flex items-center gap-1">
          {[
            { href: site.github, Icon: Github, label: "GitHub profile" },
            { href: site.linkedin, Icon: Linkedin, label: "LinkedIn profile" },
            { href: `mailto:${site.email}`, Icon: Mail, label: "Email Kashan" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
            >
              <Icon className="h-[17px] w-[17px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

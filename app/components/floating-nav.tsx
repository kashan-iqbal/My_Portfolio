"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navSections, site } from "../data/site";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport so fast scrolls
        // don't leave a stale section highlighted.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    navSections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <button
          onClick={() => scrollTo("hero")}
          className="font-mono text-sm font-medium tracking-tight text-slate-900 dark:text-white"
        >
          kashan<span className="text-accent-600 dark:text-accent-400">.</span>
          iqbal
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navSections
            .filter(({ id }) => id !== "hero")
            .map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    activeSection === id
                      ? "text-accent-700 dark:text-accent-400"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.resume}
            download
            className="hidden items-center gap-1.5 rounded-lg border border-slate-300 px-3.5 py-2 text-sm text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900 sm:inline-flex dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-400 dark:hover:text-white"
          >
            <Download className="h-3.5 w-3.5" />
            Résumé
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

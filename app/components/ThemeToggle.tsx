"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} theme`
          : "Toggle theme"
      }
      className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-600 backdrop-blur transition-colors hover:border-accent-600 hover:text-accent-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 dark:hover:border-accent-400 dark:hover:text-accent-300"
    >
      {/* Render a stable icon until mounted so SSR and client markup agree. */}
      {mounted && isDark ? (
        <Sun className="h-[18px] w-[18px]" />
      ) : (
        <Moon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}

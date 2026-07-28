"use client";

import type { ReactNode } from "react";

interface ScrollLinkProps {
  target: string;
  children: ReactNode;
  className?: string;
}

/**
 * Anchor rather than a button, so it still navigates if JS hasn't loaded.
 */
export default function ScrollLink({
  target,
  children,
  className,
}: ScrollLinkProps) {
  return (
    <a
      href={`#${target}`}
      className={className}
      onClick={(event) => {
        const element = document.getElementById(target);
        if (!element) return;
        event.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </a>
  );
}

"use client";

import Link from "next/link";

import { ModeToggle } from "./mode-toggle";

const navLinks = [
  { to: "/use-cases", label: "Use Cases" },
  { to: "/workflows", label: "Workflows" },
  { to: "/integrations", label: "Integrations" },
  { to: "/guides", label: "Guides" },
  { to: "/resources", label: "Resources" },
] as const;

export default function Header() {
  return (
    <div className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-foreground/20 bg-foreground text-background">
            EF
          </span>
          Early Frontier
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/use-cases/claude-code"
            className="hidden rounded-full border border-foreground/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-foreground/40 md:inline-flex"
          >
            Claude Code
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Github } from "lucide-react";

const navLinks = [
  { to: "/official-resources", label: "Official" },
  { to: "/community-lists", label: "Lists" },
  { to: "/extensions-integrations", label: "Extensions" },
  { to: "/applications", label: "Applications" },
  { to: "/education", label: "Education" },
  { to: "/community", label: "Community" },
] as const;

export default function Header() {
  return (
    <div className="sticky top-0 z-30 border-b-2 border-border bg-background">
      <div className="mx-auto flex w-full max-w-[95vw] items-center justify-between gap-4 px-6 py-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold uppercase tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground text-background text-xs">
            EF
          </span>
          Early Frontier
        </Link>
        <nav className="hidden items-center gap-6 text-base uppercase tracking-tight font-semibold md:flex">
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
            href="https://github.com/DumplingAI/earlyfrontier"
            target="_blank"
            rel="noreferrer"
            className="hidden border-2 border-border px-6 py-3 text-sm font-semibold uppercase tracking-wide transition hover:border-foreground hover:bg-foreground hover:text-background md:inline-flex"
          >
            <span className="inline-flex items-center gap-2">
              <Github className="size-4" />
              Github
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

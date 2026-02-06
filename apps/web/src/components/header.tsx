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
    <div className="sticky top-0 z-30 border-b border-[rgba(255,255,255,0.1)] bg-[rgba(10,10,10,0.8)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[95vw] items-center justify-between gap-4 px-6 py-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-medium tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#a78b71] to-[#c9b8a0] text-[#0a0a0a] text-xs font-bold">
            EF
          </span>
          <span className="font-serif italic">Early Frontier</span>
        </Link>
        <nav className="hidden items-center gap-6 text-base font-light tracking-normal md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className="text-muted-foreground transition-colors duration-300 hover:text-[#c9b8a0]"
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
            className="hidden border border-[rgba(255,255,255,0.1)] rounded-xl px-6 py-3 text-sm font-medium tracking-normal transition-all duration-300 hover:border-[#a78b71] hover:text-[#c9b8a0] md:inline-flex"
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

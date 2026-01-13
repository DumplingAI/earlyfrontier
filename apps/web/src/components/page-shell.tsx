import type { ReactNode } from "react";
import Link from "next/link";
import type { Route } from "next";

interface BreadcrumbItem {
  label: string;
  href?: Route;
}

interface PageShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: ReactNode;
}

export default function PageShell({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: PageShellProps) {
  return (
    <div className="hero-grid">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-10">
        <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/70 p-8 md:p-12">
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {breadcrumbs.map((item, index) => (
                <span key={`${item.label}-${index}`} className="flex items-center gap-2">
                  {item.href ? (
                    <Link href={item.href} className="transition hover:text-foreground">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{item.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 ? (
                    <span className="text-muted-foreground/60">/</span>
                  ) : null}
                </span>
              ))}
            </nav>
          ) : null}
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance font-serif text-4xl leading-tight md:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-3xl text-lg text-muted-foreground">
              {description}
            </p>
          ) : null}
        </section>
        {children}
      </main>
    </div>
  );
}

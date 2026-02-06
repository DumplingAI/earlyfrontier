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
    <div className="">
      <main className="mx-auto flex w-full max-w-[95vw] flex-col gap-16 px-6 pb-32 pt-12">
        <section className="grid gap-8 border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <nav className="flex flex-wrap items-center gap-2 text-sm tracking-widest text-[#c9b8a0]">
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
                    <span className="text-[#c9b8a0]/60">/</span>
                  ) : null}
                </span>
              ))}
            </nav>
          ) : null}
          {eyebrow ? (
            <p className="text-sm font-medium tracking-widest text-[#c9b8a0]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance font-serif text-6xl md:text-8xl italic font-normal tracking-tight leading-none">
            {title}
          </h1>
          {description ? (
            <p className="max-w-3xl text-xl text-muted-foreground">
              {description}
            </p>
          ) : null}
        </section>
        {children}
      </main>
    </div>
  );
}

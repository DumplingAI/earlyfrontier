import type { Metadata } from "next";

import { directorySections } from "@/lib/claude-directory-data";

export const metadata: Metadata = {
  title: "Early Frontier - Claude Directory",
  description:
    "A curated directory of official Claude resources, community lists, integrations, applications, and education.",
};

export default function Home() {
  return (
    <div className="">
      <main className="mx-auto flex w-full max-w-[95vw] flex-col gap-16 px-6 pb-32 pt-12">
        <section className="grid gap-8 border-2 border-border bg-background p-12 md:p-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <span>Early Frontier</span>
              <span className="h-1 w-1 bg-muted-foreground/60" />
              <span>Claude Directory</span>
            </div>
            <h1 className="text-balance font-sans text-hero uppercase font-bold tracking-tighter leading-none">
              Claude resources, raw and organized.
            </h1>
            <p className="max-w-3xl text-xl text-muted-foreground">
              Everything on one page, organized into six buckets. No cards, no
              fluff.
            </p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {directorySections.map((section) => (
              <a
                key={section.slug}
                href={`#${section.slug}`}
                className="border-2 border-border px-6 py-3 transition hover:border-foreground hover:bg-foreground hover:text-background"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </section>

        {directorySections.map((section) => (
          <section
            key={section.slug}
            id={section.slug}
            className="grid gap-8 border-2 border-border bg-card p-12 md:p-16"
          >
            <div className="grid gap-3">
              <h2 className="font-sans text-4xl md:text-6xl uppercase font-bold tracking-tight">{section.title}</h2>
              <p className="text-base text-muted-foreground">{section.summary}</p>
            </div>
            <div className="grid gap-8">
              {section.groups.map((group, groupIndex) => (
                <div key={`${section.slug}-${group.title ?? groupIndex}`} className="grid gap-4">
                  {group.title ? (
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      {group.title}
                    </h3>
                  ) : null}
                  <ul className="grid gap-3 text-base text-muted-foreground">
                    {group.items.map((item) => {
                      const external = item.href.startsWith("http");
                      return (
                        <li key={item.title} className="leading-relaxed">
                          <a
                            href={item.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noreferrer" : undefined}
                            className="font-semibold text-foreground transition hover:text-muted-foreground"
                          >
                            {item.title}
                          </a>
                          {item.description ? ` — ${item.description}` : null}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

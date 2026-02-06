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
        <section className="grid gap-8 border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium tracking-widest text-[#c9b8a0]">
              <span>Early Frontier</span>
              <span className="h-1 w-1 bg-[#a78b71] rounded-full" />
              <span>Claude Directory</span>
            </div>
            <h1 className="text-balance font-serif text-hero italic font-normal tracking-tight leading-none">
              Claude resources, raw and organized.
            </h1>
            <p className="max-w-3xl text-xl text-muted-foreground">
              Everything on one page, organized into six buckets. No cards, no
              fluff.
            </p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm font-medium tracking-normal text-muted-foreground">
            {directorySections.map((section) => (
              <a
                key={section.slug}
                href={`#${section.slug}`}
                className="border border-[rgba(255,255,255,0.1)] rounded-xl px-6 py-3 transition-all duration-300 hover:border-[#a78b71] hover:text-[#c9b8a0]"
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
            className="grid gap-8 border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16"
          >
            <div className="grid gap-3">
              <h2 className="font-serif text-4xl md:text-6xl italic font-normal tracking-tight">{section.title}</h2>
              <p className="text-base text-muted-foreground">{section.summary}</p>
            </div>
            <div className="grid gap-8">
              {section.groups.map((group, groupIndex) => (
                <div key={`${section.slug}-${group.title ?? groupIndex}`} className="grid gap-4">
                  {group.title ? (
                    <h3 className="text-sm font-medium tracking-widest text-[#c9b8a0]">
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
                            className="font-semibold text-foreground transition-colors duration-300 hover:text-[#c9b8a0]"
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

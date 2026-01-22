"use client";

import { motion } from "framer-motion";
import type { DirectorySection } from "@/lib/claude-directory-data";

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export default function SectionList({ section }: { section: DirectorySection }) {
  return (
    <section className="grid gap-8 border-2 border-border bg-background p-12 md:p-16">
      <h2 className="font-sans text-4xl md:text-6xl uppercase font-bold tracking-tight">{section.title}</h2>
      <div className="grid gap-6">
        {section.groups.map((group) => (
          <div key={group.title ?? "items"} className="grid gap-4">
            {group.title ? (
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {group.title}
              </h3>
            ) : null}
            <div className="grid gap-4 md:grid-cols-2">
              {group.items.map((item) => {
                const external = isExternalLink(item.href);
                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    className="border-2 border-border bg-background p-8 transition-colors duration-300 hover:bg-accent hover:border-accent group"
                    whileHover={{ scale: 1.0 }}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                  >
                    <h4 className="font-sans text-2xl md:text-3xl uppercase font-bold group-hover:text-accent-foreground transition-colors">{item.title}</h4>
                    {item.description ? (
                      <p className="mt-3 text-base text-muted-foreground group-hover:text-accent-foreground transition-colors">
                        {item.description}
                      </p>
                    ) : null}
                  </motion.a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

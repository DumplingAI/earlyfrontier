"use client";

import { motion } from "framer-motion";
import type { DirectorySection } from "@/lib/claude-directory-data";

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export default function SectionList({ section }: { section: DirectorySection }) {
  return (
    <section className="grid gap-8 border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
      <h2 className="font-serif text-4xl md:text-6xl italic font-normal tracking-tight">{section.title}</h2>
      <div className="grid gap-6">
        {section.groups.map((group) => (
          <div key={group.title ?? "items"} className="grid gap-4">
            {group.title ? (
              <h3 className="text-sm font-medium tracking-widest text-[#c9b8a0]">
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
                    className="border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-2xl p-8 transition-all duration-500 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(167,139,113,0.3)] hover:shadow-[0_0_20px_rgba(167,139,113,0.08)] group"
                    whileHover={{ scale: 1.0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                  >
                    <h4 className="font-serif text-2xl md:text-3xl italic font-normal group-hover:text-[#c9b8a0] transition-colors duration-500">{item.title}</h4>
                    {item.description ? (
                      <p className="mt-3 text-base text-muted-foreground transition-colors duration-500">
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

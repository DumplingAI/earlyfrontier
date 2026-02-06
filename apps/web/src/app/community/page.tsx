import type { Metadata } from "next";

import PageShell from "@/components/page-shell";
import SectionList from "@/components/section-list";
import { directorySections } from "@/lib/claude-directory-data";

const section = directorySections.find((item) => item.slug === "community");

export const metadata: Metadata = {
  title: "Community | Early Frontier",
  description:
    "Where to collaborate, contribute, and keep the directory current.",
};

const communityValues = [
  "Practical workflows over hype.",
  "Transparent sources and updates.",
  "Clear steps and expected outcomes.",
] as const;

export default function CommunityPage() {
  if (!section) {
    return null;
  }

  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Community" }]}
      eyebrow="Community"
      title={section.title}
      description={section.summary}
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">How we keep this useful</h2>
        <p className="text-sm text-muted-foreground">
          The directory stays valuable when the community keeps it focused,
          current, and practical.
        </p>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {communityValues.map((item) => (
            <div
              key={item}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <SectionList section={section} />
    </PageShell>
  );
}

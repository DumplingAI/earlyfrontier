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
      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">How we keep this useful</h2>
        <p className="text-sm text-muted-foreground">
          The directory stays valuable when the community keeps it focused,
          current, and practical.
        </p>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {communityValues.map((item) => (
            <div
              key={item}
              className=" border-2 border-border px-4 py-3"
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

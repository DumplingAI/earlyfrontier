import type { Metadata } from "next";

import PageShell from "@/components/page-shell";
import SectionList from "@/components/section-list";
import { directorySections } from "@/lib/claude-directory-data";

const section = directorySections.find((item) => item.slug === "official-resources");

export const metadata: Metadata = {
  title: "Official Anthropic Resources | Early Frontier",
  description:
    "Authoritative references, platforms, and documentation directly from Anthropic.",
};

export default function OfficialResourcesPage() {
  if (!section) {
    return null;
  }

  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Official Resources" }]}
      eyebrow="Official"
      title={section.title}
      description={section.summary}
    >
      <SectionList section={section} />
    </PageShell>
  );
}

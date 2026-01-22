import type { Metadata } from "next";

import PageShell from "@/components/page-shell";
import SectionList from "@/components/section-list";
import { directorySections } from "@/lib/claude-directory-data";

const section = directorySections.find((item) => item.slug === "community-lists");

export const metadata: Metadata = {
  title: "Community Curated Lists | Early Frontier",
  description:
    "Community-maintained collections for Claude tools and workflows.",
};

export default function CommunityListsPage() {
  if (!section) {
    return null;
  }

  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Community Lists" }]}
      eyebrow="Community"
      title={section.title}
      description={section.summary}
    >
      <SectionList section={section} />
    </PageShell>
  );
}

import type { Metadata } from "next";

import PageShell from "@/components/page-shell";
import SectionList from "@/components/section-list";
import { directorySections } from "@/lib/claude-directory-data";

const section = directorySections.find((item) => item.slug === "applications");

export const metadata: Metadata = {
  title: "Applications | Early Frontier",
  description:
    "End-to-end applications and workflows built on top of Claude.",
};

export default function ApplicationsPage() {
  if (!section) {
    return null;
  }

  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Applications" }]}
      eyebrow="Applications"
      title={section.title}
      description={section.summary}
    >
      <SectionList section={section} />
    </PageShell>
  );
}

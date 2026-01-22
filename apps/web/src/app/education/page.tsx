import type { Metadata } from "next";

import PageShell from "@/components/page-shell";
import SectionList from "@/components/section-list";
import { directorySections } from "@/lib/claude-directory-data";

const section = directorySections.find((item) => item.slug === "education");

export const metadata: Metadata = {
  title: "Educational Resources | Early Frontier",
  description:
    "Guides, courses, and reference material for working with Claude.",
};

export default function EducationPage() {
  if (!section) {
    return null;
  }

  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Education" }]}
      eyebrow="Education"
      title={section.title}
      description={section.summary}
    >
      <SectionList section={section} />
    </PageShell>
  );
}

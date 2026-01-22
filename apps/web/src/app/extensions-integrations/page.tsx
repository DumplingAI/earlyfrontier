import type { Metadata } from "next";

import PageShell from "@/components/page-shell";
import SectionList from "@/components/section-list";
import { directorySections } from "@/lib/claude-directory-data";

const section = directorySections.find((item) => item.slug === "extensions-integrations");

export const metadata: Metadata = {
  title: "Extensions & Integrations | Early Frontier",
  description:
    "Connect Claude to your tools, from chat apps to productivity suites.",
};

export default function ExtensionsIntegrationsPage() {
  if (!section) {
    return null;
  }

  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Extensions & Integrations" },
      ]}
      eyebrow="Extensions"
      title={section.title}
      description={section.summary}
    >
      <SectionList section={section} />
    </PageShell>
  );
}

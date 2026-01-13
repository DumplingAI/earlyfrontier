import PageShell from "@/components/page-shell";

const templates = [
  "Plan-first prompt",
  "Bug report triage",
  "Weekly status update",
] as const;

export default function TemplatesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Templates" },
      ]}
      eyebrow="Resources"
      title="Templates"
      description="Ready-to-use prompts and checklists for agent workflows."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <div className="grid gap-3 text-sm text-muted-foreground">
          {templates.map((template) => (
            <div
              key={template}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {template}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

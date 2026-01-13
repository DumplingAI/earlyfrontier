import PageShell from "@/components/page-shell";

const workflows = [
  "Meeting notes capture",
  "Weekly project status",
  "Knowledge base updates",
] as const;

export default function NotionIntegrationPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Integrations", href: "/integrations" },
        { label: "Notion" },
      ]}
      eyebrow="Integration"
      title="Notion"
      description="Sync notes, tasks, and knowledge into a single workspace."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Popular workflows</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {workflows.map((workflow) => (
            <div
              key={workflow}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {workflow}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

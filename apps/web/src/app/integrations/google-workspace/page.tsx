import PageShell from "@/components/page-shell";

const workflows = [
  "Inbox triage",
  "Meeting scheduling",
  "Daily summary digests",
] as const;

export default function GoogleWorkspaceIntegrationPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Integrations", href: "/integrations" },
        { label: "Google Workspace" },
      ]}
      eyebrow="Integration"
      title="Google Workspace"
      description="Connect Gmail, Calendar, and Docs to Claude Code workflows."
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

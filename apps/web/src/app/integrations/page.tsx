import PageShell from "@/components/page-shell";

const integrations = [
  { title: "MCP", path: "/integrations/mcp" },
  { title: "Google Workspace", path: "/integrations/google-workspace" },
  { title: "Slack", path: "/integrations/slack" },
  { title: "Notion", path: "/integrations/notion" },
  { title: "Linear", path: "/integrations/linear" },
] as const;

const related = [
  { title: "MCP Integrations", path: "/use-cases/claude-code/mcp-integrations" },
  { title: "Email + Calendar", path: "/use-cases/claude-code/email-calendar" },
] as const;

export default function IntegrationsPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Integrations" }]}
      eyebrow="Integrations"
      title="Connect your tools with MCP"
      description="A curated list of integrations that unlock Claude Code and other agent workflows."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Popular integrations</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {integrations.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="glass-card rounded-xl border border-border/70 px-4 py-3 transition hover:border-foreground/40"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>
      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Related guides</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {related.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="glass-card rounded-xl border border-border/70 px-4 py-3 text-sm transition hover:border-foreground/40"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

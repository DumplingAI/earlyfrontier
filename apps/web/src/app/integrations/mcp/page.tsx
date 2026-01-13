import PageShell from "@/components/page-shell";

export default function MCPIntegrationsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Integrations", href: "/integrations" },
        { label: "MCP" },
      ]}
      eyebrow="Integrations"
      title="MCP"
      description="Use MCP to connect models to external tools through a standard interface."
    >
      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Why MCP matters</h2>
        <p className="text-sm text-muted-foreground">
          MCP provides a consistent way for AI agents to access external data and
          actions. It powers workflows like email summaries, calendar scheduling,
          and knowledge base updates.
        </p>
      </section>
    </PageShell>
  );
}

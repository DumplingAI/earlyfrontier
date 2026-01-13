import PageShell from "@/components/page-shell";

const tools = [
  "Claude Code",
  "MCP servers",
  "Browser automation",
  "Docs + knowledge bases",
] as const;

export default function ToolingPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Tooling" },
      ]}
      eyebrow="Resources"
      title="Tooling Library"
      description="A catalog of the tools that power modern AI agent workflows."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <div className="grid gap-3 text-sm text-muted-foreground">
          {tools.map((tool) => (
            <div
              key={tool}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

import PageShell from "@/components/page-shell";

const guides = [
  {
    title: "Claude Code: Comprehensive Guide",
    path: "/guides/claude-code-complete-guide",
    description:
      "Developer workflows plus MCP-powered productivity use cases in one guide.",
  },
  {
    title: "MCP for Beginners",
    path: "/guides/mcp-for-beginners",
    description: "A practical introduction to connecting tools to AI agents.",
  },
  {
    title: "Choosing the Right AI Agent",
    path: "/guides/choosing-the-right-agent",
    description: "A decision framework for selecting the right agent setup.",
  },
] as const;

export default function GuidesPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
      eyebrow="Guides"
      title="Long-form guides and explainers"
      description="Deep dives that pair practical steps with the why behind them."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Featured guides</h2>
        <div className="grid gap-4">
          {guides.map((guide) => (
            <a
              key={guide.title}
              href={guide.path}
              className="glass-card rounded-2xl border border-border/70 p-5 transition hover:border-foreground/40"
            >
              <h3 className="font-serif text-xl">{guide.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {guide.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

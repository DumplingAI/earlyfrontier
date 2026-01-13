import PageShell from "@/components/page-shell";

const useCases = [
  {
    title: "Claude Code",
    description:
      "Agentic coding plus MCP-powered productivity workflows for teams and individuals.",
    path: "/use-cases/claude-code",
  },
] as const;

const filters = [
  {
    title: "Role",
    items: ["Developer", "Operator", "Manager"],
  },
  {
    title: "Workflow",
    items: ["Debugging", "Refactoring", "Research", "Scheduling"],
  },
  {
    title: "Tool",
    items: ["Claude Code", "MCP"],
  },
] as const;

export default function UseCasesPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Use Cases" }]}
      eyebrow="Use Cases"
      title="A living library of AI agent use cases"
      description="Explore how teams and individuals are applying AI agents to real workflows, with clear outcomes and repeatable steps."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Filter by intent</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {filters.map((filter) => (
            <div
              key={filter.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{filter.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {filter.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Featured use cases</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {useCases.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="glass-card rounded-2xl border border-border/70 p-5 transition hover:border-foreground/40"
            >
              <h3 className="font-serif text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

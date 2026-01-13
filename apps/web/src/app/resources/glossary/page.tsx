import PageShell from "@/components/page-shell";

const terms = [
  { term: "Agentic coding", definition: "Using AI agents to execute coding tasks autonomously." },
  { term: "MCP", definition: "A protocol for connecting models to tools and services." },
  { term: "Workflow", definition: "A repeatable sequence of steps with a clear outcome." },
] as const;

export default function GlossaryPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Glossary" },
      ]}
      eyebrow="Resources"
      title="Glossary"
      description="Key terms and definitions for AI agent workflows."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <div className="grid gap-4">
          {terms.map((item) => (
            <div
              key={item.term}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h2 className="font-serif text-2xl">{item.term}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

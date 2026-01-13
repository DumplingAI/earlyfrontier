import PageShell from "@/components/page-shell";

const topics = [
  "Agentic coding",
  "MCP",
  "Productivity",
  "Automation",
  "Developer workflows",
] as const;

export default function TopicsPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Topics" }]}
      eyebrow="Topics"
      title="Browse by topic"
      description="Quick entry points into the use case library."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Popular topics</h2>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {topics.map((topic) => (
            <span
              key={topic}
              className="glass-card rounded-full border border-border/70 px-4 py-2"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

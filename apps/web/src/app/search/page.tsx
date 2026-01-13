import PageShell from "@/components/page-shell";

const popular = [
  "Codebase understanding",
  "Inbox triage",
  "Refactoring",
  "MCP integrations",
] as const;

export default function SearchPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Search" }]}
      eyebrow="Search"
      title="Find a workflow fast"
      description="Search across use cases, guides, and workflow playbooks."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Search</h2>
        <form className="flex flex-col gap-3 md:flex-row">
          <input
            type="search"
            placeholder="Search workflows, guides, or integrations"
            className="h-12 flex-1 rounded-full border border-border bg-background px-4 text-sm"
          />
          <button
            type="submit"
            className="h-12 rounded-full border border-foreground/20 bg-foreground px-6 text-xs font-semibold uppercase tracking-[0.2em] text-background"
          >
            Search
          </button>
        </form>
        <div className="grid gap-2 text-sm text-muted-foreground">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Popular searches
          </span>
          <div className="flex flex-wrap gap-2">
            {popular.map((item) => (
              <span
                key={item}
                className="glass-card rounded-full border border-border/70 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

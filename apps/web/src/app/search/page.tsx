import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find a workflow fast | Early Frontier",
  description: "Search across use cases, guides, and workflow playbooks.",
};

const popular = [
  "Codebase understanding",
  "Inbox triage",
  "Refactoring",
  "MCP integrations",
] as const;

const tips = [
  "Search by outcome (summary, plan, patch, report) to find relevant playbooks.",
  "Include the tool name (MCP, Claude Code, Slack) to narrow results.",
  "Start with a guide if you are new, then jump into workflows.",
] as const;

const categories = [
  { title: "Workflows", description: "Step-by-step playbooks you can reuse." },
  { title: "Guides", description: "Deep dives that explain the why behind the steps." },
  { title: "Integrations", description: "How to connect tools and systems with MCP." },
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
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Search tips</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {tips.map((item) => (
            <div
              key={item}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Browse by category</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
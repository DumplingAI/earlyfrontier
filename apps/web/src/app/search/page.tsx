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
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Search</h2>
        <form className="flex flex-col gap-3 md:flex-row">
          <input
            type="search"
            placeholder="Search workflows, guides, or integrations"
            className="h-12 flex-1  border-2 border-border bg-background px-4 text-sm"
          />
          <button
            type="submit"
            className="h-12  border-2 border-foreground/20 bg-foreground px-6 text-xs font-semibold uppercase tracking-[0.2em] text-background"
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
                className=" border-2 border-border px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Search tips</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {tips.map((item) => (
            <div
              key={item}
              className=" border-2 border-border px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Browse by category</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.title}
              className=" border-2 border-border p-5"
            >
              <h3 className="font-sans text-lg">{item.title}</h3>
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
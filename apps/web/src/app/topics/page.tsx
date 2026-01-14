import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse by topic | Early Frontier",
  description: "Quick entry points into the use case library.",
};

const topics = [
  {
    title: "Agentic coding",
    description: "Playbooks for delegating coding tasks, verifying outputs, and shipping safely.",
  },
  {
    title: "MCP",
    description: "Guides to connect models to tools, data, and actions through MCP servers.",
  },
  {
    title: "Productivity",
    description: "Personal workflows for planning, summarization, and keeping work moving.",
  },
  {
    title: "Automation",
    description: "Repeatable processes that remove manual steps and reduce operational drag.",
  },
  {
    title: "Developer workflows",
    description: "End-to-end engineering flows like debugging, refactoring, and test creation.",
  },
] as const;

const startingPoints = [
  { title: "Claude Code Workflows", path: "/workflows/claude-code" },
  { title: "MCP for Beginners", path: "/guides/mcp-for-beginners" },
  { title: "Claude Code: Comprehensive Guide", path: "/guides/claude-code-complete-guide" },
  { title: "MCP Integrations", path: "/use-cases/claude-code/mcp-integrations" },
] as const;

const tagging = [
  "Role: who owns the workflow (developer, operator, manager).",
  "Outcome: the concrete output (summary, patch, plan, report).",
  "Risk level: where human review is required.",
  "Tooling: the systems or MCP servers involved.",
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
        <div className="grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{topic.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Recommended starting points</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {startingPoints.map((item) => (
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
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">How we tag topics</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {tagging.map((item) => (
            <div
              key={item}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
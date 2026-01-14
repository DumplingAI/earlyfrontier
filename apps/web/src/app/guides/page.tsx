import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Long-form guides and explainers | Early Frontier",
  description: "Deep dives that pair practical steps with the why behind them.",
};

const guides = [
  {
    title: "Claude Code: Comprehensive Guide",
    path: "/guides/claude-code-complete-guide",
    description:
      "Developer workflows plus MCP-powered productivity use cases in one guide.",
  },
  {
    title: "Claude in Chrome",
    path: "/guides/claude-in-chrome",
    description: "Browser automation with guidance on when to use MCP instead.",
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
  {
    title: "Clawdbot Guide",
    path: "/guides/clawdbot",
    description: "Architecture, setup, security, configuration, and skills.",
  },
] as const;

const reasons = [
  {
    title: "Start with the why",
    description: "Understand how agents work before applying workflows.",
  },
  {
    title: "Move to the how",
    description: "Use detailed steps, prompts, and examples to execute.",
  },
  {
    title: "Share with your team",
    description: "Turn a guide into a repeatable playbook.",
  },
] as const;

const readingTips = [
  "Skim the overview, then jump to the sections that match your current task.",
  "Pair guides with templates to speed up adoption.",
  "Capture learnings in your own documentation after you try a workflow.",
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
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">How to use these guides</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {reasons.map((item) => (
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
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Reading tips</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {readingTips.map((item) => (
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

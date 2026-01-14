import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tooling Library | Early Frontier",
  description: "A catalog of the tools that power modern AI agent workflows.",
};

const tools = [
  {
    title: "Claude Code",
    description: "Agentic coding workflows for planning, editing, and verification.",
  },
  {
    title: "MCP servers",
    description: "Connect models to external tools like email, docs, and ticket systems.",
  },
  {
    title: "Browser automation",
    description: "Structured research and data collection for competitive or market scans.",
  },
  {
    title: "Docs + knowledge bases",
    description: "Centralize context, keep summaries current, and reduce onboarding time.",
  },
  {
    title: "Issue trackers",
    description: "Automate issue triage, status updates, and release reporting.",
  },
] as const;

const featuredTools = [
  {
    title: "Clawdbot",
    description:
      "A local gateway that bridges WhatsApp, Telegram, Discord, and iMessage to Pi agents so you can message an assistant from your phone.",
    highlights: [
      "Single Gateway process owns channel connections",
      "Local dashboard for control and monitoring",
      "Config supports allowlists and mention rules",
    ],
    links: [
      { label: "Site", href: "https://clawd.bot/" },
      { label: "Docs", href: "https://docs.clawd.bot/" },
      { label: "GitHub", href: "https://github.com/clawdbot/clawdbot" },
      { label: "Guide", href: "/guides/clawdbot" },
    ],
  },
] as const;

const evaluation = [
  "Does the tool support the data sources you need?",
  "Can you control permissions and access scope?",
  "How will outputs be reviewed or approved?",
  "Is there a clean audit trail for actions taken?",
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
        <h2 className="font-serif text-2xl">Core tool categories</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{tool.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Featured tools</h2>
        <div className="grid gap-4">
          {featuredTools.map((tool) => (
            <div
              key={tool.title}
              className="glass-card rounded-2xl border border-border/70 p-6"
            >
              <div className="grid gap-2">
                <h3 className="font-serif text-lg">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </div>
              <div className="mt-4 grid gap-2 text-sm text-muted-foreground md:grid-cols-3">
                {tool.highlights.map((item) => (
                  <div
                    key={item}
                    className="glass-card rounded-xl border border-border/70 px-3 py-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {tool.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-foreground/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-foreground/40"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">How to evaluate tools</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {evaluation.map((item) => (
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

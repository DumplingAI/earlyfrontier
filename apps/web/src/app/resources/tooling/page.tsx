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
    title: "Openclaw",
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
      { label: "GitHub", href: "https://github.com/openclaw/openclaw" },
      { label: "Guide", href: "/guides/openclaw" },
      { label: "Setup", href: "/openclaw-setup" },
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
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Core tool categories</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{tool.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Featured tools</h2>
        <div className="grid gap-4">
          {featuredTools.map((tool) => (
            <div
              key={tool.title}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-6"
            >
              <div className="grid gap-2">
                <h3 className="font-serif italic text-lg">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </div>
              <div className="mt-4 grid gap-2 text-sm text-muted-foreground md:grid-cols-3">
                {tool.highlights.map((item) => (
                  <div
                    key={item}
                    className=" border border-[rgba(255,255,255,0.08)] rounded-lg px-3 py-2"
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
                    className="inline-flex items-center  border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-2 text-xs font-medium tracking-widest transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">How to evaluate tools</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {evaluation.map((item) => (
            <div
              key={item}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

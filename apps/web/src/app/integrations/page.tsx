import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect your tools with MCP | Early Frontier",
  description: "A curated list of integrations that unlock Claude Code and other agent workflows.",
};

const integrations = [
  { title: "MCP", path: "/integrations/mcp" },
  { title: "Google Workspace", path: "/integrations/google-workspace" },
  { title: "Slack", path: "/integrations/slack" },
  { title: "Notion", path: "/integrations/notion" },
  { title: "Linear", path: "/integrations/linear" },
] as const;

const related = [
  { title: "MCP Integrations", path: "/use-cases/claude-code/mcp-integrations" },
  { title: "Email + Calendar", path: "/use-cases/claude-code/email-calendar" },
] as const;

const highlights = [
  {
    title: "Faster onboarding",
    description: "Connect docs and tickets so agents can answer questions with context.",
  },
  {
    title: "Operational leverage",
    description: "Automate repetitive updates like status reports and meeting notes.",
  },
  {
    title: "Better handoffs",
    description: "Summarize work in the same tools your team already uses.",
  },
] as const;

const checklist = [
  "Start with read-only access before enabling write actions.",
  "Define approval steps for external actions like sending messages or updating tickets.",
  "Confirm data sources are up to date and permissions are scoped.",
  "Document the output format so results are consistent across teams.",
] as const;

export default function IntegrationsPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Integrations" }]}
      eyebrow="Integrations"
      title="Connect your tools with MCP"
      description="A curated list of integrations that unlock Claude Code and other agent workflows."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Popular integrations</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {integrations.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="glass-card rounded-xl border border-border/70 px-4 py-3 transition hover:border-foreground/40"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Why connect integrations</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
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
        <h2 className="font-serif text-2xl">Integration checklist</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {checklist.map((item) => (
            <div
              key={item}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Related guides</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {related.map((item) => (
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
    </PageShell>
  );
}
import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Workspace | Early Frontier",
  description: "Connect Gmail, Calendar, and Docs to Claude Code workflows.",
};

const workflows = [
  "Inbox triage with priority labels",
  "Meeting scheduling + brief prep",
  "Daily or weekly executive summaries",
] as const;

const details = [
  {
    title: "Core data sources",
    description: "Gmail threads, Calendar events, Drive files, Docs content.",
  },
  {
    title: "Common outputs",
    description: "Summaries, action items, meeting briefs, status updates.",
  },
  {
    title: "Guardrails",
    description: "Require review before sending emails or editing shared docs.",
  },
] as const;

const setup = [
  "Start with read-only scopes for Gmail and Calendar.",
  "Define a summary template (owner, deadline, next step).",
  "Route drafts to a human reviewer before sending.",
  "Log changes in a shared doc or sheet for auditability.",
] as const;

export default function GoogleWorkspaceIntegrationPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Integrations", href: "/integrations" },
        { label: "Google Workspace" },
      ]}
      eyebrow="Integration"
      title="Google Workspace"
      description="Connect Gmail, Calendar, and Docs to Claude Code workflows."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Popular workflows</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {workflows.map((workflow) => (
            <div
              key={workflow}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {workflow}
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">What teams automate</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {details.map((item) => (
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
        <h2 className="font-serif text-2xl">Setup checklist</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {setup.map((item) => (
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
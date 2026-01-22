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
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Popular workflows</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {workflows.map((workflow) => (
            <div
              key={workflow}
              className=" border-2 border-border px-4 py-3"
            >
              {workflow}
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">What teams automate</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {details.map((item) => (
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
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Setup checklist</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {setup.map((item) => (
            <div
              key={item}
              className=" border-2 border-border px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
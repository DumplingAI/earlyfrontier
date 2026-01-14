import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates | Early Frontier",
  description: "Ready-to-use prompts and checklists for agent workflows.",
};

const templates = [
  {
    title: "Plan-first prompt",
    description: "Ask the agent to outline a plan before executing tasks.",
    use: "Complex refactors, multi-step requests, risky changes.",
  },
  {
    title: "Bug report triage",
    description: "Standardize reproduction steps, scope, and next actions.",
    use: "Incoming issues, customer reports, QA escalations.",
  },
  {
    title: "Weekly status update",
    description: "Summarize work shipped, blockers, and upcoming priorities.",
    use: "Team updates, stakeholder briefings, sprint reviews.",
  },
  {
    title: "Meeting summary",
    description: "Extract decisions, action items, and owners from transcripts.",
    use: "Sync meetings, product reviews, leadership updates.",
  },
  {
    title: "Context handoff",
    description: "Capture the state of a task so others can pick it up quickly.",
    use: "On-call rotations, teammate handoffs, async collaboration.",
  },
] as const;

const checklist = [
  "Define the expected output (doc, patch, summary, report).",
  "Provide constraints, systems, or data sources to use.",
  "Specify review steps and acceptance criteria.",
  "Include where the result should be delivered.",
] as const;

export default function TemplatesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Templates" },
      ]}
      eyebrow="Resources"
      title="Templates"
      description="Ready-to-use prompts and checklists for agent workflows."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Popular templates</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {templates.map((template) => (
            <div
              key={template.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{template.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {template.description}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Best for: {template.use}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Template checklist</h2>
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
    </PageShell>
  );
}
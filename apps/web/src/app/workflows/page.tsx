import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reusable playbooks for AI agent work | Early Frontier",
  description: "Each workflow is a concrete, step-by-step recipe you can reuse across tools.",
};

const workflowTags = [
  "Onboarding",
  "Debugging",
  "Refactoring",
  "Testing",
  "Email",
  "Calendar",
  "Research",
] as const;

const featured = [
  { title: "Codebase Understanding", path: "/workflows/claude-code/codebase-understanding" },
  { title: "Bug Fixing", path: "/workflows/claude-code/bug-fixing" },
  { title: "Refactoring", path: "/workflows/claude-code/refactoring" },
  { title: "Test Generation", path: "/workflows/claude-code/test-generation" },
  { title: "Inbox Triage", path: "/workflows/claude-code/inbox-triage" },
  { title: "Meeting Summaries", path: "/workflows/claude-code/meeting-summaries" },
  { title: "Think First", path: "/workflows/claude-code/think-first" },
  { title: "Prompt Specificity", path: "/workflows/claude-code/prompt-specificity" },
] as const;

const outcomes = [
  {
    title: "Code changes",
    description: "Patches, refactors, and test additions with review notes.",
  },
  {
    title: "Operational updates",
    description: "Status reports, summaries, and action lists.",
  },
  {
    title: "Plans and checklists",
    description: "Step-by-step plans for complex work or investigations.",
  },
] as const;

const workflowTips = [
  "Start with a clear outcome and share examples of success.",
  "Add checkpoints where a human reviews key outputs.",
  "Document the prompt and inputs so the workflow is repeatable.",
  "Define success criteria and tests before automation.",
] as const;

export default function WorkflowsPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Workflows" }]}
      eyebrow="Workflows"
      title="Reusable playbooks for AI agent work"
      description="Each workflow is a concrete, step-by-step recipe you can reuse across tools."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Browse by outcome</h2>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {workflowTags.map((tag) => (
            <span
              key={tag}
              className="glass-card rounded-full border border-border/70 px-4 py-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Featured workflows</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {featured.map((workflow) => (
            <a
              key={workflow.title}
              href={workflow.path}
              className="glass-card rounded-xl border border-border/70 px-4 py-3 text-sm transition hover:border-foreground/40"
            >
              {workflow.title}
            </a>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Common workflow outcomes</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {outcomes.map((item) => (
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
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Workflow tips</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {workflowTips.map((item) => (
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
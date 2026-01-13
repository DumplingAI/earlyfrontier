import PageShell from "@/components/page-shell";

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
    </PageShell>
  );
}

import PageShell from "@/components/page-shell";

const workflows = [
  { title: "Codebase Understanding", path: "/workflows/claude-code/codebase-understanding" },
  { title: "Bug Fixing", path: "/workflows/claude-code/bug-fixing" },
  { title: "Refactoring", path: "/workflows/claude-code/refactoring" },
  { title: "Test Generation", path: "/workflows/claude-code/test-generation" },
  { title: "CI/CD Automation", path: "/workflows/claude-code/ci-cd-automation" },
  { title: "Inbox Triage", path: "/workflows/claude-code/inbox-triage" },
  { title: "Meeting Summaries", path: "/workflows/claude-code/meeting-summaries" },
  { title: "Think First", path: "/workflows/claude-code/think-first" },
  { title: "Prompt Specificity", path: "/workflows/claude-code/prompt-specificity" },
  { title: "Claude.md", path: "/workflows/claude-code/claude-md" },
  { title: "Context Management", path: "/workflows/claude-code/context-management" },
  { title: "Model Selection", path: "/workflows/claude-code/model-selection" },
  { title: "Get Unstuck", path: "/workflows/claude-code/get-unstuck" },
  { title: "Build Systems", path: "/workflows/claude-code/build-systems" },
] as const;

export default function ClaudeCodeWorkflowsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflows", href: "/workflows" },
        { label: "Claude Code" },
      ]}
      eyebrow="Workflows"
      title="Claude Code Workflows"
      description="A library of Claude Code workflows with clear steps and outputs."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Workflow library</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {workflows.map((workflow) => (
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

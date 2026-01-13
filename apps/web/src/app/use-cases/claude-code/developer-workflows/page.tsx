import PageShell from "@/components/page-shell";

const workflows = [
  {
    title: "Codebase Understanding",
    path: "/workflows/claude-code/codebase-understanding",
    description: "Map system architecture, identify key modules, and understand dependencies before making changes",
    when: "Starting on a new codebase or planning large refactors",
  },
  {
    title: "Bug Fixing",
    path: "/workflows/claude-code/bug-fixing",
    description: "Analyze error traces, identify root causes, and implement comprehensive fixes with tests",
    when: "Debugging production issues or test failures",
  },
  {
    title: "Refactoring",
    path: "/workflows/claude-code/refactoring",
    description: "Modernize legacy code, improve structure, and maintain behavior while upgrading patterns",
    when: "Improving code quality or preparing for new features",
  },
  {
    title: "Test Generation",
    path: "/workflows/claude-code/test-generation",
    description: "Create comprehensive test suites covering edge cases, failure modes, and integration scenarios",
    when: "Increasing coverage or adding tests for existing code",
  },
  {
    title: "CI/CD Automation",
    path: "/workflows/claude-code/ci-cd-automation",
    description: "Integrate with pipelines for automated testing, deployment, and code review support",
    when: "Setting up automation or improving deployment processes",
  },
] as const;

const bestPractices = [
  "Always request a plan before implementation for multi-step workflows",
  "Run tests after each workflow step to catch regressions early",
  "Commit working code before starting a new workflow",
  "Document workflow outcomes in commit messages for team visibility",
] as const;

export default function ClaudeCodeDeveloperWorkflowsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Use Cases", href: "/use-cases" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Developer Workflows" },
      ]}
      eyebrow="Claude Code"
      title="Developer Workflows"
      description="Practical, repeatable workflows for common development tasks that help you ship software faster."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">
          These workflows represent common development tasks that Claude Code excels at. Each workflow includes specific steps, example prompts, and expected outcomes to help you accomplish tasks efficiently and safely.
        </p>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Core workflows</h2>
        <div className="grid gap-4">
          {workflows.map((workflow) => (
            <a
              key={workflow.title}
              href={workflow.path}
              className="glass-card rounded-2xl border border-border/70 p-5 transition hover:border-foreground/40"
            >
              <h3 className="font-serif text-xl">{workflow.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{workflow.description}</p>
              <p className="mt-3 text-xs text-muted-foreground/70">
                <span className="font-medium">When to use: </span>
                {workflow.when}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Workflow best practices</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {bestPractices.map((practice) => (
            <div
              key={practice}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {practice}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

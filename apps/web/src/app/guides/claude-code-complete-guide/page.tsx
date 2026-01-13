import PageShell from "@/components/page-shell";

const workflowTable = [
  {
    workflow: "Codebase Understanding",
    description:
      "Get a system map, key modules, and dependency overview before changing code.",
  },
  {
    workflow: "Bug Fixing",
    description: "Provide an error trace and let Claude Code propose fixes.",
  },
  {
    workflow: "Refactoring",
    description: "Modernize legacy code while preserving behavior and tests.",
  },
  {
    workflow: "Test Generation",
    description: "Add edge-case tests and coverage for failure modes.",
  },
  {
    workflow: "CI/CD Automation",
    description:
      "Integrate with pipelines for test runs, PR prep, and review support.",
  },
] as const;

const productivity = [
  "Email and calendar management",
  "Task and project tracking",
  "Meeting summaries",
  "Content drafting and research",
] as const;

const bestPractices = [
  "Ask for a plan before implementation",
  "Keep prompts scoped to a single goal",
  "Review diffs before committing",
  "Run tests to validate changes",
] as const;

const beginnerPlaybook = [
  {
    title: "Think before you type",
    description:
      "Start in plan mode and outline the end state before you ask Claude to act. Better inputs produce better outputs.",
    steps: [
      "Define the outcome before you prompt",
      "Ask for a plan and review it",
      "Execute only after the plan is solid",
    ],
    path: "/workflows/claude-code/think-first",
  },
  {
    title: "Be specific about constraints",
    description:
      "Define scope, requirements, and what not to do. Narrow prompts beat vague requests every time.",
    steps: [
      "List the exact requirements and constraints",
      "Call out what to avoid or not touch",
      "Confirm assumptions before execution",
    ],
    path: "/workflows/claude-code/prompt-specificity",
  },
  {
    title: "Use Claude.md as leverage",
    description:
      "Keep instructions short, project-specific, and explain why each rule exists. Update it when you correct the same mistake twice.",
    steps: [
      "Capture project-specific rules only",
      "Add a why for each rule",
      "Update after repeated corrections",
    ],
    path: "/workflows/claude-code/claude-md",
  },
  {
    title: "Respect context limits",
    description:
      "Quality drops before the window is full. Keep tasks scoped, use scratch files, and reset context when it starts to drift.",
    steps: [
      "Keep one task per thread",
      "Store plans in scratch files",
      "Reset when context starts drifting",
    ],
    path: "/workflows/claude-code/context-management",
  },
  {
    title: "Pick the right model for the job",
    description:
      "Use a planning-focused model for architecture decisions, then switch to a faster model for execution when the path is clear.",
    steps: [
      "Use the strongest model for planning",
      "Switch to a faster model for execution",
      "Keep Claude.md consistent across models",
    ],
    path: "/workflows/claude-code/model-selection",
  },
  {
    title: "When stuck, change the approach",
    description:
      "Clear the thread, simplify the task, or show a concrete example instead of repeating the same instruction.",
    steps: [
      "Reset or simplify the task",
      "Show a concrete example",
      "Reframe the problem when looping",
    ],
    path: "/workflows/claude-code/get-unstuck",
  },
  {
    title: "Build systems, not one-offs",
    description:
      "Use headless mode, hooks, and repeated workflows to compound improvements over time.",
    steps: [
      "Identify repeatable workflows",
      "Automate them with hooks or scripts",
      "Review logs and iterate over time",
    ],
    path: "/workflows/claude-code/build-systems",
  },
] as const;

const playbookTldr = [
  "Plan before you prompt",
  "Be specific about constraints",
  "Keep Claude.md short and current",
  "Manage context actively",
  "Use the right model for each phase",
  "Reset and reframe when stuck",
  "Automate repeatable work",
] as const;

const toolingNotes = [
  {
    title: "MCP servers",
    description:
      "Connect external data sources and tools so Claude can act without manual copy-paste.",
  },
  {
    title: "Hooks",
    description:
      "Run checks or formatters automatically when Claude edits files to prevent drift.",
  },
  {
    title: "Custom slash commands",
    description:
      "Package repeatable prompts into commands for debugging, review, or deploy workflows.",
  },
] as const;

export default function ClaudeCodeCompleteGuidePage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Claude Code" },
      ]}
      eyebrow="Guide"
      title="A Comprehensive Guide to Claude Code"
      description="Developer workflows, personal productivity use cases, and MCP-powered integrations in one guide."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <div className="grid gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Author: Manus AI - January 8, 2026
          </p>
          <h2 className="font-serif text-2xl">Introduction</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Claude Code is a terminal-based agentic coding assistant designed to
          accelerate software development. Through MCP, it can also connect to
          external tools, turning it into a productivity assistant for non-technical
          workflows like email, calendar, and research.
        </p>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">TL;DR</h2>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {playbookTldr.map((item) => (
            <span
              key={item}
              className="glass-card rounded-full border border-border/70 px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Getting started</h2>
        <div className="grid gap-4 text-sm text-muted-foreground">
          <div className="glass-card rounded-2xl border border-border/70 p-5">
            Install Claude Code, authenticate, and open a project folder in your
            terminal.
          </div>
          <div className="glass-card rounded-2xl border border-border/70 p-5">
            Start with a clear prompt and ask for a plan before changes are made.
          </div>
          <div className="glass-card rounded-2xl border border-border/70 p-5">
            Review the diff, run tests, and iterate on the plan.
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Developer workflows</h2>
        <div className="grid gap-4">
          {workflowTable.map((row) => (
            <div
              key={row.workflow}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-xl">{row.workflow}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {row.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Beginner playbook</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {beginnerPlaybook.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="glass-card rounded-2xl border border-border/70 p-5 transition hover:border-foreground/40"
            >
              <h3 className="font-serif text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {item.steps.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Personal productivity use cases</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {productivity.map((item) => (
            <div
              key={item}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Tooling and configuration</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {toolingNotes.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Best practices</h2>
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

      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-foreground p-10 text-background md:p-12">
        <h2 className="font-serif text-3xl">Explore the workflows</h2>
        <p className="max-w-3xl text-sm text-background/80">
          Jump into the workflow library for step-by-step prompts and outcomes you
          can use immediately.
        </p>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-background/70">
          <span>Workflows</span>
          <span>Integrations</span>
          <span>Use cases</span>
        </div>
      </section>
    </PageShell>
  );
}

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Early Frontier - AI Agent Use Cases",
  description:
    "A draft site architecture and learning hub for new AI agent use cases, starting with Claude Code workflows and productivity playbooks.",
};

const featuredWorkflows = [
  {
    title: "Codebase understanding",
    copy: "Ask for a system map, key modules, and dependencies before you touch code.",
    path: "/workflows/claude-code/codebase-understanding",
  },
  {
    title: "Bug fixing",
    copy: "Provide an error trace and let Claude Code propose and implement fixes.",
    path: "/workflows/claude-code/bug-fixing",
  },
  {
    title: "Refactoring",
    copy: "Modernize legacy code with safer, test-backed changes.",
    path: "/workflows/claude-code/refactoring",
  },
  {
    title: "Test generation",
    copy: "Fill gaps with edge-case tests and failure-mode coverage.",
    path: "/workflows/claude-code/test-generation",
  },
  {
    title: "Inbox triage",
    copy: "Summarize recent email from priority senders and draft replies.",
    path: "/workflows/claude-code/inbox-triage",
  },
  {
    title: "Meeting scheduling",
    copy: "Find open slots and draft calendar invites with context.",
    path: "/use-cases/claude-code/email-calendar",
  },
] as const;

const learningPaths = [
  {
    title: "Developer Path",
    steps: [
      "Get started with Claude Code",
      "Understand a new codebase",
      "Debug and fix issues",
      "Refactor with confidence",
      "Generate tests",
      "Automate CI/CD",
    ],
  },
  {
    title: "Personal Productivity Path",
    steps: [
      "Connect email + calendar",
      "Organize tasks",
      "Summarize meetings",
      "Automate research",
      "Build weekly review",
    ],
  },
  {
    title: "Manager Path",
    steps: [
      "Team onboarding workflows",
      "Status updates + summaries",
      "Project reporting cadence",
      "Governance + guardrails",
    ],
  },
] as const;

const guideMeta = {
  title: "A Comprehensive Guide to Claude Code",
  author: "Manus AI",
  date: "January 8, 2026",
};

export default function Home() {
  return (
    <div className="hero-grid">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-20 pt-10">
        <section className="grid gap-8 rounded-[32px] border border-border/70 bg-background/70 p-8 md:p-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <span>Early Frontier</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
              <span>AI Agent Use Cases</span>
            </div>
            <h1 className="text-balance font-serif text-4xl leading-tight md:text-6xl">
              How people are using Claude Code to build faster and work smarter.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Claude Code is an agentic coding assistant that lives in the terminal.
              It helps teams ship software faster, and through MCP integrations it
              can also automate productivity workflows like email, scheduling, and
              research. This site collects the best use cases and playbooks.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/use-cases/claude-code"
                className="rounded-full border border-foreground/20 bg-foreground px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-background transition hover:border-foreground/40"
              >
                Explore Claude Code
              </a>
              <a
                href="/guides/claude-code-complete-guide"
                className="rounded-full border border-foreground/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-foreground/40"
              >
                Read the guide
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="glass-card rounded-full border border-border/70 px-4 py-2">
                Start here: Claude Code use cases
              </div>
              <div className="glass-card rounded-full border border-border/70 px-4 py-2">
                Focus: workflows + integrations
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card rounded-3xl border border-border/80 p-6">
              <h2 className="font-serif text-2xl">Who this is for</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>Developers who want to understand, refactor, and ship faster.</li>
                <li>Operators who want to automate research, inbox, and reporting.</li>
                <li>Teams building agent-driven workflows across their tool stack.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border/80 bg-foreground p-6 text-background">
              <p className="text-xs uppercase tracking-[0.3em] text-background/60">
                Featured Guide
              </p>
              <h3 className="mt-4 font-serif text-3xl">Claude Code</h3>
              <p className="mt-3 text-sm text-background/80">
                A deep dive into developer workflows and personal productivity
                use cases.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-background/70">
                <span>Developer workflows</span>
                <span>Productivity automations</span>
                <span>Tool integrations</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
          <div className="grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Featured Workflows
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Real-world workflows people run today
            </h2>
            <p className="max-w-3xl text-muted-foreground">
              Each workflow is a step-by-step playbook, with setup requirements and
              prompts you can reuse.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredWorkflows.map((workflow) => (
              <a
                key={workflow.title}
                href={workflow.path}
                className="glass-card rounded-2xl border border-border/70 px-5 py-4 transition hover:border-foreground/40"
              >
                <h3 className="font-serif text-xl">{workflow.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {workflow.copy}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
          <div className="grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Learning Paths
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Choose the path that matches your role
            </h2>
            <p className="max-w-3xl text-muted-foreground">
              Guided sequences designed to help you get to a quick win without
              guessing what to try next.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {learningPaths.map((path) => (
              <div
                key={path.title}
                className="glass-card rounded-3xl border border-border/70 p-6"
              >
                <h3 className="font-serif text-xl">{path.title}</h3>
                <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {path.steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
          <div className="grid gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Guide Preview
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              {guideMeta.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              Author: {guideMeta.author} - Date: {guideMeta.date}
            </p>
            <p className="max-w-3xl text-muted-foreground">
              A structured overview of Claude Code capabilities, practical
              workflows, and MCP-powered productivity use cases.
            </p>
            <a
              href="/guides/claude-code-complete-guide"
              className="w-fit rounded-full border border-foreground/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-foreground/40"
            >
              Read the full guide
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="/use-cases/claude-code/getting-started"
              className="glass-card rounded-2xl border border-border/70 p-5 transition hover:border-foreground/40"
            >
              <h3 className="font-serif text-xl">Getting Started</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Installation, onboarding, and the first prompt that proves value.
              </p>
            </a>
            <a
              href="/use-cases/claude-code/developer-workflows"
              className="glass-card rounded-2xl border border-border/70 p-5 transition hover:border-foreground/40"
            >
              <h3 className="font-serif text-xl">Developer Workflows</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Codebase understanding, debugging, refactoring, testing, and
                CI/CD.
              </p>
            </a>
            <a
              href="/use-cases/claude-code/personal-productivity"
              className="glass-card rounded-2xl border border-border/70 p-5 transition hover:border-foreground/40"
            >
              <h3 className="font-serif text-xl">Personal Productivity</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Email triage, calendar management, tasks, and research automation.
              </p>
            </a>
          </div>
        </section>

        <section className="grid gap-6 rounded-[32px] border border-border/70 bg-foreground p-10 text-background md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl">Start with Claude Code</h2>
          <p className="max-w-3xl text-sm text-background/80">
            Explore the complete Claude Code use case library, or jump into a
            specific workflow. We will continue adding new agent use cases as the
            ecosystem grows.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/use-cases/claude-code"
              className="rounded-full border border-background/30 bg-background px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground"
            >
              Claude Code hub
            </a>
            <a
              href="/workflows"
              className="rounded-full border border-background/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-background"
            >
              Browse workflows
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-background/70">
            <span>Use cases</span>
            <span>Workflows</span>
            <span>Integrations</span>
            <span>Guides</span>
          </div>
        </section>
      </main>
    </div>
  );
}

import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Comprehensive Guide to Claude Code | Early Frontier",
  description: "Developer workflows, productivity use cases, and MCP-powered integrations in one guide.",
};

const workflowTable = [
  {
    workflow: "Codebase Understanding",
    description:
      "Map architecture, key modules, and dependencies before changing code.",
  },
  {
    workflow: "Bug Fixing",
    description: "Analyze errors, identify root causes, and verify fixes with tests.",
  },
  {
    workflow: "Refactoring",
    description: "Modernize code in staged, reviewable chunks with rollbacks.",
  },
  {
    workflow: "Test Generation",
    description: "Fill coverage gaps with edge cases and failure-mode tests.",
  },
  {
    workflow: "CI/CD Automation",
    description:
      "Generate pipelines, quality gates, and deployment checklists.",
  },
] as const;

const productivity = [
  "Email triage with approval-only drafts",
  "Meeting briefs and structured summaries",
  "Task updates and weekly status reports",
  "Research briefs with cited sources",
  "File management and cleanup",
  "Browser automation with Claude in Chrome",
] as const;

const bestPractices = [
  "Ask for a plan before any multi-file changes",
  "Make constraints explicit (performance, dependencies, style)",
  "Review diffs before committing",
  "Run tests or checks before shipping",
  "Save decisions to a project file (e.g., Claude.md)",
] as const;

const beginnerPlaybook = [
  {
    title: "Plan before you run",
    description:
      "For anything beyond a trivial edit, ask for a plan and validate scope before code changes.",
    steps: [
      "State the outcome and constraints",
      "Ask for a step-by-step plan",
      "Approve the plan before execution",
    ],
    path: "/workflows/claude-code/think-first",
  },
  {
    title: "Make prompts precise",
    description:
      "Specific requirements and examples reduce rework and lower risk.",
    steps: [
      "List requirements and exclusions",
      "Provide examples and edge cases",
      "Confirm assumptions before edits",
    ],
    path: "/workflows/claude-code/prompt-specificity",
  },
  {
    title: "Use Claude.md for consistency",
    description:
      "Capture conventions, constraints, and architecture decisions once and reuse them.",
    steps: [
      "Document the 5–10 rules that prevent mistakes",
      "Include a short “why” for each rule",
      "Update after repeated corrections",
    ],
    path: "/workflows/claude-code/claude-md",
  },
  {
    title: "Manage context actively",
    description:
      "Long threads drift. Use checkpoints and fresh threads to keep quality high.",
    steps: [
      "One task per thread",
      "Save progress to scratch files",
      "Reset context when quality drops",
    ],
    path: "/workflows/claude-code/context-management",
  },
  {
    title: "Choose the right model",
    description:
      "Use a stronger model for planning and a faster one for execution.",
    steps: [
      "Plan with a high-reasoning model",
      "Execute with a fast model",
      "Switch back if the plan changes",
    ],
    path: "/workflows/claude-code/model-selection",
  },
  {
    title: "When stuck, reset",
    description:
      "Change the approach instead of repeating the same prompt.",
    steps: [
      "Reset or simplify the task",
      "Provide concrete examples",
      "Try an alternative approach",
    ],
    path: "/workflows/claude-code/get-unstuck",
  },
  {
    title: "Automate repeatable work",
    description:
      "Turn frequent tasks into scripts, hooks, or CI workflows.",
    steps: [
      "Identify recurring workflows",
      "Automate with hooks or CI",
      "Review logs and improve",
    ],
    path: "/workflows/claude-code/build-systems",
  },
] as const;

const playbookTldr = [
  "Plan first, then execute",
  "Be explicit about constraints",
  "Record standards in Claude.md",
  "Keep context tight",
  "Review diffs and tests",
  "Automate what repeats",
] as const;

const toolingNotes = [
  {
    title: "MCP servers",
    description:
      "Connect external tools and data sources so Claude can act without manual copy-paste.",
  },
  {
    title: "Slash commands",
    description:
      "Standardize prompts into reusable commands for reviews, plans, and summaries.",
  },
  {
    title: "Hooks and automation",
    description:
      "Trigger checks or formatters automatically when Claude edits files.",
  },
  {
    title: "Permission controls",
    description:
      "Use least-privilege and approval steps for risky actions like writes or deploys.",
  },
] as const;

const chromeVsMcp = [
  {
    title: "Claude in Chrome",
    description:
      "Best for UI-driven workflows: clicking through web apps, filling forms, and reading pages you’re logged into.",
  },
  {
    title: "MCP integrations",
    description:
      "Best for structured, reliable automation: API access, database queries, and background workflows.",
  },
] as const;

const chromeUseCases = [
  "Summarize Gmail threads and draft replies for review",
  "Create calendar events directly in Google Calendar",
  "Extract structured data from web dashboards",
  "Fill repetitive forms from a template or spreadsheet",
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
      description="Developer workflows, productivity use cases, and MCP-powered integrations in one guide."
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <div className="grid gap-2">
          <p className="text-xs tracking-widest text-[#c9b8a0]">
            Author: Manus AI - January 8, 2026
          </p>
          <h2 className="font-serif italic text-2xl">Introduction</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Claude Code is a CLI tool for working with codebases through natural
          language. It can read and edit files, run commands with permission, and
          help you plan and execute multi-step changes. With MCP servers, it can
          also connect to external tools like email, calendars, docs, and
          databases.
        </p>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">TL;DR</h2>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {playbookTldr.map((item) => (
            <span
              key={item}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Getting started</h2>
        <div className="grid gap-4 text-sm text-muted-foreground">
          <div className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5">
            Install Claude Code, authenticate, and open a project folder in your
            terminal.
          </div>
          <div className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5">
            Provide a clear goal and request a plan before any multi-file edits.
          </div>
          <div className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5">
            Review the diff, run tests, and iterate on the plan if requirements
            change.
          </div>
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Developer workflows</h2>
        <div className="grid gap-4">
          {workflowTable.map((row) => (
            <div
              key={row.workflow}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-xl">{row.workflow}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {row.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Beginner playbook</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {beginnerPlaybook.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5 transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
            >
              <h3 className="font-serif italic text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {item.steps.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5  bg-[#a78b71] rounded-full" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Personal productivity use cases</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {productivity.map((item) => (
            <div
              key={item}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Claude in Chrome vs MCP</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {chromeVsMcp.map((item) => (
            <div
              key={item.title}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
          {chromeUseCases.map((item) => (
            <div
              key={item}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Quality checklist</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {bestPractices.map((item) => (
            <div
              key={item}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Tooling notes</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {toolingNotes.map((item) => (
            <div
              key={item.title}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

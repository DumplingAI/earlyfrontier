import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code | Early Frontier",
  description: "How people are using Claude Code today: from developer workflows to personal productivity automations.",
};

const sections = [
  {
    title: "Getting Started",
    copy: "Installation, first prompt, and setting context in your repo.",
    path: "/use-cases/claude-code/getting-started",
  },
  {
    title: "Developer Workflows",
    copy: "Codebase understanding, debugging, refactoring, tests, and CI/CD.",
    path: "/workflows/claude-code",
  },
  {
    title: "Personal Productivity",
    copy: "Email, calendar, tasks, and research via MCP integrations.",
    path: "/use-cases/claude-code/personal-productivity",
  },
  {
    title: "MCP Integrations",
    copy: "Connect Claude Code to Gmail, Calendar, Notion, and more.",
    path: "/use-cases/claude-code/mcp-integrations",
  },
  {
    title: "Best Practices",
    copy: "Plan-first workflows, safe execution, and review habits.",
    path: "/use-cases/claude-code/best-practices",
  },
  {
    title: "FAQ",
    copy: "Common questions and setup guidance.",
    path: "/use-cases/claude-code/faq",
  },
] as const;

const learningPaths = [
  {
    title: "Developer Path",
    steps: [
      "Getting Started",
      "Codebase Understanding",
      "Bug Fixing",
      "Refactoring",
      "Test Generation",
      "CI/CD Automation",
    ],
  },
  {
    title: "Personal Productivity Path",
    steps: [
      "Getting Started",
      "Email + Calendar",
      "Task Management",
      "Browser Research",
      "Weekly Review",
    ],
  },
] as const;

const relatedWorkflows = [
  {
    title: "Codebase Understanding",
    path: "/workflows/claude-code/codebase-understanding",
  },
  { title: "Bug Fixing", path: "/workflows/claude-code/bug-fixing" },
  { title: "Test Generation", path: "/workflows/claude-code/test-generation" },
  { title: "Inbox Triage", path: "/workflows/claude-code/inbox-triage" },
] as const;

export default function ClaudeCodePage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Use Cases" },
      ]}
      eyebrow="Use Case"
      title="Claude Code"
      description="How people are using Claude Code today: from developer workflows to personal productivity automations."
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Explore this use case</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5 transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
            >
              <h3 className="font-serif italic text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
            </a>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Learning paths</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {learningPaths.map((path) => (
            <div
              key={path.title}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-xl">{path.title}</h3>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                {path.steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] rounded-md text-xs font-semibold">
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
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Related workflows</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {relatedWorkflows.map((workflow) => (
            <a
              key={workflow.title}
              href={workflow.path}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
            >
              {workflow.title}
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
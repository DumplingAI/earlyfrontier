import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code Workflows | Early Frontier",
  description: "A library of Claude Code workflows with clear steps and outputs.",
};

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

const onboarding = [
  "Pick one workflow and run it on a small, low-risk task.",
  "Capture the prompt, inputs, and output format that worked.",
  "Add review steps for code changes or external actions.",
  "Document success criteria so results are easy to validate.",
] as const;

const prerequisites = [
  {
    title: "Repository access",
    description: "Make sure the agent can read the files it needs.",
  },
  {
    title: "Clear outputs",
    description: "Specify expected format: patch, summary, checklist, report.",
  },
  {
    title: "Review process",
    description: "Identify who approves changes before they ship.",
  },
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
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Prerequisites</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {prerequisites.map((item) => (
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
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Getting started</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {onboarding.map((item) => (
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
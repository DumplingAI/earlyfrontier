import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Systems | Early Frontier",
  description: "Turn Claude Code into a repeatable, automated workflow engine.",
};

const overview = {
  description:
    "The most powerful use of Claude Code isn’t one-off tasks—it’s building repeatable systems that compound over time. By identifying recurring workflows, automating them with hooks or CI, and iterating based on results, you create leverage that scales across your team.",
  when: "Use this workflow when you find yourself repeating tasks, onboarding teammates to common processes, or scaling development practices across a growing team.",
} as const;

const steps = [
  {
    step: "Identify repeatable tasks",
    description:
      "Track the requests you repeat most: code review checks, test generation, documentation updates, release notes.",
    example:
      '"We generate API clients every time we add endpoints. Let’s automate it: read OpenAPI spec, generate TypeScript client into src/api/."',
  },
  {
    step: "Automate with hooks or CI",
    description:
      "Convert manual workflows into automated systems using git hooks, CI pipelines, or scheduled jobs.",
    example:
      '"Create a GitHub Action that reviews PRs for missing tests, checks conventions from Claude.md, and posts a summary comment."',
  },
  {
    step: "Add logging and guardrails",
    description:
      "Automation needs observability. Add logs, limits, and approval steps for risky actions.",
    example:
      '"If the automated review detects security issues, require manual approval before merge."',
  },
  {
    step: "Document and share systems",
    description:
      "Make workflows discoverable and reusable. Document how to run, modify, and troubleshoot them.",
    example:
      '"Create AUTOMATION.md describing our PR review bot, test scaffolding workflow, and doc update job."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Automating code reviews",
    prompt:
      "Build a review automation: read git diff, check for missing tests and security risks, output a markdown report. Package as a pre-push hook with install steps.",
  },
  {
    scenario: "Generating boilerplate",
    prompt:
      "Create a script 'generate:crud' that reads a model name and generates: TypeScript model, API routes, tests, and docs. It must be idempotent.",
  },
  {
    scenario: "Automated documentation updates",
    prompt:
      "Build a weekly job that scans src/ exports and updates docs/api.md. If docs changed, open a PR.",
  },
  {
    scenario: "Continuous quality monitoring",
    prompt:
      "Create a scheduled job that analyzes recent commits for repeated issues and updates Claude.md with new guidelines.",
  },
] as const;

const outputs = [
  {
    output: "Automated workflows",
    description:
      "Hooks, scripts, and CI pipelines that run reliable Claude Code tasks without manual setup",
  },
  {
    output: "Consistent quality",
    description:
      "Standardized checks and templates that keep output consistent across the team",
  },
  {
    output: "Compounding gains",
    description:
      "Repeated time savings from each automated workflow",
  },
  {
    output: "Team leverage",
    description:
      "Automation scales expertise to the whole team, not just power users",
  },
] as const;

const bestPractices = [
  "Start with the most frequent task—automate the biggest time sink first",
  "Add logging and alerts for automation failures",
  "Make systems opt-in before rolling out widely",
  "Version control prompts and automation configs",
  "Measure impact to justify ongoing maintenance",
] as const;

const commonPitfalls = [
  {
    pitfall: "Automating low-frequency tasks",
    solution:
      "Automate tasks you do weekly or more. Otherwise, document the manual process instead.",
  },
  {
    pitfall: "Brittle automation without error handling",
    solution:
      "Add fallbacks: log errors, notify owners, and avoid blocking critical workflows.",
  },
  {
    pitfall: "Not maintaining automation",
    solution:
      "Schedule periodic reviews to update prompts and fix broken assumptions.",
  },
] as const;

const tips = [
  {
    tip: "Automate in stages",
    example:
      '"Start with generate-only → then generate + PR → then auto-merge after checks pass."',
  },
  {
    tip: "Create reusable templates",
    example:
      '"Build templates for PR review, doc updates, and test scaffolding so new automations start from known patterns."',
  },
  {
    tip: "Integrate with existing tools",
    example:
      '"Send reports to Slack or tickets to Jira instead of creating a new system."',
  },
] as const;

const related = [
  { title: "CI/CD Automation", path: "/workflows/claude-code/ci-cd-automation" },
  { title: "Claude.md", path: "/workflows/claude-code/claude-md" },
  { title: "Test Generation", path: "/workflows/claude-code/test-generation" },
] as const;

export default function BuildSystemsWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Build Systems" },
      ]}
      eyebrow="Workflow"
      title="Build Systems"
      description="Turn Claude Code into a repeatable, automated workflow engine."
    >
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">{overview.description}</p>
        <div className=" bg-background/50 p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mb-2">
            When to use
          </div>
          <p className="text-sm text-muted-foreground">{overview.when}</p>
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Step-by-step process</h2>
        <div className="grid gap-6">
          {steps.map((item, index) => (
            <div key={item.step} className=" border-2 border-border p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center  border-2 border-border bg-background text-xs font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-sans text-lg">{item.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-3 rounded-lg bg-background/50 p-3 text-sm italic text-muted-foreground">
                    {item.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Example prompts</h2>
        <div className="grid gap-4">
          {examplePrompts.map((item) => (
            <div
              key={item.scenario}
              className=" border-2 border-border p-5"
            >
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {item.scenario}
              </div>
              <p className="text-sm italic text-muted-foreground">"{item.prompt}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Expected outputs</h2>
        <div className="grid gap-4">
          {outputs.map((item) => (
            <div
              key={item.output}
              className=" border-2 border-border p-5"
            >
              <h3 className="font-sans text-lg">{item.output}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Best practices</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {bestPractices.map((practice) => (
            <div
              key={practice}
              className=" border-2 border-border px-4 py-3"
            >
              {practice}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Common pitfalls</h2>
        <div className="grid gap-4">
          {commonPitfalls.map((item) => (
            <div
              key={item.pitfall}
              className=" border-2 border-border p-5"
            >
              <h3 className="font-sans text-lg text-orange-600/90">{item.pitfall}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">Solution: </span>
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Pro tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tips.map((item) => (
            <div
              key={item.tip}
              className=" border-2 border-border p-5"
            >
              <h3 className="font-sans text-lg">{item.tip}</h3>
              <p className="mt-2 text-sm italic text-muted-foreground">"{item.example}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Related workflows</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {related.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className=" border-2 border-border px-4 py-3 text-sm transition hover:border-foreground/40"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
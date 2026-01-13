import PageShell from "@/components/page-shell";

const overview = {
  description:
    "The most powerful use of Claude Code isn't one-off tasks—it's building repeatable systems that compound over time. By identifying recurring workflows, automating them with scripts or CI/CD integrations, and iterating based on results, you create leverage. What takes 30 minutes manually today becomes a 30-second automated workflow tomorrow, freeing you to focus on higher-value problems.",
  when: "Use this workflow when you find yourself doing the same task repeatedly, onboarding new team members to common processes, scaling development practices across a growing team, or building internal tools and productivity systems.",
} as const;

const steps = [
  {
    step: "Identify repeatable tasks",
    description:
      "Track what you ask Claude to do repeatedly. These patterns reveal opportunities for automation: code review checklists, test generation, deployment scripts, documentation updates.",
    example:
      '"I notice I ask you to generate API client code every time we add a new endpoint. Let\'s build a script that automates this: reads OpenAPI spec, generates TypeScript client with proper types, writes to src/api/. Make it a pre-commit hook."',
  },
  {
    step: "Automate via headless mode or hooks",
    description:
      "Convert manual workflows into automated systems using Claude Code's headless mode, git hooks, CI/CD pipelines, or scheduled scripts.",
    example:
      '"Create a GitHub Action that runs on PR creation: 1) Uses Claude Code headless to review code for common issues, 2) Checks against our coding standards in Claude.md, 3) Posts findings as PR comments. Trigger automatically, no manual intervention."',
  },
  {
    step: "Review logs and iterate",
    description:
      "Monitor automated workflows for failures, false positives, or missed cases. Use this feedback to refine prompts and improve accuracy over time.",
    example:
      '"The automated code review flagged 5 false positives this week. Add to the automation: \'Don\'t flag console.log in test files\' and \'Allow TODO comments with linked tickets\'. Update the workflow and redeploy."',
  },
  {
    step: "Document and share systems",
    description:
      "Make your automated workflows discoverable and reusable. Document how they work, when to use them, and how to modify them. This multiplies impact across your team.",
    example:
      '"Create AUTOMATION.md documenting our Claude Code systems: API client generation (pre-commit), code review (PR automation), test scaffolding (npm script). Include usage examples and how to update prompts."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Automating code reviews",
    prompt:
      "Build a code review automation system: 1) Reads git diff, 2) Checks for: missing tests, security issues, performance anti-patterns, style violations, 3) Outputs markdown report. Package as a pre-push git hook. Include instructions for installation.",
  },
  {
    scenario: "Generating boilerplate on demand",
    prompt:
      "Create an npm script 'generate:crud' that takes a model name and generates: TypeScript model class, Prisma schema, CRUD API routes, test suite skeleton, OpenAPI spec. Follow our project conventions in Claude.md. Make it idempotent—running twice should be safe.",
  },
  {
    scenario: "Automated documentation updates",
    prompt:
      "Build a system that runs weekly: scans src/ for exported functions, generates API documentation, updates docs/api.md. If the documentation changed, creates a PR with the updates. Use Claude Code headless mode and GitHub CLI.",
  },
  {
    scenario: "Continuous quality monitoring",
    prompt:
      "Create a daily scheduled job that: analyzes recent commits, identifies patterns of repeated bugs or style issues, updates Claude.md with new guidelines to prevent future occurrences. Email a weekly summary to the team.",
  },
] as const;

const outputs = [
  {
    output: "Automated workflows",
    description:
      "Scripts, hooks, and CI/CD integrations that execute Claude Code tasks without manual intervention",
  },
  {
    output: "Consistent quality",
    description:
      "Standardized checks and generation patterns ensure consistency across the team and over time",
  },
  {
    output: "Compounding gains",
    description:
      "Each automated workflow saves time repeatedly, creating exponential productivity improvements as systems accumulate",
  },
  {
    output: "Team force multiplication",
    description:
      "Automated systems scale expertise—junior developers get senior-level guidance automatically through well-designed workflows",
  },
] as const;

const bestPractices = [
  "Start small with one high-frequency task—automate your biggest time sink first, then expand",
  "Build in failure handling and logging—automated systems need observability to debug when they break",
  "Make systems opt-in initially—test with early adopters before forcing team-wide adoption",
  "Version control your automation prompts—treat them as code, review changes, track what works",
  "Measure impact quantitatively—track time saved, errors prevented, or consistency improvements to justify investment",
] as const;

const commonPitfalls = [
  {
    pitfall: "Over-automating low-frequency tasks",
    solution:
      "Automate tasks you do weekly or more. If it's monthly or rare, manual execution with good documentation is more cost-effective than building automation.",
  },
  {
    pitfall: "Creating brittle automations without error handling",
    solution:
      "Build in fallbacks: if automation fails, log the error and notify someone. Don't silently fail or block critical workflows.",
  },
  {
    pitfall: "Not maintaining automated systems",
    solution:
      "Schedule quarterly reviews of automation. Update for codebase changes, refine prompts, remove obsolete systems. Automation rots like code.",
  },
] as const;

const tips = [
  {
    tip: "Build progressive automation",
    example:
      '"Start with: script generates code, you review and commit. Then: script generates and creates PR. Finally: script generates, runs tests, auto-merges if green. Increase automation confidence gradually."',
  },
  {
    tip: "Create automation templates",
    example:
      '"Build reusable templates: \'PR Review Bot Template\', \'Code Generator Template\', \'Documentation Sync Template\'. New automations start from proven patterns, saving setup time."',
  },
  {
    tip: "Integrate with existing tools",
    example:
      '"Connect Claude Code automation to tools you already use: Slack for notifications, Jira for ticket creation, Datadog for monitoring. Don\'t build parallel systems—extend what exists."',
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
        { label: "Workflows", href: "/workflows" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Build Systems" },
      ]}
      eyebrow="Workflow"
      title="Build Systems"
      description="Turn Claude Code into a repeatable, automated workflow engine."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">{overview.description}</p>
        <div className="rounded-xl bg-background/50 p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mb-2">
            When to use
          </div>
          <p className="text-sm text-muted-foreground">{overview.when}</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Step-by-step process</h2>
        <div className="grid gap-6">
          {steps.map((item, index) => (
            <div key={item.step} className="glass-card rounded-2xl border border-border/70 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-xs font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-lg">{item.step}</h3>
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

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Example prompts</h2>
        <div className="grid gap-4">
          {examplePrompts.map((item) => (
            <div
              key={item.scenario}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {item.scenario}
              </div>
              <p className="text-sm italic text-muted-foreground">"{item.prompt}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Expected outputs</h2>
        <div className="grid gap-4">
          {outputs.map((item) => (
            <div
              key={item.output}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.output}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
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

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Common pitfalls</h2>
        <div className="grid gap-4">
          {commonPitfalls.map((item) => (
            <div
              key={item.pitfall}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg text-orange-600/90">{item.pitfall}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">Solution: </span>
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Pro tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tips.map((item) => (
            <div
              key={item.tip}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.tip}</h3>
              <p className="mt-2 text-sm italic text-muted-foreground">"{item.example}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Related workflows</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {related.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="glass-card rounded-xl border border-border/70 px-4 py-3 text-sm transition hover:border-foreground/40"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

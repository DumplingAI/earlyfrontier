import PageShell from "@/components/page-shell";

const overview = {
  description:
    "Different Claude models have different strengths. Opus excels at complex reasoning and planning, while Sonnet provides fast, high-quality execution. By strategically choosing which model to use for each phase of work, you optimize for both quality and speed. Use the strongest model when decisions matter most, then switch to faster models for execution once the approach is clear.",
  when: "Use this workflow for multi-phase projects, architectural decisions, complex refactoring, or anytime you need to balance deep thinking with rapid iteration.",
} as const;

const steps = [
  {
    step: "Use the strongest model for planning",
    description:
      "Start with Opus for tasks requiring deep analysis, architectural decisions, or complex tradeoff evaluation. Let it do the hard thinking upfront.",
    example:
      '"Using Opus 4: Design our microservices architecture. Consider: service boundaries, data ownership, communication patterns, failure modes, scalability requirements. Propose 2-3 approaches with detailed tradeoff analysis."',
  },
  {
    step: "Switch to a faster model for execution",
    description:
      "Once the plan is approved, switch to Sonnet for implementation. It executes well-defined tasks quickly while maintaining quality.",
    example:
      '"Switching to Sonnet 3.5: Implement phase 1 of the approved architecture plan—the user service with the patterns we discussed. Focus on execution, not re-evaluating the approach."',
  },
  {
    step: "Confirm the plan before implementing",
    description:
      "Before switching models, explicitly approve the plan. This prevents the execution model from second-guessing decisions made by the planning model.",
    example:
      '"The Opus plan looks good. I approve: PostgreSQL for user data, Redis for sessions, REST for client communication, gRPC for inter-service. Now switch to Sonnet and implement without reconsidering these choices."',
  },
  {
    step: "Return to stronger model for course correction",
    description:
      "If implementation reveals issues with the plan, switch back to a stronger model to reconsider the approach rather than having the execution model make ad-hoc decisions.",
    example:
      '"Implementation revealed a problem: gRPC doesn\'t work well with our deployment setup. Switching back to Opus: Propose alternatives for inter-service communication that work with standard HTTP load balancers."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Complex architectural decision",
    prompt:
      "Use Opus 4: We're hitting database performance limits. Analyze our schema and query patterns (attached). Should we: 1) Add read replicas, 2) Implement caching, 3) Denormalize tables, or 4) Move to a different database? Consider cost, complexity, and long-term maintainability.",
  },
  {
    scenario: "Fast iteration on defined task",
    prompt:
      "Use Sonnet 3.5: We've decided to implement Redis caching (plan attached). Build the cache layer with: cache keys based on user ID and request path, 5-minute TTL, invalidation on user updates. Follow the implementation plan exactly.",
  },
  {
    scenario: "Strategic planning then execution",
    prompt:
      "Phase 1 (Opus): Plan a migration from REST to GraphQL. Phase 2 (Sonnet): Once approved, implement the GraphQL schema and resolvers following the plan. I'll explicitly tell you when to switch models.",
  },
  {
    scenario: "Debugging complex issues",
    prompt:
      "Use Opus 4: Users report intermittent auth failures. I've attached logs from 3 failures. The pattern is unclear. Analyze the logs, our auth flow, and propose a debugging strategy to isolate the root cause.",
  },
] as const;

const outputs = [
  {
    output: "Better planning",
    description:
      "Stronger models provide more thorough analysis, identify more edge cases, and propose better-considered solutions",
  },
  {
    output: "Faster execution",
    description:
      "Faster models implement approved plans quickly without the overhead of reanalyzing decisions",
  },
  {
    output: "Cleaner handoff",
    description:
      "Explicit model transitions with approved plans prevent confusion and misaligned expectations",
  },
  {
    output: "Cost optimization",
    description:
      "Using expensive models only when necessary and cheaper models for execution balances quality with efficiency",
  },
] as const;

const bestPractices = [
  "Use Opus for decisions that are expensive to change later—architecture, database schema, API contracts",
  "Use Sonnet for well-defined implementation tasks where the approach is clear",
  "Explicitly approve plans before switching models—don't assume the execution model should second-guess",
  "Document which model made which decisions so you know when to revisit with a stronger model",
  "Use Haiku for simple, repetitive tasks like formatting, basic refactoring, or test data generation",
] as const;

const commonPitfalls = [
  {
    pitfall: "Using fast models for complex decisions",
    solution:
      "If a task requires weighing tradeoffs or making architectural choices, use Opus. Don't sacrifice decision quality for speed.",
  },
  {
    pitfall: "Not explicitly approving plans",
    solution:
      "Before switching to execution mode, clearly state: 'Plan approved. Now implement this exactly as designed.' This prevents re-planning during execution.",
  },
  {
    pitfall: "Staying on Opus for simple implementation",
    solution:
      "Once the approach is clear and approved, switch to Sonnet. Opus is overkill for straightforward execution tasks.",
  },
] as const;

const tips = [
  {
    tip: "Mark the handoff point explicitly",
    example:
      '"Planning phase complete (Opus). HANDOFF: Switching to Sonnet 3.5 for implementation. Approved plan attached. Execute phases 1-3 following this plan exactly."',
  },
  {
    tip: "Use planning-execution-review cycle",
    example:
      '"Opus plans → Sonnet implements → Opus reviews. This catches issues early while keeping implementation fast."',
  },
  {
    tip: "Document model choices in commits",
    example:
      '"In commit messages, note: \'Architecture designed by Opus\' or \'Implementation by Sonnet 3.5\'. This helps understand quality expectations when reviewing history."',
  },
] as const;

const related = [
  { title: "Think First", path: "/workflows/claude-code/think-first" },
  { title: "Context Management", path: "/workflows/claude-code/context-management" },
  { title: "Get Unstuck", path: "/workflows/claude-code/get-unstuck" },
] as const;

export default function ModelSelectionWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflows", href: "/workflows" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Model Selection" },
      ]}
      eyebrow="Workflow"
      title="Model Selection"
      description="Choose the right model for planning versus execution."
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

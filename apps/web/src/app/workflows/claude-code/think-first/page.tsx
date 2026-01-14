import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Think First | Early Frontier",
  description: "Plan before prompting to improve accuracy and reduce rework.",
};

const overview = {
  description:
    "Jumping straight into implementation causes rework and missed requirements. Think First ensures Claude understands the problem, evaluates alternatives, and gets approval before writing code. This reduces iteration and improves outcome quality.",
  when: "Use this workflow for complex features, architectural decisions, refactoring initiatives, performance optimizations, or any task where the approach matters as much as execution.",
} as const;

const steps = [
  {
    step: "Define the goal and success criteria",
    description:
      "Start by clearly articulating what you're trying to achieve and how you'll know when it's done. Include constraints, requirements, and any non-negotiables.",
    example:
      '"I want to add user authentication to our API. Success means: users can register and log in, sessions persist across requests, passwords are securely hashed, and we support OAuth with Google. Constraints: must use existing PostgreSQL database, response time under 200ms."',
  },
  {
    step: "Ask for a plan before any edits",
    description:
      "Request an approach with tradeoffs, risks, and validation steps before any code changes. This is where you catch problems early.",
    example:
      '"Before implementing, create a plan covering: library choice, schema changes, API endpoints, security considerations, and testing strategy. Include risks and alternatives."',
  },
  {
    step: "Validate the plan and then execute",
    description:
      "Review Claude's proposal, ask clarifying questions, suggest modifications, and only proceed once you're confident in the approach.",
    example:
      '"The plan looks good except for using JWT tokens—we prefer server-side sessions for security. Update the plan to use session cookies instead, then implement phase 1 (user registration)."',
  },
  {
    step: "Review progress and adjust",
    description:
      "After each implementation phase, verify it matches the plan and update the plan if you discover new requirements or better approaches.",
    example:
      '"Phase 1 works well. Before starting phase 2 (OAuth integration), let\'s revise the plan to add rate limiting on auth endpoints—I just realized we\'re vulnerable to brute force attacks."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Feature planning",
    prompt:
      "We need a comment system for our blog. Before coding, analyze: what data needs to be stored, how to handle nested replies, moderation needs, notification requirements, and whether to build custom or integrate an existing service. Recommend an approach with reasoning.",
  },
  {
    scenario: "Performance optimization",
    prompt:
      "Our homepage loads slowly (3+ seconds). Before making changes, profile the application and create an optimization plan prioritized by impact. For each optimization, estimate effort and expected improvement. Get my approval before implementing.",
  },
  {
    scenario: "Architecture decision",
    prompt:
      "We're outgrowing our monolithic Node.js app. Propose a migration strategy to microservices. Cover: which services to extract first, data separation challenges, deployment complexity, and a phased rollout plan. I want to understand risks before committing.",
  },
  {
    scenario: "Library selection",
    prompt:
      "We need a date picker component. Research 3-4 popular options (react-datepicker, react-day-picker, etc.) and compare: bundle size, customization, accessibility, maintenance status, and licensing. Recommend one with justification.",
  },
] as const;

const outputs = [
  {
    output: "Approved plan",
    description:
      "Detailed approach document covering implementation strategy, tradeoffs analyzed, alternatives considered, and risks identified",
  },
  {
    output: "Clear scope",
    description:
      "Precise boundaries of what's included and excluded, preventing scope creep and ensuring alignment on deliverables",
  },
  {
    output: "Fewer reworks",
    description:
      "Reduced iteration cycles because planning caught issues before code was written, saving development time",
  },
  {
    output: "Better solutions",
    description:
      "Higher quality outcomes from considering multiple approaches and choosing the best fit for your constraints",
  },
] as const;

const bestPractices = [
  "Always get a plan for tasks taking more than 30 minutes—the planning overhead pays for itself",
  "Explicitly state constraints and requirements upfront—Claude can't read your mind about what matters",
  "Ask Claude to explain tradeoffs, not just propose a solution—understanding 'why' prevents future problems",
  "Break large plans into phases with validation checkpoints—don't commit to a 10-step plan without reviewing step 1",
  "Document approved plans in your repository—they're valuable context for future work and team members",
] as const;

const commonPitfalls = [
  {
    pitfall: "Skipping planning for 'quick' tasks",
    solution:
      "Quick tasks often reveal hidden complexity. Even 5 minutes of planning prevents hours of rework on seemingly simple changes.",
  },
  {
    pitfall: "Not reviewing plans critically",
    solution:
      "Challenge assumptions. Ask: 'What could go wrong? What are we not considering? Are there simpler approaches?'",
  },
  {
    pitfall: "Proceeding despite unclear requirements",
    solution:
      "If the plan reveals ambiguity in requirements, stop and clarify before continuing. Ambiguity compounds during implementation.",
  },
] as const;

const tips = [
  {
    tip: "Use planning as a learning tool",
    example:
      '"Explain the authentication plan like I\'m junior developer. I want to understand the security concepts behind each decision, not just the implementation."',
  },
  {
    tip: "Request multiple approaches",
    example:
      '"Propose 3 different approaches to solving this: a quick MVP solution, a robust production solution, and a future-proof scalable solution. Compare them."',
  },
  {
    tip: "Plan for failure modes",
    example:
      '"For this payment integration plan, add a section covering: what happens if the payment provider is down, how we handle partial failures, and our retry strategy."',
  },
] as const;

const related = [
  { title: "Prompt Specificity", path: "/workflows/claude-code/prompt-specificity" },
  { title: "Codebase Understanding", path: "/workflows/claude-code/codebase-understanding" },
  { title: "Refactoring", path: "/workflows/claude-code/refactoring" },
] as const;

export default function ThinkFirstWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflows", href: "/workflows" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Think First" },
      ]}
      eyebrow="Workflow"
      title="Think First"
      description="Plan before prompting to improve accuracy and reduce rework."
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
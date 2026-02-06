import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Model Selection | Early Frontier",
  description: "Choose the right model for planning versus execution.",
};

const overview = {
  description:
    "Different models have different strengths. Use a high-reasoning model to plan and evaluate tradeoffs, then switch to a faster model for execution once the approach is approved. This keeps decision quality high without slowing down implementation.",
  when: "Use this workflow for multi-phase projects, architectural decisions, complex refactoring, or anytime you need to balance deep thinking with rapid iteration.",
} as const;

const steps = [
  {
    step: "Use a high-reasoning model for planning",
    description:
      "Start with the strongest model available for tasks requiring deep analysis, architecture decisions, or complex tradeoffs.",
    example:
      '"Planning phase: Design our service boundaries, data ownership, communication patterns, failure modes, and scalability requirements. Propose 2–3 approaches with tradeoffs."',
  },
  {
    step: "Switch to a fast model for execution",
    description:
      "Once the plan is approved, switch to a faster model that can implement well-defined tasks quickly.",
    example:
      '"Execution phase: Implement phase 1 of the approved plan. Follow the agreed patterns and do not re-evaluate the approach."',
  },
  {
    step: "Explicitly approve the plan",
    description:
      "Make the handoff explicit so execution focuses on delivery instead of re-planning.",
    example:
      '"Plan approved. Use the agreed database schema and API structure. Begin implementation without changing these decisions."',
  },
  {
    step: "Return to planning for course correction",
    description:
      "If execution reveals issues, switch back to the planning model for a revised approach.",
    example:
      '"We hit a deployment constraint. Switch back to planning and propose alternatives that fit our infrastructure."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Complex architectural decision",
    prompt:
      "Planning phase: We’re hitting database performance limits. Analyze our schema and query patterns (attached). Evaluate options: caching, read replicas, denormalization, or database migration. Recommend a path with tradeoffs.",
  },
  {
    scenario: "Fast iteration on a defined task",
    prompt:
      "Execution phase: Implement the caching plan exactly as approved. Use the cache key scheme and TTLs from the plan. No new design changes.",
  },
  {
    scenario: "Strategic planning then execution",
    prompt:
      "Phase 1 (planning): Plan a migration from REST to GraphQL. Phase 2 (execution): Implement the schema and resolvers after approval.",
  },
  {
    scenario: "Debugging complex issues",
    prompt:
      "Planning phase: Users report intermittent auth failures. Analyze logs and propose a debugging strategy with hypotheses and tests.",
  },
] as const;

const outputs = [
  {
    output: "Better planning",
    description:
      "High-reasoning models surface risks, edge cases, and tradeoffs earlier.",
  },
  {
    output: "Faster execution",
    description:
      "Fast models implement approved plans quickly without re-analysis overhead.",
  },
  {
    output: "Cleaner handoff",
    description:
      "Explicit transitions reduce confusion and keep scope stable.",
  },
  {
    output: "Cost control",
    description:
      "Use expensive models only where they add the most value.",
  },
] as const;

const bestPractices = [
  "Use high-reasoning models for decisions that are expensive to change later",
  "Use fast models for well-defined implementation tasks",
  "Approve plans explicitly before switching to execution",
  "Document which model made key decisions",
  "Use a plan → execute → review loop for critical work",
] as const;

const commonPitfalls = [
  {
    pitfall: "Using fast models for complex decisions",
    solution:
      "If tradeoffs or architecture decisions are involved, start with a high-reasoning model.",
  },
  {
    pitfall: "Skipping explicit approvals",
    solution:
      "State the plan is approved before execution to avoid re-planning midstream.",
  },
  {
    pitfall: "Staying on high-reasoning models for simple tasks",
    solution:
      "Once the approach is clear, switch to a faster model to reduce latency and cost.",
  },
] as const;

const tips = [
  {
    tip: "Mark the handoff point explicitly",
    example:
      '"Planning complete. HANDOFF: switch to a fast model for implementation. Approved plan attached."',
  },
  {
    tip: "Use a planning-execution-review cycle",
    example:
      '"Plan → Execute → Review" improves quality without slowing delivery.',
  },
  {
    tip: "Record model choices in notes",
    example:
      '"Architecture planned with high-reasoning model; implementation executed with fast model."',
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
        
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Model Selection" },
      ]}
      eyebrow="Workflow"
      title="Model Selection"
      description="Choose the right model for planning versus execution."
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">{overview.description}</p>
        <div className=" bg-background/50 p-4">
          <div className="text-xs tracking-widest text-[#c9b8a0]/70 mb-2">
            When to use
          </div>
          <p className="text-sm text-muted-foreground">{overview.when}</p>
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Step-by-step process</h2>
        <div className="grid gap-6">
          {steps.map((item, index) => (
            <div key={item.step} className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] rounded-md text-xs font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif italic text-lg">{item.step}</h3>
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

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Example prompts</h2>
        <div className="grid gap-4">
          {examplePrompts.map((item) => (
            <div
              key={item.scenario}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <div className="mb-2 text-xs tracking-widest text-[#c9b8a0]/70">
                {item.scenario}
              </div>
              <p className="text-sm italic text-muted-foreground">"{item.prompt}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Expected outputs</h2>
        <div className="grid gap-4">
          {outputs.map((item) => (
            <div
              key={item.output}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.output}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Best practices</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {bestPractices.map((practice) => (
            <div
              key={practice}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {practice}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Common pitfalls</h2>
        <div className="grid gap-4">
          {commonPitfalls.map((item) => (
            <div
              key={item.pitfall}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg text-orange-600/90">{item.pitfall}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">Solution: </span>
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Pro tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tips.map((item) => (
            <div
              key={item.tip}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.tip}</h3>
              <p className="mt-2 text-sm italic text-muted-foreground">"{item.example}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Related workflows</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {related.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
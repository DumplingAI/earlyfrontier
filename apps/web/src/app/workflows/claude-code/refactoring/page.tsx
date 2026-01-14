import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refactoring | Early Frontier",
  description: "Modernize legacy code without breaking existing behavior.",
};

const overview = {
  description:
    "Refactoring legacy code is risky without a staged plan. Claude Code helps you modernize patterns, reduce duplication, and improve structure while preserving behavior and compatibility. Use it to analyze dependencies and execute changes incrementally.",
  when: "Use this workflow when modernizing legacy code, removing duplication, adopting new language features, or restructuring for maintainability.",
} as const;

const steps = [
  {
    step: "Describe the refactor target and constraints",
    description:
      "Clearly define what needs to change and what must stay the same. Include information about existing tests, deployment constraints, and any breaking change concerns.",
    example:
      '"Refactor our authentication module to use async/await instead of callbacks. We need to maintain the same API surface for backward compatibility, and all existing tests must pass."',
  },
  {
    step: "Ask for a plan and staged rollout",
    description:
      "Request a detailed refactoring plan that breaks the work into safe, reviewable stages. This minimizes risk and makes it easier to catch issues early.",
    example:
      '"Create a refactoring plan with 3-4 stages. Start with the smallest, most isolated modules first. For each stage, identify which files change and what tests validate the changes."',
  },
  {
    step: "Apply the refactor in small, reviewable chunks",
    description:
      "Execute one stage at a time, reviewing each change before proceeding. Commit after each successful stage to create clear rollback points.",
    example:
      '"Execute stage 1 of the refactoring plan. Show me the diff before applying, and run the affected tests after making changes."',
  },
  {
    step: "Run tests and check performance",
    description:
      "Validate that functionality remains unchanged and performance hasn’t degraded. Identify edge cases not covered by tests.",
    example:
      '"Run the full test suite and list any performance regressions. Identify edge cases missing from tests."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Modernizing JavaScript patterns",
    prompt:
      "Convert all class components in src/components to functional components with hooks. Preserve all existing behavior and prop types. Create a checklist of components to migrate.",
  },
  {
    scenario: "Eliminating code duplication",
    prompt:
      "I see similar authentication logic in both api/auth.ts and middleware/auth.ts. Extract the common code into a shared utility and update both files to use it.",
  },
  {
    scenario: "Adopting TypeScript strict mode",
    prompt:
      "Enable TypeScript strict mode in this project. Create a migration plan that fixes each strict mode violation one directory at a time, starting with utility functions.",
  },
  {
    scenario: "Restructuring for scalability",
    prompt:
      "Refactor this monolithic service.ts file into separate modules organized by domain. Maintain all existing exports so consumers don't break.",
  },
] as const;

const outputs = [
  {
    output: "Refactor plan",
    description:
      "Step-by-step roadmap showing which files change in each stage, dependencies between stages, and validation checkpoints",
  },
  {
    output: "Code changes",
    description:
      "Transformed code with improved structure, modern patterns, and better maintainability while preserving functionality",
  },
  {
    output: "Validation checklist",
    description:
      "List of tests to run, edge cases to verify, and performance benchmarks to check before considering the refactor complete",
  },
  {
    output: "Migration notes",
    description:
      "Documentation of what changed, why, and any follow-up work needed for consumers of the refactored code",
  },
] as const;

const bestPractices = [
  "Always request a plan before making changes—rushing into refactoring leads to broken code",
  "Refactor in small stages with tests between each stage, not one big-bang change",
  "Maintain backward compatibility unless you've explicitly confirmed breaking changes are acceptable",
  "Keep refactoring separate from feature work—don't mix behavior changes with structural improvements",
  "Document why the refactor was needed and what patterns to follow going forward",
] as const;

const commonPitfalls = [
  {
    pitfall: "Refactoring too much at once",
    solution:
      "Break the work into 3-5 reviewable stages. If a stage touches more than 10 files, split it further.",
  },
  {
    pitfall: "Not running tests between stages",
    solution:
      "Run the test suite after every stage. If tests fail, fix them before proceeding to the next stage.",
  },
  {
    pitfall: "Assuming tests cover all edge cases",
    solution:
      "Ask Claude to identify edge cases not covered by tests and validate them manually or write new tests first.",
  },
] as const;

const tips = [
  {
    tip: "Use git blame to understand history",
    example:
      '"Before refactoring user.service.ts, show me the git blame and recent commits to understand why the current pattern exists."',
  },
  {
    tip: "Start with high-test-coverage modules",
    example:
      '"Identify which modules have the best test coverage. We\'ll refactor those first since they\'re safest to change."',
  },
  {
    tip: "Create a deprecation path for breaking changes",
    example:
      '"If we need to change the API, keep the old version as deprecated with a warning, and add the new version alongside it."',
  },
] as const;

const related = [
  { title: "Test Generation", path: "/workflows/claude-code/test-generation" },
  { title: "Codebase Understanding", path: "/workflows/claude-code/codebase-understanding" },
  { title: "Bug Fixing", path: "/workflows/claude-code/bug-fixing" },
] as const;

export default function RefactoringWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflows", href: "/workflows" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Refactoring" },
      ]}
      eyebrow="Workflow"
      title="Refactoring"
      description="Modernize legacy code without breaking existing behavior."
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
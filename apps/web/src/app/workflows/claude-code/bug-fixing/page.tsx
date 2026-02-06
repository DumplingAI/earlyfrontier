import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bug Fixing | Early Frontier",
  description: "Move from error trace to verified fix efficiently with root cause analysis and comprehensive testing.",
};

const overview = {
  description:
    "Move from error diagnosis to verified fix with a structured workflow. Provide the error trace, reproduction steps, and environment details so Claude can isolate the root cause, propose a fix, and validate with tests.",
  when: "Use this for production issues, failing tests, regressions, or user-reported bugs—especially in unfamiliar codepaths.",
} as const;

const steps = [
  {
    step: "Provide complete context",
    description:
      "Share the full error trace, reproduction steps, expected vs actual behavior, and environment details (version, config, data shape).",
    example:
      '"TypeError on line 42 of auth.ts in staging. Steps: 1) Create user without email, 2) Attempt login. Expected: graceful error. Actual: server crash. Node 20, Postgres 15."',
  },
  {
    step: "Request root cause analysis",
    description:
      "Ask Claude to identify the underlying issue, not just symptoms. Understanding why the bug exists prevents similar issues.",
    example:
      '"Analyze the root cause. Is this a validation issue, race condition, null handling problem, or something else?"',
  },
  {
    step: "Review and apply fix",
    description:
      "Claude proposes a fix with explanation. Review the approach, ensure it addresses the root cause, then apply the changes.",
    example: '"Implement the fix with proper null checking and add validation at the API boundary."',
  },
  {
    step: "Verify with tests",
    description:
      "Run existing tests and add new ones covering the bug scenario. Confirm the fix works and prevents regression.",
    example: '"Add a test for the undefined email case and run the auth test suite. Report any regressions."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Production crash with stack trace",
    prompt:
      "We're seeing crashes in production with this stack trace: [paste trace]. The error happens intermittently. What's the root cause and how can we fix it?",
  },
  {
    scenario: "Test failure investigation",
    prompt:
      "The integration test 'should process checkout' is failing with timeout error. Can you investigate the test, trace through the code, and identify why it's timing out?",
  },
  {
    scenario: "Performance regression",
    prompt:
      "API response times increased from 50ms to 2000ms after the last deploy. Profile the recent changes and identify the performance bottleneck.",
  },
  {
    scenario: "Edge case bug",
    prompt:
      "Users with names containing special characters can't sign up. The validation regex is rejecting valid names. Fix the regex and add test cases for international characters.",
  },
] as const;

const outputs = [
  {
    output: "Root cause analysis",
    description:
      "Detailed explanation of why the bug occurs, including code paths, conditions, and contributing factors",
  },
  {
    output: "Fix proposal with reasoning",
    description:
      "Proposed code changes with rationale explaining why this approach solves the root cause",
  },
  {
    output: "Test cases",
    description: "New tests covering the bug scenario to prevent regression and validate the fix",
  },
  {
    output: "Prevention recommendations",
    description: "Suggestions for patterns or checks to avoid similar bugs in the future",
  },
] as const;

const bestPractices = [
  "Always provide full error traces and logs—truncated errors lead to incomplete diagnosis",
  "Include reproduction steps so Claude can trace the exact code path",
  "Ask for root cause analysis before jumping to fixes to avoid bandaid solutions",
  "Add tests that would have caught this bug before deploying the fix",
  "Review the fix for side effects—ensure it doesn't break other functionality",
] as const;

const commonPitfalls = [
  {
    pitfall: "Fixing symptoms instead of root causes",
    solution:
      "Always ask 'why did this happen?' before implementing a fix. Trace back to the actual source",
  },
  {
    pitfall: "Skipping test verification",
    solution: "Never deploy a bug fix without running tests and confirming the issue is resolved",
  },
  {
    pitfall: "Not checking for similar bugs elsewhere",
    solution: 'Ask: "Are there other places in the codebase with the same pattern that need fixing?"',
  },
] as const;

const tips = [
  {
    tip: "Use git blame to add context",
    example: '"Show me the git history for this function. When was this logic added and why?"',
  },
  {
    tip: "Compare with working scenarios",
    example: '"This fails for API v2 but works for v1. What\'s different between the two implementations?"',
  },
  {
    tip: "Request multiple fix approaches",
    example: '"Give me 2-3 different ways to fix this with tradeoffs for each approach"',
  },
] as const;

const related = [
  { title: "Codebase Understanding", path: "/workflows/claude-code/codebase-understanding" },
  { title: "Test Generation", path: "/workflows/claude-code/test-generation" },
  { title: "Think First", path: "/workflows/claude-code/think-first" },
] as const;

export default function BugFixingWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Bug Fixing" },
      ]}
      eyebrow="Workflow"
      title="Bug Fixing"
      description="Move from error trace to verified fix efficiently with root cause analysis and comprehensive testing."
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
        <div className="grid gap-4 md:grid-cols-3">
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
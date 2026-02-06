import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prompt Specificity | Early Frontier",
  description: "Write prompts with clear constraints and success criteria.",
};

const overview = {
  description:
    "Vague prompts lead to generic solutions. Specific prompts with clear constraints, requirements, and success criteria produce focused, accurate results. Investing time upfront reduces back-and-forth and avoids rework.",
  when: "Use this workflow when requesting features, debugging complex issues, asking for architectural advice, or anytime precision matters more than speed.",
} as const;

const steps = [
  {
    step: "List requirements and constraints",
    description:
      "State what must be included, technical constraints, performance requirements, and dependencies. Use concrete examples where possible.",
    example:
      '"Add search to our product catalog. Requirements: fuzzy matching, category + price filters, <100ms response, use existing PostgreSQL. Don\'t add new infrastructure."',
  },
  {
    step: "Define what to avoid",
    description:
      "Negative constraints are just as important as positive ones. Tell Claude what patterns, libraries, or approaches you don't want and explain why.",
    example:
      '"Don\'t use class components—we\'re standardizing on functional components with hooks. Avoid lodash—we\'re trying to reduce bundle size. No inline styles—use our existing CSS modules system."',
  },
  {
    step: "Confirm assumptions before implementation",
    description:
      "Ask Claude to state its understanding of requirements and proposed approach before writing code. This catches misunderstandings early.",
    example:
      '"Before implementing, confirm: 1) You understand we need server-side search, not client-side filtering, 2) Results should paginate at 20 items per page, 3) Search should update the URL for shareability. Do these assumptions match the requirements?"',
  },
  {
    step: "Provide examples and edge cases",
    description:
      "Show concrete examples of desired behavior, including edge cases and error scenarios. Examples clarify intent better than descriptions.",
    example:
      '"Example searches: \'blue widget\' should match \'Blue Widget Pro\', \'bluewidget\', and \'Widget (Blue)\'. Searching for \'$50-100\' should filter by price. If no results, show \'No products found\' with a link to browse all categories."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Feature with specific constraints",
    prompt:
      "Add email notifications for order status changes. Requirements: use SendGrid (API key in env vars), send only to verified email addresses, include order number and status in subject, support HTML and plain text, retry failed sends 3 times with exponential backoff. Constraint: must complete within 5 seconds to not block the order update API.",
  },
  {
    scenario: "Code generation with style preferences",
    prompt:
      "Generate a TypeScript API client for our REST endpoints. Use: axios for requests, zod for validation, our existing error handling patterns from src/utils/errors.ts. Format: one file per resource, typed request/response, JSDoc comments. Don't: use any, generate tests (we'll write those), add extra dependencies.",
  },
  {
    scenario: "Debugging with context",
    prompt:
      "Users report \'cart total is wrong\' on checkout. The bug happens only when: applying discount codes, cart has 3+ items, user is in Canada. It doesn't happen for US users or carts with 1-2 items. Currency is CAD. Tax calculation is in src/utils/pricing.ts. Start by analyzing the discount logic in that file.",
  },
  {
    scenario: "Architecture with constraints",
    prompt:
      "Design a real-time notification system. Requirements: support 10k concurrent users, deliver notifications within 2 seconds, persist unread notifications, work with our existing Node.js/PostgreSQL stack. Constraints: budget limits prevent Redis or managed services, we can't modify the database schema extensively. Propose an approach that works within these limits.",
  },
] as const;

const outputs = [
  {
    output: "Clear requirements",
    description:
      "Documented understanding of what's needed, what's constrained, and what success looks like, reducing misalignment",
  },
  {
    output: "Reduced scope creep",
    description:
      "Explicit boundaries prevent Claude from adding features or complexity you didn't ask for",
  },
  {
    output: "Less overengineering",
    description:
      "Specific constraints guide Claude toward simple, appropriate solutions rather than overly complex architectures",
  },
  {
    output: "Faster iterations",
    description:
      "Precise prompts get closer to the right answer on the first attempt, reducing back-and-forth refinement",
  },
] as const;

const bestPractices = [
  "Be specific about versions, frameworks, and patterns—'use React' is vague, 'use React 18 with functional components and hooks' is clear",
  "Include examples of desired output—showing is often clearer than describing",
  "State both what you want and what you don't want—negative constraints prevent unwanted solutions",
  "Provide context about your codebase conventions—Claude can match existing patterns if you point them out",
  "Specify how to handle errors and edge cases—don't assume Claude will guess correctly",
] as const;

const commonPitfalls = [
  {
    pitfall: "Assuming Claude knows your conventions",
    solution:
      "Explicitly reference existing patterns: 'Follow the error handling pattern in src/utils/errors.ts' or 'Use the same component structure as UserProfile.tsx'.",
  },
  {
    pitfall: "Being too brief to save time",
    solution:
      "Spend 2 extra minutes on prompt detail to save 30 minutes of clarification and rework. Specificity upfront pays dividends.",
  },
  {
    pitfall: "Not specifying constraints until after the fact",
    solution:
      "State constraints in the initial prompt, not after reviewing output. 'That's too complex' or 'Don't use library X' should be said before implementation.",
  },
] as const;

const tips = [
  {
    tip: "Use your codebase as reference",
    example:
      '"Implement this feature following the same patterns as the existing user settings page. Match the validation approach, error handling, and component structure from src/pages/settings/*."',
  },
  {
    tip: "Specify the level of abstraction",
    example:
      '"Don\'t create abstract factories or complex inheritance. Keep it simple: one function per operation, pure functions where possible, minimal indirection."',
  },
  {
    tip: "Provide success criteria",
    example:
      '"Success means: function completes in under 100ms, handles null inputs gracefully, returns typed results, and has zero ESLint warnings. Don\'t ship until these criteria are met."',
  },
] as const;

const related = [
  { title: "Think First", path: "/workflows/claude-code/think-first" },
  { title: "Claude.md", path: "/workflows/claude-code/claude-md" },
  { title: "Get Unstuck", path: "/workflows/claude-code/get-unstuck" },
] as const;

export default function PromptSpecificityWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Prompt Specificity" },
      ]}
      eyebrow="Workflow"
      title="Prompt Specificity"
      description="Write prompts with clear constraints and success criteria."
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
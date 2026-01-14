import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude.md | Early Frontier",
  description: "Use Claude.md as a leverage point for consistent behavior.",
};

const overview = {
  description:
    "Claude Code can read project instructions from a Claude.md file in your repository. This becomes a leverage point for consistent behavior across sessions. Instead of repeating instructions, you codify conventions, architecture decisions, and guardrails once.",
  when: "Use this workflow when onboarding new team members, enforcing standards, documenting architectural decisions, or preventing repeat mistakes.",
} as const;

const steps = [
  {
    step: "Capture project-specific rules",
    description:
      "Document conventions that Claude should follow: coding style, library preferences, file organization patterns, and architectural constraints.",
    example:
      '"Create a Claude.md file with: 1) We use functional React components with hooks, never classes, 2) All API calls go through src/api/client.ts, never fetch directly, 3) Error handling must use our ErrorBoundary pattern, 4) Component files must export a single default component."',
  },
  {
    step: "Explain why each rule exists",
    description:
      "Rules with context are followed better than arbitrary mandates. Explain the reasoning behind each convention so Claude understands the intent.",
    example:
      '"Add rationale to each rule: We avoid classes because hooks provide better code reuse. Centralized API calls ensure consistent authentication and error handling. ErrorBoundary pattern prevents white screens for users."',
  },
  {
    step: "Update when repeat mistakes occur",
    description:
      "When Claude makes the same mistake twice, add a rule to Claude.md. Treat it as a living document that evolves with your project.",
    example:
      '"Claude keeps using lodash despite us wanting to minimize dependencies. Add to Claude.md: Don\'t import lodash. Use native array methods or our utils/array.ts helpers instead. This keeps bundle size small."',
  },
  {
    step: "Reference it in complex prompts",
    description:
      "For critical tasks, explicitly remind Claude to check Claude.md. This reinforces the importance of following project conventions.",
    example:
      '"Implement user authentication following the patterns in Claude.md. Pay special attention to the API client usage and error handling sections."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Creating initial Claude.md",
    prompt:
      "Analyze our codebase and create a Claude.md file documenting: tech stack, directory structure conventions, naming patterns, prohibited dependencies, common gotchas. Format it as clear rules with brief explanations.",
  },
  {
    scenario: "Enforcing consistent patterns",
    prompt:
      "We keep getting inconsistent component structure. Add a section to Claude.md showing our standard component template: imports order, prop types definition, hooks usage, helper functions, then JSX return. Include an example.",
  },
  {
    scenario: "Preventing security issues",
    prompt:
      "Add security guidelines to Claude.md: Never log user passwords or tokens, always sanitize user input before database queries, use parameterized SQL only, require authentication on admin routes. Explain why each matters.",
  },
  {
    scenario: "Team-specific conventions",
    prompt:
      "Document our PR conventions in Claude.md: Commits must follow conventional commits format, PRs need tests before approval, no direct pushes to main, use feature flags for incomplete features.",
  },
] as const;

const outputs = [
  {
    output: "Consistent behavior",
    description:
      "Claude follows your team's conventions automatically without needing reminders in every prompt",
  },
  {
    output: "Fewer corrections",
    description:
      "Reduced back-and-forth fixing style violations or pattern mismatches because rules are clear upfront",
  },
  {
    output: "Faster onboarding",
    description:
      "New team members and new Claude sessions start with full context about project conventions",
  },
  {
    output: "Documented decisions",
    description:
      "Claude.md serves as living documentation of architectural decisions and team agreements",
  },
] as const;

const bestPractices = [
  "Start simple with 5-10 critical rules—don't overwhelm with hundreds of guidelines initially",
  "Focus on rules that prevent mistakes or enforce important patterns, not personal style preferences",
  "Keep rules concise and scannable—Claude should be able to quickly find relevant guidance",
  "Update Claude.md proactively when you catch repeated mistakes or misunderstandings",
  "Review and refine periodically as your project evolves—delete outdated rules to prevent confusion",
] as const;

const commonPitfalls = [
  {
    pitfall: "Writing too many trivial rules",
    solution:
      "Focus on rules that matter: security, architecture, breaking change prevention. Skip formatting minutiae—use automated tools like Prettier for that.",
  },
  {
    pitfall: "Not explaining the 'why' behind rules",
    solution:
      "Add brief rationale to each rule. 'Don't use X' is less effective than 'Don't use X because it causes Y problem in our deployment.'",
  },
  {
    pitfall: "Letting Claude.md get stale",
    solution:
      "Set a quarterly review. Remove rules that are no longer relevant and add new patterns as your codebase evolves.",
  },
] as const;

const tips = [
  {
    tip: "Include anti-patterns with examples",
    example:
      '"In Claude.md, show both correct and incorrect patterns: ❌ BAD: fetch(\'/api/users\') ✅ GOOD: apiClient.get(\'/api/users\') — This makes expectations crystal clear."',
  },
  {
    tip: "Link to existing code as examples",
    example:
      '"Reference actual files: For authentication flow, see src/auth/login.ts as the canonical example. Follow that pattern for all auth-related code."',
  },
  {
    tip: "Version your Claude.md",
    example:
      '"Add a version and last updated date to Claude.md. When rules change significantly, note it in the git commit message so team members know to re-read it."',
  },
] as const;

const related = [
  { title: "Prompt Specificity", path: "/workflows/claude-code/prompt-specificity" },
  { title: "Think First", path: "/workflows/claude-code/think-first" },
  { title: "Context Management", path: "/workflows/claude-code/context-management" },
] as const;

export default function ClaudeMdWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflows", href: "/workflows" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Claude.md" },
      ]}
      eyebrow="Workflow"
      title="Claude.md"
      description="Use Claude.md as a leverage point for consistent behavior."
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
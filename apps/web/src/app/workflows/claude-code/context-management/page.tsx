import PageShell from "@/components/page-shell";

const overview = {
  description:
    "Long conversations accumulate context that can degrade Claude's performance. As threads grow, responses become slower, less accurate, and sometimes contradictory. Managing context deliberately—keeping conversations focused, resetting when needed, and storing progress externally—maintains response quality throughout your session. Think of it like keeping your workspace organized instead of letting clutter pile up.",
  when: "Use this workflow when conversations exceed 20-30 exchanges, switching between unrelated tasks, noticing degraded response quality, or working on multi-day projects that need persistent state.",
} as const;

const steps = [
  {
    step: "Keep one task per thread",
    description:
      "Start a new conversation for each distinct task. Don't mix refactoring, bug fixing, and feature work in a single thread—context switching confuses the model.",
    example:
      '"Instead of: \'Fix the login bug, then refactor authentication, then add OAuth\' — Start 3 separate threads: 1) Bug Fix: Login validation error, 2) Refactor: Auth module cleanup, 3) Feature: OAuth integration. Each stays focused."',
  },
  {
    step: "Store progress in scratch files",
    description:
      "When working on multi-step tasks, save intermediate results to files. This externalizes state so you can reset context without losing progress.",
    example:
      '"After completing phase 1, write the plan to PROGRESS.md: \'✅ Phase 1: Database schema updated ⏳ Phase 2: API endpoints (next) ⏳ Phase 3: Frontend integration\'. If I reset context, I can reload from this file."',
  },
  {
    step: "Reset the session when drift starts",
    description:
      "When you notice repetitive responses, contradictions, or declining quality, start fresh. Copy critical context to a new thread rather than continuing a degraded session.",
    example:
      '"This thread has 40 messages and responses are getting worse. Starting a new thread with: \'Continuing work on user authentication. Context: Database schema is ready (see schema.sql), working on API endpoints. Here\'s what\'s done and what\'s next...\'"',
  },
  {
    step: "Use explicit context boundaries",
    description:
      "Signal major transitions within a thread. When changing topics, explicitly tell Claude you're moving to something new.",
    example:
      '"That login bug is fixed and deployed. NEW TOPIC: Now I want to work on improving the search feature. This is separate from the authentication work we just finished."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Detecting context degradation",
    prompt:
      "I've noticed your recent responses are repeating previous suggestions and missing details we already discussed. Let's reset. Here's where we are: [summary of current state]. Let's continue from here with a fresh context.",
  },
  {
    scenario: "Structured multi-day work",
    prompt:
      "I'm working on a large refactoring over several days. Create a PROGRESS.md file tracking: completed modules, current module, remaining modules, known issues. Update this after each module so I can resume work tomorrow in a new thread.",
  },
  {
    scenario: "Context handoff between threads",
    prompt:
      "Our conversation hit 50 messages. Starting fresh. Previous context: We built a payment system with Stripe integration (see src/payments/*), added webhooks for payment events, tested happy path. Now: need to add refund functionality.",
  },
  {
    scenario: "Preventing context pollution",
    prompt:
      "Before we start this new feature, I want to clarify: previous discussions about the authentication system are not relevant here. We're working on a completely separate analytics module. Please don't reference auth patterns in your responses.",
  },
] as const;

const outputs = [
  {
    output: "Cleaner context",
    description:
      "Focused conversations without accumulated irrelevant history, making it easier for Claude to produce accurate responses",
  },
  {
    output: "Higher response quality",
    description:
      "Maintained accuracy and relevance throughout long projects by preventing context degradation",
  },
  {
    output: "Less confusion",
    description:
      "Reduced contradictions and repetitions that occur when Claude tries to reconcile too much conflicting context",
  },
  {
    output: "Persistent progress",
    description:
      "External state storage ensures work isn't lost when resetting context, enabling multi-day projects",
  },
] as const;

const bestPractices = [
  "Start new threads for new tasks—don't chain unrelated work in a single conversation",
  "Monitor thread length; consider resetting after 20-30 substantial exchanges",
  "Document progress in files, not just conversation history—files persist across context resets",
  "When resetting, provide a concise summary of critical context, not a full history dump",
  "Use descriptive thread titles to make finding previous conversations easier",
] as const;

const commonPitfalls = [
  {
    pitfall: "Continuing degraded conversations too long",
    solution:
      "When you notice quality decline, reset immediately. Don't try to 'fix' a degraded context—start fresh with a summary.",
  },
  {
    pitfall: "Not preserving important context when resetting",
    solution:
      "Before resetting, save critical details to files: current state, decisions made, what's working, what's next. Reference these in the new thread.",
  },
  {
    pitfall: "Mixing multiple tasks in one thread",
    solution:
      "One thread = one task. If you need to work on something unrelated, start a new conversation. You can always return to previous threads.",
  },
] as const;

const tips = [
  {
    tip: "Create explicit checkpoints",
    example:
      '"Every 10 exchanges or after completing a phase, ask: \'Summarize where we are, what\'s working, and next steps\' — Save this summary. It becomes your resume point."',
  },
  {
    tip: "Use thread naming conventions",
    example:
      '"Name threads descriptively: \'[Feature] OAuth Integration - Phase 2\' or \'[Bug] Login validation error\' — Makes context retrieval easier when reviewing past work."',
  },
  {
    tip: "Set context budgets upfront",
    example:
      '"Start complex tasks with: \'This is a multi-step project. After each phase, I\'ll create a summary in PROGRESS.md. Remind me to do this after completing each step.\'"',
  },
] as const;

const related = [
  { title: "Think First", path: "/workflows/claude-code/think-first" },
  { title: "Get Unstuck", path: "/workflows/claude-code/get-unstuck" },
  { title: "Claude.md", path: "/workflows/claude-code/claude-md" },
] as const;

export default function ContextManagementWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflows", href: "/workflows" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Context Management" },
      ]}
      eyebrow="Workflow"
      title="Context Management"
      description="Keep context focused to preserve output quality."
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

import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Unstuck | Early Frontier",
  description: "Reset, simplify, and reframe when Claude loops or stalls.",
};

const overview = {
  description:
    "Sometimes Claude gets stuck in loops or stalls. When that happens, continuing the same thread wastes time. This workflow helps you reset, simplify, and reframe so you can make progress quickly.",
  when: "Use this workflow when Claude repeats responses, misunderstands after multiple clarifications, or produces failing code repeatedly.",
} as const;

const steps = [
  {
    step: "Reset the thread when looping",
    description:
      "If Claude gives the same response 2-3 times or you're going in circles, stop. Start a fresh thread with a concise summary of what you need, what hasn't worked, and what to avoid.",
    example:
      '"New thread: I need to fix a rate limiting bug in our API. Previous attempts focused on Redis configuration, but the issue is actually in how we\'re counting requests. Don\'t suggest Redis changes—help me debug the request counter logic in middleware/rateLimit.ts."',
  },
  {
    step: "Simplify the task and solve in parts",
    description:
      "If Claude struggles with a complex request, break it into the smallest possible piece. Get that working, then build up gradually.",
    example:
      '"Forget the full authentication system for now. Let\'s just get one thing working: a function that takes a password string and returns a bcrypt hash. Once that works, we\'ll add the rest."',
  },
  {
    step: "Provide a concrete example",
    description:
      "Abstract requests are harder to understand. Show exactly what you want with specific inputs and expected outputs.",
    example:
      '"Instead of \'add validation\', here\'s concrete: This function receives {email: \'user@example.com\', age: 25}. It should return {valid: true} for this input, but {valid: false, errors: [\'age must be 18+\']} if age is 16. Make it work for these cases first."',
  },
  {
    step: "Change your approach",
    description:
      "If repeated attempts at the same approach aren't working, try something different: a different algorithm, library, or architecture. Sometimes the approach itself is the problem.",
    example:
      '"We\'ve tried 5 different ways to make this regex work and it keeps failing. Let\'s abandon regex for now and use a simple parser instead. Show me how to parse this format without regular expressions."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Claude is looping on the same solution",
    prompt:
      "You've suggested updating the cache configuration 3 times, but I've explained the cache is working correctly. The issue is elsewhere. Reset your thinking. The bug is: users see stale data after updates. Cache is ruled out. What else could cause this? Fresh analysis, please.",
  },
  {
    scenario: "Complex task is overwhelming",
    prompt:
      "Building a full OAuth system is too big. Let's start microscopic: Write one function that validates a JWT token string. Input: token string and secret key. Output: decoded payload or error. Nothing else. No database, no users, no sessions.",
  },
  {
    scenario: "Solution keeps failing in subtle ways",
    prompt:
      "This sorting algorithm has failed 4 times with different edge case bugs. Let's change strategy: Use the built-in Array.sort() with a custom comparator. Show me that first, get it working, then we can optimize if needed.",
  },
  {
    scenario: "Unclear requirements causing confusion",
    prompt:
      "Let me be extremely concrete. Input: array [3, 1, 4, 1, 5]. Expected output: array [1, 1, 3, 4, 5]. That's it. Make this exact test pass. Don't worry about other cases yet.",
  },
] as const;

const outputs = [
  {
    output: "Clearer direction",
    description:
      "Resetting context and simplifying requests gives Claude a fresh start with focused, actionable goals",
  },
  {
    output: "Faster progress",
    description:
      "Breaking stuck patterns immediately rather than continuing ineffective approaches saves significant time",
  },
  {
    output: "Less rework",
    description:
      "Concrete examples and simplified scopes reduce misunderstandings that require later corrections",
  },
  {
    output: "Better solutions",
    description:
      "Changing approaches when stuck often reveals simpler, more effective solutions than forcing the original idea",
  },
] as const;

const bestPractices = [
  "Recognize loops quickly—if you see the same response twice, don't go for a third attempt without changing something",
  "Start fresh rather than trying to fix a degraded conversation—context resets solve most stuck situations",
  "Make your examples concrete and testable—show exact inputs and expected outputs",
  "Reduce scope aggressively when stuck—get the smallest piece working before adding complexity",
  "Don't be afraid to abandon an approach that's not working—sunk cost fallacy applies to prompts too",
] as const;

const commonPitfalls = [
  {
    pitfall: "Repeating the same request hoping for different results",
    solution:
      "If twice didn't work, the problem is your request or the context, not Claude's randomness. Change something: reset context, simplify scope, or provide examples.",
  },
  {
    pitfall: "Not recognizing when the approach itself is wrong",
    solution:
      "If multiple attempts at the same solution fail, the solution might be wrong. Ask Claude: 'Is there a fundamentally different way to solve this?'",
  },
  {
    pitfall: "Providing vague instructions when stuck",
    solution:
      "Vagueness makes stuck situations worse. Get more concrete: show exact code, specific inputs/outputs, and clear success criteria.",
  },
] as const;

const tips = [
  {
    tip: "Use the 'rubber duck' technique",
    example:
      '"Let me explain the full problem from scratch as if you know nothing: [detailed explanation]. Now suggest a solution without any assumptions from previous messages."',
  },
  {
    tip: "Ask for alternative approaches",
    example:
      '"We\'re stuck on this approach. Propose 3 completely different ways to solve this problem, even if they seem unconventional. I\'m open to any solution that works."',
  },
  {
    tip: "Provide a working example to modify",
    example:
      '"Here\'s code that works for case A. Modify this to also handle case B. Start with working code, not from scratch."',
  },
] as const;

const related = [
  { title: "Context Management", path: "/workflows/claude-code/context-management" },
  { title: "Prompt Specificity", path: "/workflows/claude-code/prompt-specificity" },
  { title: "Think First", path: "/workflows/claude-code/think-first" },
] as const;

export default function GetUnstuckWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflows", href: "/workflows" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Get Unstuck" },
      ]}
      eyebrow="Workflow"
      title="Get Unstuck"
      description="Reset, simplify, and reframe when Claude loops or stalls."
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
import PageShell from "@/components/page-shell";

const overview = {
  description:
    "When joining a new project or diving into unfamiliar code, use this workflow to quickly map the architecture, understand dependencies, and identify key modules. Instead of spending days reading code manually, Claude Code can scan the entire repository and provide a structured overview in minutes.",
  when: "Use this workflow when starting on a new codebase, planning a large refactor, onboarding team members, or investigating a subsystem you haven't worked with before.",
} as const;

const steps = [
  {
    step: "Start with context",
    description:
      "Describe what you're trying to learn and why. This helps Claude focus on relevant parts of the codebase.",
    example:
      '"I\'m new to this Next.js project. Help me understand the authentication flow and how user data is managed."',
  },
  {
    step: "Request architecture mapping",
    description:
      "Ask Claude to identify core modules, their relationships, and the overall system structure.",
    example:
      '"Map out the main directories, identify the authentication system, and show me how components communicate with the API."',
  },
  {
    step: "Deep dive on critical paths",
    description:
      "Once you have the overview, drill into specific flows like data processing, API routes, or state management.",
    example:
      '"Walk me through what happens when a user logs in, from the form submission to session creation."',
  },
  {
    step: "Document your findings",
    description:
      "Have Claude generate a summary document with the architecture map, key files, and next steps for your reference.",
    example: '"Create a markdown file summarizing the auth system architecture with links to key files."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Understanding a new framework setup",
    prompt:
      "This is a Django REST API project. Explain the project structure, where models and serializers live, and how authentication is configured.",
  },
  {
    scenario: "Investigating a specific feature",
    prompt:
      "Show me all the code related to the checkout process. What files are involved? How does payment processing work?",
  },
  {
    scenario: "Mapping dependencies",
    prompt:
      "What are the main external dependencies in this project? Which ones are critical vs nice-to-have? Are there any security vulnerabilities in the current versions?",
  },
  {
    scenario: "Finding entry points",
    prompt:
      "What are the main entry points to this application? Show me where requests come in and how they're routed.",
  },
] as const;

const outputs = [
  {
    output: "Architecture diagram",
    description:
      "Text-based or markdown representation of the system's major components and their relationships",
  },
  {
    output: "Key modules list",
    description:
      "Annotated list of important directories and files with their purposes and responsibilities",
  },
  {
    output: "Dependencies overview",
    description:
      "Summary of external packages, their versions, purposes, and any potential issues",
  },
  {
    output: "Data flow documentation",
    description:
      "Step-by-step explanation of how data moves through the system for critical user journeys",
  },
  {
    output: "Next steps checklist",
    description: "Recommended areas to explore further or potential improvements to make",
  },
] as const;

const bestPractices = [
  "Start broad, then narrow focus—get the 10,000-foot view before diving into specific files",
  "Ask for file paths with line numbers so you can easily navigate to referenced code",
  "Save the generated documentation to your repository for team reference",
  "Combine codebase exploration with reading existing docs and READMEs",
  "Use this workflow iteratively—you don't need to understand everything at once",
] as const;

const commonPitfalls = [
  {
    pitfall: "Asking to explain everything at once",
    solution: "Break exploration into logical chunks: auth, then data layer, then UI, etc.",
  },
  {
    pitfall: "Not providing enough context about your goal",
    solution:
      'Be specific: "I need to add a new payment method" vs "explain the codebase"',
  },
  {
    pitfall: "Ignoring documentation that already exists",
    solution:
      "Ask Claude to read existing docs first, then fill gaps or clarify confusing parts",
  },
] as const;

const tips = [
  {
    tip: "Use glob patterns to focus exploration",
    example: '"Analyze all files matching src/auth/**/*.ts and explain the authentication strategy"',
  },
  {
    tip: "Ask for comparisons to familiar patterns",
    example: '"Is this similar to a standard Rails MVC structure or something different?"',
  },
  {
    tip: "Request visual representations",
    example: '"Create a mermaid diagram showing how these modules interact"',
  },
  {
    tip: "Combine with testing",
    example: '"Based on the architecture, what unit tests should I read to understand the payment flow?"',
  },
] as const;

const related = [
  { title: "Bug Fixing", path: "/workflows/claude-code/bug-fixing" },
  { title: "Refactoring", path: "/workflows/claude-code/refactoring" },
  { title: "Think First", path: "/workflows/claude-code/think-first" },
] as const;

export default function CodebaseUnderstandingWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflows", href: "/workflows" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Codebase Understanding" },
      ]}
      eyebrow="Workflow"
      title="Codebase Understanding"
      description="Rapidly map architecture, identify key modules, and understand unfamiliar code before making changes."
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

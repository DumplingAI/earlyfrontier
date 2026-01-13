import PageShell from "@/components/page-shell";

const corePractices = [
  {
    title: "Plan Before Executing",
    description: "Always ask Claude to create a plan before making changes to understand the full scope and catch issues early.",
    why: "Prevents wasted effort on wrong approaches and ensures alignment before code changes",
    how: "Use phrases like 'create a plan for...' or 'what's the best approach to...' before requesting implementation",
  },
  {
    title: "Single-Task Prompts",
    description: "Keep each prompt focused on one clear objective rather than multiple unrelated tasks.",
    why: "Reduces complexity, improves accuracy, and makes it easier to review changes",
    how: "Break large requests into sequential steps. Complete and verify each before moving to the next",
  },
  {
    title: "Review Before Committing",
    description: "Always review diffs and changes before committing to catch errors and understand what changed.",
    why: "Prevents bugs, security issues, and unintended changes from entering your codebase",
    how: "Use `git diff` to review all changes. Ask Claude to explain unexpected modifications",
  },
  {
    title: "Test-Driven Validation",
    description: "Run tests after changes to verify functionality and catch regressions immediately.",
    why: "Provides confidence that changes work as intended and don't break existing functionality",
    how: "Run test suite after each change. If tests fail, have Claude fix issues before proceeding",
  },
] as const;

const contextManagement = [
  {
    practice: "Start fresh for new features",
    description: "Begin a new Claude Code session when starting unrelated work to avoid context pollution",
  },
  {
    practice: "Use Claude.md for project context",
    description: "Maintain a Claude.md file with project conventions, patterns, and constraints",
  },
  {
    practice: "Reference specific files and line numbers",
    description: "Be explicit about which files and code sections you're referring to",
  },
  {
    practice: "Provide error messages in full",
    description: "Copy complete error messages including stack traces for accurate debugging",
  },
] as const;

const promptingTechniques = [
  {
    technique: "Be specific about constraints",
    example: "Don't just say 'refactor this'. Say 'refactor using TypeScript generics, maintain existing API, add JSDoc comments'",
  },
  {
    technique: "Specify output format",
    example: "Instead of 'analyze this code', say 'analyze and output a markdown table with issues, severity, and fixes'",
  },
  {
    technique: "Provide success criteria",
    example: "After implementation, state 'this should pass all tests and maintain <100ms response time'",
  },
  {
    technique: "Use examples for clarity",
    example: "Show an example of the desired output format rather than describing it",
  },
] as const;

const antiPatterns = [
  {
    antiPattern: "Fixing bugs without understanding root cause",
    problem: "Leads to bandaid fixes that break later or cause new issues",
    instead: "Ask Claude to analyze the root cause first, then propose a comprehensive fix",
  },
  {
    antiPattern: "Accepting first solution without alternatives",
    problem: "May miss better approaches or important tradeoffs",
    instead: "Ask 'what are alternative approaches and their tradeoffs?' before choosing",
  },
  {
    antiPattern: "Skipping documentation updates",
    problem: "Code and docs drift apart, confusing future developers",
    instead: "Update docs and comments in the same prompt as code changes",
  },
  {
    antiPattern: "Ignoring security implications",
    problem: "Can introduce vulnerabilities like XSS, SQL injection, or data leaks",
    instead: "Explicitly ask about security implications of changes",
  },
] as const;

const codeQuality = [
  {
    area: "Naming Conventions",
    practices: ["Follow project naming standards", "Use descriptive names over abbreviations", "Maintain consistency with existing code"],
  },
  {
    area: "Error Handling",
    practices: ["Handle edge cases explicitly", "Provide meaningful error messages", "Fail fast for invalid inputs"],
  },
  {
    area: "Performance",
    practices: ["Avoid premature optimization", "Profile before optimizing", "Document performance requirements"],
  },
  {
    area: "Testing",
    practices: ["Test edge cases and failure modes", "Maintain test coverage", "Use meaningful test names"],
  },
] as const;

const collaborationPractices = [
  {
    scenario: "Team Projects",
    practices: [
      "Share your Claude.md file with the team",
      "Document Claude-generated code in PRs",
      "Review AI-generated code like human code",
      "Establish team standards for AI usage",
    ],
  },
  {
    scenario: "Open Source",
    practices: [
      "Verify license compatibility",
      "Ensure generated code is original",
      "Add clear attribution if using templates",
      "Test thoroughly before contributing",
    ],
  },
] as const;

const debuggingBestPractices = [
  "Provide full error messages and stack traces",
  "Share relevant code context, not just the error line",
  "Describe what you expected vs what happened",
  "Include recent changes that might have caused the issue",
  "Try reproducing in a minimal example first",
] as const;

const securityPractices = [
  {
    area: "Input Validation",
    guideline: "Always validate and sanitize user inputs, even in Claude-generated code",
  },
  {
    area: "Secrets Management",
    guideline: "Never commit API keys or credentials. Use environment variables",
  },
  {
    area: "Dependencies",
    guideline: "Review and vet dependencies before adding them",
  },
  {
    area: "Code Review",
    guideline: "Treat AI-generated code with same security scrutiny as human code",
  },
] as const;

const efficiencyTips = [
  {
    tip: "Use hooks for automated checks",
    description: "Set up pre-commit hooks to run linters and tests automatically",
  },
  {
    tip: "Create reusable prompts",
    description: "Save common workflows as templates or slash commands",
  },
  {
    tip: "Leverage MCP for data access",
    description: "Connect relevant tools to avoid manual copy-paste",
  },
  {
    tip: "Batch similar tasks",
    description: "Group related changes in one session to maintain context",
  },
] as const;

const related = [
  { title: "Developer Workflows", path: "/use-cases/claude-code/developer-workflows" },
  { title: "Getting Started", path: "/use-cases/claude-code/getting-started" },
  { title: "Claude Code Guide", path: "/guides/claude-code-complete-guide" },
] as const;

export default function ClaudeCodeBestPracticesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Use Cases", href: "/use-cases" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Best Practices" },
      ]}
      eyebrow="Claude Code"
      title="Best Practices"
      description="Reliable habits and patterns for safe, effective Claude Code development sessions."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Core practices</h2>
        <div className="grid gap-6">
          {corePractices.map((practice) => (
            <div
              key={practice.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-xl">{practice.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {practice.description}
              </p>
              <div className="mt-3 grid gap-2 text-sm">
                <div>
                  <span className="font-medium">Why: </span>
                  <span className="text-muted-foreground">{practice.why}</span>
                </div>
                <div>
                  <span className="font-medium">How: </span>
                  <span className="text-muted-foreground">{practice.how}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Context management</h2>
        <div className="grid gap-3">
          {contextManagement.map((item) => (
            <div
              key={item.practice}
              className="glass-card rounded-xl border border-border/70 p-4"
            >
              <div className="font-medium text-sm">{item.practice}</div>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Prompting techniques</h2>
        <div className="grid gap-4">
          {promptingTechniques.map((item) => (
            <div
              key={item.technique}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.technique}</h3>
              <p className="mt-2 text-sm italic text-muted-foreground">{item.example}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Anti-patterns to avoid</h2>
        <div className="grid gap-4">
          {antiPatterns.map((item) => (
            <div
              key={item.antiPattern}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg text-orange-600/90">{item.antiPattern}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">Problem: </span>
                {item.problem}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">Instead: </span>
                {item.instead}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Code quality guidelines</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {codeQuality.map((item) => (
            <div
              key={item.area}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.area}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {item.practices.map((practice) => (
                  <li key={practice} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Collaboration practices</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {collaborationPractices.map((item) => (
            <div
              key={item.scenario}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.scenario}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {item.practices.map((practice) => (
                  <li key={practice} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Debugging best practices</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {debuggingBestPractices.map((practice) => (
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
        <h2 className="font-serif text-2xl">Security practices</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {securityPractices.map((item) => (
            <div
              key={item.area}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.area}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.guideline}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Efficiency tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {efficiencyTips.map((item) => (
            <div
              key={item.tip}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.tip}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Related guides</h2>
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

import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started with Claude Code | Early Frontier",
  description: "Everything you need to install, configure, and run your first successful Claude Code session.",
};

const prerequisites = [
  { item: "macOS, Linux, or Windows (WSL/Git for Windows)", description: "Supported platforms for Claude Code" },
  { item: "Node.js 18+", description: "Required for npm installation method" },
  { item: "4GB+ RAM", description: "Minimum hardware requirement" },
  { item: "Internet connection", description: "Required for authentication and AI processing" },
] as const;

const installationSteps = [
  {
    step: "Standard (npm) install",
    command: "npm install -g @anthropic-ai/claude-code",
    description: "Recommended standard installation. Do not use sudo with npm install -g.",
  },
  {
    step: "Native install (macOS/Linux)",
    command: "curl -fsSL https://claude.ai/install.sh | bash",
    description: "Native installer for macOS, Linux, and WSL.",
  },
  {
    step: "Homebrew (macOS/Linux)",
    command: "brew install --cask claude-code",
    description: "Install via Homebrew cask.",
  },
  {
    step: "Windows PowerShell",
    command: "irm https://claude.ai/install.ps1 | iex",
    description: "Native installer for Windows PowerShell.",
  },
  {
    step: "Windows CMD",
    command: "curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd",
    description: "Native installer for Windows Command Prompt.",
  },
  {
    step: "Verify installation",
    command: "claude --version",
    description: "Confirm Claude Code is installed and accessible.",
  },
] as const;

const firstSession = [
  {
    title: "Navigate to your project",
    description: "Open terminal and cd into your project directory",
    example: "cd ~/projects/my-app",
  },
  {
    title: "Start Claude Code",
    description: "Launch Claude in your project context",
    example: "claude",
  },
  {
    title: "Describe your task clearly",
    description: "Be specific about what you want to accomplish",
    example: "I need to add input validation to the login form. Check for empty fields and valid email format.",
  },
  {
    title: "Request a plan first",
    description: "Ask Claude to outline the approach before making changes",
    example: "Can you create a plan for this before implementing?",
  },
  {
    title: "Review and approve",
    description: "Read through the plan, ask questions, then approve or adjust",
    example: "That looks good. Let's proceed with the implementation.",
  },
  {
    title: "Verify changes",
    description: "Review diffs, run tests, and ensure everything works",
    example: "git diff to see changes, npm test to validate",
  },
] as const;

const commonFirstTasks = [
  {
    task: "Understand existing code",
    prompt: "Explain how the authentication system works in this codebase",
    when: "When joining a new project or codebase",
  },
  {
    task: "Fix a simple bug",
    prompt: "The login button doesn't work when email is empty. Can you fix this?",
    when: "When you have a clear, isolated issue",
  },
  {
    task: "Add a small feature",
    prompt: "Add a character counter to the bio text area that shows '250 characters remaining'",
    when: "When you want to add simple, well-defined functionality",
  },
  {
    task: "Write tests",
    prompt: "Add unit tests for the validateEmail function with edge cases",
    when: "When you need test coverage for existing code",
  },
] as const;

const tips = [
  {
    tip: "Start small",
    description: "Begin with simple tasks to build confidence and understand how Claude Code works before tackling complex changes",
  },
  {
    tip: "Be specific in prompts",
    description: "Vague requests lead to vague results. Include constraints, requirements, and examples",
  },
  {
    tip: "Always review changes",
    description: "Never blindly accept code. Use git diff and understand what changed before committing",
  },
  {
    tip: "Iterate with feedback",
    description: "If the first result isn't perfect, provide specific feedback rather than starting over",
  },
  {
    tip: "Use plan mode",
    description: "For anything beyond trivial changes, request a plan first to catch issues early",
  },
] as const;

const commonMistakes = [
  {
    mistake: "Trying to do too much at once",
    solution: "Break large tasks into smaller, sequential steps. Complete and verify each before moving on",
  },
  {
    mistake: "Not providing enough context",
    solution: "Share error messages, requirements, constraints, and examples to help Claude understand fully",
  },
  {
    mistake: "Skipping the review step",
    solution: "Always review diffs and run tests. Trust but verify every change",
  },
  {
    mistake: "Working without version control",
    solution: "Always use git. Commit working code before asking Claude to make changes",
  },
] as const;

const keyboardShortcuts = [
  { shortcut: "Ctrl+C", action: "Exit current operation" },
  { shortcut: "Ctrl+D", action: "End input / Exit Claude" },
  { shortcut: "Up/Down arrows", action: "Navigate command history" },
] as const;

const nextSteps = [
  {
    title: "Explore workflows",
    path: "/workflows/claude-code",
    description: "Browse common development workflows and patterns"
  },
  {
    title: "Read best practices",
    path: "/use-cases/claude-code/best-practices",
    description: "Learn habits for safe, effective Claude Code sessions"
  },
  {
    title: "Set up MCP integrations",
    path: "/use-cases/claude-code/mcp-integrations",
    description: "Connect external tools to expand capabilities"
  },
  {
    title: "Use Claude in Chrome",
    path: "/guides/claude-in-chrome",
    description: "Automate browser workflows and learn when to use MCP"
  },
] as const;

export default function ClaudeCodeGettingStartedPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Use Cases", href: "/use-cases" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Getting Started" },
      ]}
      eyebrow="Claude Code"
      title="Getting Started with Claude Code"
      description="Everything you need to install, configure, and run your first successful Claude Code session."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Prerequisites</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {prerequisites.map((item) => (
            <div key={item.item} className="glass-card rounded-xl border border-border/70 p-4">
              <div className="font-medium text-sm">{item.item}</div>
              <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Installation</h2>
        <div className="grid gap-4">
          {installationSteps.map((item, index) => (
            <div key={item.step} className="glass-card rounded-2xl border border-border/70 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-xs font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-lg">{item.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-background/50 p-3 text-xs">
                    <code>$ {item.command}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Browser automation option</h2>
        <p className="text-sm text-muted-foreground">
          If you prefer to automate workflows inside web apps, Claude in Chrome
          provides browser-based automation without MCP setup. Use it for tasks
          like email triage, calendar updates, and form filling.
        </p>
        <a
          href="/guides/claude-in-chrome"
          className="w-fit rounded-full border border-foreground/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-foreground/40"
        >
          Learn Claude in Chrome
        </a>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Your first session</h2>
        <div className="grid gap-4">
          {firstSession.map((item, index) => (
            <div key={item.title} className="glass-card rounded-2xl border border-border/70 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-xs font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  {item.example && (
                    <div className="mt-3 rounded-lg bg-background/50 p-3 text-sm italic text-muted-foreground">
                      {item.example}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Good first tasks</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {commonFirstTasks.map((item) => (
            <div key={item.task} className="glass-card rounded-2xl border border-border/70 p-5">
              <h3 className="font-serif text-lg">{item.task}</h3>
              <p className="mt-2 text-sm italic text-muted-foreground">"{item.prompt}"</p>
              <p className="mt-3 text-xs text-muted-foreground/70">{item.when}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Essential tips</h2>
        <div className="grid gap-4">
          {tips.map((item) => (
            <div key={item.tip} className="glass-card rounded-2xl border border-border/70 p-5">
              <h3 className="font-serif text-lg">{item.tip}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Common beginner mistakes</h2>
        <div className="grid gap-4">
          {commonMistakes.map((item) => (
            <div key={item.mistake} className="glass-card rounded-2xl border border-border/70 p-5">
              <h3 className="font-serif text-lg text-orange-600/90">{item.mistake}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">Solution: </span>
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Keyboard shortcuts</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {keyboardShortcuts.map((item) => (
            <div key={item.shortcut} className="glass-card rounded-xl border border-border/70 p-4">
              <div className="font-mono text-sm font-medium">{item.shortcut}</div>
              <p className="mt-1 text-xs text-muted-foreground">{item.action}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Next steps</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {nextSteps.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="glass-card rounded-2xl border border-border/70 p-5 transition hover:border-foreground/40"
            >
              <h3 className="font-serif text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Early Frontier",
  description: "Common questions about using Claude Code for development and productivity workflows.",
};

const gettingStartedFaqs = [
  {
    question: "What is Claude Code?",
    answer:
      "Claude Code is a terminal-based AI coding assistant that can write, edit, and refactor code across your entire project. It can also automate productivity workflows through MCP integrations with tools like email, calendars, task managers, and databases. Think of it as an AI pair programmer that lives in your terminal and can interact with external tools.",
  },
  {
    question: "Do I need to be a developer to use Claude Code?",
    answer:
      "No. While Claude Code excels at coding tasks, many workflows are productivity-focused and require no programming knowledge—like email triage, calendar management, research automation, and task tracking. If you can describe what you want in plain English, Claude Code can execute it.",
  },
  {
    question: "How do I install Claude Code?",
    answer:
      "Install with npm: `npm install -g @anthropic-ai/claude-code` (Node.js 18+), or use the native installer for your OS. Then run `claude` inside your project folder. See the Getting Started guide for detailed setup instructions.",
  },
  {
    question: "What's the difference between Claude Code and ChatGPT/Claude.ai?",
    answer:
      "Claude Code is specifically designed for terminal workflows and can directly read, write, and execute files on your system. It also supports MCP for deep integrations with external tools. Web-based assistants are better for general conversation but can't interact with your local environment or tools directly.",
  },
] as const;

const mcpIntegrationFaqs = [
  {
    question: "What is MCP and why do I need it?",
    answer:
      "MCP (Model Context Protocol) is a standard that lets Claude Code connect to external tools and data sources. Without MCP, Claude Code can only work with your local files. With MCP, it can access your email, calendar, databases, web search, and dozens of other tools—all through natural language commands.",
  },
  {
    question: "Which MCP servers should I start with?",
    answer:
      "Start with tools you use daily. Popular first choices include: filesystem (read/write files anywhere), web search (Brave Search), and either Gmail+Google Calendar or your task management tool (Linear, Notion, Jira). Pick one high-value integration and expand from there.",
  },
  {
    question: "Are MCP integrations secure?",
    answer:
      "MCP servers run locally on your machine and you control which tools get access. However, you should be careful about: what data you expose, which credentials you provide, and reviewing actions before they execute. Never give Claude Code access to sensitive systems without understanding the risks.",
  },
  {
    question: "Can I build custom MCP servers?",
    answer:
      "Yes! The MCP SDK lets you create custom integrations for proprietary tools or specialized workflows. If you're comfortable with TypeScript or Python, you can build a basic server in a few hours. See the MCP documentation for development guides.",
  },
] as const;

const workflowFaqs = [
  {
    question: "How do I keep changes safe?",
    answer:
      "Follow the safety triad: (1) Always request a plan before implementation on non-trivial tasks, (2) Review all diffs with `git diff` before committing, (3) Run tests after changes. Also commit working code before starting new work, so you always have a clean state to revert to.",
  },
  {
    question: "What should I do when Claude Code makes a mistake?",
    answer:
      "Don't start over. Instead, provide specific feedback about what's wrong and what you expected. Claude maintains context, so iterating on the current approach is faster than restarting. If it's completely off track, use `git restore` to revert and try a different prompt.",
  },
  {
    question: "How specific should my prompts be?",
    answer:
      "Be very specific. Instead of 'refactor this', say 'refactor using TypeScript generics, maintain the existing API surface, and add JSDoc comments to all public functions'. Include constraints, requirements, examples, and success criteria. Vague prompts produce vague results.",
  },
  {
    question: "Should I use plan mode for everything?",
    answer:
      "Use plan mode for anything beyond trivial changes—multi-file edits, architectural decisions, or when you're unsure of the approach. Skip it for simple tasks like fixing a typo or adding a console.log. When in doubt, request a plan—it prevents wasted effort.",
  },
] as const;

const technicalFaqs = [
  {
    question: "Can Claude Code work with large codebases?",
    answer:
      "Yes. Claude Code has context management strategies for large projects and can navigate millions of lines of code. However, it works best when you help it understand the relevant parts of your codebase through Claude.md files, clear prompts, and targeted file references.",
  },
  {
    question: "Which languages and frameworks does it support?",
    answer:
      "Claude Code works with any programming language or framework—TypeScript, Python, Rust, Go, React, Next.js, Django, etc. It understands modern patterns, APIs, and best practices across the ecosystem. Performance varies by language based on training data, but all major languages are well-supported.",
  },
  {
    question: "Can Claude Code run tests and builds?",
    answer:
      "Yes. You can ask Claude to run any terminal command, including `npm test`, `cargo build`, `pytest`, etc. It can read test output, identify failures, and fix issues iteratively. For best results, ask it to run tests after each change.",
  },
  {
    question: "Does it work in CI/CD pipelines?",
    answer:
      "Not directly—Claude Code is designed for local development. However, you can use Claude Code to help set up and debug CI/CD configurations, and the code it generates works in any pipeline. See the CI/CD Automation workflow for examples.",
  },
] as const;

const productivityFaqs = [
  {
    question: "How much time can I actually save with productivity workflows?",
    answer:
      "Users report saving 30-45 minutes daily on email triage, 15-20 minutes per meeting on summaries, and 1-2 hours per research task. The biggest gains come from automating repetitive, multi-step tasks that require context switching between tools.",
  },
  {
    question: "Can Claude Code schedule meetings for me?",
    answer:
      "Yes, with the Google Calendar MCP server. You can ask Claude to find open slots, schedule meetings, send invites, and even suggest optimal meeting times based on attendees' calendars. Same with Outlook through the Microsoft Graph MCP server.",
  },
  {
    question: "Will Claude Code actually send emails on my behalf?",
    answer:
      "Only if you explicitly approve. Claude drafts emails and shows them to you for review before sending. You maintain control—think of it as an assistant preparing communications for your approval, not an autonomous agent sending messages unsupervised.",
  },
] as const;

const troubleshootingFaqs = [
  {
    question: "Why isn't my MCP server showing up?",
    answer:
      "Check: (1) Is the server correctly configured in your claude_desktop_config.json? (2) Did you restart Claude Code after adding the server? (3) Are there any error messages in the Claude Code logs? (4) Does the server work when tested independently?",
  },
  {
    question: "Claude Code is running slow. How can I speed it up?",
    answer:
      "Slow responses usually mean: (1) Large files in context—be more specific about which files to examine, (2) Complex tasks—break them into smaller steps, (3) Many MCP servers active—disable unused ones, (4) Network issues with API calls. Try using Haiku model for faster responses on simple tasks.",
  },
  {
    question: "What if I lose my work mid-session?",
    answer:
      "If Claude Code crashes or disconnects, your local file changes persist—they're written directly to disk. Use `git status` and `git diff` to see what changed. For long sessions, commit incrementally so you never lose more than one step of work.",
  },
] as const;

const billingAccessFaqs = [
  {
    question: "How much does Claude Code cost?",
    answer:
      "Claude Code usage is billed through your Claude API account based on tokens consumed. Pricing depends on which model you use (Haiku, Sonnet, or Opus). See claude.ai/pricing for current rates. Most developers spend $20-50/month for regular use.",
  },
  {
    question: "Can my team use Claude Code?",
    answer:
      "Yes. Each team member needs their own Claude account and API access. You can share Claude.md files and MCP configurations to standardize workflows across the team. Enterprise plans may offer team management features—check with Anthropic for details.",
  },
] as const;

const related = [
  { title: "Getting Started", path: "/use-cases/claude-code/getting-started" },
  { title: "Best Practices", path: "/use-cases/claude-code/best-practices" },
  { title: "MCP Integrations", path: "/use-cases/claude-code/mcp-integrations" },
] as const;

export default function ClaudeCodeFaqPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "FAQ" },
      ]}
      eyebrow="Claude Code"
      title="Frequently Asked Questions"
      description="Common questions about using Claude Code for development and productivity workflows."
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Getting started</h2>
        <div className="grid gap-4">
          {gettingStartedFaqs.map((faq) => (
            <div
              key={faq.question}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">MCP and integrations</h2>
        <div className="grid gap-4">
          {mcpIntegrationFaqs.map((faq) => (
            <div
              key={faq.question}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Workflows and usage</h2>
        <div className="grid gap-4">
          {workflowFaqs.map((faq) => (
            <div
              key={faq.question}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Technical questions</h2>
        <div className="grid gap-4">
          {technicalFaqs.map((faq) => (
            <div
              key={faq.question}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Productivity workflows</h2>
        <div className="grid gap-4">
          {productivityFaqs.map((faq) => (
            <div
              key={faq.question}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Troubleshooting</h2>
        <div className="grid gap-4">
          {troubleshootingFaqs.map((faq) => (
            <div
              key={faq.question}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Billing and access</h2>
        <div className="grid gap-4">
          {billingAccessFaqs.map((faq) => (
            <div
              key={faq.question}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Related guides</h2>
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

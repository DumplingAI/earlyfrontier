import PageShell from "@/components/page-shell";

const tldr = [
  "Match the agent to your workflow complexity",
  "Consider tool integration needs first",
  "Balance speed vs accuracy for your use case",
  "Factor in team onboarding and adoption",
  "Start simple, scale up as needs grow",
  "Multiple agents can work together",
] as const;

const workflowComplexity = [
  {
    level: "Simple Workflows",
    description:
      "Single-step, predictable tasks like code completion, formatting, or simple refactoring.",
    examples: ["Autocomplete functions", "Fix linting errors", "Add type hints"],
    recommended: "GitHub Copilot, IDE extensions",
  },
  {
    level: "Medium Workflows",
    description:
      "Multi-step tasks requiring some context and decision-making across a few files.",
    examples: [
      "Implement a new feature",
      "Debug cross-file issues",
      "Write test suites",
    ],
    recommended: "Cursor, Claude Code (standard mode)",
  },
  {
    level: "Complex Workflows",
    description:
      "Multi-file changes requiring deep understanding, architecture decisions, and planning.",
    examples: [
      "System refactoring",
      "Architecture changes",
      "Complex debugging",
    ],
    recommended: "Claude Code with planning, agents with extended context",
  },
] as const;

const integrationNeeds = [
  {
    category: "No External Tools",
    description: "Pure code generation and editing without external data access.",
    useCase: "Standard development tasks within your IDE or editor.",
    agents: "Basic code assistants, GitHub Copilot, inline completion tools",
  },
  {
    category: "IDE & Dev Tools",
    description: "Git, package managers, build systems, and terminal commands.",
    useCase: "Full development workflows with version control and builds.",
    agents: "Cursor, IDE-integrated agents, Claude Code",
  },
  {
    category: "External Data & Services",
    description:
      "Databases, APIs, file systems, web search, email, calendars, and custom tools.",
    useCase: "Workflows requiring real data access or external service integration.",
    agents: "MCP-enabled agents like Claude Code with MCP servers",
  },
] as const;

const agentComparison = [
  {
    agent: "Claude Code",
    strengths: [
      "MCP support for external tools",
      "Planning mode for complex tasks",
      "Large context window",
      "Multi-file editing",
    ],
    bestFor: "Complex development workflows, external data integration",
  },
  {
    agent: "Cursor",
    strengths: [
      "IDE-native experience",
      "Fast inline completion",
      "Multi-file context",
      "Familiar VS Code interface",
    ],
    bestFor: "Medium complexity tasks, developers wanting IDE integration",
  },
  {
    agent: "GitHub Copilot",
    strengths: [
      "Excellent code completion",
      "Fast suggestions",
      "Wide IDE support",
      "Trained on GitHub code",
    ],
    bestFor: "Code completion, repetitive tasks, simple refactoring",
  },
  {
    agent: "ChatGPT Code Interpreter",
    strengths: [
      "Data analysis capabilities",
      "File upload and processing",
      "Python execution",
      "Visualization generation",
    ],
    bestFor: "Data science, analysis, prototyping, learning",
  },
] as const;

const practicalScenarios = [
  {
    scenario: "Solo Developer - Personal Project",
    needs: [
      "Rapid iteration and experimentation",
      "Minimal setup overhead",
      "Cost-effective solution",
    ],
    recommendation: "Claude Code",
    reasoning:
      "Start with Claude Code for its balance of power and simplicity. Use MCP servers for any external data needs. The learning curve is minimal, and you can scale complexity as your project grows.",
  },
  {
    scenario: "Startup Team - Fast Iteration",
    needs: [
      "Quick feature development",
      "External API integration",
      "Shared team workflows",
    ],
    recommendation: "Claude Code + Cursor hybrid",
    reasoning:
      "Use Claude Code for complex features requiring planning and external data. Use Cursor for quick edits and standard development. Share MCP configurations and Claude.md files across the team.",
  },
  {
    scenario: "Enterprise Team - Production System",
    needs: [
      "High accuracy requirements",
      "Code review workflows",
      "Security and compliance",
      "Team standardization",
    ],
    recommendation: "Claude Code with guardrails + GitHub Copilot",
    reasoning:
      "Claude Code for architectural changes with mandatory plan review. GitHub Copilot for autocomplete. Implement hooks for automated testing and security checks. Document standards in shared Claude.md files.",
  },
  {
    scenario: "Data Science - Analysis Work",
    needs: [
      "Data access and querying",
      "Visualization generation",
      "Jupyter notebook support",
      "Statistical analysis",
    ],
    recommendation: "Claude Code with database MCP servers",
    reasoning:
      "Connect PostgreSQL or SQLite MCP servers for direct database access. Use filesystem servers for data file analysis. Claude's strong reasoning capabilities help with complex analysis tasks.",
  },
  {
    scenario: "Learning & Education",
    needs: [
      "Code explanation and learning",
      "Step-by-step guidance",
      "Concept understanding",
      "Low cost or free tier",
    ],
    recommendation: "ChatGPT + GitHub Copilot free tier",
    reasoning:
      "ChatGPT provides detailed explanations and learning support. GitHub Copilot free tier (for students/educators) helps with practical coding. Both are beginner-friendly with low barriers to entry.",
  },
] as const;

const decisionQuestions = [
  {
    question: "Do you need to access external data or services?",
    yes: "Choose MCP-enabled agents like Claude Code. Set up MCP servers for your specific data sources.",
    no: "Basic code assistants like GitHub Copilot or Cursor will meet your needs.",
  },
  {
    question: "Are you working across many files or making architectural changes?",
    yes: "Use Claude Code with planning mode. The extended context and planning capabilities are essential.",
    no: "Inline completion tools or standard IDE-integrated agents work well for isolated changes.",
  },
  {
    question: "Does your team need to standardize on shared workflows?",
    yes: "Invest in Claude Code with shared configurations, hooks, and Claude.md files for consistency.",
    no: "Individual developers can choose tools that match their preferences and workflows.",
  },
  {
    question: "Is accuracy more important than speed for your use case?",
    yes: "Use Claude Code with plan-first workflows and code review steps. Implement automated testing hooks.",
    no: "Fast completion tools like GitHub Copilot optimize for speed while maintaining good accuracy.",
  },
] as const;

const bestPractices = [
  "Start with one agent and expand only when you hit clear limitations",
  "Trial multiple agents with the same task to compare results",
  "Measure productivity impact before and after adoption",
  "Document your chosen setup and workflows for team consistency",
  "Combine agents for different use cases rather than forcing one tool for everything",
] as const;

const commonMistakes = [
  {
    mistake: "Choosing based on hype alone",
    solution:
      "Evaluate based on your actual workflows, not trending discussions. What works for others may not fit your needs.",
  },
  {
    mistake: "Ignoring team skill levels",
    solution:
      "Consider learning curves and onboarding time. The most powerful tool is useless if your team can't adopt it.",
  },
  {
    mistake: "Over-engineering the setup",
    solution:
      "Start simple with basic features. Add MCP servers, hooks, and custom configurations only when you have clear use cases.",
  },
  {
    mistake: "Not considering integration needs upfront",
    solution:
      "Map out your external data sources and tools first. Retrofitting integrations later is harder than planning from the start.",
  },
] as const;

export default function ChoosingTheRightAgentPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Choosing the Right Agent" },
      ]}
      eyebrow="Guide"
      title="Choosing the Right AI Agent"
      description="A decision framework for selecting the best agent setup for your workflow."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <div className="grid gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Author: Manus AI - January 12, 2026
          </p>
          <h2 className="font-serif text-2xl">Introduction</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          The AI agent landscape in 2026 offers many powerful options. Claude Code,
          Cursor, GitHub Copilot, ChatGPT, and others each excel in different
          scenarios. Choosing the right agent isn't about finding the "best"
          tool—it's about matching capabilities to your specific workflow, team
          needs, and integration requirements.
        </p>
        <p className="text-sm text-muted-foreground">
          This guide provides a practical decision framework. We'll cover workflow
          complexity, tool integration needs, accuracy requirements, and team
          adoption considerations. By the end, you'll know which agent fits your
          use case and how to get started.
        </p>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">TL;DR</h2>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {tldr.map((item) => (
            <span
              key={item}
              className="glass-card rounded-full border border-border/70 px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Workflow complexity levels</h2>
        <div className="grid gap-4">
          {workflowComplexity.map((item) => (
            <div
              key={item.level}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-xl">{item.level}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-3">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                  Examples
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-3 text-sm">
                <span className="text-muted-foreground/70">Recommended: </span>
                <span className="text-foreground">{item.recommended}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Tool integration needs</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {integrationNeeds.map((item) => (
            <div
              key={item.category}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {item.category}
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-3 text-xs text-muted-foreground/70">
                Use case: {item.useCase}
              </div>
              <div className="mt-3 text-sm font-medium">{item.agents}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Agent comparison</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {agentComparison.map((item) => (
            <div
              key={item.agent}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-xl">{item.agent}</h3>
              <div className="mt-3">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                  Strengths
                </div>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {item.strengths.map((strength) => (
                    <li key={strength} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 text-sm">
                <span className="text-muted-foreground/70">Best for: </span>
                <span className="text-foreground">{item.bestFor}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Practical scenarios</h2>
        <div className="grid gap-4">
          {practicalScenarios.map((item) => (
            <div
              key={item.scenario}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-xl">{item.scenario}</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                    Needs
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {item.needs.map((need) => (
                      <li key={need} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                    Recommendation
                  </div>
                  <div className="mt-2 font-medium">{item.recommendation}</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.reasoning}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Decision questions</h2>
        <div className="grid gap-4">
          {decisionQuestions.map((item) => (
            <div
              key={item.question}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.question}</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div>
                  <div className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-green-600/80">
                    Yes
                  </div>
                  <p className="text-sm text-muted-foreground">{item.yes}</p>
                </div>
                <div>
                  <div className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-orange-600/80">
                    No
                  </div>
                  <p className="text-sm text-muted-foreground">{item.no}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
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

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Common mistakes to avoid</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {commonMistakes.map((item) => (
            <div
              key={item.mistake}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.mistake}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-foreground p-10 text-background md:p-12">
        <h2 className="font-serif text-3xl">Try the framework</h2>
        <p className="max-w-3xl text-sm text-background/80">
          Work through the decision questions and scenarios above with your specific
          use case in mind. Start with one agent, test it on real tasks, and expand
          or switch as your needs evolve. The right choice today can change as your
          workflows mature.
        </p>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-background/70">
          <span>Workflows</span>
          <span>Use cases</span>
          <span>Integrations</span>
        </div>
      </section>
    </PageShell>
  );
}

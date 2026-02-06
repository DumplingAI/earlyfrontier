import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choosing the Right AI Agent | Early Frontier",
  description: "A decision framework for selecting the best agent setup for your workflow.",
};

const tldr = [
  "Match the agent to workflow complexity",
  "Decide if you need external tools",
  "Balance accuracy vs speed",
  "Plan for team onboarding and governance",
  "Start small and expand",
  "Mix agents by phase if needed",
] as const;

const workflowComplexity = [
  {
    level: "Simple Workflows",
    description:
      "Single-step, predictable tasks like code completion, formatting, or small refactors.",
    examples: ["Autocomplete functions", "Fix linting errors", "Add type hints"],
    recommended: "Inline assistants or IDE completions",
  },
  {
    level: "Medium Workflows",
    description:
      "Multi-step tasks that need some context and reasoning across a few files.",
    examples: ["Implement a feature", "Debug a cross-file issue", "Write tests"],
    recommended: "IDE agents with project context",
  },
  {
    level: "Complex Workflows",
    description:
      "Multi-file changes requiring deep understanding, planning, and architecture decisions.",
    examples: ["System refactor", "Architecture changes", "Complex debugging"],
    recommended: "CLI agents with planning workflows",
  },
] as const;

const integrationNeeds = [
  {
    category: "No External Tools",
    description: "Pure code generation and editing without external data access.",
    useCase: "Standard development tasks within your IDE or editor.",
    agents: "Inline completion or IDE agents",
  },
  {
    category: "Dev Tools Access",
    description: "Git, package managers, build systems, and terminal commands.",
    useCase: "Full development workflows with version control and builds.",
    agents: "CLI agents or IDE agents with terminal integration",
  },
  {
    category: "External Data & Services",
    description: "Databases, APIs, file systems, web search, email, calendars.",
    useCase: "Workflows that require real data access or external actions.",
    agents: "MCP-capable agents with server integrations",
  },
] as const;

const agentComparison = [
  {
    agent: "Inline completion",
    strengths: [
      "Fast suggestions",
      "Low setup overhead",
      "Great for boilerplate",
      "Lives inside your editor",
    ],
    bestFor: "Simple tasks and rapid iteration",
  },
  {
    agent: "IDE agent",
    strengths: [
      "Project-wide context",
      "Multi-file edits",
      "Familiar UI",
      "Interactive debugging",
    ],
    bestFor: "Medium complexity feature work",
  },
  {
    agent: "CLI agent",
    strengths: [
      "Deep planning",
      "Terminal workflows",
      "Scriptable automation",
      "Works well with MCP",
    ],
    bestFor: "Complex refactors, pipelines, and integrations",
  },
  {
    agent: "Generalist assistant with tools",
    strengths: [
      "Data analysis",
      "File processing",
      "Summaries and reports",
      "Multi-modal workflows",
    ],
    bestFor: "Research, analysis, and mixed workflows",
  },
] as const;

const practicalScenarios = [
  {
    scenario: "Solo Developer - Personal Project",
    needs: [
      "Rapid iteration",
      "Minimal setup",
      "Cost-efficient",
    ],
    recommendation: "IDE agent + inline completion",
    reasoning:
      "Start with low-overhead tools and add a CLI agent only if you need planning or automation.",
  },
  {
    scenario: "Startup Team - Fast Iteration",
    needs: [
      "Quick feature development",
      "External API integration",
      "Shared workflows",
    ],
    recommendation: "CLI agent for planning + IDE agents for execution",
    reasoning:
      "Use a planning-focused CLI agent for architecture and integrations, and IDE agents for day-to-day coding.",
  },
  {
    scenario: "Enterprise Team - Production System",
    needs: [
      "High accuracy",
      "Code review workflows",
      "Security and compliance",
      "Standardization",
    ],
    recommendation: "CLI agent with guardrails + inline completion",
    reasoning:
      "Use planning + approvals for risky changes and keep fast completion tools for low-risk edits.",
  },
  {
    scenario: "Data Science - Analysis Work",
    needs: [
      "Data access",
      "Visualization",
      "Notebook-friendly tooling",
      "Exploratory analysis",
    ],
    recommendation: "Generalist assistant with tools + database integrations",
    reasoning:
      "Focus on tools that handle data, notebooks, and repeatable analysis pipelines.",
  },
  {
    scenario: "Learning & Education",
    needs: [
      "Explanations",
      "Step-by-step guidance",
      "Low cost",
      "Easy onboarding",
    ],
    recommendation: "Generalist assistant + inline completion",
    reasoning:
      "Use an explainer-friendly assistant for concepts and a lightweight completion tool for practice.",
  },
] as const;

const decisionQuestions = [
  {
    question: "Do you need external data or tool access?",
    yes: "Use an MCP-capable agent and start with read-only integrations.",
    no: "Inline or IDE agents are usually enough.",
  },
  {
    question: "Are you making multi-file or architectural changes?",
    yes: "Choose a planning-capable CLI agent and use a plan-first workflow.",
    no: "Inline or IDE tools are typically sufficient.",
  },
  {
    question: "Does your team need standardized workflows?",
    yes: "Adopt shared configs, templates, and review gates.",
    no: "Individual choices are fine if outputs remain compatible.",
  },
  {
    question: "Is accuracy more important than speed?",
    yes: "Favor plan-first workflows and human review steps.",
    no: "Use faster tools and optimize for iteration speed.",
  },
] as const;

const bestPractices = [
  "Trial multiple agents on the same task to compare outcomes",
  "Start with one tool, then add another only when you hit a limit",
  "Measure impact with before/after metrics",
  "Document your chosen setup for team onboarding",
  "Combine tools by phase (plan → execute → review)",
] as const;

const commonMistakes = [
  {
    mistake: "Choosing based on hype alone",
    solution:
      "Evaluate with your actual workflows and constraints. What works for others may not fit your team.",
  },
  {
    mistake: "Ignoring onboarding cost",
    solution:
      "Powerful tools fail if the team can’t adopt them. Prioritize usability and training.",
  },
  {
    mistake: "Over-engineering the setup",
    solution:
      "Begin simple. Add integrations, hooks, and automation only when they solve a clear pain point.",
  },
  {
    mistake: "Not thinking about governance",
    solution:
      "If automation can change production systems, plan for approvals, logs, and access control early.",
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
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <div className="grid gap-2">
          <p className="text-xs tracking-widest text-[#c9b8a0]">
            Author: Manus AI - January 12, 2026
          </p>
          <h2 className="font-serif italic text-2xl">Introduction</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Choosing the right agent isn’t about a single “best” tool. It’s about
          matching capabilities to your workflow complexity, integration needs,
          and governance requirements. This guide gives a practical framework to
          evaluate options and build a stack that fits your team.
        </p>
        <p className="text-sm text-muted-foreground">
          We’ll cover workflow complexity, external tool access, accuracy vs
          speed tradeoffs, and team adoption. Use this to pick a starting point
          and evolve your setup as needs grow.
        </p>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">TL;DR</h2>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {tldr.map((item) => (
            <span
              key={item}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Match workflow complexity</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {workflowComplexity.map((item) => (
            <div
              key={item.level}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.level}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.examples.map((example) => (
                  <span
                    key={example}
                    className=" bg-background/60 px-2 py-1 text-xs text-muted-foreground"
                  >
                    {example}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="text-muted-foreground/70">Recommended: </span>
                {item.recommended}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Integration needs</h2>
        <div className="grid gap-4">
          {integrationNeeds.map((item) => (
            <div
              key={item.category}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.category}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="text-muted-foreground/70">Use case: </span>
                {item.useCase}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="text-muted-foreground/70">Agents: </span>
                {item.agents}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Agent types at a glance</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {agentComparison.map((item) => (
            <div
              key={item.agent}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.agent}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {item.strengths.map((strength) => (
                  <li key={strength} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0  bg-[#a78b71] rounded-full" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="text-muted-foreground/70">Best for: </span>
                {item.bestFor}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Practical scenarios</h2>
        <div className="grid gap-4">
          {practicalScenarios.map((scenario) => (
            <div
              key={scenario.scenario}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{scenario.scenario}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {scenario.needs.map((need) => (
                  <span
                    key={need}
                    className=" bg-background/60 px-2 py-1 text-xs text-muted-foreground"
                  >
                    {need}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="text-muted-foreground/70">Recommendation: </span>
                {scenario.recommendation}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {scenario.reasoning}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Decision checklist</h2>
        <div className="grid gap-4">
          {decisionQuestions.map((item) => (
            <div
              key={item.question}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">Yes: </span>
                {item.yes}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">No: </span>
                {item.no}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Best practices</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {bestPractices.map((item) => (
            <div
              key={item}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Common mistakes</h2>
        <div className="grid gap-4">
          {commonMistakes.map((item) => (
            <div
              key={item.mistake}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.mistake}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
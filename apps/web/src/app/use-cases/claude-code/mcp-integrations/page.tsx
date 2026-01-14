import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP Integrations | Early Frontier",
  description: "Extend Claude Code with MCP servers to connect your tools and automate multi-step workflows.",
};

const popularIntegrations = [
  {
    name: "Google Workspace",
    description: "Gmail, Calendar, Drive, and Docs for productivity workflows",
    capabilities: ["Email triage", "Scheduling", "Doc summaries", "Briefs"],
    setup: "medium",
  },
  {
    name: "Slack",
    description: "Team communication and channel context",
    capabilities: ["Summaries", "Action items", "Triage", "Announcements"],
    setup: "easy",
  },
  {
    name: "Notion",
    description: "Workspace for notes, databases, and docs",
    capabilities: ["Read databases", "Create pages", "Update properties"],
    setup: "medium",
  },
  {
    name: "Linear",
    description: "Issue tracking and project management",
    capabilities: ["Query issues", "Update status", "Summaries"],
    setup: "easy",
  },
  {
    name: "GitHub",
    description: "Repos, PRs, issues, and CI status",
    capabilities: ["Review diffs", "Summarize PRs", "Track CI"],
    setup: "easy",
  },
  {
    name: "Databases",
    description: "Direct query access for analysis and reporting",
    capabilities: ["Run queries", "Analyze schemas", "Export data"],
    setup: "medium",
  },
] as const;

const setupSteps = [
  {
    step: "Identify a server",
    description:
      "Choose an MCP server provided by the tool vendor, community, or your internal team.",
    resources: ["Official MCP docs", "Vendor API docs", "Internal server registry"],
    example: undefined as string | undefined,
    tips: undefined as readonly string[] | undefined,
  },
  {
    step: "Install or deploy",
    description:
      "Install via package manager or deploy as a service. Prefer local servers for sensitive data.",
    example: undefined as string | undefined,
    resources: undefined as readonly string[] | undefined,
    tips: ["Pin versions", "Use a staging environment first"],
  },
  {
    step: "Configure authentication",
    description:
      "Set up OAuth or API keys with least-privilege scopes and separate dev/prod credentials.",
    tips: ["Store secrets securely", "Rotate tokens regularly"],
    example: undefined as string | undefined,
    resources: undefined as readonly string[] | undefined,
  },
  {
    step: "Connect in Claude Code",
    description:
      "Add the server using the MCP CLI or configuration. Choose a scope that fits your workflow (local, project, or user).",
    example: undefined as string | undefined,
    resources: undefined as readonly string[] | undefined,
    tips: ["Use project scope for team-shared configs", "Keep config in version control"],
  },
  {
    step: "Test and validate",
    description:
      "List tools/prompts, run a simple read-only query, and confirm outputs match expectations.",
    tips: ["Add logging", "Document a smoke test"],
    example: undefined as string | undefined,
    resources: undefined as readonly string[] | undefined,
  },
] as const;

const integrationCategories = [
  {
    category: "Communication & Collaboration",
    tools: ["Slack", "Teams", "Discord", "Zoom"],
    useCases: "Summaries, meeting briefs, action items, broadcasts",
  },
  {
    category: "Project Management",
    tools: ["Linear", "Jira", "Asana", "Trello"],
    useCases: "Triage, status reporting, sprint updates",
  },
  {
    category: "Documentation & Knowledge",
    tools: ["Notion", "Confluence", "GitBook"],
    useCases: "Knowledge capture, documentation search, playbooks",
  },
  {
    category: "Development Tools",
    tools: ["GitHub", "GitLab", "Bitbucket"],
    useCases: "PR review, issue summaries, CI status",
  },
  {
    category: "Data & Analytics",
    tools: ["PostgreSQL", "MySQL", "BigQuery"],
    useCases: "Querying, reporting, analytics automation",
  },
  {
    category: "Productivity",
    tools: ["Google Workspace", "Microsoft 365", "Todoist"],
    useCases: "Email triage, calendar coordination, personal workflows",
  },
] as const;

const useCaseExamples = [
  {
    title: "Customer Support Automation",
    description: "Summarize ticket queues, draft replies, and post daily status updates.",
    integrations: ["Ticketing", "Slack", "Docs"],
  },
  {
    title: "DevOps Workflows",
    description: "Summarize CI failures, propose fixes, and draft rollback checklists.",
    integrations: ["GitHub", "CI/CD", "Chat"],
  },
  {
    title: "Content Research Pipeline",
    description: "Search, summarize sources, and draft briefs with citations.",
    integrations: ["Search", "Fetch", "Docs"],
  },
  {
    title: "Sales Intelligence",
    description: "Compile account updates and meeting briefs for upcoming calls.",
    integrations: ["CRM", "Email", "Calendar"],
  },
  {
    title: "Engineering Analytics",
    description: "Generate weekly sprint health and quality reports.",
    integrations: ["Database", "GitHub", "Linear"],
  },
  {
    title: "Personal Knowledge Management",
    description: "Capture notes, extract tasks, and keep a structured knowledge base.",
    integrations: ["Notion", "Docs", "Tasks"],
  },
] as const;

const customServerGuide = [
  {
    reason: "Tool-specific workflows",
    example: "Your company uses a proprietary CRM or internal tool",
    approach: "Build a custom MCP server using the SDK to expose tool APIs",
  },
  {
    reason: "Data transformation needs",
    example: "You need ETL before data is useful",
    approach: "Create a server that cleans and normalizes data before exposure",
  },
  {
    reason: "Security requirements",
    example: "You need extra filtering or approval gates",
    approach: "Wrap APIs with additional auth and policy checks",
  },
  {
    reason: "Performance optimization",
    example: "External APIs have rate limits",
    approach: "Add caching, batching, and throttling in the server",
  },
] as const;

const bestPractices = [
  "Start with read-only integrations before enabling write permissions",
  "Test each MCP server independently before combining multiple servers",
  "Document configuration and prompts for team consistency",
  "Use separate credentials for dev and production",
  "Monitor usage and costs for third-party services",
  "Keep servers updated for security patches",
  "Add logging for tool calls and failures",
] as const;

const troubleshooting = [
  {
    issue: "MCP server not appearing in Claude Code",
    solutions: [
      "Check configuration syntax and scope",
      "Verify the server is installed and running",
      "Restart Claude Code to reload configuration",
      "Review server logs for startup errors",
    ],
  },
  {
    issue: "Authentication failures",
    solutions: [
      "Verify API keys and tokens",
      "Check token expiration and scopes",
      "Confirm OAuth redirect URIs",
      "Review vendor authentication docs",
    ],
  },
  {
    issue: "Rate limiting or quota errors",
    solutions: [
      "Cache results to reduce calls",
      "Batch requests where possible",
      "Add delays between calls",
      "Upgrade service plan if needed",
    ],
  },
] as const;

const securityConsiderations = [
  {
    title: "Credential Management",
    description: "Use environment variables or secret managers; avoid hardcoding keys.",
  },
  {
    title: "Least Privilege Access",
    description: "Grant only the minimum permissions needed and audit regularly.",
  },
  {
    title: "Data Privacy",
    description: "Filter sensitive data and avoid exposing secrets to tools.",
  },
  {
    title: "Audit Logging",
    description: "Log tool calls and errors for visibility and accountability.",
  },
] as const;

const related = [
  { title: "Email + Calendar", path: "/use-cases/claude-code/email-calendar" },
  { title: "Task Management", path: "/use-cases/claude-code/task-management" },
  { title: "Browser Research", path: "/use-cases/claude-code/browser-research" },
  { title: "MCP for Beginners Guide", path: "/guides/mcp-for-beginners" },
] as const;

export default function ClaudeCodeMcpIntegrationsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Use Cases", href: "/use-cases" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "MCP Integrations" },
      ]}
      eyebrow="Claude Code"
      title="MCP Integrations"
      description="Extend Claude Code with MCP servers to connect your tools and automate multi-step workflows."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">
          MCP servers connect Claude Code to external tools, services, and data
          sources through a standardized protocol. That makes integrations
          reusable across workflows and enables more reliable automation.
        </p>
        <p className="text-sm text-muted-foreground">
          Start with one high-value server, keep permissions tight, and add
          review gates before enabling write actions.
        </p>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Popular integrations</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {popularIntegrations.map((integration) => (
            <div
              key={integration.name}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-serif text-xl">{integration.name}</h3>
                <span className="rounded-full bg-background px-2 py-1 text-xs">
                  {integration.setup}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {integration.description}
              </p>
              <div className="mt-3">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                  Capabilities
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {integration.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-full bg-background/50 px-2 py-1 text-xs text-muted-foreground"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Setup guide</h2>
        <div className="grid gap-4">
          {setupSteps.map((item, index) => (
            <div
              key={item.step}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-xs font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-lg">{item.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  {item.example && (
                    <pre className="mt-3 overflow-x-auto rounded-lg bg-background/50 p-3 text-xs">
                      <code>{item.example}</code>
                    </pre>
                  )}
                  {item.resources && (
                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                      {item.resources.map((resource) => (
                        <li key={resource} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                          <span>{resource}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.tips && (
                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                      {item.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Integration categories</h2>
        <div className="grid gap-4">
          {integrationCategories.map((category) => (
            <div
              key={category.category}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-xl">{category.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-background px-3 py-1 text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="text-muted-foreground/70">Use cases: </span>
                {category.useCases}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Real-world use case examples</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {useCaseExamples.map((example) => (
            <div
              key={example.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{example.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {example.description}
              </p>
              <div className="mt-3">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                  Integrations Used
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {example.integrations.map((integration) => (
                    <span
                      key={integration}
                      className="rounded-full bg-background/50 px-2 py-1 text-xs text-muted-foreground"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Building custom MCP servers</h2>
        <p className="text-sm text-muted-foreground">
          When existing servers don’t meet your needs, build a custom MCP server
          using the SDK. This is especially useful for internal tools, custom
          policies, or performance optimizations.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {customServerGuide.map((item) => (
            <div
              key={item.reason}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.reason}</h3>
              <p className="mt-2 text-sm text-muted-foreground/70">
                Example: {item.example}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">Approach: </span>
                {item.approach}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Security considerations</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {securityConsiderations.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
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
        <h2 className="font-serif text-2xl">Troubleshooting</h2>
        <div className="grid gap-4">
          {troubleshooting.map((item) => (
            <div
              key={item.issue}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.issue}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {item.solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Related resources</h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
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
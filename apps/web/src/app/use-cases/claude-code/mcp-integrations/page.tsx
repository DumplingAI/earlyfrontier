import PageShell from "@/components/page-shell";

const popularIntegrations = [
  {
    name: "Google Workspace",
    description: "Gmail, Calendar, Drive, and Docs integration for productivity workflows",
    capabilities: ["Email management", "Calendar scheduling", "Document access", "File storage"],
    setup: "medium",
  },
  {
    name: "Slack",
    description: "Team communication and channel management",
    capabilities: ["Send messages", "Read channels", "Manage threads", "Bot integration"],
    setup: "easy",
  },
  {
    name: "Notion",
    description: "All-in-one workspace for notes, databases, and wikis",
    capabilities: ["Read databases", "Create pages", "Update properties", "Search content"],
    setup: "medium",
  },
  {
    name: "Linear",
    description: "Issue tracking and project management",
    capabilities: ["Create issues", "Update status", "Query filters", "Manage labels"],
    setup: "easy",
  },
  {
    name: "GitHub",
    description: "Code repository and development workflow management",
    capabilities: ["Manage repos", "Create PRs", "Review code", "Check CI status"],
    setup: "easy",
  },
  {
    name: "PostgreSQL / MySQL",
    description: "Direct database access for queries and data analysis",
    capabilities: ["Run queries", "Analyze schemas", "Export data", "Migration support"],
    setup: "medium",
  },
] as const;

const setupSteps = [
  {
    step: "Find or build an MCP server",
    description: "Browse available MCP servers or create your own using the MCP SDK",
    resources: ["Official MCP registry", "Community servers on GitHub", "MCP SDK documentation"],
    example: undefined as string | undefined,
    tips: undefined as readonly string[] | undefined,
    configLocation: undefined as string | undefined,
    testCommands: undefined as readonly string[] | undefined,
  },
  {
    step: "Install the server",
    description: "Install via npm, pip, or other package managers depending on the server",
    example: "npm install @modelcontextprotocol/server-notion",
    resources: undefined as readonly string[] | undefined,
    tips: undefined as readonly string[] | undefined,
    configLocation: undefined as string | undefined,
    testCommands: undefined as readonly string[] | undefined,
  },
  {
    step: "Configure authentication",
    description: "Set up API keys, OAuth tokens, or other credentials required by the service",
    tips: ["Store credentials securely", "Use environment variables", "Follow least-privilege principle"],
    example: undefined as string | undefined,
    resources: undefined as readonly string[] | undefined,
    configLocation: undefined as string | undefined,
    testCommands: undefined as readonly string[] | undefined,
  },
  {
    step: "Add to Claude Code config",
    description: "Update your MCP configuration file to include the new server",
    configLocation: "~/.claude/mcp_config.json",
    example: undefined as string | undefined,
    resources: undefined as readonly string[] | undefined,
    tips: undefined as readonly string[] | undefined,
    testCommands: undefined as readonly string[] | undefined,
  },
  {
    step: "Test the connection",
    description: "Verify the server appears in Claude Code and test basic operations",
    testCommands: ["List available tools", "Try a simple query", "Check error handling"],
    example: undefined as string | undefined,
    resources: undefined as readonly string[] | undefined,
    tips: undefined as readonly string[] | undefined,
    configLocation: undefined as string | undefined,
  },
] as const;

const integrationCategories = [
  {
    category: "Communication & Collaboration",
    tools: ["Slack", "Discord", "Microsoft Teams", "Zoom"],
    useCases: "Team notifications, meeting scheduling, message automation, bot interactions",
  },
  {
    category: "Project Management",
    tools: ["Linear", "Jira", "Asana", "Trello", "Monday.com"],
    useCases: "Task creation, sprint planning, status tracking, workflow automation",
  },
  {
    category: "Documentation & Knowledge",
    tools: ["Notion", "Confluence", "GitBook", "Obsidian"],
    useCases: "Wiki management, documentation search, content creation, knowledge graphs",
  },
  {
    category: "Development Tools",
    tools: ["GitHub", "GitLab", "Bitbucket", "Docker", "Kubernetes"],
    useCases: "Code review, deployment, CI/CD management, container orchestration",
  },
  {
    category: "Data & Analytics",
    tools: ["PostgreSQL", "MongoDB", "Redis", "Snowflake", "BigQuery"],
    useCases: "Data queries, schema analysis, reporting, data migration",
  },
  {
    category: "Productivity & Personal",
    tools: ["Google Workspace", "Microsoft 365", "Todoist", "Evernote"],
    useCases: "Email triage, calendar management, note-taking, task tracking",
  },
] as const;

const useCaseExamples = [
  {
    title: "Customer Support Automation",
    description: "Connect to Zendesk or Intercom to read tickets, draft responses, and update status based on issue analysis.",
    integrations: ["Zendesk", "Slack", "Notion"],
  },
  {
    title: "DevOps Workflows",
    description: "Combine GitHub, CI/CD tools, and cloud providers to automate deployments, rollbacks, and monitoring.",
    integrations: ["GitHub", "AWS/GCP", "Datadog"],
  },
  {
    title: "Content Marketing Pipeline",
    description: "Research topics via web search, draft content, save to CMS, and schedule social posts all from Claude Code.",
    integrations: ["Web Search", "WordPress", "Buffer/Hootsuite"],
  },
  {
    title: "Sales Intelligence",
    description: "Pull data from CRM, enrich with web research, update deal stages, and send follow-up emails automatically.",
    integrations: ["Salesforce", "LinkedIn", "Gmail"],
  },
  {
    title: "Engineering Analytics",
    description: "Query databases for metrics, pull GitHub activity, analyze sprint velocity, and generate engineering reports.",
    integrations: ["PostgreSQL", "GitHub", "Linear", "Notion"],
  },
  {
    title: "Personal Knowledge Management",
    description: "Sync notes across Notion and Obsidian, extract tasks to Linear, and maintain a personal wiki with automatic linking.",
    integrations: ["Notion", "Obsidian", "Linear"],
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
    example: "Complex data processing before making it available to Claude",
    approach: "Create a server that handles ETL and exposes clean data interfaces",
  },
  {
    reason: "Security requirements",
    example: "Need additional authentication layers or data filtering",
    approach: "Wrap existing APIs with custom security logic in your MCP server",
  },
  {
    reason: "Performance optimization",
    example: "Caching, rate limiting, or request batching for external APIs",
    approach: "Build middleware layer that optimizes API calls",
  },
] as const;

const bestPractices = [
  "Start with read-only integrations before enabling write permissions",
  "Test each MCP server independently before combining multiple servers",
  "Document your MCP configuration for team consistency",
  "Use separate API keys for development and production environments",
  "Monitor API usage and costs for third-party services",
  "Keep MCP servers updated to get latest features and security patches",
  "Implement proper error handling for network failures and API limits",
] as const;

const troubleshooting = [
  {
    issue: "MCP server not appearing in Claude Code",
    solutions: [
      "Check configuration file syntax and path",
      "Verify server is properly installed",
      "Restart Claude Code to reload configuration",
      "Check server logs for startup errors",
    ],
  },
  {
    issue: "Authentication failures",
    solutions: [
      "Verify API keys and tokens are correct",
      "Check token expiration dates",
      "Ensure proper OAuth scopes are granted",
      "Review service-specific authentication docs",
    ],
  },
  {
    issue: "Rate limiting or quota errors",
    solutions: [
      "Implement caching to reduce API calls",
      "Add delays between requests",
      "Upgrade service plan if hitting limits regularly",
      "Use batch operations where supported",
    ],
  },
] as const;

const securityConsiderations = [
  {
    title: "Credential Management",
    description: "Never hardcode API keys in configuration files. Use environment variables or secure credential stores.",
  },
  {
    title: "Least Privilege Access",
    description: "Grant only the minimum permissions needed for each integration. Review and audit access regularly.",
  },
  {
    title: "Data Privacy",
    description: "Be mindful of what data Claude has access to through MCP servers. Filter sensitive information when necessary.",
  },
  {
    title: "Audit Logging",
    description: "Enable logging for MCP server actions to track what operations were performed and when.",
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
      description="Extend Claude Code with MCP servers to connect your favorite tools and automate complex workflows across multiple platforms."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">
          MCP (Model Context Protocol) servers act as bridges between Claude Code and
          external tools, services, and data sources. Instead of building custom
          integrations for every tool, MCP provides a standardized way to connect
          Claude to virtually any service—from project management tools like Linear
          and Notion, to databases, APIs, and custom internal systems.
        </p>
        <p className="text-sm text-muted-foreground">
          This creates powerful automation possibilities: automatically triage support
          tickets, sync tasks across tools, analyze database queries, manage deployments,
          or orchestrate multi-tool workflows—all through natural language conversations.
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
          When existing MCP servers don't meet your needs, build custom servers using
          the MCP SDK. This is useful for connecting internal tools, implementing
          custom business logic, or wrapping proprietary APIs.
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

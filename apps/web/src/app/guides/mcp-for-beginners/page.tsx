import PageShell from "@/components/page-shell";

const tldr = [
  "MCP is like USB for AI agents",
  "Connects external tools without custom code",
  "Start with one high-value server",
  "Test with simple workflows first",
  "Security matters: only expose what you need",
  "MCP servers are reusable across projects",
] as const;

const coreConcepts = [
  {
    title: "Servers",
    description:
      "Programs that expose tools, resources, or prompts to AI agents. Think of them as plugins that give your AI new capabilities.",
  },
  {
    title: "Tools",
    description:
      "Actions the AI can perform, like reading files, querying databases, or sending emails. Each tool has defined inputs and outputs.",
  },
  {
    title: "Resources",
    description:
      "Data sources the AI can read from, like file contents, API responses, or database records. Resources are read-only references.",
  },
  {
    title: "Prompts",
    description:
      "Pre-packaged prompt templates that servers can provide. These help standardize common workflows across your team.",
  },
] as const;

const gettingStarted = [
  {
    step: "Install MCP support",
    description:
      "Ensure your AI client (like Claude Code) supports MCP. Most recent versions include MCP support out of the box.",
  },
  {
    step: "Choose your first server",
    description:
      "Start simple: filesystem for document access, or time for date/time operations. Pick one that solves an immediate need.",
  },
  {
    step: "Configure the server",
    description:
      "Add the server to your MCP configuration file. Most servers need just a command and optional environment variables.",
  },
  {
    step: "Test the connection",
    description:
      "Verify the server appears in your AI client. Try a simple query to confirm it's working before building complex workflows.",
  },
] as const;

const useCases = [
  {
    category: "Development",
    title: "Code repository analysis",
    description:
      "Connect filesystem and git servers to analyze codebases, track changes, and understand project structure without manual file reading.",
    servers: ["@modelcontextprotocol/server-filesystem", "git-server"],
  },
  {
    category: "Development",
    title: "Database exploration",
    description:
      "Query databases directly from your AI conversation. Test queries, explore schemas, and analyze data without switching tools.",
    servers: ["@modelcontextprotocol/server-postgres", "sqlite-server"],
  },
  {
    category: "Productivity",
    title: "Email and calendar management",
    description:
      "Read emails, schedule meetings, and manage your calendar. Let AI handle routine email triage and scheduling conflicts.",
    servers: ["gmail-server", "google-calendar-server"],
  },
  {
    category: "Productivity",
    title: "Research and summarization",
    description:
      "Connect web search and content fetching to gather information, summarize articles, and compile research without copy-paste.",
    servers: ["brave-search-server", "web-fetch-server"],
  },
  {
    category: "Business",
    title: "Data analysis and reporting",
    description:
      "Pull data from multiple sources, run analyses, and generate reports. Combine database, spreadsheet, and API data seamlessly.",
    servers: ["postgres-server", "sheets-server", "rest-api-server"],
  },
  {
    category: "Business",
    title: "Process automation",
    description:
      "Chain together multiple tools to automate workflows. Connect project management, communication, and data systems for end-to-end automation.",
    servers: ["slack-server", "jira-server", "notion-server"],
  },
] as const;

const commonIssues = [
  {
    issue: "Server not appearing",
    solutions: [
      "Check MCP configuration file syntax",
      "Verify server installation and path",
      "Restart your AI client to reload configuration",
    ],
  },
  {
    issue: "Permission errors",
    solutions: [
      "Review file/folder access permissions",
      "Check environment variables are set correctly",
      "Ensure server has necessary API credentials",
    ],
  },
  {
    issue: "Server crashes or timeouts",
    solutions: [
      "Check server logs for error messages",
      "Reduce query complexity or batch size",
      "Verify external services are accessible",
    ],
  },
] as const;

const bestPractices = [
  "Only expose data and tools you trust the AI to access",
  "Start with read-only servers before adding write capabilities",
  "Test servers independently before using in complex workflows",
  "Document your MCP configuration for team consistency",
  "Keep server versions updated for security and features",
] as const;

const popularServers = [
  {
    category: "File & Data",
    servers: [
      { name: "Filesystem", description: "Read and write local files" },
      {
        name: "PostgreSQL",
        description: "Query and manage Postgres databases",
      },
      { name: "SQLite", description: "Work with SQLite databases" },
    ],
  },
  {
    category: "Web & APIs",
    servers: [
      { name: "Brave Search", description: "Web search capabilities" },
      { name: "Fetch", description: "Retrieve web content and APIs" },
      { name: "Puppeteer", description: "Browser automation and scraping" },
    ],
  },
  {
    category: "Productivity",
    servers: [
      { name: "Google Calendar", description: "Manage calendar events" },
      { name: "Gmail", description: "Read and send emails" },
      { name: "Slack", description: "Send messages and manage channels" },
    ],
  },
  {
    category: "Development",
    servers: [
      { name: "Git", description: "Version control operations" },
      { name: "GitHub", description: "Manage repos, issues, and PRs" },
      { name: "Memory", description: "Persistent context across sessions" },
    ],
  },
] as const;

export default function MCPForBeginnersPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "MCP for Beginners" },
      ]}
      eyebrow="Guide"
      title="MCP for Beginners"
      description="A practical introduction to connecting tools to AI agents."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <div className="grid gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Author: Manus AI - January 12, 2026
          </p>
          <h2 className="font-serif text-2xl">Introduction</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          The Model Context Protocol (MCP) is a standardized way to connect AI
          agents to external tools and data sources. Think of it as USB ports for
          AI—a universal interface that lets any AI client connect to any tool
          through a common protocol. Instead of building custom integrations for
          each tool, MCP provides a single standard that works everywhere.
        </p>
        <p className="text-sm text-muted-foreground">
          Whether you need to access your filesystem, query databases, search the
          web, or integrate with productivity tools, MCP servers make it possible
          without writing integration code. This guide walks you through the
          fundamentals and gets you started with your first MCP server.
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
        <h2 className="font-serif text-2xl">What is MCP?</h2>
        <div className="grid gap-4">
          <div className="glass-card rounded-2xl border border-border/70 p-5">
            <h3 className="font-serif text-xl">
              A protocol for AI tool connections
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              MCP defines how AI agents discover and use external tools. Instead
              of each AI client implementing its own integration for every tool,
              MCP provides a standard protocol. Build once, use everywhere.
            </p>
          </div>
          <div className="glass-card rounded-2xl border border-border/70 p-5">
            <h3 className="font-serif text-xl">How it compares to alternatives</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Unlike custom APIs or one-off plugins, MCP is client-agnostic. An
              MCP server works with Claude Code, future AI tools, and any client
              that supports the protocol. It's standardized, open, and reusable.
            </p>
          </div>
          <div className="glass-card rounded-2xl border border-border/70 p-5">
            <h3 className="font-serif text-xl">When to use MCP</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Use MCP when your AI workflows need external data or actions: reading
              files, querying databases, calling APIs, managing email, or
              automating tasks. If you find yourself manually copying data into AI
              conversations, MCP can automate it.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Core concepts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {coreConcepts.map((concept) => (
            <div
              key={concept.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-xl">{concept.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Getting started</h2>
        <div className="grid gap-4">
          {gettingStarted.map((item, index) => (
            <div
              key={item.step}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-xs font-medium">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl">{item.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Practical use cases</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {useCase.category}
              </div>
              <h3 className="font-serif text-xl">{useCase.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {useCase.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {useCase.servers.map((server) => (
                  <span
                    key={server}
                    className="rounded-full bg-background/50 px-2 py-1 text-xs text-muted-foreground"
                  >
                    {server}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Troubleshooting common issues</h2>
        <div className="grid gap-4">
          {commonIssues.map((item) => (
            <div
              key={item.issue}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-xl">{item.issue}</h3>
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
        <h2 className="font-serif text-2xl">Popular MCP servers</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {popularServers.map((category) => (
            <div
              key={category.category}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.servers.map((server) => (
                  <div key={server.name}>
                    <div className="font-medium text-sm">{server.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {server.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Next steps</h2>
        <div className="grid gap-4">
          <div className="glass-card rounded-2xl border border-border/70 p-5">
            <h3 className="font-serif text-xl">Building custom servers</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              When existing servers don't meet your needs, build your own using the
              MCP SDK. It takes 30-60 minutes to create a basic server that exposes
              your custom tools or data sources.
            </p>
          </div>
          <div className="glass-card rounded-2xl border border-border/70 p-5">
            <h3 className="font-serif text-xl">Community resources</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore the official MCP documentation, browse community-built
              servers, and join discussions about new integrations and best
              practices.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-foreground p-10 text-background md:p-12">
        <h2 className="font-serif text-3xl">Start with one server</h2>
        <p className="max-w-3xl text-sm text-background/80">
          Pick a single high-value MCP server that solves an immediate problem.
          Install it, test it with a simple workflow, and expand from there. The
          best way to learn MCP is to use it for something real.
        </p>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-background/70">
          <span>Integrations</span>
          <span>Use cases</span>
          <span>Workflows</span>
        </div>
      </section>
    </PageShell>
  );
}

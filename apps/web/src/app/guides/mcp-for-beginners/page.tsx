import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP for Beginners | Early Frontier",
  description: "A practical introduction to connecting tools to AI agents.",
};

const tldr = [
  "MCP is an open protocol for connecting AI clients to tools and data",
  "Servers expose tools, resources, and prompts",
  "Messages follow JSON-RPC 2.0",
  "Start with a small, read-only server",
  "Use least-privilege credentials and separate environments",
  "Prefer authenticated transports for remote servers",
] as const;

const coreConcepts = [
  {
    title: "Servers",
    description:
      "Servers expose capabilities to clients. They can provide tools (actions), resources (data), and prompts (templates) over the MCP protocol.",
  },
  {
    title: "Tools",
    description:
      "Model-controlled actions like API calls, file writes, or database queries. Clients can apply permission gates before execution.",
  },
  {
    title: "Resources",
    description:
      "Client-attached context such as file contents, database records, or API responses. Resources are typically read-only.",
  },
  {
    title: "Prompts",
    description:
      "User-controlled templates that standardize common workflows. In Claude Code, MCP prompts can appear as slash commands.",
  },
] as const;

const gettingStarted = [
  {
    step: "Confirm MCP support in your client",
    description:
      "Use a client that supports MCP servers, prompts, and tools. Claude Code includes MCP support and can discover prompts dynamically.",
  },
  {
    step: "Choose a first server with low risk",
    description:
      "Start with a local, read-only server like filesystem or a sandbox database. Avoid write permissions until the workflow is stable.",
  },
  {
    step: "Connect the server",
    description:
      "Add the server using your client’s configuration or CLI. In Claude Code, the MCP CLI supports local, project, and user scopes.",
  },
  {
    step: "Test the connection",
    description:
      "List available tools and prompts, then run a simple read-only action to confirm output shape and permissions.",
  },
  {
    step: "Lock down permissions",
    description:
      "Use least privilege, audit logs, and separate credentials for dev vs production. Add human review for write actions.",
  },
] as const;

const useCases = [
  {
    category: "Development",
    title: "Codebase analysis",
    description:
      "Connect filesystem and version control servers to map architecture, find ownership, and review changes quickly.",
    servers: ["filesystem", "git"],
  },
  {
    category: "Development",
    title: "Database exploration",
    description:
      "Query schemas and run read-only analyses directly from your AI client without context switching.",
    servers: ["postgres", "mysql", "sqlite"],
  },
  {
    category: "Productivity",
    title: "Email and calendar",
    description:
      "Summarize inboxes, prepare meeting briefs, and draft replies with explicit approval steps.",
    servers: ["email", "calendar"],
  },
  {
    category: "Research",
    title: "Web search and retrieval",
    description:
      "Gather sources, extract key facts, and build structured research briefs without copy-paste.",
    servers: ["web search", "fetch"],
  },
  {
    category: "Business",
    title: "Reporting and analytics",
    description:
      "Combine CRM, spreadsheets, and databases to generate weekly reporting and KPI rollups.",
    servers: ["sheets", "crm", "database"],
  },
  {
    category: "Operations",
    title: "Workflow automation",
    description:
      "Chain tools like tickets + chat + docs to automate triage, handoffs, and status updates.",
    servers: ["ticketing", "chat", "docs"],
  },
] as const;

const commonIssues = [
  {
    issue: "Server not appearing",
    solutions: [
      "Verify the server command and working directory",
      "Restart the client to reload MCP configuration",
      "Check server logs for startup errors",
    ],
  },
  {
    issue: "Permission errors",
    solutions: [
      "Confirm credentials and scopes",
      "Use read-only access while testing",
      "Verify the client’s allowed directories",
    ],
  },
  {
    issue: "Slow or failing requests",
    solutions: [
      "Reduce query size or add pagination",
      "Check upstream API limits and quotas",
      "Add caching or batching in the server",
    ],
  },
] as const;

const bestPractices = [
  "Treat MCP servers like production integrations: secure, versioned, and monitored",
  "Start with read-only tools and add write access only with review steps",
  "Document prompt templates and expected outputs for repeatability",
  "Separate dev and prod credentials to reduce risk",
  "Prefer scoped access and data filters over broad permissions",
] as const;

const popularServers = [
  {
    category: "File & Data",
    servers: [
      { name: "Filesystem", description: "Read project files and docs" },
      { name: "Git", description: "Inspect history, diffs, and blame" },
      { name: "PostgreSQL", description: "Query relational data" },
    ],
  },
  {
    category: "Web & APIs",
    servers: [
      { name: "HTTP Fetch", description: "Retrieve web pages and APIs" },
      { name: "Search", description: "Find sources and references" },
      { name: "Browser automation", description: "Scripted browsing or scraping" },
    ],
  },
  {
    category: "Productivity",
    servers: [
      { name: "Email", description: "Summaries, drafts, triage" },
      { name: "Calendar", description: "Availability and scheduling" },
      { name: "Docs/Wiki", description: "Read and update knowledge" },
    ],
  },
  {
    category: "Operations",
    servers: [
      { name: "Tickets", description: "Triage and update issues" },
      { name: "Chat", description: "Summaries and announcements" },
      { name: "CRM", description: "Account context and reporting" },
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
          The Model Context Protocol (MCP) is an open standard for connecting AI
          clients to external tools and data sources. It gives models a consistent
          way to use tools (actions), access resources (data), and run prompts
          (templates) without custom per-app integrations.
        </p>
        <p className="text-sm text-muted-foreground">
          With MCP, a single server can work with multiple clients that support the
          protocol. The result is reusable integrations, clearer permissions, and
          workflows that are easier to standardize across teams.
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
              A standard protocol for tool connections
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              MCP defines a consistent, JSON-RPC-based interface that clients and
              servers can use to exchange tools, resources, and prompts. That
              standardization is what makes integrations reusable.
            </p>
          </div>
          <div className="glass-card rounded-2xl border border-border/70 p-5">
            <h3 className="font-serif text-xl">How it differs from one-off plugins</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Rather than building bespoke integrations per client, MCP lets a
              server expose capabilities once and makes them available to any
              MCP-capable client. This reduces maintenance and improves
              consistency across tools.
            </p>
          </div>
          <div className="glass-card rounded-2xl border border-border/70 p-5">
            <h3 className="font-serif text-xl">When MCP is the right fit</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Use MCP when your workflows need data or actions from outside your
              AI client: files, tickets, databases, email, calendars, or web
              sources. If copy-paste is part of the workflow, MCP is usually the
              next step.
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
              <h3 className="font-serif text-lg">{concept.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Getting started</h2>
        <div className="grid gap-4 text-sm text-muted-foreground">
          {gettingStarted.map((item) => (
            <div
              key={item.step}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {item.step}
              </div>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Use cases</h2>
        <div className="grid gap-4">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {item.category}
              </div>
              <h3 className="mt-2 font-serif text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.servers.map((server) => (
                  <span
                    key={server}
                    className="rounded-full bg-background/60 px-2 py-1 text-xs text-muted-foreground"
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
        <h2 className="font-serif text-2xl">Common issues</h2>
        <div className="grid gap-4">
          {commonIssues.map((item) => (
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
        <h2 className="font-serif text-2xl">Common server categories</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {popularServers.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{group.category}</h3>
              <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {group.servers.map((server) => (
                  <div
                    key={server.name}
                    className="rounded-lg border border-border/60 bg-background/60 px-3 py-2"
                  >
                    <span className="font-medium text-foreground">
                      {server.name}
                    </span>
                    <span className="text-muted-foreground"> — {server.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
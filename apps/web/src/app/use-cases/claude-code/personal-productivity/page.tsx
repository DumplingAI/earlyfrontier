import PageShell from "@/components/page-shell";

const workflows = [
  {
    title: "Email and Calendar Management",
    path: "/use-cases/claude-code/email-calendar",
    description: "Automatically triage emails, schedule meetings, and manage your calendar with natural language commands",
    when: "Managing daily correspondence and scheduling",
  },
  {
    title: "Task and Project Tracking",
    path: "/use-cases/claude-code/task-management",
    description: "Create, update, and organize tasks across Linear, Notion, Jira, and other project management tools",
    when: "Coordinating projects and tracking deliverables",
  },
  {
    title: "Meeting Summaries",
    path: "/workflows/claude-code/meeting-summaries",
    description: "Generate structured summaries from meeting transcripts with action items, decisions, and key discussion points",
    when: "Documenting meetings and sharing outcomes",
  },
  {
    title: "Research and Reporting",
    path: "/use-cases/claude-code/browser-research",
    description: "Gather information from the web, synthesize findings, and create comprehensive research reports",
    when: "Conducting market research or competitive analysis",
  },
] as const;

const benefits = [
  {
    benefit: "Reclaim hours each week",
    description: "Automate repetitive admin tasks that don't require your expertise",
  },
  {
    benefit: "Stay organized effortlessly",
    description: "Keep tasks, emails, and notes synchronized without manual data entry",
  },
  {
    benefit: "Never miss important details",
    description: "Automated summaries and reminders ensure nothing falls through the cracks",
  },
  {
    benefit: "Work in natural language",
    description: "Skip complex UI workflows—just describe what you need in plain English",
  },
] as const;

const quickWins = [
  {
    task: "Daily email triage",
    prompt: "Scan my unread emails from today, categorize by urgency, and draft responses for the top 3 priority items",
    time: "Saves 30-45 minutes daily",
  },
  {
    task: "Meeting prep",
    prompt: "Check my calendar for tomorrow, research attendees' recent projects, and create a brief for each meeting",
    time: "Saves 15-20 minutes per meeting",
  },
  {
    task: "Weekly task review",
    prompt: "Show all my open tasks across Linear and Notion, group by project, and highlight anything overdue",
    time: "Saves 20-30 minutes weekly",
  },
  {
    task: "Research compilation",
    prompt: "Research the top 5 project management tools for remote teams, create a comparison table with pricing and key features",
    time: "Saves 1-2 hours per research task",
  },
] as const;

const productivityPrinciples = [
  "Connect high-value tools through MCP to eliminate context switching",
  "Automate recurring admin tasks so you can focus on strategic work",
  "Use natural language commands instead of navigating complex UIs",
  "Review automated outputs before acting—trust but verify",
  "Start with one workflow and expand once you see time savings",
] as const;

const integrationCombinations = [
  {
    combo: "Gmail + Google Calendar + Notion",
    useCase: "Complete personal productivity stack for solo entrepreneurs",
  },
  {
    combo: "Outlook + Teams + Linear",
    useCase: "Corporate productivity workflows for engineering teams",
  },
  {
    combo: "Brave Search + Web Fetch + Slack",
    useCase: "Research and team communication for distributed teams",
  },
] as const;

export default function ClaudeCodePersonalProductivityPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Use Cases", href: "/use-cases" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Personal Productivity" },
      ]}
      eyebrow="Claude Code"
      title="Personal Productivity"
      description="Automate admin work, manage communications, and coordinate tasks—all in natural language through MCP-connected tools."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">
          Personal productivity workflows help you reclaim time spent on repetitive admin tasks. By connecting Claude Code to your email, calendar, task management, and research tools through MCP, you can automate the busywork that consumes hours each week. Instead of manually checking emails, updating tasks, and researching topics, you describe what you need in natural language and Claude handles the execution.
        </p>
        <p className="text-sm text-muted-foreground">
          These workflows are particularly valuable for solo entrepreneurs, remote workers, and anyone managing multiple tools and communication channels. The combination of intelligent automation with human oversight means you maintain control while eliminating tedious, repetitive work.
        </p>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Core productivity workflows</h2>
        <div className="grid gap-4">
          {workflows.map((workflow) => (
            <a
              key={workflow.title}
              href={workflow.path}
              className="glass-card rounded-2xl border border-border/70 p-5 transition hover:border-foreground/40"
            >
              <h3 className="font-serif text-xl">{workflow.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{workflow.description}</p>
              <p className="mt-3 text-xs text-muted-foreground/70">
                <span className="font-medium">When to use: </span>
                {workflow.when}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Why use Claude Code for productivity</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item.benefit}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.benefit}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Quick wins to try today</h2>
        <div className="grid gap-4">
          {quickWins.map((item) => (
            <div
              key={item.task}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-lg">{item.task}</h3>
                <span className="shrink-0 text-xs text-muted-foreground/70">{item.time}</span>
              </div>
              <div className="mt-3 rounded-lg bg-background/50 p-3 text-sm italic text-muted-foreground">
                "{item.prompt}"
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Productivity principles</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {productivityPrinciples.map((principle) => (
            <div
              key={principle}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {principle}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Popular integration combinations</h2>
        <div className="grid gap-4">
          {integrationCombinations.map((item) => (
            <div
              key={item.combo}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.combo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.useCase}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

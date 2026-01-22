import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task and Project Management | Early Frontier",
  description: "Use Claude Code as your task orchestration layer to sync, prioritize, and manage work across multiple tools.",
};

const prerequisites = [
  {
    title: "Project Management Tool MCP Server",
    description: "Notion, Linear, Jira, or Asana MCP server for task sync",
  },
  {
    title: "Calendar Integration",
    description: "Google Calendar or Outlook MCP for deadline tracking",
  },
  {
    title: "File System Access",
    description: "Local file system server for project documentation",
  },
] as const;

const coreWorkflows = [
  {
    title: "Daily Task Triage",
    description:
      "Review new tasks, prioritize by urgency and importance, and plan your day.",
    steps: [
      "Fetch all new tasks assigned to you across connected tools",
      "Categorize tasks by project, priority, and estimated effort",
      "Identify tasks that can be delegated or deferred",
      "Create a focused daily task list with time blocks",
    ],
    examplePrompt:
      "Show me all my tasks from Linear and Notion. Group them by priority and create a plan for today focusing on high-impact work.",
  },
  {
    title: "Weekly Priority Review",
    description:
      "Analyze task backlog, identify bottlenecks, and reprioritize work for the upcoming week.",
    steps: [
      "Review completed tasks from the past week",
      "Analyze remaining tasks and estimated time to completion",
      "Identify dependencies and potential blockers",
      "Create a prioritized plan for the next week",
    ],
    examplePrompt:
      "Review my tasks from this week. What did I complete? What's overdue? Help me plan next week's priorities.",
  },
  {
    title: "Project Checklist Creation",
    description:
      "Generate comprehensive project checklists with subtasks and dependencies.",
    steps: [
      "Describe the project goal and key deliverables",
      "Have Claude break down into phases and tasks",
      "Add time estimates and dependencies",
      "Export to your project management tool",
    ],
    examplePrompt:
      "I'm launching a new marketing campaign. Create a detailed project checklist with all tasks, estimated times, and dependencies.",
  },
  {
    title: "Incoming Request Management",
    description:
      "Process new requests from email, Slack, or tickets into actionable tasks.",
    steps: [
      "Scan recent messages and emails for task requests",
      "Extract action items and context",
      "Assess urgency and assign to projects",
      "Create tasks in your project management system",
    ],
    examplePrompt:
      "Check my emails and Slack from today. Extract any tasks or requests, prioritize them, and add to my Linear backlog.",
  },
] as const;

const useCaseExamples = [
  {
    category: "Personal",
    title: "Daily Stand-up Prep",
    description:
      "Automatically generate yesterday's accomplishments, today's plan, and blockers for team stand-ups.",
  },
  {
    category: "Personal",
    title: "Time Tracking Summary",
    description:
      "Analyze time spent on different projects and tasks to improve future estimations.",
  },
  {
    category: "Team",
    title: "Sprint Planning Assistance",
    description:
      "Review team capacity, estimate story points, and suggest sprint allocations based on priorities.",
  },
  {
    category: "Team",
    title: "Dependency Mapping",
    description:
      "Identify task dependencies across team members to prevent blockers and optimize workflow.",
  },
  {
    category: "Management",
    title: "Project Status Reports",
    description:
      "Generate executive summaries of project progress with completion rates and risk assessments.",
  },
  {
    category: "Management",
    title: "Resource Allocation",
    description:
      "Analyze team workload and suggest task reallocation to balance capacity across members.",
  },
] as const;

const integrations = [
  {
    tool: "Linear",
    description: "Issue tracking and project management with MCP support",
    capabilities: ["Create issues", "Update status", "Query by filter", "Manage labels"],
  },
  {
    tool: "Notion",
    description: "All-in-one workspace for notes, tasks, and databases",
    capabilities: ["Read databases", "Create pages", "Update properties", "Search content"],
  },
  {
    tool: "Jira",
    description: "Agile project management and issue tracking",
    capabilities: ["Create tickets", "Update sprints", "Query JQL", "Manage boards"],
  },
  {
    tool: "Asana",
    description: "Work management platform for team collaboration",
    capabilities: ["Create tasks", "Update projects", "Manage sections", "Track progress"],
  },
] as const;

const bestPractices = [
  "Review task lists daily to stay aligned with priorities",
  "Use consistent labels and tags across tools for better filtering",
  "Set up automatic task creation for recurring workflows",
  "Block calendar time when creating tasks to ensure completion",
  "Keep task descriptions concise but include necessary context",
  "Use Claude.md to define your task prioritization criteria",
] as const;

const automationIdeas = [
  {
    title: "Email to Task Conversion",
    description:
      "Automatically convert action items from emails into tasks in your project management tool with proper labels and due dates.",
  },
  {
    title: "Meeting Notes to Tasks",
    description:
      "Extract action items from meeting transcripts or notes and create tracked tasks with assigned owners.",
  },
  {
    title: "Deadline Reminders",
    description:
      "Get proactive reminders for upcoming deadlines with suggestions for blocking focus time.",
  },
  {
    title: "Weekly Summary Reports",
    description:
      "Automatically generate weekly progress reports showing completed vs planned tasks with insights.",
  },
] as const;

const commonIssues = [
  {
    issue: "Tasks not syncing between tools",
    solution:
      "Verify MCP server connections and API permissions. Check that task IDs are properly tracked to prevent duplicate creation.",
  },
  {
    issue: "Incorrect priority assignments",
    solution:
      "Define clear prioritization criteria in your Claude.md file. Include examples of high vs low priority tasks for your context.",
  },
  {
    issue: "Overwhelming task lists",
    solution:
      "Use filters to focus on specific projects or time periods. Ask Claude to show only today's tasks or current sprint items.",
  },
] as const;

const advancedTips = [
  {
    title: "Smart Task Batching",
    description:
      "Group similar tasks together (e.g., all code reviews, all documentation updates) to minimize context switching and improve efficiency.",
  },
  {
    title: "Energy-Based Scheduling",
    description:
      "Track your energy levels throughout the day and have Claude schedule cognitively demanding tasks during your peak hours.",
  },
  {
    title: "Cross-Tool Insights",
    description:
      "Combine data from multiple tools (Linear issues + calendar events + email threads) to get a complete picture of project status.",
  },
  {
    title: "Template-Based Workflows",
    description:
      "Create task templates for recurring project types (feature launches, bug fixes, onboarding) that automatically populate with checklists.",
  },
] as const;

const related = [
  { title: "Meeting Summaries", path: "/workflows/claude-code/meeting-summaries" },
  { title: "Browser Research", path: "/use-cases/claude-code/browser-research" },
  { title: "Email + Calendar", path: "/use-cases/claude-code/email-calendar" },
] as const;

export default function ClaudeCodeTaskManagementPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Task Management" },
      ]}
      eyebrow="Claude Code"
      title="Task and Project Management"
      description="Use Claude Code as your task orchestration layer to sync, prioritize, and manage work across multiple tools."
    >
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">
          Claude Code can serve as your central task management hub, connecting to
          tools like Linear, Notion, Jira, and Asana through MCP servers. Instead of
          juggling multiple tools and browser tabs, manage all your tasks through
          natural language conversations. Get intelligent prioritization, automated
          task creation from various sources, and unified views across all your
          projects.
        </p>
        <p className="text-sm text-muted-foreground">
          This approach is particularly powerful for developers and product teams who
          work across multiple systems. Extract tasks from meeting notes, emails, and
          code comments, then route them to the appropriate project management tool
          with proper context and metadata.
        </p>
      </section>

      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Prerequisites</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {prerequisites.map((item) => (
            <div
              key={item.title}
              className=" border-2 border-border p-5"
            >
              <h3 className="font-sans text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Core workflows</h2>
        <div className="grid gap-6">
          {coreWorkflows.map((workflow) => (
            <div
              key={workflow.title}
              className=" border-2 border-border p-5"
            >
              <h3 className="font-sans text-xl">{workflow.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {workflow.description}
              </p>
              <div className="mt-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                  Steps
                </div>
                <ol className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {workflow.steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center  bg-background text-xs font-medium">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-4  bg-background/50 p-4">
                <div className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
                  Example Prompt
                </div>
                <p className="text-sm italic text-muted-foreground">
                  "{workflow.examplePrompt}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Use case examples</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {useCaseExamples.map((example) => (
            <div
              key={example.title}
              className=" border-2 border-border p-5"
            >
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {example.category}
              </div>
              <h3 className="font-sans text-lg">{example.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {example.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Supported integrations</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {integrations.map((integration) => (
            <div
              key={integration.tool}
              className=" border-2 border-border p-5"
            >
              <h3 className="font-sans text-xl">{integration.tool}</h3>
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
                      className=" bg-background/50 px-3 py-1 text-xs text-muted-foreground"
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

      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Best practices</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {bestPractices.map((practice) => (
            <div
              key={practice}
              className=" border-2 border-border px-4 py-3"
            >
              {practice}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Automation ideas</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {automationIdeas.map((idea) => (
            <div
              key={idea.title}
              className=" border-2 border-border p-5"
            >
              <h3 className="font-sans text-lg">{idea.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {idea.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Troubleshooting common issues</h2>
        <div className="grid gap-4">
          {commonIssues.map((item) => (
            <div
              key={item.issue}
              className=" border-2 border-border p-5"
            >
              <h3 className="font-sans text-lg">{item.issue}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Advanced tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {advancedTips.map((tip) => (
            <div
              key={tip.title}
              className=" border-2 border-border p-5"
            >
              <h3 className="font-sans text-lg">{tip.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Related workflows</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {related.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className=" border-2 border-border px-4 py-3 text-sm transition hover:border-foreground/40"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
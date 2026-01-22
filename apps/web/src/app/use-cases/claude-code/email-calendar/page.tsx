import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email and Calendar Management | Early Frontier",
  description: "Connect Claude Code to Gmail and Google Calendar to automate scheduling, inbox triage, and email workflows.",
};

const prerequisites = [
  {
    title: "Email and Calendar access",
    description: "Decide between browser automation (Claude in Chrome) or MCP API access",
  },
  {
    title: "OAuth Authentication (for MCP)",
    description: "Set up OAuth credentials for Google Workspace API access",
  },
  {
    title: "Approval workflow",
    description: "Require review before sending emails or creating events",
  },
] as const;

const coreWorkflows = [
  {
    title: "Inbox Triage and Prioritization",
    description:
      "Automatically scan unread emails, categorize by urgency, and surface action items.",
    steps: [
      "Ask Claude to fetch unread emails from the last 24 hours",
      "Request summarization grouped by sender or topic",
      "Identify emails requiring responses vs FYIs",
      "Create task list from action items found in emails",
    ],
    examplePrompt:
      "Scan my unread emails from today. Group them by urgency and give me a summary of each. Create a task list for any action items.",
  },
  {
    title: "Meeting Scheduling",
    description:
      "Find available time slots, check attendee availability, and send calendar invites.",
    steps: [
      "Ask Claude to check your calendar for the next week",
      "Specify meeting duration and preferred time windows",
      "Request availability check for specific attendees",
      "Have Claude create and send the calendar invite",
    ],
    examplePrompt:
      "Check my calendar for next week and find a 1-hour slot between 2-5pm when I'm free. Then create a meeting invite for the team standup.",
  },
  {
    title: "Email Drafting and Responses",
    description:
      "Generate email drafts based on context, tone, and recipient information.",
    steps: [
      "Provide context about the email thread or topic",
      "Specify tone (formal, casual, urgent) and key points",
      "Review and refine the draft with Claude",
      "Send directly or copy to your email client",
    ],
    examplePrompt:
      "Draft a professional but friendly email to the design team about the deadline extension. Keep it under 150 words and emphasize we're still on track.",
  },
  {
    title: "Calendar Management",
    description:
      "Reschedule meetings, block focus time, and optimize your calendar layout.",
    steps: [
      "Review your calendar with Claude for conflicts or gaps",
      "Request automatic rescheduling of non-critical meetings",
      "Block focus time for deep work based on your preferences",
      "Get notifications for upcoming important meetings",
    ],
    examplePrompt:
      "Look at my calendar for this week. Move any 1-on-1s that conflict with focus time, and block 2 hours each morning for deep work.",
  },
] as const;

const useCaseExamples = [
  {
    category: "Daily Routine",
    title: "Morning Email Briefing",
    description:
      "Get a 5-minute digest of overnight emails with action items flagged and prioritized by importance.",
  },
  {
    category: "Daily Routine",
    title: "End-of-Day Calendar Prep",
    description:
      "Review tomorrow's meetings, prepare agendas, and ensure no scheduling conflicts exist.",
  },
  {
    category: "Communication",
    title: "Bulk Email Management",
    description:
      "Unsubscribe from newsletters, archive old threads, and clean up your inbox automatically.",
  },
  {
    category: "Communication",
    title: "Follow-up Tracking",
    description:
      "Track emails waiting for responses and get reminders to follow up after 3 days.",
  },
  {
    category: "Scheduling",
    title: "Multi-Timezone Coordination",
    description:
      "Schedule meetings across time zones, accounting for attendee working hours and preferences.",
  },
  {
    category: "Scheduling",
    title: "Recurring Meeting Audit",
    description:
      "Identify recurring meetings you haven't attended in weeks and suggest cancellations.",
  },
] as const;

const configuration = [
  {
    step: "Choose your access method",
    details:
      "Use Claude in Chrome for browser-based automation, or MCP servers for API-level access and structured queries.",
    code: undefined as string | undefined,
  },
  {
    step: "Set up OAuth credentials",
    details:
      "Create a Google Cloud project, enable Gmail and Calendar APIs, and download OAuth credentials JSON (for MCP).",
    code: undefined as string | undefined,
  },
  {
    step: "Install an MCP server (optional)",
    details:
      "Choose a Gmail/Calendar MCP server from official or community sources and configure it with your OAuth credentials.",
    code: undefined as string | undefined,
  },
  {
    step: "Configure Claude Code",
    details:
      "If using MCP, add the servers to your Claude Code configuration file with the OAuth credentials path.",
    code: undefined as string | undefined,
  },
  {
    step: "Authenticate",
    details:
      "Run Claude Code and authenticate with Google to grant email and calendar access permissions.",
    code: undefined as string | undefined,
  },
] as const;

const bestPractices = [
  "Review email summaries before taking action to ensure accuracy",
  "Set up filters for sensitive emails that shouldn't be processed by AI",
  "Use specific time windows when scheduling to avoid odd meeting times",
  "Always review calendar invites before sending to external stakeholders",
  "Maintain a Claude.md file with your email preferences and common recipients",
  "Start with read-only operations before enabling send permissions",
] as const;

const commonIssues = [
  {
    issue: "OAuth authentication fails",
    solution:
      "Verify your OAuth credentials are correctly configured and have the required Gmail and Calendar API scopes enabled in Google Cloud Console.",
  },
  {
    issue: "Emails not appearing",
    solution:
      "Check your Gmail MCP server configuration and ensure the date range or search filters aren't too restrictive.",
  },
  {
    issue: "Calendar events creating duplicates",
    solution:
      "Use specific event IDs when updating existing events. Check for timezone mismatches in your configuration.",
  },
] as const;

const advancedTips = [
  {
    title: "Email Templates Library",
    description:
      "Create a collection of email templates in your Claude.md file for common scenarios like meeting requests, status updates, or customer responses.",
  },
  {
    title: "Smart Scheduling Rules",
    description:
      "Define rules for meeting scheduling (no meetings before 10am, buffer time between meetings, preferred meeting days) in your configuration.",
  },
  {
    title: "Integration with Task Management",
    description:
      "Combine email/calendar workflows with task management to automatically create tasks from meeting action items or email commitments.",
  },
  {
    title: "Email Analytics",
    description:
      "Ask Claude to analyze email patterns: who you exchange the most emails with, average response time, or common topics.",
  },
] as const;

const related = [
  { title: "Inbox Triage Workflow", path: "/workflows/claude-code/inbox-triage" },
  { title: "Task Management", path: "/use-cases/claude-code/task-management" },
  { title: "MCP Integrations", path: "/use-cases/claude-code/mcp-integrations" },
  { title: "Claude in Chrome", path: "/guides/claude-in-chrome" },
] as const;

export default function ClaudeCodeEmailCalendarPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Email + Calendar" },
      ]}
      eyebrow="Claude Code"
      title="Email and Calendar Management"
      description="Connect Claude Code to Gmail and Google Calendar to automate scheduling, inbox triage, and email workflows."
    >
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">
          Transform how you manage email and calendar by connecting Claude Code to
          your Google Workspace. Automate inbox triage, draft context-aware email
          responses, find meeting slots instantly, and optimize your calendar
          layout—all through natural language conversations. This eliminates the
          constant context switching between your terminal and email client.
        </p>
        <p className="text-sm text-muted-foreground">
          Use Claude in Chrome for fast, UI-driven automation, or MCP servers for
          structured API access. In both cases, keep approval steps for drafts
          and event creation so you stay in control.
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
        <h2 className="font-sans text-2xl">Setup and configuration</h2>
        <div className="grid gap-4">
          {configuration.map((item, index) => (
            <div
              key={item.step}
              className=" border-2 border-border p-5"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center  border-2 border-border bg-background text-xs font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-sans text-lg">{item.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.details}
                  </p>
                  {item.code && (
                    <pre className="mt-3 overflow-x-auto rounded-lg bg-background/50 p-3 text-xs">
                      <code>{item.code}</code>
                    </pre>
                  )}
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

      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
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

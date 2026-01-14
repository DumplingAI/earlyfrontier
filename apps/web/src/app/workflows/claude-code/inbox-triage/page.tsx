import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbox Triage | Early Frontier",
  description: "Reduce inbox time with prioritized summaries and draft replies.",
};

const overview = {
  description:
    "Email overload slows decisions and wastes time. Claude Code can triage inboxes via MCP servers, identify priorities, extract action items, and draft replies for review. Keep permissions tight and require approval before sending.",
  when: "Use this workflow when returning from vacation, processing daily email volume, preparing for meetings, or handling high-volume support communication.",
} as const;

const steps = [
  {
    step: "Connect email via MCP",
    description:
      "Set up an MCP server to give Claude access to your email. Configure permissions carefully to ensure Claude can read and draft but not send without approval.",
    example:
      '"Connect to my Gmail via MCP. I want read-only access initially. Show me the setup steps and required permissions."',
  },
  {
    step: "Define priority senders and topics",
    description:
      "Establish rules for what matters most. Identify VIP senders, urgent keywords, and time-sensitive topics that should surface to the top.",
    example:
      '"Prioritize: emails from our CEO or investors, anything mentioning \'urgent\' or \'deadline\', customer escalations, and security alerts. Deprioritize: newsletters, automated reports, and FYI-only messages."',
  },
  {
    step: "Summarize new messages with action items",
    description:
      "Have Claude scan unread messages, group by topic or sender, extract key information, and identify what requires your response or action.",
    example:
      '"Summarize my last 50 unread emails. Group by: customer issues, internal requests, external partnerships, and informational. For each, extract: who it\'s from, what they need, and deadline if mentioned."',
  },
  {
    step: "Draft replies for approval",
    description:
      "For messages requiring responses, have Claude draft appropriate replies based on context and your communication style. Review and edit before sending.",
    example:
      '"Draft replies for the three customer support emails. Use a professional but friendly tone. Acknowledge their issue, explain our solution timeline, and offer next steps."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Processing vacation backlog",
    prompt:
      "I have 200+ emails from the past week. First, filter out automated notifications and newsletters. Then prioritize by: 1) customer escalations, 2) internal blockers, 3) partnership opportunities. Summarize the top 20 in a table with sender, subject, urgency, and required action.",
  },
  {
    scenario: "Daily morning triage",
    prompt:
      "Review overnight emails. Flag anything from our top 10 customers, board members, or containing 'urgent'. For the rest, create a 3-sentence summary of what happened overnight that I should know about.",
  },
  {
    scenario: "Support ticket management",
    prompt:
      "Analyze the 15 new support tickets. Categorize by: bug report, feature request, account issue, or documentation question. For bug reports, extract: steps to reproduce, expected vs actual behavior, and user impact level.",
  },
  {
    scenario: "Preparing for meetings",
    prompt:
      "I have a meeting with the sales team in 30 minutes. Find all recent emails from sales@ mentioning deals, blockers, or questions. Summarize the context I need before the meeting.",
  },
] as const;

const outputs = [
  {
    output: "Priority summary",
    description:
      "Ranked list of emails requiring attention, organized by urgency and sender importance with key context for each",
  },
  {
    output: "Action list",
    description:
      "Extracted tasks and deadlines from your emails, formatted as a checklist with owners and due dates",
  },
  {
    output: "Draft replies",
    description:
      "Pre-written responses matching your tone and style, ready for review and sending with minimal editing",
  },
  {
    output: "Categorized archive",
    description:
      "Organized grouping of informational emails by topic, saving you time while ensuring nothing important is missed",
  },
] as const;

const bestPractices = [
  "Start with read-only access when setting up MCP—don't grant send permissions until you trust the workflow",
  "Define clear priority rules upfront so Claude knows what matters most in your role and context",
  "Review all draft replies before sending—Claude should accelerate, not replace, your communication",
  "Use this workflow consistently to train Claude on your communication style and preferences",
  "Set boundaries on after-hours triage to maintain work-life balance—inbox zero isn't worth burnout",
] as const;

const commonPitfalls = [
  {
    pitfall: "Granting too much access initially",
    solution:
      "Start with read-only, then gradually add draft permissions. Never grant auto-send without explicit approval gates.",
  },
  {
    pitfall: "Not reviewing drafted replies",
    solution:
      "Always read drafts before sending. Claude doesn't have full context on sensitive topics, relationships, or politics.",
  },
  {
    pitfall: "Over-automating personal communication",
    solution:
      "Use triage for high-volume operational emails. Write personal messages to key relationships yourself—authenticity matters.",
  },
] as const;

const tips = [
  {
    tip: "Create response templates for common scenarios",
    example:
      '"Create draft templates for: bug report acknowledgments, feature request thank-yous, and customer escalation responses. Include placeholders for specific details."',
  },
  {
    tip: "Set up automated morning briefs",
    example:
      '"Every weekday at 8am, generate a summary of overnight emails. Send it to me via Slack so I see priorities before opening my inbox."',
  },
  {
    tip: "Use sentiment analysis for customer emails",
    example:
      '"Analyze the tone of customer emails. Flag anything angry or frustrated in red, neutral in yellow, and positive in green. Prioritize angry messages first."',
  },
] as const;

const related = [
  { title: "Meeting Summaries", path: "/workflows/claude-code/meeting-summaries" },
  { title: "Context Management", path: "/workflows/claude-code/context-management" },
  { title: "Build Systems", path: "/workflows/claude-code/build-systems" },
] as const;

export default function InboxTriageWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflows", href: "/workflows" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Inbox Triage" },
      ]}
      eyebrow="Workflow"
      title="Inbox Triage"
      description="Reduce inbox time with prioritized summaries and draft replies."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">{overview.description}</p>
        <div className="rounded-xl bg-background/50 p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mb-2">
            When to use
          </div>
          <p className="text-sm text-muted-foreground">{overview.when}</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Step-by-step process</h2>
        <div className="grid gap-6">
          {steps.map((item, index) => (
            <div key={item.step} className="glass-card rounded-2xl border border-border/70 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-xs font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-lg">{item.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-3 rounded-lg bg-background/50 p-3 text-sm italic text-muted-foreground">
                    {item.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Example prompts</h2>
        <div className="grid gap-4">
          {examplePrompts.map((item) => (
            <div
              key={item.scenario}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {item.scenario}
              </div>
              <p className="text-sm italic text-muted-foreground">"{item.prompt}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Expected outputs</h2>
        <div className="grid gap-4">
          {outputs.map((item) => (
            <div
              key={item.output}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.output}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
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

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Common pitfalls</h2>
        <div className="grid gap-4">
          {commonPitfalls.map((item) => (
            <div
              key={item.pitfall}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg text-orange-600/90">{item.pitfall}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">Solution: </span>
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Pro tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tips.map((item) => (
            <div
              key={item.tip}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.tip}</h3>
              <p className="mt-2 text-sm italic text-muted-foreground">"{item.example}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Related workflows</h2>
        <div className="grid gap-3 md:grid-cols-3">
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
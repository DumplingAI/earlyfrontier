import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meeting Summaries | Early Frontier",
  description: "Turn transcripts into clear updates with action items.",
};

const overview = {
  description:
    "Meetings generate valuable information, but documenting decisions and action items is time-consuming. Claude Code turns transcripts into structured summaries, extracting decisions, owners, and follow-ups. Share summaries for confirmation before sending widely.",
  when: "Use this workflow after team meetings, client calls, brainstorming sessions, retrospectives, or any discussion where decisions and next steps matter.",
} as const;

const steps = [
  {
    step: "Upload transcript or meeting notes",
    description:
      "Provide Claude with the raw meeting content—audio transcripts from tools like Otter.ai, Fireflies, or manual notes. The more complete the source material, the better the summary.",
    example:
      '"Here\'s the transcript from our product planning meeting. It\'s about 45 minutes long and covers feature prioritization, timeline discussions, and resource allocation."',
  },
  {
    step: "Ask for key decisions and action items",
    description:
      "Direct Claude to extract the most important outcomes. Focus on decisions made, commitments given, and clarity on next steps and ownership.",
    example:
      '"Extract: 1) Decisions made and who made them, 2) Action items with owners and due dates, 3) Open questions that need follow-up, 4) Key disagreements or concerns raised."',
  },
  {
    step: "Generate a summary for stakeholders",
    description:
      "Create a formatted summary appropriate for your audience—detailed for participants, high-level for executives, or structured for project tracking.",
    example:
      '"Create two versions: A detailed summary for the team (with context and discussion), and an executive brief (just decisions and action items in bullet points)."',
  },
  {
    step: "Send follow-ups and tasks",
    description:
      "Use the summary to create task tickets, calendar reminders, and follow-up emails. Ensure everyone knows what they committed to and when it's due.",
    example:
      '"Create a follow-up email thanking attendees, summarizing decisions, and listing action items. Also generate individual task descriptions I can copy into Jira."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Product planning session",
    prompt:
      "Summarize this 2-hour product roadmap meeting. Organize by: Features we committed to for Q1, Features deferred to Q2, Resource needs identified, Risks and dependencies flagged. For each committed feature, note the owner and target completion date.",
  },
  {
    scenario: "Customer feedback call",
    prompt:
      "Analyze this customer interview transcript. Extract: Pain points mentioned (with quotes), Feature requests (ranked by emphasis), Workarounds they're currently using, Positive feedback about existing features. Include sentiment analysis.",
  },
  {
    scenario: "Sprint retrospective",
    prompt:
      "Create a retrospective summary from these notes. Categorize feedback into: What went well, What didn't go well, Action items to improve next sprint. For action items, suggest owners based on who raised each issue.",
  },
  {
    scenario: "Board meeting recap",
    prompt:
      "Generate an executive summary from this board meeting. Focus on: Strategic decisions, Financial approvals, Key metrics reviewed, Questions or concerns from board members, Follow-up items for management.",
  },
] as const;

const outputs = [
  {
    output: "Summary",
    description:
      "Structured overview of the meeting organized by topic, including context, discussion points, and outcomes",
  },
  {
    output: "Decisions",
    description:
      "Clear list of what was decided, who made the decision, rationale provided, and implications going forward",
  },
  {
    output: "Action items",
    description:
      "Specific tasks extracted with owners, due dates, dependencies, and priority levels clearly identified",
  },
  {
    output: "Follow-up questions",
    description:
      "Open items requiring additional input, research, or decisions before work can proceed",
  },
] as const;

const bestPractices = [
  "Use automated transcription services for accuracy—manual notes miss important details",
  "Process summaries within 24 hours while context is fresh and attendees remember the discussion",
  "Confirm action item owners and due dates before distributing—don't assume commitments",
  "Include quotes for important statements, especially decisions or concerns—exact wording matters",
  "Archive summaries in a searchable location—they become valuable historical context",
] as const;

const commonPitfalls = [
  {
    pitfall: "Summarizing without understanding context",
    solution:
      "Provide Claude with meeting purpose and attendee roles. Context about what's been decided previously helps produce accurate summaries.",
  },
  {
    pitfall: "Missing implicit action items",
    solution:
      "Ask Claude: 'What action items are implied but not explicitly stated?' People often commit to things without using the words 'action item'.",
  },
  {
    pitfall: "Not validating summaries with participants",
    solution:
      "Send summaries to key participants for review before wider distribution. Misunderstandings are easier to fix early.",
  },
] as const;

const tips = [
  {
    tip: "Create meeting templates by type",
    example:
      '"Create a standard template for sprint planning summaries: Committed stories, Stretch goals, Blockers identified, Team capacity. I want consistent formatting across sprints."',
  },
  {
    tip: "Link to previous decisions",
    example:
      '"This is our third planning meeting for Project X. Reference decisions from the previous two meetings (attached) and note if anything has changed or been revisited."',
  },
  {
    tip: "Generate status updates automatically",
    example:
      '"Based on the action items from last week\'s meeting and this week\'s progress updates, generate a status report showing what\'s done, in-progress, and blocked."',
  },
] as const;

const related = [
  { title: "Inbox Triage", path: "/workflows/claude-code/inbox-triage" },
  { title: "Context Management", path: "/workflows/claude-code/context-management" },
  { title: "Build Systems", path: "/workflows/claude-code/build-systems" },
] as const;

export default function MeetingSummariesWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Meeting Summaries" },
      ]}
      eyebrow="Workflow"
      title="Meeting Summaries"
      description="Turn transcripts into clear updates with action items."
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">{overview.description}</p>
        <div className=" bg-background/50 p-4">
          <div className="text-xs tracking-widest text-[#c9b8a0]/70 mb-2">
            When to use
          </div>
          <p className="text-sm text-muted-foreground">{overview.when}</p>
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Step-by-step process</h2>
        <div className="grid gap-6">
          {steps.map((item, index) => (
            <div key={item.step} className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] rounded-md text-xs font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif italic text-lg">{item.step}</h3>
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

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Example prompts</h2>
        <div className="grid gap-4">
          {examplePrompts.map((item) => (
            <div
              key={item.scenario}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <div className="mb-2 text-xs tracking-widest text-[#c9b8a0]/70">
                {item.scenario}
              </div>
              <p className="text-sm italic text-muted-foreground">"{item.prompt}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Expected outputs</h2>
        <div className="grid gap-4">
          {outputs.map((item) => (
            <div
              key={item.output}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.output}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Best practices</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {bestPractices.map((practice) => (
            <div
              key={practice}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {practice}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Common pitfalls</h2>
        <div className="grid gap-4">
          {commonPitfalls.map((item) => (
            <div
              key={item.pitfall}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg text-orange-600/90">{item.pitfall}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">Solution: </span>
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Pro tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tips.map((item) => (
            <div
              key={item.tip}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.tip}</h3>
              <p className="mt-2 text-sm italic text-muted-foreground">"{item.example}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Related workflows</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {related.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
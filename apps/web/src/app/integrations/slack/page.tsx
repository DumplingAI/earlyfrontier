import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slack | Early Frontier",
  description: "Turn conversations into summaries, tasks, and updates.",
};

const workflows = [
  "Daily channel summaries",
  "Action item extraction",
  "Support triage and escalation",
] as const;

const outcomes = [
  {
    title: "Fewer missed decisions",
    description: "Capture decisions and next steps from busy threads.",
  },
  {
    title: "Clearer handoffs",
    description: "Post structured summaries to shared channels.",
  },
  {
    title: "Faster support",
    description: "Surface urgent customer questions and route owners.",
  },
] as const;

const prompts = [
  "Summarize the last 24 hours in #support with owners and next steps.",
  "Extract decisions from the product review thread and create a recap.",
  "List unresolved questions in #incident-123 with suggested owners.",
] as const;

export default function SlackIntegrationPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Integrations", href: "/integrations" },
        { label: "Slack" },
      ]}
      eyebrow="Integration"
      title="Slack"
      description="Turn conversations into summaries, tasks, and updates."
    >
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Popular workflows</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {workflows.map((workflow) => (
            <div
              key={workflow}
              className=" border-2 border-border px-4 py-3"
            >
              {workflow}
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Outcomes teams care about</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {outcomes.map((item) => (
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
        <h2 className="font-sans text-2xl">Example prompts</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {prompts.map((item) => (
            <div
              key={item}
              className=" border-2 border-border px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
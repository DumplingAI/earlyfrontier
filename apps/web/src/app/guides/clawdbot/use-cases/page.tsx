import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clawdbot Use Cases | Early Frontier",
  description:
    "Concrete examples of Clawdbot in personal ops, team updates, and chat-based automation.",
};

const examples = [
  {
    title: "Personal operations",
    description:
      "Use chat messages to capture tasks, summarize notes, or route requests to the right agent workspace.",
  },
  {
    title: "Team updates",
    description:
      "Connect the agent to tooling so it can summarize status updates or produce reports in the same channel.",
  },
  {
    title: "Chat-based automation",
    description:
      "Trigger tool-enabled workflows from chat, then stream results back with context.",
  },
] as const;

const patterns = [
  "Multi-agent routing keeps different workflows isolated by channel or workspace.",
  "Session-aware conversations let agents retain context for each chat or group.",
  "Tool streaming enables longer workflows while keeping users in the loop.",
] as const;

export default function ClawdbotUseCasesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Clawdbot", href: "/guides/clawdbot" },
        { label: "Use cases" },
      ]}
      eyebrow="Clawdbot"
      title="Use cases"
      description="Concrete examples of Clawdbot in personal ops, team updates, and chat-based automation."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Examples</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {examples.map((item) => (
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
        <h2 className="font-serif text-2xl">Patterns that map to Early Frontier</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {patterns.map((item) => (
            <div
              key={item}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

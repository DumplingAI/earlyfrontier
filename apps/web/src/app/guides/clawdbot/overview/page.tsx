import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Clawdbot? | Early Frontier",
  description:
    "Clawdbot is a gateway that connects chat apps to Pi agents for AI-powered workflows.",
};

const differences = [
  {
    title: "Gateway-first",
    description:
      "Instead of a single-platform bot, Clawdbot routes messages from multiple chat apps through one gateway.",
  },
  {
    title: "Agent bridge",
    description:
      "The gateway forwards requests to a Pi agent running in RPC mode, keeping transport and agent logic separate.",
  },
  {
    title: "Ops-ready",
    description:
      "Designed for multi-session, tool-enabled workflows rather than lightweight rule-based responses.",
  },
] as const;

const supportedChannels = [
  "WhatsApp",
  "Telegram",
  "Discord",
  "iMessage",
  "Slack",
  "Signal",
  "WebChat",
] as const;

const gatewayModel = [
  "A single gateway process manages all channel connections and sessions.",
  "Messages are routed to a Pi agent (RPC) for reasoning and tool execution.",
  "Responses return through the same channel or surface the user started from.",
] as const;

export default function ClawdbotOverviewPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Clawdbot", href: "/guides/clawdbot" },
        { label: "Overview" },
      ]}
      eyebrow="Clawdbot"
      title="What is Clawdbot?"
      description="Clawdbot is a gateway that connects chat apps to Pi agents for AI-powered workflows."
    >
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">At a glance</h2>
        <p className="text-sm text-muted-foreground">
          Clawdbot connects familiar chat apps to an AI agent by routing every
          message through a local gateway and a Pi agent running in RPC mode.
        </p>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {gatewayModel.map((item) => (
            <div
              key={item}
              className=" border-2 border-border px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Who it is for</h2>
        <p className="text-sm text-muted-foreground">
          Clawdbot is best when you want to keep your team or personal workflow
          inside the chat tools you already use, while still giving the agent
          access to tools and multi-step workflows.
        </p>
      </section>

      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">How it differs from typical chatbots</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {differences.map((item) => (
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

      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Supported chat apps</h2>
        <div className="grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
          {supportedChannels.map((item) => (
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

import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clawdbot Architecture | Early Frontier",
  description:
    "Understand the Clawdbot gateway, ports, sessions, and message routing to Pi agents.",
};

const ports = [
  {
    title: "Control plane (local)",
    description: "WebSocket control plane on ws://127.0.0.1:18789 for local apps.",
  },
  {
    title: "Canvas host",
    description: "HTTP UI on http://<gateway-host>:18793 for the Canvas view.",
  },
] as const;

const routingSteps = [
  "Message arrives from WhatsApp, Telegram, Discord, or iMessage.",
  "Gateway validates allowlists and mention rules for the channel.",
  "Gateway forwards the request to a Pi agent via RPC.",
  "Agent streams the response back through the gateway.",
] as const;

const sessions = [
  "The gateway owns channel sessions (e.g., WhatsApp Web) so only one gateway runs per host.",
  "Sessions are per-sender by default, giving each chat a dedicated context stream.",
] as const;

export default function ClawdbotArchitecturePage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Clawdbot", href: "/guides/clawdbot" },
        { label: "Architecture" },
      ]}
      eyebrow="Clawdbot"
      title="Architecture: Gateway + Pi agents"
      description="Understand the gateway, ports, sessions, and how messages route to Pi agents."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">System diagram</h2>
        <pre className="glass-card overflow-x-auto rounded-2xl border border-border/70 bg-background/70 p-6 text-sm">
{`WhatsApp / Telegram / Discord / iMessage
        │
        ▼
   ┌───────────┐
   │  Gateway  │
   └────┬──────┘
        │
        ▼
     Pi Agent
      (RPC)`}
        </pre>
        <p className="text-sm text-muted-foreground">
          The gateway owns every channel connection, then forwards messages to a
          Pi agent that handles reasoning and tool execution.
        </p>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Gateway interfaces</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {ports.map((item) => (
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

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Sessions and ownership</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {sessions.map((item) => (
            <div
              key={item}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Message flow</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {routingSteps.map((item) => (
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

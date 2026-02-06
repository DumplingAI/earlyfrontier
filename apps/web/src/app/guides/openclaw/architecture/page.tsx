import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Openclaw Architecture | Early Frontier",
  description:
    "Understand the Openclaw gateway, ports, sessions, and message routing to Pi agents.",
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

export default function OpenclawArchitecturePage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Openclaw", href: "/guides/openclaw" },
        { label: "Architecture" },
      ]}
      eyebrow="Openclaw"
      title="Architecture: Gateway + Pi agents"
      description="Understand the gateway, ports, sessions, and how messages route to Pi agents."
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">System diagram</h2>
        <pre className="overflow-x-auto  border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-xl p-6 text-sm">
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

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Gateway interfaces</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {ports.map((item) => (
            <div
              key={item.title}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Sessions and ownership</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {sessions.map((item) => (
            <div
              key={item}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Message flow</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {routingSteps.map((item) => (
            <div
              key={item}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

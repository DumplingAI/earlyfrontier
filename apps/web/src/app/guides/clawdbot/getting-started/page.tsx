import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clawdbot Getting Started | Early Frontier",
  description:
    "Quick setup steps to install Clawdbot, log in, launch the gateway, and set a basic allowlist.",
};

const steps = [
  {
    title: "Install Clawdbot",
    description:
      "Install the CLI globally (Node.js 22+ required). Example: npm install -g clawdbot@latest.",
  },
  {
    title: "Log in",
    description:
      "Run clawdbot login to authenticate your gateway instance and pair a channel.",
  },
  {
    title: "Launch the gateway",
    description:
      "Run clawdbot gateway (or specify --port 18789). The gateway hosts the local control plane.",
  },
  {
    title: "Set a basic allowlist",
    description:
      "Add an allowFrom list for your channel so only approved IDs can message the agent.",
  },
] as const;

const workspaceNotes = [
  "Default workspace is ~/clawd unless overridden in configuration.",
  "Clawdbot stores an AGENTS.md file in the workspace to capture agent memory and notes.",
] as const;

const allowlistExample = `{
  "whatsapp": {
    "allowFrom": ["+15555550123"]
  }
}`;

export default function ClawdbotGettingStartedPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Clawdbot", href: "/guides/clawdbot" },
        { label: "Getting started" },
      ]}
      eyebrow="Clawdbot"
      title="Getting started"
      description="Quick setup steps to install Clawdbot, log in, launch the gateway, and set a basic allowlist."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Quick setup</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((item) => (
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
        <h2 className="font-serif text-2xl">Minimal allowlist example</h2>
        <p className="text-sm text-muted-foreground">
          Add this to ~/.clawdbot/clawdbot.json to allow a single WhatsApp
          number. You can also require mentions in groups to avoid accidental
          triggers.
        </p>
        <pre className="glass-card overflow-x-auto rounded-2xl border border-border/70 bg-background/70 p-6 text-sm">
          {allowlistExample}
        </pre>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Workspace and memory</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {workspaceNotes.map((item) => (
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

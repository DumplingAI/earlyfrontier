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
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Quick setup</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((item) => (
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
        <h2 className="font-sans text-2xl">Minimal allowlist example</h2>
        <p className="text-sm text-muted-foreground">
          Add this to ~/.clawdbot/clawdbot.json to allow a single WhatsApp
          number. You can also require mentions in groups to avoid accidental
          triggers.
        </p>
        <pre className="overflow-x-auto  border-2 border-border bg-background p-6 text-sm">
          {allowlistExample}
        </pre>
      </section>

      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Workspace and memory</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {workspaceNotes.map((item) => (
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

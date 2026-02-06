import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Openclaw Getting Started | Early Frontier",
  description:
    "Quick setup steps to install Openclaw, log in, launch the gateway, and set a basic allowlist.",
};

const steps = [
  {
    title: "Install Openclaw",
    description:
      "Install the CLI globally (Node.js 22+ required). Example: npm install -g openclaw@latest.",
  },
  {
    title: "Log in",
    description:
      "Run openclaw login to authenticate your gateway instance and pair a channel.",
  },
  {
    title: "Launch the gateway",
    description:
      "Run openclaw gateway (or specify --port 18789). The gateway hosts the local control plane.",
  },
  {
    title: "Set a basic allowlist",
    description:
      "Add an allowFrom list for your channel so only approved IDs can message the agent.",
  },
] as const;

const workspaceNotes = [
  "Default workspace is ~/clawd unless overridden in configuration.",
  "Openclaw stores an AGENTS.md file in the workspace to capture agent memory and notes.",
] as const;

const allowlistExample = `{
  "whatsapp": {
    "allowFrom": ["+15555550123"]
  }
}`;

export default function OpenclawGettingStartedPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Openclaw", href: "/guides/openclaw" },
        { label: "Getting started" },
      ]}
      eyebrow="Openclaw"
      title="Getting started"
      description="Quick setup steps to install Openclaw, log in, launch the gateway, and set a basic allowlist."
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Quick setup</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((item) => (
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

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Minimal allowlist example</h2>
        <p className="text-sm text-muted-foreground">
          Add this to ~/.openclaw/openclaw.json to allow a single WhatsApp
          number. You can also require mentions in groups to avoid accidental
          triggers.
        </p>
        <pre className="overflow-x-auto  border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-xl p-6 text-sm">
          {allowlistExample}
        </pre>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Workspace and memory</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {workspaceNotes.map((item) => (
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

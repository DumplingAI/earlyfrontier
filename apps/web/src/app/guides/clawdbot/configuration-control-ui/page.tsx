import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clawdbot Configuration & Control UI | Early Frontier",
  description:
    "Configure Clawdbot with JSON5, schema validation, and the Control UI dashboard.",
};

const configFacts = [
  "Configuration lives in ~/.clawdbot/clawdbot.json and supports JSON5 comments.",
  "The schema can be loaded to validate settings before applying changes.",
  "Updates are applied via the control UI or config.apply, then the gateway reloads.",
] as const;

const keySettings = [
  {
    title: "allowFrom",
    description: "DM allowlist for each channel (phone numbers, IDs, or handles).",
  },
  {
    title: "workspace",
    description: "Default working directory for the agent (~/clawd by default).",
  },
  {
    title: "groups",
    description: "Group allowlists, mention requirements, and access policies.",
  },
] as const;

export default function ClawdbotConfigurationPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Clawdbot", href: "/guides/clawdbot" },
        { label: "Configuration" },
      ]}
      eyebrow="Clawdbot"
      title="Configuration & control UI"
      description="Configure Clawdbot with JSON5, schema validation, and the Control UI dashboard."
    >
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Configuration basics</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {configFacts.map((item) => (
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
        <h2 className="font-sans text-2xl">Control UI</h2>
        <p className="text-sm text-muted-foreground">
          The gateway hosts a local dashboard (http://&lt;host&gt;:18789) where
          you can edit configuration fields, validate against the schema, and
          apply updates.
        </p>
      </section>

      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Key settings to know</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {keySettings.map((item) => (
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
    </PageShell>
  );
}

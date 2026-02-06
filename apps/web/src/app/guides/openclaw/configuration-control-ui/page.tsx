import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Openclaw Configuration & Control UI | Early Frontier",
  description:
    "Configure Openclaw with JSON5, schema validation, and the Control UI dashboard.",
};

const configFacts = [
  "Configuration lives in ~/.openclaw/openclaw.json and supports JSON5 comments.",
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

export default function OpenclawConfigurationPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Openclaw", href: "/guides/openclaw" },
        { label: "Configuration" },
      ]}
      eyebrow="Openclaw"
      title="Configuration & control UI"
      description="Configure Openclaw with JSON5, schema validation, and the Control UI dashboard."
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Configuration basics</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {configFacts.map((item) => (
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
        <h2 className="font-serif italic text-2xl">Control UI</h2>
        <p className="text-sm text-muted-foreground">
          The gateway hosts a local dashboard (http://&lt;host&gt;:18789) where
          you can edit configuration fields, validate against the schema, and
          apply updates.
        </p>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Key settings to know</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {keySettings.map((item) => (
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
    </PageShell>
  );
}

import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clawdbot Security & Permissions | Early Frontier",
  description:
    "Access policies, mention rules, and safe defaults for running Clawdbot in production.",
};

const policies = [
  {
    title: "DM policies",
    description:
      "Choose between pairing, allowlist, open, or disabled policies for direct messages.",
  },
  {
    title: "Group policies",
    description:
      "Allowlist specific groups, require mentions, or disable group access entirely.",
  },
  {
    title: "Mention safeguards",
    description:
      "Use mention-based activation so group messages do not trigger the agent by default.",
  },
] as const;

const safeDefaults = [
  "Use pairing or allowlists before enabling open access.",
  "Require mentions in group chats to avoid accidental triggers.",
  "Start with the minimum tools and expand as you build trust.",
] as const;

export default function ClawdbotSecurityPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Clawdbot", href: "/guides/clawdbot" },
        { label: "Security & permissions" },
      ]}
      eyebrow="Clawdbot"
      title="Security & permissions"
      description="Access policies, mention rules, and safe defaults for running Clawdbot in production."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Access policies</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {policies.map((item) => (
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
        <h2 className="font-serif text-2xl">Start conservative</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {safeDefaults.map((item) => (
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

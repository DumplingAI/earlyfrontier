import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Openclaw Security & Permissions | Early Frontier",
  description:
    "Access policies, mention rules, and safe defaults for running Openclaw in production.",
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

export default function OpenclawSecurityPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Openclaw", href: "/guides/openclaw" },
        { label: "Security & permissions" },
      ]}
      eyebrow="Openclaw"
      title="Security & permissions"
      description="Access policies, mention rules, and safe defaults for running Openclaw in production."
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Access policies</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {policies.map((item) => (
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
        <h2 className="font-serif italic text-2xl">Start conservative</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {safeDefaults.map((item) => (
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

import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Openclaw Guide | Early Frontier",
  description:
    "A practical guide to Openclaw architecture, setup, security, and skills.",
};

const sections = [
  {
    title: "What is Openclaw?",
    description:
      "Overview of the gateway model, who it is for, and how it differs from typical chatbots.",
    path: "/guides/openclaw/overview",
  },
  {
    title: "Architecture: Gateway + Pi agents",
    description:
      "Understand the gateway, ports, sessions, and how messages route to agents.",
    path: "/guides/openclaw/architecture",
  },
  {
    title: "Getting started",
    description:
      "Install, login, launch the gateway, and set a basic allowlist.",
    path: "/guides/openclaw/getting-started",
  },
  {
    title: "Security & permissions",
    description:
      "Access policies, mentions, and safe defaults for command execution.",
    path: "/guides/openclaw/security-permissions",
  },
  {
    title: "Configuration & control UI",
    description:
      "JSON5 configuration, schema validation, and the browser-based control UI.",
    path: "/guides/openclaw/configuration-control-ui",
  },
  {
    title: "Skills & ClawdHub",
    description:
      "Discover, install, and publish skills with the ClawdHub registry.",
    path: "/guides/openclaw/skills-clawdhub",
  },
  {
    title: "Use cases",
    description:
      "Examples that map Openclaw to real operations, team updates, and automations.",
    path: "/guides/openclaw/use-cases",
  },
  {
    title: "OpenClaw setup service",
    description:
      "NYC in-person and remote worldwide deployment, security hardening, and managed care plans.",
    path: "/openclaw-setup",
  },
] as const;

export default function OpenclawGuidePage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Openclaw" },
      ]}
      eyebrow="Guide"
      title="Openclaw"
      description="A practical guide to Openclaw architecture, setup, security, and skills."
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Start here</h2>
        <div className="grid gap-4">
          {sections.map((section) => (
            <a
              key={section.title}
              href={section.path}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5 transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
            >
              <h3 className="font-serif italic text-xl">{section.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {section.description}
              </p>
            </a>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Official resources</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          <a
            href="https://clawd.bot/"
            target="_blank"
            rel="noreferrer"
            className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
          >
            Openclaw site
          </a>
          <a
            href="https://docs.clawd.bot/"
            target="_blank"
            rel="noreferrer"
            className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
          >
            Openclaw documentation
          </a>
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noreferrer"
            className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
          >
            Openclaw GitHub
          </a>
        </div>
      </section>
    </PageShell>
  );
}

import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clawdbot Guide | Early Frontier",
  description:
    "A practical guide to Clawdbot architecture, setup, security, and skills.",
};

const sections = [
  {
    title: "What is Clawdbot?",
    description:
      "Overview of the gateway model, who it is for, and how it differs from typical chatbots.",
    path: "/guides/clawdbot/overview",
  },
  {
    title: "Architecture: Gateway + Pi agents",
    description:
      "Understand the gateway, ports, sessions, and how messages route to agents.",
    path: "/guides/clawdbot/architecture",
  },
  {
    title: "Getting started",
    description:
      "Install, login, launch the gateway, and set a basic allowlist.",
    path: "/guides/clawdbot/getting-started",
  },
  {
    title: "Security & permissions",
    description:
      "Access policies, mentions, and safe defaults for command execution.",
    path: "/guides/clawdbot/security-permissions",
  },
  {
    title: "Configuration & control UI",
    description:
      "JSON5 configuration, schema validation, and the browser-based control UI.",
    path: "/guides/clawdbot/configuration-control-ui",
  },
  {
    title: "Skills & ClawdHub",
    description:
      "Discover, install, and publish skills with the ClawdHub registry.",
    path: "/guides/clawdbot/skills-clawdhub",
  },
  {
    title: "Use cases",
    description:
      "Examples that map Clawdbot to real operations, team updates, and automations.",
    path: "/guides/clawdbot/use-cases",
  },
] as const;

export default function ClawdbotGuidePage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Clawdbot" },
      ]}
      eyebrow="Guide"
      title="Clawdbot"
      description="A practical guide to Clawdbot architecture, setup, security, and skills."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Start here</h2>
        <div className="grid gap-4">
          {sections.map((section) => (
            <a
              key={section.title}
              href={section.path}
              className="glass-card rounded-2xl border border-border/70 p-5 transition hover:border-foreground/40"
            >
              <h3 className="font-serif text-xl">{section.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {section.description}
              </p>
            </a>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Official resources</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          <a
            href="https://clawd.bot/"
            target="_blank"
            rel="noreferrer"
            className="glass-card rounded-xl border border-border/70 px-4 py-3 transition hover:border-foreground/40"
          >
            Clawdbot site
          </a>
          <a
            href="https://docs.clawd.bot/"
            target="_blank"
            rel="noreferrer"
            className="glass-card rounded-xl border border-border/70 px-4 py-3 transition hover:border-foreground/40"
          >
            Clawdbot documentation
          </a>
          <a
            href="https://github.com/clawdbot/clawdbot"
            target="_blank"
            rel="noreferrer"
            className="glass-card rounded-xl border border-border/70 px-4 py-3 transition hover:border-foreground/40"
          >
            Clawdbot GitHub
          </a>
        </div>
      </section>
    </PageShell>
  );
}

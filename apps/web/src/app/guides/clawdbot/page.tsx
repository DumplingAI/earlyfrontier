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
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Start here</h2>
        <div className="grid gap-4">
          {sections.map((section) => (
            <a
              key={section.title}
              href={section.path}
              className=" border-2 border-border p-5 transition hover:border-foreground/40"
            >
              <h3 className="font-sans text-xl">{section.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {section.description}
              </p>
            </a>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Official resources</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          <a
            href="https://clawd.bot/"
            target="_blank"
            rel="noreferrer"
            className=" border-2 border-border px-4 py-3 transition hover:border-foreground/40"
          >
            Clawdbot site
          </a>
          <a
            href="https://docs.clawd.bot/"
            target="_blank"
            rel="noreferrer"
            className=" border-2 border-border px-4 py-3 transition hover:border-foreground/40"
          >
            Clawdbot documentation
          </a>
          <a
            href="https://github.com/clawdbot/clawdbot"
            target="_blank"
            rel="noreferrer"
            className=" border-2 border-border px-4 py-3 transition hover:border-foreground/40"
          >
            Clawdbot GitHub
          </a>
        </div>
      </section>
    </PageShell>
  );
}

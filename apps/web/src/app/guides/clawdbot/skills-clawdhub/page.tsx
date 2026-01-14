import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clawdbot Skills & ClawdHub | Early Frontier",
  description:
    "How skills work in Clawdbot and how to discover, install, and publish them with ClawdHub.",
};

const skillBasics = [
  "Skills are folders that include a SKILL.md file plus supporting scripts or assets.",
  "Skills can be shared and installed via the ClawdHub registry.",
  "Install the ClawdHub CLI to search, install, update, or publish skills.",
] as const;

const clawdhubCommands = [
  {
    title: "Search",
    description: "clawdhub search <query>",
  },
  {
    title: "Install",
    description: "clawdhub install <slug>",
  },
  {
    title: "Update",
    description: "clawdhub update <slug> or clawdhub update --all",
  },
  {
    title: "Publish",
    description: "clawdhub publish <path>",
  },
] as const;

export default function ClawdbotSkillsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Clawdbot", href: "/guides/clawdbot" },
        { label: "Skills & ClawdHub" },
      ]}
      eyebrow="Clawdbot"
      title="Skills & ClawdHub"
      description="How skills work in Clawdbot and how to discover, install, and publish them with ClawdHub."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">How skills work</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {skillBasics.map((item) => (
            <div
              key={item}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">ClawdHub CLI</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {clawdhubCommands.map((item) => (
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
    </PageShell>
  );
}

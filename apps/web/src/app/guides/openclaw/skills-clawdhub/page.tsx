import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Openclaw Skills & ClawdHub | Early Frontier",
  description:
    "How skills work in Openclaw and how to discover, install, and publish them with ClawdHub.",
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

export default function OpenclawSkillsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Openclaw", href: "/guides/openclaw" },
        { label: "Skills & ClawdHub" },
      ]}
      eyebrow="Openclaw"
      title="Skills & ClawdHub"
      description="How skills work in Openclaw and how to discover, install, and publish them with ClawdHub."
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">How skills work</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {skillBasics.map((item) => (
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
        <h2 className="font-serif italic text-2xl">ClawdHub CLI</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {clawdhubCommands.map((item) => (
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

import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Early Frontier",
  description: "We document emerging AI agent use cases and turn them into practical playbooks.",
};

const pillars = [
  "Practical workflows over hype",
  "Transparent sources and updates",
  "Clear steps and expected outcomes",
] as const;

const coverage = [
  {
    title: "Claude Code workflows",
    description: "From codebase onboarding to refactors, each playbook includes prompts, checks, and handoff notes.",
  },
  {
    title: "MCP integrations",
    description: "How to connect models to tools, plus real-world examples from email, docs, and ticket systems.",
  },
  {
    title: "Operator playbooks",
    description: "Repeatable processes for research, planning, and coordination across teams.",
  },
] as const;

const process = [
  "Collect workflows directly from operators, builders, and team leads.",
  "Verify the inputs and outputs with concrete artifacts or screenshots.",
  "Document the steps, prompts, and guardrails that keep results reliable.",
  "Update each guide when tools or best practices shift.",
] as const;

const audience = [
  "Engineering teams rolling out agent tooling",
  "Operations and enablement teams building repeatable playbooks",
  "Founders and product leads evaluating AI investments",
] as const;

export default function AboutPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      eyebrow="About"
      title="Early Frontier"
      description="We document emerging AI agent use cases and turn them into practical playbooks."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Editorial policy</h2>
        <p className="text-sm text-muted-foreground">
          Every guide is written to be actionable, transparent about sources, and
          updated as tools evolve.
        </p>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {pillar}
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">What we cover</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {coverage.map((item) => (
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
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">How we build guides</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {process.map((step) => (
            <div
              key={step}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {step}
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Who it is for</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {audience.map((item) => (
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

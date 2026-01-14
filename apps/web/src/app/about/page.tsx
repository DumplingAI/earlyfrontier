import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Early Frontier",
  description:
    "Early Frontier is an open-source library of AI agent use cases, workflows, and operator playbooks.",
};

const pillars = [
  "Practical workflows over hype",
  "Transparent sources and updates",
  "Clear steps and expected outcomes",
] as const;

const coverage = [
  {
    title: "Agent workflows",
    description:
      "Step-by-step playbooks for real tasks, with prompts, checks, and handoff notes.",
  },
  {
    title: "Tool integrations",
    description:
      "How to connect models to tools, plus examples from email, docs, and ticket systems.",
  },
  {
    title: "Operator playbooks",
    description:
      "Repeatable processes for research, planning, and coordination across teams.",
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

const contribute = [
  "Add or improve a workflow with clear steps, inputs, and expected outputs.",
  "Submit corrections when tools, pricing, or product behavior changes.",
  "Share real-world examples, templates, or screenshots that make guides concrete.",
] as const;

export default function AboutPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      eyebrow="About"
      title="Early Frontier"
      description="An open-source library of AI agent use cases, workflows, and operator playbooks."
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
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">How to contribute</h2>
        <p className="text-sm text-muted-foreground">
          Early Frontier is maintained in public. Contributions that add clarity,
          examples, or updated tooling guidance are welcome.
        </p>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {contribute.map((item) => (
            <div
              key={item}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
        <a
          href="https://github.com/DumplingAI/earlyfrontier"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center rounded-full border border-foreground/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-foreground/40"
        >
          Visit the GitHub repo
        </a>
      </section>
    </PageShell>
  );
}

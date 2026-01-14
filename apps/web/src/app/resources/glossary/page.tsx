import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossary | Early Frontier",
  description: "Key terms and definitions for AI agent workflows.",
};

const terms = [
  {
    term: "Agentic coding",
    definition: "Using AI agents to execute coding tasks with autonomy and verification.",
  },
  {
    term: "MCP",
    definition: "A protocol for connecting models to tools, data sources, and actions.",
  },
  {
    term: "Workflow",
    definition: "A repeatable sequence of steps with a clear outcome and handoff.",
  },
  {
    term: "Playbook",
    definition: "A documented workflow including prompts, checks, and expected outputs.",
  },
  {
    term: "Human-in-the-loop",
    definition: "A review step where a person validates or approves agent outputs.",
  },
  {
    term: "Tool call",
    definition: "A structured request the model makes to an external tool or service.",
  },
  {
    term: "Context window",
    definition: "The amount of information a model can consider in a single session.",
  },
  {
    term: "RAG",
    definition: "Retrieval-augmented generation that combines search with model output.",
  },
  {
    term: "Prompt template",
    definition: "A reusable prompt structure with placeholders for specific details.",
  },
  {
    term: "Guardrail",
    definition: "A constraint or rule that keeps outputs safe and predictable.",
  },
] as const;

const usage = [
  "Use the glossary to align on terms before documenting a workflow.",
  "Reference definitions when writing templates or onboarding new teammates.",
  "Add terms when a tool or workflow introduces new concepts.",
] as const;

export default function GlossaryPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Glossary" },
      ]}
      eyebrow="Resources"
      title="Glossary"
      description="Key terms and definitions for AI agent workflows."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <div className="grid gap-4">
          {terms.map((item) => (
            <div
              key={item.term}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h2 className="font-serif text-2xl">{item.term}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">How to use this glossary</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {usage.map((item) => (
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
import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reference material for agent workflows | Early Frontier",
  description: "Definitions, templates, and supporting resources to help you build faster.",
};

const resources = [
  {
    title: "Glossary",
    description: "Definitions for MCP, agentic coding, and automation terms.",
    path: "/resources/glossary",
  },
  {
    title: "Templates",
    description: "Prompt templates and workflow checklists.",
    path: "/resources/templates",
  },
  {
    title: "Tooling Library",
    description: "A catalog of agent tools and MCP servers.",
    path: "/resources/tooling",
  },
] as const;

const useCases = [
  {
    title: "Kickstart a new workflow",
    description: "Use templates to scaffold prompts, then refine with the glossary.",
  },
  {
    title: "Standardize team language",
    description: "Align on terms and outputs before rolling out automation.",
  },
  {
    title: "Audit your tool stack",
    description: "Compare tools and MCP servers used across guides and playbooks.",
  },
] as const;

const tips = [
  "Start with a template, then customize it with your org data and guardrails.",
  "Use the glossary to align on definitions before building automated steps.",
  "Review the tooling library for capability gaps in your current stack.",
] as const;

export default function ResourcesPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      eyebrow="Resources"
      title="Reference material for agent workflows"
      description="Definitions, templates, and supporting resources to help you build faster."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Resource library</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.path}
              className="glass-card rounded-2xl border border-border/70 p-5 transition hover:border-foreground/40"
            >
              <h3 className="font-serif text-xl">{resource.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </section>
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">How to use these resources</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {useCases.map((item) => (
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
        <h2 className="font-serif text-2xl">Quick tips</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {tips.map((item) => (
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
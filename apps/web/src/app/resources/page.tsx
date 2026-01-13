import PageShell from "@/components/page-shell";

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
    </PageShell>
  );
}

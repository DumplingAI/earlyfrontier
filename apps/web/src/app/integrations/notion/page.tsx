import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notion | Early Frontier",
  description: "Sync notes, tasks, and knowledge into a single workspace.",
};

const workflows = [
  "Meeting notes capture",
  "Weekly project status",
  "Knowledge base updates",
] as const;

const inputs = [
  {
    title: "Docs and notes",
    description: "Summaries and decisions from meetings or research.",
  },
  {
    title: "Project tracking",
    description: "Status updates, milestones, and owner assignments.",
  },
  {
    title: "Reference data",
    description: "Shared checklists, onboarding, and playbooks.",
  },
] as const;

const setup = [
  "Create databases for summaries, tasks, and recurring updates.",
  "Standardize properties like owner, priority, and due date.",
  "Use templates so every output follows the same format.",
  "Require review before publishing to shared pages.",
] as const;

const connectionOptions = [
  "Connect via Notion MCP in Notion settings (OAuth-based).",
  "Use a remote MCP server if your client supports it.",
  "Grant access only to the databases you want Claude to read or edit.",
] as const;

export default function NotionIntegrationPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Integrations", href: "/integrations" },
        { label: "Notion" },
      ]}
      eyebrow="Integration"
      title="Notion"
      description="Sync notes, tasks, and knowledge into a single workspace."
    >
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Popular workflows</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {workflows.map((workflow) => (
            <div
              key={workflow}
              className=" border-2 border-border px-4 py-3"
            >
              {workflow}
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">What teams sync</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {inputs.map((item) => (
            <div
              key={item.title}
              className=" border-2 border-border p-5"
            >
              <h3 className="font-sans text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Setup checklist</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {setup.map((item) => (
            <div
              key={item}
              className=" border-2 border-border px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">Connection options</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {connectionOptions.map((item) => (
            <div
              key={item}
              className=" border-2 border-border px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

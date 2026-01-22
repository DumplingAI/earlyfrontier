import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP | Early Frontier",
  description: "Use MCP to connect models to external tools through a standard interface.",
};

export default function MCPIntegrationsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Integrations", href: "/integrations" },
        { label: "MCP" },
      ]}
      eyebrow="Integrations"
      title="MCP"
      description="Use MCP to connect models to external tools through a standard interface."
    >
      <section className="grid gap-4  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Why MCP matters</h2>
        <p className="text-sm text-muted-foreground">
          MCP provides a consistent protocol for AI clients to access tools,
          resources, and prompt templates. Instead of bespoke integrations, you
          can expose a server once and reuse it across workflows and clients that
          support the standard.
        </p>
      </section>
      <section className="grid gap-6  border-2 border-border bg-background/80 p-12 md:p-16">
        <h2 className="font-sans text-2xl">What MCP enables</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {[
            "Standard tool interfaces across files, databases, and APIs.",
            "Prompt templates that become reusable slash commands.",
            "Consistent permission gates and review steps.",
            "Auditable tool calls to support safer automation.",
          ].map((item) => (
            <div
              key={item}
              className=" border-2 border-border px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border-2 border-border bg-card p-12 md:p-16">
        <h2 className="font-sans text-2xl">Getting started</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {[
            "Inventory the tools you want to connect (docs, tickets, comms, data).",
            "Start with read-only access and one high-value server.",
            "Define approval steps for any write actions.",
            "Document expected outputs and prompts so results are repeatable.",
          ].map((item) => (
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
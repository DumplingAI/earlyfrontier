import PageShell from "@/components/page-shell";

const workflows = [
  "Ticket summarization",
  "Weekly sprint updates",
  "Automated status reports",
] as const;

export default function LinearIntegrationPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Integrations", href: "/integrations" },
        { label: "Linear" },
      ]}
      eyebrow="Integration"
      title="Linear"
      description="Connect Linear to automate issue updates and reporting."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Popular workflows</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {workflows.map((workflow) => (
            <div
              key={workflow}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {workflow}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

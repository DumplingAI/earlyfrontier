import PageShell from "@/components/page-shell";

const pillars = [
  "Practical workflows over hype",
  "Transparent sources and updates",
  "Clear steps and expected outcomes",
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
    </PageShell>
  );
}

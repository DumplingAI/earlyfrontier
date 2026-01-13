import PageShell from "@/components/page-shell";

export default function NewsletterPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Newsletter" }]}
      eyebrow="Newsletter"
      title="Weekly use cases and workflows"
      description="Short updates on new agent workflows, tools, and guides."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Subscribe</h2>
        <p className="text-sm text-muted-foreground">
          Get a concise roundup of new workflows, integrations, and guides every
          week.
        </p>
        <form className="flex flex-col gap-3 md:flex-row">
          <input
            type="email"
            placeholder="you@example.com"
            className="h-12 flex-1 rounded-full border border-border bg-background px-4 text-sm"
          />
          <button
            type="submit"
            className="h-12 rounded-full border border-foreground/20 bg-foreground px-6 text-xs font-semibold uppercase tracking-[0.2em] text-background"
          >
            Join
          </button>
        </form>
      </section>
    </PageShell>
  );
}

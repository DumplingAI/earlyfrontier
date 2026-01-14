import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly use cases and workflows | Early Frontier",
  description: "Short updates on new agent workflows, tools, and guides.",
};

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
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">What you get</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {[
            "A weekly digest of new workflows with clear outcomes.",
            "Practical prompts you can reuse in Claude Code and MCP setups.",
            "Short evaluations of tools and integrations, with setup tips.",
            "Links to new guides, templates, and glossary updates.",
          ].map((item) => (
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
        <h2 className="font-serif text-2xl">Who it is for</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Builders",
              description: "Developers integrating agents into daily engineering work.",
            },
            {
              title: "Operators",
              description: "Teams automating support, research, and coordination tasks.",
            },
            {
              title: "Leaders",
              description: "Decision-makers evaluating AI investments and rollouts.",
            },
          ].map((item) => (
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
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Frequency and privacy</h2>
        <p className="text-sm text-muted-foreground">
          We publish once per week. Unsubscribe any time. We do not sell or
          share your email address.
        </p>
      </section>
    </PageShell>
  );
}
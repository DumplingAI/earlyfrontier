import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linear | Early Frontier",
  description: "Connect Linear to automate issue updates and reporting.",
};

const workflows = [
  "Ticket summarization",
  "Weekly sprint updates",
  "Automated status reports",
] as const;

const details = [
  {
    title: "Inputs",
    description: "Issues, cycles, projects, labels, and milestones.",
  },
  {
    title: "Outputs",
    description: "Summaries, blocker reports, release notes.",
  },
  {
    title: "Best practices",
    description: "Keep issue metadata consistent to improve summaries.",
  },
] as const;

const examples = [
  "Summarize issues tagged P0 with current owners and next steps.",
  "Generate a sprint update for the last 7 days of completed work.",
  "List open bugs blocking the release and propose a mitigation plan.",
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
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Popular workflows</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {workflows.map((workflow) => (
            <div
              key={workflow}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {workflow}
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">How teams use Linear data</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {details.map((item) => (
            <div
              key={item.title}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Example prompts</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {examples.map((item) => (
            <div
              key={item}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
import TweetEmbed from "@/components/tweet-embed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenClaw Setup | Early Frontier",
  description:
    "White-glove OpenClaw deployment for founders and executive teams. NYC in-person and remote worldwide.",
};

const integrations = [
  "Gmail",
  "Google Calendar",
  "Outlook",
  "Slack",
  "iMessage",
  "WhatsApp",
  "Notion",
  "Google Drive",
  "Zoom",
  "HubSpot",
  "Salesforce",
  "GitHub",
  "Google Sheets",
  "+20 more",
] as const;

const implementationPlans = [
  {
    title: "In-person (NYC)",
    price: "$2,400",
    details: "First Executive Agent + hardening + 14-day priority support",
    checkoutUrl: "https://buy.stripe.com/8x27sM1gH29u1PD4sseME01",
  },
  {
    title: "Remote (Worldwide)",
    price: "$1,200",
    details: "First Executive Agent + hardening + 14-day priority support",
    checkoutUrl: "https://buy.stripe.com/8x228s7F53dy2TH4sseME00",
  },
  {
    title: "Additional Executive Agent",
    price: "+$1,200 each",
    details: "CEO, EA, Sales, Finance, and other leadership roles",
    checkoutUrl: null,
  },
] as const;

const managedCarePlans = [
  {
    title: "Care Standard",
    price: "$1,875/mo",
    details: "Up to 2 agents, monitoring, support, 2 hrs/mo included",
  },
  {
    title: "Care Plus",
    price: "$3,750/mo",
    details: "Up to 5 agents, priority support, monthly review, 6 hrs/mo",
  },
  {
    title: "Care Enterprise",
    price: "From $7,500/mo",
    details: "SLA, fleet standards, audit logs, security reviews",
  },
] as const;

const processSteps = [
  {
    title: "Kickoff",
    details: "Goals, systems (Google/Microsoft), and security posture.",
  },
  {
    title: "Implementation",
    details: "Install, harden, connect integrations, and build workflows.",
  },
  {
    title: "Go-live",
    details: "Your team starts using it the same day.",
  },
  {
    title: "Priority support",
    details:
      "14 days of fast fixes and tuning in your dedicated Slack Connect channel.",
  },
  {
    title: "Managed Care",
    details:
      "Monitoring, updates, drift checks, and ongoing workflow improvements.",
  },
] as const;

const faq = [
  {
    question: "What is OpenClaw?",
    answer:
      "An open-source AI assistant that can triage email, schedule meetings, draft replies, and run workflows across your tools on your own hardware.",
  },
  {
    question: "What's included in implementation?",
    answer:
      "Install and hardening, email and calendar integration, up to 3 mission-critical workflows, documentation, and 14-day priority support. NYC in-person engagements are onsite.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most teams are live in 5-8 hours across one or two sessions. Multi-agent deployments can take longer.",
  },
  {
    question: "Do you offer support after setup?",
    answer:
      "Yes. Implementation includes 14-day priority support. Ongoing support, monitoring, and upgrades are provided through Managed Care.",
  },
  {
    question: "Is OpenClaw safe to run?",
    answer:
      "No AI system is risk-free. We configure OpenClaw for practical production use with access controls, hardening, and auditability so it can pass security review.",
  },
  {
    question: "What access do you need during setup?",
    answer:
      "Temporary least-privilege access to the target machine/network and connected accounts. Credential rotation after go-live is recommended.",
  },
  {
    question: "Do you do multi-agent deployments?",
    answer:
      "Yes. This is common for 4-50 employee companies. We map role boundaries so each executive agent has clean permissions.",
  },
] as const;

const securityControls = [
  "Inbound access locked: DM pairing, mention-gating in groups, explicit allowlists",
  "Network exposure minimized: loopback-only binding, no public endpoints by default",
  "Tool blast radius limited: elevated tools restricted and sandboxing enabled",
  "File permissions set: credentials and config locked to your user",
  "Credentials in env vars: never in prompts and redacted from logs",
  "Plugins explicitly allowed: no unaudited third-party code",
  "Security audit before handoff: repeatable checks after launch",
] as const;

export default function OpenclawSetupPage() {
  return (
    <div>
      <main className="mx-auto flex w-full max-w-3xl flex-col px-6 pb-32 pt-12">
        <article className="grid gap-16 border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-10 md:p-14">
          {/* Hero */}
          <header className="grid gap-6">
            <h1 className="font-serif text-5xl md:text-6xl italic font-normal tracking-tight leading-tight">
              OpenClaw Setup Service
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              We set up and maintain{" "}
              <a
                href="https://openclaw.ai/"
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline underline-offset-4 transition-colors duration-300 hover:text-[#c9b8a0]"
              >
                OpenClaw
              </a>
              {" "}for founders and exec teams. Your inbox gets triaged, your
              calendar gets managed, and real work gets done — all running on
              your hardware, not another SaaS vendor. We handle security
              hardening, integrations with the tools you already use, and ongoing
              care so it keeps working as your team and workflows change.
            </p>
          </header>

          {/* Connects to */}
          <div className="grid gap-3">
            <h2 className="text-sm font-medium tracking-widest text-[#c9b8a0]">Connects to</h2>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              {integrations.map((integration) => (
                <span key={integration} className="border border-[rgba(255,255,255,0.08)] rounded-lg px-3 py-1.5">
                  {integration}
                </span>
              ))}
            </div>
          </div>

          {/* Executive Agent */}
          <div className="grid gap-4">
            <h2 className="font-serif italic text-3xl">What is an Executive Agent?</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              1 Executive Agent = 1 OpenClaw instance configured for one primary
              identity (CEO inbox/calendar, CFO inbox, Head of Sales, or a shared
              EA inbox). This keeps pricing fair and security boundaries clean.
            </p>
            <div className="mt-2">
              <TweetEmbed url="https://twitter.com/euboid/status/2019094563369910692" />
            </div>
          </div>

          {/* How it works */}
          <div className="grid gap-4">
            <h2 className="font-serif italic text-3xl">How it works</h2>
            <ol className="grid gap-3">
              {processSteps.map((step, index) => (
                <li key={step.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[rgba(255,255,255,0.06)] text-xs font-medium text-[#c9b8a0]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-base font-medium">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.details}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-sm text-muted-foreground">
              Most companies are 5-8 hours all-in, especially with multiple agents.
            </p>
          </div>

          {/* Why not DIY */}
          <div className="grid gap-3">
            <h2 className="font-serif italic text-3xl">Why not set it up yourself?</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              You can, and OpenClaw is open-source. But even experienced engineers
              spend several hours getting everything setup, and most teams still
              need custom integrations beyond defaults, then ongoing maintenance
              for updates, drift, broken workflows, and security patches. We
              handle this end to end so your team gets leverage instead of another
              internal project.
            </p>
          </div>

          {/* Implementation pricing */}
          <div className="grid gap-4">
            <h2 className="font-serif italic text-3xl">Implementation</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {implementationPlans.map((plan) => (
                <div key={plan.title} className="grid gap-2">
                  <h3 className="text-base font-medium">{plan.title}</h3>
                  <p className="text-2xl font-bold">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">{plan.details}</p>
                  {plan.checkoutUrl ? (
                    <a
                      href={plan.checkoutUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex w-fit items-center border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-2 text-sm font-semibold transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
                    >
                      Checkout
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Managed Care pricing */}
          <div className="grid gap-4">
            <h2 className="font-serif italic text-3xl">Managed Care</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {managedCarePlans.map((plan) => (
                <div key={plan.title} className="grid gap-2">
                  <h3 className="text-base font-medium">{plan.title}</h3>
                  <p className="text-2xl font-bold">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">{plan.details}</p>
                </div>
              ))}
            </div>
            <a
              href="https://x.com/yangpten"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-fit items-center border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
            >
              DM @yangpten
            </a>
          </div>

          {/* Security */}
          <div className="grid gap-4">
            <h2 className="font-serif italic text-3xl">Security and your data</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              OpenClaw runs locally, so data stays on your hardware. We follow the
              official hardening guide and configure security controls before
              handoff.
            </p>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              {securityControls.map((control) => (
                <li key={control} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a78b71]" />
                  {control}
                </li>
              ))}
            </ul>
          </div>

          {/* Why trust us */}
          <div className="grid gap-4">
            <h2 className="font-serif italic text-3xl">Why trust us?</h2>
            <div className="grid gap-2 text-base text-muted-foreground">
              <p className="leading-relaxed">
                I set up my first Clawdbot on January 5 and have used it every day
                since.
              </p>
              <p className="leading-relaxed">
                I have been building with LLMs since GPT-2, and using AI coding
                tools like Claude Code and Codex since launch.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Hardware is at cost or bring your own. Apple device is required for
              iMessage. Implementation includes 14-day priority support. Ongoing support
              requires Managed Care.
            </p>
            <a
              href="https://x.com/yangpten"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
            >
              DM @yangpten
            </a>
          </div>

          {/* FAQ */}
          <div className="grid gap-4">
            <h2 className="font-serif italic text-3xl">FAQ</h2>
            <dl className="grid gap-5">
              {faq.map((item) => (
                <div key={item.question}>
                  <dt className="text-base font-medium">{item.question}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </main>
    </div>
  );
}

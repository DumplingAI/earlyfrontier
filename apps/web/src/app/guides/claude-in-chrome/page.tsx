import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude in Chrome | Early Frontier",
  description:
    "How to use Claude in Chrome for browser automation, plus guidance on when to use MCP instead.",
};

const overview = [
  "Claude in Chrome is a browser extension that lets Claude read, click, and navigate websites from a side panel.",
  "It’s available in beta for paid plans on the Chrome browser.",
  "Use MCP when you need reliable API-level access, structured data, or background automation.",
] as const;

const whenToUse = [
  {
    title: "Use Claude in Chrome",
    bullets: [
      "You need to automate a web UI (Gmail, Calendar, dashboards)",
      "You want fast setup with minimal configuration",
      "A task requires interactive browsing or form filling",
    ],
  },
  {
    title: "Use MCP",
    bullets: [
      "You need structured API access or complex filtering",
      "You need background/scheduled automation",
      "You want stronger control over permissions and outputs",
    ],
  },
] as const;

const setupSteps = [
  "Install Claude in Chrome from the Chrome Web Store.",
  "Sign in to your Claude account when prompted.",
  "Pin the extension and open it from the side panel.",
  "Grant browser permissions so Claude can read and act on pages.",
  "Note: Claude in Chrome is only supported on Google Chrome (not other Chromium browsers).",
] as const;

const permissions = [
  "sidePanel: show Claude while you browse",
  "storage: save preferences and settings",
  "scripting: read page content",
  "debugger: click, type, and take screenshots",
  "tabGroups/tabs: manage Claude-opened tabs",
  "alarms/notifications: run scheduled tasks and alert you",
  "webNavigation/system.display: handle navigation and screen sizing",
  "nativeMessaging: enable integration with other Anthropic apps",
] as const;

const safety = [
  "Avoid financial transactions or sensitive personal data in the browser.",
  "Use approval gates before Claude takes actions.",
  "Start with trusted sites and familiar workflows.",
  "Protected actions (purchases, deletions, permissions) always require explicit approval.",
] as const;

const chromeFeatures = [
  "Scheduled tasks for recurring workflows",
  "Shortcuts for saved prompts",
  "Multi-tab workflows with tab groups",
  "Console log inspection for debugging",
] as const;

const integrationNotes = [
  "Claude Code + Chrome extension: build in terminal, verify in browser.",
  "You can also connect Claude in Chrome via Claude Desktop connectors.",
] as const;

const workflows = [
  {
    title: "Email summary",
    description: "Summarize unread Gmail threads and draft replies for review.",
  },
  {
    title: "Calendar scheduling",
    description: "Create events, propose times, and draft invites.",
  },
  {
    title: "Web research",
    description: "Open sources, extract key facts, and produce a brief.",
  },
  {
    title: "Form filling",
    description: "Fill repetitive forms from a template or spreadsheet.",
  },
] as const;

const permissionModes = [
  {
    title: "Ask before acting",
    description:
      "Claude proposes a plan and waits for approval before executing the workflow.",
  },
  {
    title: "Act without asking",
    description:
      "Claude can act immediately, but this increases risk. Use only on trusted sites with active supervision.",
  },
] as const;

const related = [
  { title: "MCP for Beginners", path: "/guides/mcp-for-beginners" },
  { title: "Email + Calendar", path: "/use-cases/claude-code/email-calendar" },
  { title: "Browser Research", path: "/use-cases/claude-code/browser-research" },
] as const;

export default function ClaudeInChromeGuidePage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: "Claude in Chrome" },
      ]}
      eyebrow="Guide"
      title="Claude in Chrome"
      description="Use Claude in Chrome for browser automation and learn when to choose MCP instead."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Overview</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {overview.map((item) => (
            <div
              key={item}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Chrome vs MCP</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {whenToUse.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Setup</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {setupSteps.map((item) => (
            <div
              key={item}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Permissions Claude will request</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {permissions.map((item) => (
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
        <h2 className="font-serif text-2xl">Chrome features</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {chromeFeatures.map((item) => (
            <div
              key={item}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Integration notes</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {integrationNotes.map((item) => (
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
        <h2 className="font-serif text-2xl">Safety checklist</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {safety.map((item) => (
            <div
              key={item}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Example workflows</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {workflows.map((item) => (
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
        <h2 className="font-serif text-2xl">Permission modes</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {permissionModes.map((item) => (
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

      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Related resources</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {related.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="glass-card rounded-xl border border-border/70 px-4 py-3 text-sm transition hover:border-foreground/40"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

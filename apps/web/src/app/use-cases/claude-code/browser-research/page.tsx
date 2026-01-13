import PageShell from "@/components/page-shell";

const prerequisites = [
  {
    title: "Web Search MCP Server",
    description: "Brave Search or similar MCP server for web search capabilities",
  },
  {
    title: "Web Fetch MCP Server",
    description: "HTTP client server for fetching and parsing web pages",
  },
  {
    title: "Browser Automation (Optional)",
    description: "Puppeteer or Playwright MCP server for dynamic content",
  },
] as const;

const coreWorkflows = [
  {
    title: "Competitive Analysis",
    description:
      "Research competitors' products, features, pricing, and positioning to inform your strategy.",
    steps: [
      "Define competitors and research questions",
      "Have Claude search and visit competitor websites",
      "Extract key features, pricing, and messaging",
      "Synthesize findings into a comparison matrix",
    ],
    examplePrompt:
      "Research our top 3 competitors in the project management space. Compare their pricing, key features, and target customers. Create a summary table.",
  },
  {
    title: "Market and Pricing Research",
    description:
      "Scan market trends, pricing strategies, and customer sentiment across multiple sources.",
    steps: [
      "Specify market segment or product category",
      "Search for pricing data, reviews, and trends",
      "Aggregate findings from multiple sources",
      "Identify patterns and recommendations",
    ],
    examplePrompt:
      "Research SaaS pricing models in the developer tools market. What are the common tiers, pricing ranges, and billing models?",
  },
  {
    title: "Source Gathering and Citation",
    description:
      "Collect credible sources, quotes, and data for reports, articles, or proposals.",
    steps: [
      "Define research topic and source requirements",
      "Search for authoritative sources and recent data",
      "Extract relevant quotes and statistics",
      "Generate properly formatted citations",
    ],
    examplePrompt:
      "Find 5 credible sources about AI adoption in healthcare from 2024-2026. Include key statistics and create citations in APA format.",
  },
  {
    title: "Daily News Briefing",
    description:
      "Automatically curate news and updates relevant to your industry or interests.",
    steps: [
      "Define topics, sources, and frequency",
      "Search for recent articles and updates",
      "Summarize key developments",
      "Highlight actionable insights",
    ],
    examplePrompt:
      "Give me a briefing on major AI/ML news from the past 24 hours. Focus on product launches, research breakthroughs, and regulatory updates.",
  },
] as const;

const researchTypes = [
  {
    type: "Product Research",
    description: "Feature comparisons, user reviews, and alternative analysis",
    useCases: ["Build vs buy decisions", "Feature prioritization", "User pain point discovery"],
  },
  {
    type: "Market Research",
    description: "Industry trends, market size, and growth projections",
    useCases: ["Market entry analysis", "TAM/SAM calculations", "Trend forecasting"],
  },
  {
    type: "Content Research",
    description: "Topic exploration, source gathering, and fact verification",
    useCases: ["Blog post research", "White paper citations", "Technical documentation"],
  },
  {
    type: "Technical Research",
    description: "Documentation review, API exploration, and implementation guides",
    useCases: ["Library evaluation", "Architecture decisions", "Integration planning"],
  },
] as const;

const advancedTechniques = [
  {
    title: "Multi-Source Synthesis",
    description:
      "Combine information from multiple websites and sources to create comprehensive summaries that identify consensus and outliers.",
  },
  {
    title: "Automated Monitoring",
    description:
      "Set up recurring research tasks that track changes over time, like competitor feature updates or pricing changes.",
  },
  {
    title: "Deep Link Analysis",
    description:
      "Follow links from initial search results to discover hidden resources, documentation pages, or related content.",
  },
  {
    title: "Structured Data Extraction",
    description:
      "Extract specific data points into structured formats like CSV or JSON for further analysis or import into other tools.",
  },
] as const;

const bestPractices = [
  "Verify critical facts from multiple sources before using in decisions",
  "Include search dates in your research to ensure currency of information",
  "Save research results to files for future reference and sharing",
  "Use specific search queries rather than broad topics for better results",
  "Combine web search with document analysis for comprehensive research",
  "Define clear research objectives before starting to avoid scope creep",
] as const;

const examplePrompts = [
  {
    category: "Competitive",
    prompt: "What are the top 5 features of Notion that Linear doesn't have?",
  },
  {
    category: "Pricing",
    prompt: "Research pricing for API monitoring tools. What's the typical cost per 100k requests?",
  },
  {
    category: "Technical",
    prompt: "Compare Next.js and Remix for server-side rendering. What are the performance tradeoffs?",
  },
  {
    category: "Content",
    prompt: "Find recent case studies about companies migrating from monoliths to microservices.",
  },
  {
    category: "Market",
    prompt: "What are the biggest AI product launches in the past month? Summarize each in 2 sentences.",
  },
  {
    category: "Trend",
    prompt: "Research emerging trends in developer productivity tools for 2026.",
  },
] as const;

const commonIssues = [
  {
    issue: "Search results are too broad or irrelevant",
    solution:
      "Use more specific search terms, add date filters, or specify domains to search. Include context about what you're looking for and why.",
  },
  {
    issue: "Can't access content behind paywalls",
    solution:
      "Look for alternative sources, academic pre-prints, or company blog posts. Search for summaries or commentary from other sources.",
  },
  {
    issue: "Information is outdated",
    solution:
      "Add date constraints to your search query (e.g., 'after:2025'). Prioritize recent sources and cross-reference with current data.",
  },
] as const;

const integrationIdeas = [
  {
    title: "Research to Report Pipeline",
    description:
      "Automatically convert research findings into formatted reports or presentations with proper citations and sections.",
  },
  {
    title: "Competitor Tracking Dashboard",
    description:
      "Regular research combined with Notion or Airtable integration to maintain a live competitor intelligence database.",
  },
  {
    title: "Content Brief Generation",
    description:
      "Research a topic and automatically generate content briefs with keywords, sources, and outline suggestions.",
  },
  {
    title: "Due Diligence Automation",
    description:
      "Standardized research workflows for evaluating vendors, partners, or acquisition targets.",
  },
] as const;

const related = [
  { title: "Task Management", path: "/use-cases/claude-code/task-management" },
  { title: "Email + Calendar", path: "/use-cases/claude-code/email-calendar" },
  { title: "MCP Integrations", path: "/use-cases/claude-code/mcp-integrations" },
] as const;

export default function ClaudeCodeBrowserResearchPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Use Cases", href: "/use-cases" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Browser Research" },
      ]}
      eyebrow="Claude Code"
      title="Web Research and Analysis"
      description="Use Claude Code with browser tooling to gather, analyze, and synthesize web data for competitive analysis, market research, and content creation."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">
          Connect Claude Code to web search and browser automation tools through MCP
          servers to transform how you conduct research. Instead of manually opening
          dozens of tabs, copying information, and synthesizing findings, describe your
          research goals and let Claude handle the search, extraction, and summary work.
        </p>
        <p className="text-sm text-muted-foreground">
          This approach is particularly powerful for competitive intelligence, market
          research, content creation, and technical evaluation. Claude can visit
          multiple sources, compare information, identify patterns, and generate
          structured summaries—all while maintaining citations and tracking sources.
        </p>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Prerequisites</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {prerequisites.map((item) => (
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
        <h2 className="font-serif text-2xl">Core workflows</h2>
        <div className="grid gap-6">
          {coreWorkflows.map((workflow) => (
            <div
              key={workflow.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-xl">{workflow.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {workflow.description}
              </p>
              <div className="mt-4">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                  Steps
                </div>
                <ol className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {workflow.steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background text-xs font-medium">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-4 rounded-xl bg-background/50 p-4">
                <div className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
                  Example Prompt
                </div>
                <p className="text-sm italic text-muted-foreground">
                  "{workflow.examplePrompt}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Research types</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {researchTypes.map((item) => (
            <div
              key={item.type}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-xl">{item.type}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-3">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                  Common Use Cases
                </div>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {item.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Example prompts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {examplePrompts.map((item) => (
            <div
              key={item.prompt}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {item.category}
              </div>
              <p className="text-sm italic text-muted-foreground">"{item.prompt}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Advanced techniques</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {advancedTechniques.map((technique) => (
            <div
              key={technique.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{technique.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {technique.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Best practices</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {bestPractices.map((practice) => (
            <div
              key={practice}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {practice}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Troubleshooting common issues</h2>
        <div className="grid gap-4">
          {commonIssues.map((item) => (
            <div
              key={item.issue}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.issue}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Integration ideas</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {integrationIdeas.map((idea) => (
            <div
              key={idea.title}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{idea.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {idea.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Related workflows</h2>
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

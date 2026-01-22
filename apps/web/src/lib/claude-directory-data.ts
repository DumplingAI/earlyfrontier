export type DirectoryItem = {
  title: string;
  description?: string;
  href: string;
};

export type DirectoryGroup = {
  title?: string;
  items: DirectoryItem[];
};

export type DirectorySection = {
  slug: string;
  title: string;
  summary: string;
  groups: DirectoryGroup[];
};

export const directorySections: DirectorySection[] = [
  {
    slug: "official-resources",
    title: "Official Anthropic Resources",
    summary: "Authoritative references and platforms directly from Anthropic.",
    groups: [
      {
        title: "Current Models",
        items: [
          {
            title: "Claude Opus 4.5",
            description:
              "World's best for coding, agents, computer use, and complex enterprise tasks.",
            href: "https://www.anthropic.com/news/claude-opus-4-5",
          },
          {
            title: "Claude Sonnet 4.5",
            description: "Balanced intelligence, speed, and cost.",
            href: "https://www.anthropic.com/news/claude-sonnet-4-5",
          },
          {
            title: "Claude Haiku 4.5",
            description: "Fastest and most cost-effective model.",
            href: "https://www.anthropic.com/news/claude-haiku-4-5",
          },
        ],
      },
      {
        title: "API & Developer Platform",
        items: [
          {
            title: "Anthropic Console",
            description: "Sign up, get API keys, test prompts, and monitor usage.",
            href: "https://console.anthropic.com",
          },
          {
            title: "Official Documentation",
            description: "API reference, guides, prompt engineering, tool use, and more.",
            href: "https://platform.claude.com/docs/en/get-started",
          },
          {
            title: "API Overview & Pricing",
            description:
              "Usage-based pricing, prompt caching, web search, computer use, batch processing.",
            href: "https://platform.claude.com/docs/en/about-claude/models/overview",
          },
        ],
      },
      {
        title: "SDKs & Development Tools",
        items: [
          {
            title: "anthropic-sdk-python",
            description: "Python SDK with async support and type hints.",
            href: "https://github.com/anthropics/anthropic-sdk-python",
          },
          {
            title: "anthropic-sdk-typescript",
            description: "TypeScript/JavaScript SDK for Node.js and browsers.",
            href: "https://github.com/anthropics/anthropic-sdk-typescript",
          },
          {
            title: "anthropic-sdk-java",
            description: "Java/Kotlin SDK with modern features.",
            href: "https://github.com/anthropics/anthropic-sdk-java",
          },
          {
            title: "anthropic-sdk-go",
            description: "Go SDK with idiomatic design.",
            href: "https://github.com/anthropics/anthropic-sdk-go",
          },
          {
            title: "anthropic-sdk-php",
            description: "PHP SDK (beta).",
            href: "https://github.com/anthropics/anthropic-sdk-php",
          },
          {
            title: "anthropic-sdk-csharp",
            description: "C#/.NET SDK (beta).",
            href: "https://github.com/anthropics/anthropic-sdk-csharp",
          },
          {
            title: "anthropic-sdk-ruby",
            description: "Ruby SDK.",
            href: "https://github.com/anthropics/anthropic-sdk-ruby",
          },
          {
            title: "Claude Agent SDK (Python)",
            href: "https://github.com/anthropics/claude-agent-sdk-python",
          },
          {
            title: "Claude Agent SDK (TypeScript)",
            href: "https://github.com/anthropics/claude-agent-sdk-typescript",
          },
          {
            title: "Claude Cookbook",
            description: "Official notebooks and recipes for common patterns.",
            href: "https://github.com/anthropics/claude-cookbooks",
          },
          {
            title: "Claude Quickstarts",
            description: "Ready-to-deploy example apps.",
            href: "https://github.com/anthropics/claude-quickstarts",
          },
        ],
      },
      {
        title: "Cloud Providers",
        items: [
          {
            title: "Amazon Bedrock",
            description: "Managed access to Claude models in AWS.",
            href: "https://aws.amazon.com/bedrock/anthropic/",
          },
          {
            title: "Google Cloud Vertex AI Model Garden",
            description: "Deploy Claude models in Google Cloud.",
            href: "https://cloud.google.com/products/model-garden/claude",
          },
          {
            title: "Microsoft Azure AI Model Catalog",
            description: "Anthropic models via Azure AI catalog.",
            href: "https://ai.azure.com/catalog/publishers/anthropic",
          },
        ],
      },
      {
        title: "Transparency & Safety",
        items: [
          {
            title: "Transparency Hub",
            description: "Safety evaluations and improvements across models.",
            href: "https://www.anthropic.com/transparency",
          },
          {
            title: "Claude Opus 4.5 System Card",
            description: "Capability and safety report (Nov 2025).",
            href: "https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf",
          },
          {
            title: "Claude Sonnet 4.5 System Card",
            description: "Evaluations report (Sep 2025).",
            href: "https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf",
          },
          {
            title: "Claude Haiku 4.5 System Card",
            description: "Safety and performance report (Oct 2025).",
            href: "https://www.anthropic.com/claude-haiku-4-5-system-card",
          },
        ],
      },
    ],
  },
  {
    slug: "community-lists",
    title: "Community Curated Lists",
    summary: "Community lists and collections maintained by the community.",
    groups: [
      {
        items: [
          {
            title: "Claude Code List (hesreallyhim)",
            description: "Slash-commands, CLAUDE.md files, CLI tools, and workflows.",
            href: "https://github.com/hesreallyhim/awesome-claude-code#readme",
          },
          {
            title: "Claude Skills List (travisvn)",
            description: "Resources and tools for customizing Claude Skills.",
            href: "https://github.com/travisvn/awesome-claude-skills#readme",
          },
          {
            title: "Claude Skills List (BehiSecc)",
            description: "Categorized skills for docs, dev tools, and data analysis.",
            href: "https://github.com/BehiSecc/awesome-claude-skills#readme",
          },
          {
            title: "Claude Prompts List (langgptai)",
            description: "Prompt examples designed to improve Claude interactions.",
            href: "https://github.com/langgptai/awesome-claude-prompts#readme",
          },
          {
            title: "Claude Agents List (vijaythecoder)",
            description: "Specialized AI agents for building features and debugging.",
            href: "https://github.com/vijaythecoder/awesome-claude-agents#readme",
          },
          {
            title: "Claude Subagents List (VoltAgent)",
            description: "100+ specialized AI agents for full-stack development.",
            href: "https://github.com/VoltAgent/awesome-claude-code-subagents#readme",
          },
          {
            title: "MCP Servers List (punkpeye)",
            description: "Curated list of MCP servers for extending Claude.",
            href: "https://github.com/punkpeye/awesome-mcp-servers#readme",
          },
        ],
      },
    ],
  },
  {
    slug: "extensions-integrations",
    title: "Extensions & Integrations",
    summary: "Connect Claude to the tools and systems you already use.",
    groups: [
      {
        title: "IDE Extensions",
        items: [
          {
            title: "Claude Code Chat",
            description: "Native Claude Code chat interface inside VS Code.",
            href: "https://github.com/andrepimenta/claude-code-chat#readme",
          },
          {
            title: "Claude VSCode Theme",
            description: "Theme inspired by Claude AI with warm syntax colors.",
            href: "https://marketplace.visualstudio.com/items?itemName=AlvinUnreal.claude-vscode-theme",
          },
        ],
      },
      {
        title: "Browser Extensions",
        items: [
          {
            title: "Claude for Chrome (Beta)",
            description:
              "Claude works directly in your browser to take actions on your behalf.",
            href: "https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn",
          },
          {
            title: "Claude Usage Tracker",
            description: "Track Claude usage and performance metrics.",
            href: "https://chromewebstore.google.com/detail/claude-usage-tracker/knemcdpkggnbhpoaaagmjiigenifejfo",
          },
        ],
      },
    ],
  },
  {
    slug: "applications",
    title: "Applications",
    summary: "End-to-end products and workflows built on top of Claude.",
    groups: [
      {
        title: "Desktop",
        items: [
          {
            title: "Claude Desktop",
            description: "Official Claude desktop app for macOS and Windows.",
            href: "https://claude.ai/download",
          },
          {
            title: "Claude Desktop Debian",
            description: "Unofficial Claude desktop app for Debian/Linux.",
            href: "https://github.com/aaddrick/claude-desktop-debian#readme",
          },
        ],
      },
    ],
  },
  {
    slug: "education",
    title: "Educational Resources",
    summary: "Guides, courses, and practical references for getting up to speed.",
    groups: [
      {
        title: "Official Courses",
        items: [
          {
            title: "AI Fluency: Framework & Foundations",
            description: "Collaborate with AI systems effectively and safely.",
            href: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
          },
          {
            title: "AI Fluency for Educators",
            description: "Apply AI Fluency in teaching practice and strategy.",
            href: "https://anthropic.skilljar.com/ai-fluency-for-educators",
          },
          {
            title: "AI Fluency for Students",
            description: "Enhance learning and career planning with AI.",
            href: "https://anthropic.skilljar.com/ai-fluency-for-students",
          },
          {
            title: "AI Fluency for Nonprofits",
            description: "Increase organizational impact with AI.",
            href: "https://anthropic.skilljar.com/ai-fluency-for-nonprofits",
          },
          {
            title: "Teaching AI Fluency",
            description: "Teach and assess AI Fluency in instructor-led settings.",
            href: "https://anthropic.skilljar.com/teaching-ai-fluency",
          },
          {
            title: "Building with the Claude API",
            description: "Full spectrum of working with the Claude API.",
            href: "https://anthropic.skilljar.com/claude-with-the-anthropic-api",
          },
          {
            title: "Claude Code in Action",
            description: "Practical walkthrough for Claude Code workflows.",
            href: "https://anthropic.skilljar.com/claude-code-in-action",
          },
          {
            title: "Introduction to Model Context Protocol",
            description: "Build MCP servers and clients from scratch.",
            href: "https://anthropic.skilljar.com/introduction-to-model-context-protocol",
          },
          {
            title: "MCP: Advanced Topics",
            description: "Sampling, notifications, and transports.",
            href: "https://anthropic.skilljar.com/model-context-protocol-advanced-topics",
          },
          {
            title: "Claude with Amazon Bedrock",
            description: "Accreditation program course.",
            href: "https://anthropic.skilljar.com/claude-in-amazon-bedrock",
          },
          {
            title: "Claude with Google Vertex AI",
            description: "Working with Anthropic models via Vertex AI.",
            href: "https://anthropic.skilljar.com/claude-with-google-vertex",
          },
        ],
      },
      {
        title: "Video Tutorials",
        items: [
          {
            title: "Claude Video Tutorials",
            description: "Official video tutorials from Claude Support.",
            href: "https://support.claude.com/en/collections/10548294-video-tutorials",
          },
        ],
      },
      {
        title: "Community Guides",
        items: [
          {
            title: "Claude Code Everything You Need to Know",
            description: "All-in-one guide covering setup, prompts, and workflows.",
            href: "https://github.com/wesammustafa/Claude-Code-Everything-You-Need-to-Know#readme",
          },
          {
            title: "40+ Claude Code Tips",
            description: "Tips for getting the most out of Claude Code.",
            href: "https://github.com/ykdojo/claude-code-tips#readme",
          },
          {
            title: "My Experience With Claude Code (Part 1)",
            description: "Lessons on keeping Claude on track and managing costs.",
            href: "https://sankalp.bearblog.dev/my-claude-code-experience-after-2-weeks-of-usage/",
          },
          {
            title: "A Guide to Claude Code 2.0 (Part 2)",
            description: "Agent Manager mindset and context engineering.",
            href: "https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/#setup",
          },
        ],
      },
    ],
  },
  {
    slug: "community",
    title: "Community",
    summary: "People, projects, and collaboration around Claude.",
    groups: [
      {
        items: [
          {
            title: "Claude Discord",
            description: "Official Discord community for Claude users.",
            href: "https://discord.com/invite/prcdpx7qMm",
          },
          {
            title: "r/ClaudeAI",
            description: "Reddit community for Claude discussions and tips.",
            href: "https://www.reddit.com/r/ClaudeAI/",
          },
          {
            title: "Anthropic AI Facebook Group",
            description: "Facebook group for Anthropic AI and Claude discussions.",
            href: "https://www.facebook.com/groups/anthropicai/",
          },
          {
            title: "Early Frontier GitHub",
            description: "Contribute guides, report issues, or request updates.",
            href: "https://github.com/DumplingAI/earlyfrontier",
          },
          {
            title: "Contributing Guide",
            description: "How to add resources or improve the directory.",
            href: "https://github.com/DumplingAI/earlyfrontier/blob/main/CONTRIBUTING.md",
          },
        ],
      },
    ],
  },
];

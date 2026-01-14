# Early Frontier

Early Frontier is an open-source library of AI agent use cases, workflows, and
operator playbooks. The goal is to publish practical, testable guides with clear
steps, inputs, and expected outputs so teams can apply agent tooling safely.

Repository: https://github.com/DumplingAI/earlyfrontier

## What’s inside

- **apps/web** - Next.js site for the public library
- **packages/api** - Shared API layer / business logic
- **specs** - Planning and reference materials

## Getting started

Install dependencies:

```bash
bun install
```

Run the dev server:

```bash
bun run dev
```

Open http://localhost:3001 in your browser.

## Contributing

We welcome contributions that add clarity, real examples, or updated tooling guidance.

Good ways to help:
- Add or improve a workflow with steps, inputs, and expected outputs
- Update guides when tools or behavior change
- Share concrete examples, templates, or screenshots

If you’re not sure where to start, open an issue with the change you’d like to
make and the page it affects.

See CONTRIBUTING.md for detailed guidelines.

## Scripts

- `bun run dev` - Start all applications in development mode
- `bun run build` - Build all applications
- `bun run check-types` - Check TypeScript types across all apps

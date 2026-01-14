# Content Architecture Improvements (Structural)

## Site-wide content model
- Add consistent metadata to every content page: audience, outcome, time-to-complete, inputs, tools, risk-level, last-updated, owner/source.
- Standardize cross-links: every page ends with Related + Next step (2–4 links).
- Surface “proof” on each page: outputs, templates, example prompts, artifact snippets/screenshots.

## Home (`apps/web/src/app/page.tsx`)
- Add a “Start here” block with 3 explicit entry paths (Developer, Operator, Manager) linking to the right hubs.
- Add a “What’s new / recently updated” strip (3–5 items) for freshness.
- Add “How to use this library” (Pick outcome → Check inputs → Run workflow).
- Replace “Featured Guide” card with: read time, key sections, best-for line.
- Add “Sources / editorial policy” micro-link to About.

## Use Cases index (`apps/web/src/app/use-cases/page.tsx`)
- Tag cards with Outcome, Role, Tool, Risk.
- Replace “How to pick a use case” with a short decision tree (3–4 questions).
- Add outputs per use case (e.g., “Outputs: plan + checklist”).
- Add “Request a use case” CTA.

## Claude Code hub (`apps/web/src/app/use-cases/claude-code/page.tsx`)
- Add setup requirements (install, access, required MCP servers).
- Add outcomes section with concrete artifacts.
- Make learning paths link each step to a page.
- Add safety checks / approval points.
- Add a role-based “Recommended first workflow” CTA.

## Workflows index (`apps/web/src/app/workflows/page.tsx`)
- Add filters: Outcome + Effort (time) + Risk.
- Enrich workflow cards with Inputs + Outputs + Time estimate.
- Add “Workflow anatomy” explaining what each workflow page includes.
- Add “Recent” or “Most used” workflows.

## Workflow detail pages (all `apps/web/src/app/workflows/claude-code/*/page.tsx`)
- Add Inputs & prerequisites.
- Add Tooling checklist (MCP servers, permissions).
- Add Success criteria (how to verify outputs).
- Add Time + Complexity (low/medium/high).
- Add Artifacts section (sample output).
- Add Variants by role.
- Add Failure mode triage steps.

## Guides index (`apps/web/src/app/guides/page.tsx`)
- Add read time + “best for” on guide cards.
- Add “Suggested order” for beginners.
- Add “Companion resources” section.

## Guide detail pages (`apps/web/src/app/guides/*/page.tsx`)
- Add TL;DR + reading time + prerequisites.
- Add “Key takeaways” near top.
- Add “Downloadable checklist” or summary snippet.
- Add “Related workflows” per guide.

## Integrations index (`apps/web/src/app/integrations/page.tsx`)
- Add capability matrix (read/write/search).
- Add “Best for” tags on cards.
- Add setup difficulty (easy/medium/advanced).
- Add permissions/security checklist callout.

## Integration detail pages (`apps/web/src/app/integrations/*/page.tsx`)
- Add permissions required table.
- Add supported actions list.
- Add example workflows that use the integration.
- Add quickstart setup steps with time estimate.

## Resources index (`apps/web/src/app/resources/page.tsx`)
- Add “best used with” on cards.
- Add “Latest updates” strip.
- Add “Download / copy snippets” for templates.

## Resource detail pages
- Glossary: related pages per term + “See also”.
- Templates: use-case fit tags + inputs required.
- Tooling: trust level, maintenance status, license.

## Topics (`apps/web/src/app/topics/page.tsx`)
- Link topics to filtered lists (not just descriptions).
- Add topic map (topic → guides → workflows → integrations).
- Add “Who it’s for” micro-tags.

## Search (`apps/web/src/app/search/page.tsx`)
- Implement results list + filters (Outcome, Role, Tool, Type).
- Add suggested queries as clickable search chips.
- Add empty-state guidance.

## Newsletter (`apps/web/src/app/newsletter/page.tsx`)
- Add archive previews (last 2–3 issues).
- Add “What’s different vs site” value prop.
- Add subscription goals (e.g., new workflow weekly).

## About (`apps/web/src/app/about/page.tsx`)
- Add update cadence and criteria.
- Add source transparency example.
- Add contact/contribute entry point.

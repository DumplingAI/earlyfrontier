import type { MetadataRoute } from "next";

import { env } from "@earlyfrontier/env/web";

const baseUrl = env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

const staticRoutes = [
  "",
  "/about",
  "/guides",
  "/guides/clawdbot",
  "/guides/clawdbot/overview",
  "/guides/clawdbot/architecture",
  "/guides/clawdbot/getting-started",
  "/guides/clawdbot/security-permissions",
  "/guides/clawdbot/configuration-control-ui",
  "/guides/clawdbot/skills-clawdhub",
  "/guides/clawdbot/use-cases",
  "/resources",
  "/resources/tooling",
  "/use-cases",
  "/workflows",
  "/integrations",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
  }));
}

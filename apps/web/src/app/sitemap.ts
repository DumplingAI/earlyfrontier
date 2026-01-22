import type { MetadataRoute } from "next";

import { env } from "@earlyfrontier/env/web";

const baseUrl = env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001";

const staticRoutes = [
  "",
  "/official-resources",
  "/community-lists",
  "/extensions-integrations",
  "/applications",
  "/education",
  "/community",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
  }));
}

import type { MetadataRoute } from "next";

const SITE = "https://www.theprogramsuite.com";

/**
 * Static sitemap. The homepage, product pages, and pricing are the primary SEO
 * surfaces; legal/support pages are indexed but low priority. The
 * request-access thanks/error pages and /api are excluded (see robots.ts).
 *
 * `lastModified` is a fixed build date rather than `new Date()` so the sitemap
 * is deterministic and doesn't churn every deploy.
 */
const LAST_MODIFIED = new Date("2026-10-18");

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  ) => ({
    url: `${SITE}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1.0, "weekly"),
    page("/pricing", 0.9, "monthly"),
    page("/practice", 0.9, "monthly"),
    page("/strength-conditioning", 0.9, "monthly"),
    page("/inventory", 0.9, "monthly"),
    page("/scouting-film-analytics", 0.9, "monthly"),
    page("/travel-meals", 0.9, "monthly"),
    page("/scheduling", 0.9, "monthly"),
    page("/team-athlete-operations", 0.9, "monthly"),
    page("/athletic-department-software", 0.9, "monthly"),
    page("/support", 0.5, "monthly"),
    page("/privacy", 0.3, "yearly"),
    page("/terms", 0.3, "yearly"),
    page("/childrens-privacy", 0.3, "yearly"),
    page("/subprocessors", 0.3, "yearly"),
  ];
}

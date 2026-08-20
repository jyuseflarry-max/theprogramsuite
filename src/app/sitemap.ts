import type { MetadataRoute } from "next";

const SITE = "https://www.theprogramsuite.com";

/**
 * Static sitemap. The homepage and the equipment landing page are the primary
 * SEO surfaces; legal/support pages are indexed but low priority. The
 * request-access thanks/error pages and /api are excluded (see robots.ts).
 *
 * `lastModified` is a fixed build date rather than `new Date()` so the sitemap
 * is deterministic and doesn't churn every deploy.
 */
const LAST_MODIFIED = new Date("2026-08-19");

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
    page("/equipment", 0.9, "monthly"),
    page("/scheduling", 0.9, "monthly"),
    page("/eligibility", 0.9, "monthly"),
    page("/athletic-department-software", 0.9, "monthly"),
    page("/support", 0.5, "monthly"),
    page("/privacy", 0.3, "yearly"),
    page("/terms", 0.3, "yearly"),
    page("/childrens-privacy", 0.3, "yearly"),
    page("/subprocessors", 0.3, "yearly"),
  ];
}

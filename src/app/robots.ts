import type { MetadataRoute } from "next";

const SITE = "https://www.theprogramsuite.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Thin utility pages and the API carry no search value.
        disallow: ["/api/", "/request-access/thanks", "/request-access/error"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}

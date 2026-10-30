import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No external image domains needed — logo is local
  async redirects() {
    return [
      { source: "/strength-conditioning", destination: "/performance", permanent: true },
      { source: "/scouting-film-analytics", destination: "/strategy-film", permanent: true },
      // Old founder-access URLs (pre-Aug 2026 links in ads/emails).
      // permanent: true issues a 308, which preserves the POST method for
      // forms still submitting to the old API endpoint.
      {
        source: "/founder-access",
        destination: "/#access",
        permanent: true,
      },
      {
        source: "/founder-access/:path*",
        destination: "/request-access/:path*",
        permanent: true,
      },
      {
        source: "/api/founder-access",
        destination: "/api/request-access",
        permanent: true,
      },
      {
        source: "/eligibility",
        destination: "/team-athlete-operations",
        permanent: true,
      },
      {
        source: "/equipment",
        destination: "/inventory",
        permanent: true,
      },
      {
        source: "/games-trips",
        destination: "/team-athlete-operations#trips-meals",
        permanent: true,
      },
      {
        source: "/games-and-trips",
        destination: "/team-athlete-operations#trips-meals",
        permanent: true,
      },
      {
        source: "/travel-meals",
        destination: "/team-athlete-operations#trips-meals",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

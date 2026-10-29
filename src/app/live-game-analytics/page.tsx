import type { Metadata } from "next";
import { ProductLandingPage } from "@/components/marketing/ProductLandingPage";

export const metadata: Metadata = {
  title: "Live Game & Analytics for Basketball",
  description: "Basketball live stat capture, possessions, lineups, game reports, and season analysis for $250 per program, per year. All teams and Core are included.",
  alternates: { canonical: "/live-game-analytics" },
};

export default function LiveGameAnalyticsPage() {
  return <ProductLandingPage productId="live_game_analytics" />;
}

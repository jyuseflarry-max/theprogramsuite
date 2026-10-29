import type { Metadata } from "next";
import { ProductLandingPage } from "@/components/marketing/ProductLandingPage";

export const metadata: Metadata = {
  title: "Strategy & Film",
  description: "Playbooks, opponent scouting, film sessions, clip review, and teaching assignments for $250 per program, per year. Includes 10 hours of new hosted video annually, 10 hours retained, 10,000 annual video delivery minutes, and Core.",
  alternates: { canonical: "/strategy-film" },
};

export default function StrategyFilmPage() {
  return <ProductLandingPage productId="scouting_film_analytics" />;
}

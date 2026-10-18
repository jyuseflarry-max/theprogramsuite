import type { Metadata } from "next";
import { ProductLandingPage } from "@/components/marketing/ProductLandingPage";

export const metadata: Metadata = { title: "Scouting, Film & Analytics", description: "Opponent scouting, film review, and performance analysis for $250 per program, per year.", alternates: { canonical: "/scouting-film-analytics" } };
export default function ScoutingFilmAnalyticsPage() { return <ProductLandingPage productId="scouting_film_analytics" />; }

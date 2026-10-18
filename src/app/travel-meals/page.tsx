import type { Metadata } from "next";
import { ProductLandingPage } from "@/components/marketing/ProductLandingPage";

export const metadata: Metadata = { title: "Travel & Meals", description: "Trip planning, itineraries, travel coordination, team meals, and meal ordering for $250 per program, per year.", alternates: { canonical: "/travel-meals" } };
export default function TravelMealsPage() { return <ProductLandingPage productId="travel_meals" />; }

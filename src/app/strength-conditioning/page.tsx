import type { Metadata } from "next";
import { ProductLandingPage } from "@/components/marketing/ProductLandingPage";

export const metadata: Metadata = { title: "Strength & Conditioning", description: "Training programs, workouts, sessions, testing, and load for $250 per program, per year.", alternates: { canonical: "/strength-conditioning" } };
export default function StrengthConditioningPage() { return <ProductLandingPage productId="strength" />; }

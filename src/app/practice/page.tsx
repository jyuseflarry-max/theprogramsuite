import type { Metadata } from "next";
import { ProductLandingPage } from "@/components/marketing/ProductLandingPage";

export const metadata: Metadata = { title: "Practice", description: "Practice planning, drills, templates, live execution, boards, and reports for $250 per program, per year.", alternates: { canonical: "/practice" } };
export default function PracticePage() { return <ProductLandingPage productId="practice" />; }

import type { Metadata } from "next";
import { ProductLandingPage } from "@/components/marketing/ProductLandingPage";

export const metadata: Metadata = {
  title: "Performance",
  description: "Training programs, workouts, athlete logging, testing, personal records, readiness, and the live weight room for $500 per program, per year. All teams and Core are included.",
  alternates: { canonical: "/performance" },
};

export default function PerformancePage() {
  return <ProductLandingPage productId="strength" />;
}

import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/marketing/LeadForm";
import { IncludedOperations, PricingSection } from "@/components/marketing/ModularLandingPage";
import { PlanPrefill } from "@/components/marketing/PlanPrefill";
import { Reveal } from "@/components/marketing/Reveal";

export const metadata: Metadata = {
  title: "Product Pricing",
  description: "Four products at $250 per program, per year. Choose one or combine all four for $1,000 per year, with Athlete Operations/Core included with any product purchase.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "The Program Suite Product Pricing",
    description: "Choose Practice, Strength & Conditioning, Inventory, or Scouting, Film & Analytics for $250 per program, per year each.",
    url: "https://www.theprogramsuite.com/pricing",
    type: "website",
    siteName: "The Program Suite",
  },
};

export default function PricingPage() {
  return (
    <main className="rx">
      <Reveal />
      <PlanPrefill />
      <SiteNav />
      <PricingSection />
      <IncludedOperations />
      <LeadForm />
      <SiteFooter />
    </main>
  );
}

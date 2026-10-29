import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/marketing/LeadForm";
import { AnnualPricing } from "@/components/marketing/AnnualPricing";
import { PlanPrefill } from "@/components/marketing/PlanPrefill";
import { Reveal } from "@/components/marketing/Reveal";

export const metadata: Metadata = {
  title: "Product Pricing",
  description: "Annual pricing per program: Practice $250, Performance $500, Strategy & Film $350, Live Game & Analytics $250, and Inventory $400. Core and every team in your program are included. All five total $1,750 per year.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "The Program Suite Product Pricing",
    description: "Five annual products from $250 to $500 per program, with Core included. Choose the tools you need or all five for $1,750 per year.",
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
      <AnnualPricing headingLevel={1} />
      <LeadForm />
      <SiteFooter />
    </main>
  );
}

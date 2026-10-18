import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowBtn, Eyebrow } from "@/components/primitives";
import { JsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Team & Athlete Operations",
  description: "The shared team and athlete operations included with every The Program Suite product: roster, staff, athlete profiles, health, availability, schedules, opponents, results, and communication.",
  alternates: { canonical: "/team-athlete-operations" },
  openGraph: {
    title: "Team & Athlete Operations | The Program Suite",
    description: "Included with every purchased product—the shared foundation that keeps coaches, athletes, and families connected.",
    type: "website",
    url: "https://www.theprogramsuite.com/team-athlete-operations",
    siteName: "The Program Suite",
    images: [{ url: "/images/og-coach.jpg", width: 1200, height: 675, alt: "Team and athlete operations in The Program Suite" }],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.theprogramsuite.com" },
    { "@type": "ListItem", position: 2, name: "Team & Athlete Operations", item: "https://www.theprogramsuite.com/team-athlete-operations" },
  ],
};

const FOUNDATIONS = [
  { t: "Athletes and rosters", d: "Athlete profiles and roster management stay shared across every purchased product." },
  { t: "Teams and staff", d: "Keep the people responsible for the program connected to the same operational foundation." },
  { t: "Health and availability", d: "Keep health, readiness, availability, and return-to-play coordination connected to the athlete profile." },
  { t: "Games and results", d: "Game schedules, opponents, and results belong to the shared foundation rather than a paid travel or scouting product." },
  { t: "Communication", d: "Coaches, athletes, staff, and families use shared communication tools across the platform." },
  { t: "One included foundation", d: "Team & Athlete Operations is included with a product purchase and is not sold as a standalone plan." },
];

export default function TeamAthleteOperationsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <JsonLd data={breadcrumb} />
      <SiteNav />
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Included With Every Product</Eyebrow></div>
          <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 104px)" }}>Team &amp; Athlete Operations, <span className="headline-italic">already connected.</span></h1>
          <p className="mt-6 max-w-[760px] text-[17px] leading-[1.65] text-[color:var(--color-muted)]">Every purchased product includes the shared operational foundation your program needs. It is not sold by itself. It keeps the selected products connected through one roster, one basic calendar, one athlete record, and one communication path.</p>
          <div className="mt-8 flex flex-wrap gap-3"><ArrowBtn href="/pricing" large>See Product Pricing</ArrowBtn><ArrowBtn href="/#access" variant="ghost" large>Request a Demo</ArrowBtn></div>
        </div>
      </section>
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>The shared foundation</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>The parts every product works from.</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{FOUNDATIONS.map((item, index) => <div key={item.t}><div className="flex items-baseline gap-3"><span className="text-[13px] font-semibold tabular-nums" style={{ color: "var(--color-accent)" }}>{String(index + 1).padStart(2, "0")}</span><h3 className="text-[19px] font-semibold">{item.t}</h3></div><p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--color-muted)]">{item.d}</p></div>)}</div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-16 text-center md:px-8 md:py-20">
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>Choose the product. <span className="headline-italic">Keep the program.</span></h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.65] text-[color:var(--color-muted)]">Practice, Strength &amp; Conditioning, Inventory, Scouting, Film &amp; Analytics, and Travel &amp; Meals all work inside this same included foundation.</p>
          <div className="mt-8 flex justify-center"><ArrowBtn href="/#access" large>Request a Demo</ArrowBtn></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

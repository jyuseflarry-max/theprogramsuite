import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowBtn, Eyebrow } from "@/components/primitives";
import { JsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Included Core",
  description: "Core is included with any paid The Program Suite product: accounts, rosters, schedules, communication, attendance, athlete care, forms, hosting, facilities, standings, season close, travel, meals, and Public Presence.",
  alternates: { canonical: "/team-athlete-operations" },
  openGraph: {
    title: "Included Core | The Program Suite",
    description: "Included with any purchased product—the shared foundation that keeps coaches, athletes, staff, and families connected.",
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
    { "@type": "ListItem", position: 2, name: "Included Core", item: "https://www.theprogramsuite.com/team-athlete-operations" },
  ],
};

const FOUNDATIONS: { t: string; d: string; id?: string }[] = [
  { t: "Accounts, invitations, and rosters", d: "Keep athlete profiles, rosters, teams, staff accounts, and family invitations connected across every purchased product." },
  { t: "Schedules, games, and results", d: "Manage team schedules, games, opponents, scores, and results in the shared foundation." },
  { t: "Trips and meals", d: "Coordinate trips and team meals as included program operations, not as a separate paid product.", id: "trips-meals" },
  { t: "Attendance and availability", d: "Track attendance and availability in the same athlete and team context." },
  { t: "Health and readiness", d: "Coordinate health, readiness, and return-to-play work around the athlete record." },
  { t: "Forms and acknowledgments", d: "Collect program forms and acknowledgments without breaking the shared workflow." },
  { t: "Manual academic check-ins", d: "Keep manually reported academic information connected to the athlete record." },
  { t: "Messaging and family access", d: "Give staff, athletes, and families the communication and access paths they need." },
  { t: "Hosting and facilities", d: "Coordinate game hosting, officials, event workers, volunteers, run sheets, and facility use." },
  { t: "Standings and season close", d: "Keep basic results, standings, and end-of-season program work in the shared foundation." },
  { t: "Public Presence", d: "Share your program's schedules, results, and approved public information from one program page." },
  { t: "Core Tools in Use", d: "Turn optional Core tools on or off for your program without adding another paid product. History stays connected." },
];

export default function TeamAthleteOperationsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <JsonLd data={breadcrumb} />
      <SiteNav />
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Included With Every Paid Product</Eyebrow></div>
          <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 104px)" }}>Core, <span className="headline-italic">already connected.</span></h1>
          <p className="mt-6 max-w-[760px] text-[17px] leading-[1.65] text-[color:var(--color-muted)]">Any paid product includes Core for every team in your program. Common rosters, schedules, communication, athlete care, forms, game operations, travel, meals, and family access keep your work connected.</p>
          <div className="mt-8 flex flex-wrap gap-3"><ArrowBtn href="/pricing" large>See Product Pricing</ArrowBtn><ArrowBtn href="/#access" variant="ghost" large>Request a Demo</ArrowBtn></div>
        </div>
      </section>
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>The shared foundation</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>The parts every product works from.</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{FOUNDATIONS.map((item, index) => <div key={item.t} id={item.id}><div className="flex items-baseline gap-3"><span className="text-[13px] font-semibold tabular-nums" style={{ color: "var(--color-accent)" }}>{String(index + 1).padStart(2, "0")}</span><h3 className="text-[19px] font-semibold">{item.t}</h3></div><p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--color-muted)]">{item.d}</p></div>)}</div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-16 text-center md:px-8 md:py-20">
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>Choose the product. <span className="headline-italic">Keep the program.</span></h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-[1.65] text-[color:var(--color-muted)]">Practice, Performance, Strategy &amp; Film, Live Game &amp; Analytics, and Inventory all work inside this same included foundation. Select the paid tools you need, then switch optional Core tools on or off to fit your program.</p>
          <div className="mt-8 flex justify-center"><ArrowBtn href="/#access" large>Request a Demo</ArrowBtn></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowBtn, Eyebrow } from "@/components/primitives";
import { JsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Athlete Eligibility & Roster Management Software",
  description:
    "One clearance verdict per athlete — forms, physicals, fees, and grades roll up into cleared-or-not, with the exact thing standing in the way one tap away. Roster, attendance, and eligibility in one place.",
  alternates: { canonical: "/eligibility" },
  openGraph: {
    title: "Athlete Eligibility & Roster Management | The Program Suite",
    description:
      "Forms, physicals, fees, and grades roll up into a single cleared-or-not verdict per athlete — no cross-checking five systems.",
    type: "website",
    url: "https://www.theprogramsuite.com/eligibility",
    siteName: "The Program Suite",
    images: [{ url: "/images/og-coach.jpg", width: 1200, height: 675, alt: "Athlete eligibility and roster management — The Program Suite" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athlete Eligibility & Roster Management | The Program Suite",
    description: "One clearance verdict per athlete — forms, physicals, fees, and grades in one place.",
    images: ["/images/og-coach.jpg"],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.theprogramsuite.com" },
    { "@type": "ListItem", position: 2, name: "Athlete Eligibility & Roster Management", item: "https://www.theprogramsuite.com/eligibility" },
  ],
};

const JOBS: { t: string; d: string }[] = [
  { t: "One clearance verdict", d: "Forms, physicals, fees, and grades roll up into a single cleared-or-not per athlete — no cross-checking five systems the morning of a game." },
  { t: "The fix, one tap away", d: "“Missing physical,” “fee outstanding” — tap the flag and go straight to exactly what resolves it." },
  { t: "Roster that follows the athlete", d: "Everything lives under the program, so an athlete's history, sizes, and clearances carry from one season to the next." },
  { t: "Attendance that counts", d: "Practice and lift attendance ties back to your eligibility rules automatically — the record keeps itself." },
  { t: "Forms and physicals", d: "Collect and track participation forms and physicals in one place, with families able to complete and see their own." },
  { t: "Academics in the loop", d: "Grade and academic checks feed the same clearance verdict, so nobody suits up who shouldn't." },
];

const DEEPER: { t: string; d: string }[] = [
  { t: "Built for compliance review", d: "Roles and permissions, audit trails, and a per-athlete record give administrators the accountability a district review expects." },
  { t: "Families self-serve", d: "Parents can see their athlete's outstanding items — a missing form, an open fee — and resolve them without a phone call." },
  { t: "Gear and fees roll in", d: "Unreturned equipment and open fees become part of the same clearance, so a jersey that never came back doesn't slip through." },
  { t: "One place, every level", d: "Freshman, JV, and varsity clear under one program, so nobody rebuilds a roster three times a season." },
];

export default function EligibilityPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <JsonLd data={breadcrumb} />
      <SiteNav />

      {/* Title band */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Athletes &amp; Eligibility</Eyebrow></div>
          <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 104px)" }}>
            Every athlete, cleared or not — <span className="headline-italic">one verdict.</span>
          </h1>
          <p className="mt-6 max-w-[720px] text-[17px] leading-[1.65] text-[color:var(--color-muted)]">
            Eligibility usually means cross-checking forms, physicals, fees, and grades across five
            systems the morning of a game. The Program Suite rolls all of it into a single
            cleared-or-not per athlete — and puts the exact thing standing in the way one tap down.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ArrowBtn href="/#access" large>Request a demo</ArrowBtn>
            <ArrowBtn href="/#platform" variant="ghost" large>See the platform</ArrowBtn>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Roster, attendance &amp; eligibility in one place</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
            Stop cross-checking five systems.
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {JOBS.map((j, i) => (
              <div key={j.t}>
                <div className="flex items-baseline gap-3">
                  <span className="text-[13px] font-semibold tabular-nums" style={{ color: "var(--color-accent)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[19px] font-semibold">{j.t}</h3>
                </div>
                <p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--color-muted)]">{j.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deeper */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Serious enough for an AD</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
            Accountability, not just a <span className="headline-italic">coach&apos;s convenience.</span>
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {DEEPER.map((f) => (
              <div key={f.t} className="p-5" style={{ background: "var(--color-paper-2)", borderLeft: "3px solid var(--color-accent)" }}>
                <h3 className="text-[17px] font-semibold">{f.t}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--color-muted)]">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20 text-center">
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
            Clear the whole roster <span className="headline-italic">in one view.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.65] text-[color:var(--color-muted)]">
            Eligibility is one module of a platform that runs the entire program — scheduling,
            practice, training, gear, and messaging included.
          </p>
          <div className="mt-8 flex justify-center">
            <ArrowBtn href="/#access" large>Request a demo</ArrowBtn>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

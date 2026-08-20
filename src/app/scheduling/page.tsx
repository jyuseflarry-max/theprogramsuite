import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowBtn, Eyebrow } from "@/components/primitives";
import { JsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Athletic Scheduling Software",
  description:
    "Put games, practices, lifts, and travel on one team calendar with built-in conflict checks — drag to reschedule and every athlete, parent, and coach sees the change instantly.",
  alternates: { canonical: "/scheduling" },
  openGraph: {
    title: "Athletic Scheduling Software | The Program Suite",
    description:
      "One calendar for games, practices, training, and trips — conflict checks built in, and families stay current automatically.",
    type: "website",
    url: "https://www.theprogramsuite.com/scheduling",
    siteName: "The Program Suite",
    images: [{ url: "/images/og-coach.jpg", width: 1200, height: 675, alt: "Athletic scheduling software — The Program Suite" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athletic Scheduling Software | The Program Suite",
    description: "One calendar for games, practices, training, and trips — with conflict checks built in.",
    images: ["/images/og-coach.jpg"],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.theprogramsuite.com" },
    { "@type": "ListItem", position: 2, name: "Athletic Scheduling Software", item: "https://www.theprogramsuite.com/scheduling" },
  ],
};

/* What one shared calendar actually does. */
const JOBS: { t: string; d: string }[] = [
  { t: "One calendar", d: "Games, practices, training blocks, and trips share a single source of truth — no more three calendars that quietly disagree." },
  { t: "Conflict checks", d: "A double-booked field, an overlapping practice, a bus that can't make it back in time — flagged before you ever hit publish." },
  { t: "Quick-add, drag to move", d: "Add an event in seconds; when the opponent reschedules, drag it and every view updates at once." },
  { t: "Season built once", d: "Lay out the whole season up front, then adjust the week that changes on you — without rebuilding anything." },
  { t: "Families stay current", d: "Publish once and athletes, parents, and staff all see the same times, locations, and changes — no group-text relay." },
  { t: "Travel and trips", d: "Bus times, itineraries, and away-game logistics live on the same calendar as everything else." },
];

const DEEPER: { t: string; d: string }[] = [
  { t: "Built for a whole program, not one team", d: "Freshman, JV, and varsity live under one program, so a shared field or a moved bus is visible across every level at once." },
  { t: "Change once, updated everywhere", d: "Move a practice and the athlete app, the family view, and the staff schedule all reflect it immediately — nobody works off a stale printout." },
  { t: "Attendance ties back in", d: "Practices and lifts on the calendar feed attendance and eligibility, so a schedule isn't just a plan — it's the record." },
  { t: "Phone-first for the sideline", d: "Coaches check and adjust the schedule from their phone; families get it in the same app their athlete already uses." },
];

export default function SchedulingPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <JsonLd data={breadcrumb} />
      <SiteNav />

      {/* Title band */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Scheduling</Eyebrow></div>
          <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 104px)" }}>
            Every game, practice, and bus — <span className="headline-italic">on one calendar.</span>
          </h1>
          <p className="mt-6 max-w-[720px] text-[17px] leading-[1.65] text-[color:var(--color-muted)]">
            Most programs run on three calendars that disagree and a group text nobody can search. The
            Program Suite puts games, practices, training, and travel on one schedule with conflict
            checks built in — so a moved practice reaches every athlete, parent, and coach the moment
            you publish it.
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
          <div className="mb-[18px]"><Eyebrow>One calendar, every part of the week</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
            Build the season once. Adjust in seconds.
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
          <div className="mb-[18px]"><Eyebrow>Why it's more than a shared Google Calendar</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
            A calendar that&apos;s wired into the <span className="headline-italic">whole program.</span>
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
            See it on <span className="headline-italic">your season.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.65] text-[color:var(--color-muted)]">
            Scheduling is one module of a platform that runs the entire program — roster, practice,
            training, gear, and messaging included.
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

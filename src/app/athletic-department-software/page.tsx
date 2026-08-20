import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowBtn, Eyebrow } from "@/components/primitives";
import { JsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Athletic Department Software",
  description:
    "Run the whole athletic department on one platform — every program's roster, schedule, eligibility, equipment, and messaging, with staff roles, audit trails, and a department roll-up for the AD.",
  alternates: { canonical: "/athletic-department-software" },
  openGraph: {
    title: "Athletic Department Software | The Program Suite",
    description:
      "One platform for every program in the department — roster, schedule, eligibility, and equipment, with staff roles, audit trails, and an AD roll-up.",
    type: "website",
    url: "https://www.theprogramsuite.com/athletic-department-software",
    siteName: "The Program Suite",
    images: [{ url: "/images/og-coach.jpg", width: 1200, height: 675, alt: "Athletic department software — The Program Suite" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athletic Department Software | The Program Suite",
    description: "One platform for every program in the department, with a roll-up view for the AD.",
    images: ["/images/og-coach.jpg"],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.theprogramsuite.com" },
    { "@type": "ListItem", position: 2, name: "Athletic Department Software", item: "https://www.theprogramsuite.com/athletic-department-software" },
  ],
};

const JOBS: { t: string; d: string }[] = [
  { t: "Every program, one platform", d: "Football, basketball, volleyball, cross country — each program runs day to day, and the department sees all of them in one place." },
  { t: "Roll-up for the AD", d: "Roster, eligibility, inventory, and staff across every program, rolled up so the athletic director isn't chasing twenty coaches for a number." },
  { t: "Staff roles and access", d: "Give each coach, assistant, and administrator exactly the access they need — and nothing they don't — across the whole department." },
  { t: "Audit trails built in", d: "Who changed what, when — a full record across programs, so accountability isn't a favor you ask a coach for." },
  { t: "Eligibility at a glance", d: "One clearance verdict per athlete rolls up to a department view, so the AD knows who's cleared without opening five systems." },
  { t: "Equipment across programs", d: "Every program's gear, issued and collected, with fees and shortages visible department-wide instead of siloed in a closet." },
];

const DEEPER: { t: string; d: string }[] = [
  { t: "Built for procurement review", d: "Roles and permissions, full audit trails, and board-ready reporting are built in — the visibility and accountability a purchase of this size requires." },
  { t: "One price per program", d: "Bring one program on, or the whole department. Each sport is priced as one program; boys' and girls' teams count separately." },
  { t: "MAAPP-aligned messaging", d: "Every coach–athlete conversation is open, monitored, and auditable department-wide — safety by default, not a setting someone forgets to turn on." },
  { t: "Grows at your pace", d: "Start with the programs that hurt most and add the rest whenever you're ready — nothing has to migrate twice." },
];

export default function AthleticDepartmentPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <JsonLd data={breadcrumb} />
      <SiteNav />

      {/* Title band */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>For the athletic director</Eyebrow></div>
          <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 104px)" }}>
            The whole department, <span className="headline-italic">in one view.</span>
          </h1>
          <p className="mt-6 max-w-[720px] text-[17px] leading-[1.65] text-[color:var(--color-muted)]">
            Every program runs on its own scattered tools, and the AD spends the week chasing numbers.
            The Program Suite runs each program day to day — roster, schedule, eligibility, equipment,
            and messaging — and rolls all of it up so the department finally has one source of truth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ArrowBtn href="/#access" large>Request a demo</ArrowBtn>
            <ArrowBtn href="/#pricing" variant="ghost" large>See department pricing</ArrowBtn>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>One platform, every program</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
            Stop chasing twenty coaches for one number.
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
          <div className="mb-[18px]"><Eyebrow>A purchase your board can stand behind</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
            The accountability a department <span className="headline-italic">actually needs.</span>
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
            Bring the department <span className="headline-italic">onto one system.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.65] text-[color:var(--color-muted)]">
            Start with one program or roll out the whole department. A 20-minute walkthrough with
            people who&apos;ve run a program — not a call center.
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

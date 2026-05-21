import Image from "next/image";
import { FaqSection } from "@/components/FaqSection";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowBtn, Eyebrow } from "@/components/primitives";

const APP_LOGIN_URL = "https://app.theprogramsuite.com";

/* ============================================================ DATA */

const INVENTORY_PILLARS = [
  { num: "01", tag: "Catalog", title: "Know what you own", desc: "Catalog inventory with sizes, numbers, photos, condition, replacement value, vendor details, and reorder thresholds." },
  { num: "02", tag: "Assignments", title: "Know who has it", desc: "Issue gear to athletes, collect returns, mark damage, flag missing items, create fee records before the trail goes cold." },
  { num: "03", tag: "Program Kits", title: "Build program kits", desc: "Reusable kits like Varsity Home, JV Away, Travel, or Game Day. See how many complete kits can be built before handout day." },
  { num: "04", tag: "Risk", title: "Catch problems early", desc: "Surface shortages, unpaid fees, clearance blockers, audit gaps, and replacement needs before end-of-season chaos." },
];

const DAILY_OPS = [
  { num: "01", title: "Handout day", desc: "Assign uniforms, equipment, travel gear, and kit pieces to each athlete in minutes — not hours." },
  { num: "02", title: "Return day", desc: "See what came back, what is damaged, what is missing, and who needs a follow-up before it gets lost." },
  { num: "03", title: "Fees", desc: "Create fee records the moment something goes missing — before the trail goes cold and clearance becomes a scramble." },
  { num: "04", title: "Audit", desc: "Check counts, labels, scan records, vendor details, and replacement needs ahead of next season." },
];

const COACHING_OS_ITEMS = [
  { num: "01", title: "Athlete records", desc: "One profile per athlete across every season, sport, and team they touch." },
  { num: "02", title: "Team rosters", desc: "Varsity, JV, Freshman, and every level stay linked to the right gear and fees." },
  { num: "03", title: "Schedule", desc: "Games, practices, travel, and conflicts visible to staff in one place." },
  { num: "04", title: "Command Center", desc: "The opening view: what needs attention from coaches and assistants today." },
  { num: "05", title: "Practice Focus", desc: "Pick the practice objective and let the rest of the staff line up behind it." },
  { num: "06", title: "Practice Builder", desc: "Drag drills into a schedule, share with assistants, lock the plan day-of." },
  { num: "07", title: "Game Prep", desc: "Scouting notes, depth charts, and walkthroughs that travel with the team." },
  { num: "08", title: "Staff tasks", desc: "Assign follow-ups and check-ins so nothing falls between coaches." },
  { num: "09", title: "Messaging", desc: "Direct comms with athletes and parents — receipts, returns, reminders, clearance." },
];

const AUDIENCES = [
  {
    role: "For Coaches",
    title: "Stop chasing gear and paperwork",
    desc: "Run handout day, return day, team kits, athlete assignments, fees, and follow-ups from one place.",
    bullets: ["Handout & return workflows", "Athlete assignments & fees", "Photo & condition tracking", "Messaging to athletes & parents"],
  },
  {
    role: "For Athletic Directors",
    title: "One inventory standard for every sport",
    desc: "Give every sport the same accountability system without asking each coach to build their own spreadsheet.",
    bullets: ["School-wide visibility", "Cross-sport readiness review", "Clearance & fee oversight", "Vendor & replacement planning"],
  },
  {
    role: "For Districts",
    title: "Inventory visibility across schools",
    desc: "Standardize accountability across high schools and middle schools, then review shortages, risk, and readiness from the district level.",
    bullets: ["Multi-campus rollups", "District readiness scorecards", "Rollout & onboarding support", "Leadership reporting"],
  },
];

const FAQ_ITEMS = [
  { q: "How is Inventory priced?", a: "Pricing is built around scope, not seats. One sport is the Program plan; the whole school is the Athletic Department plan; multi-campus is District. Every plan includes unlimited coaches, teams, and athletes inside its scope." },
  { q: "What is founding pricing?", a: "Founding pricing is a $300/year discount available to individual Programs that onboard early. Once an account is founded, the rate is locked for life while the subscription stays active. Founding pricing does not apply to school or district plans, which are already discounted." },
  { q: "Is monthly pricing available?", a: "Yes — founding monthly is $59/month for individual Programs only. Most schools choose annual to lock the founding rate." },
  { q: "What counts as a Team?", a: "A team is one level within a sport — Varsity, JV, Freshman, B-team, etc. Every level inside a sport is included in the Program plan; there is no extra charge per level." },
  { q: "Can an athletic department use this across every sport?", a: "Yes. The Athletic Department plan covers every sport at one school, with program switching, AD visibility, and the Coaching OS included for every program." },
  { q: "What does the Coaching OS include?", a: "Athlete records, team rosters, schedule, Command Center, Practice Focus, Practice Builder, Game Prep, staff tasks, and messaging — all connected to the inventory data so accountability stays intact." },
];

/* ============================================================ PAGE */

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <SiteNav />
      <Hero />
      <Pillars />
      <PhotoBand />
      <Timeline />
      <CoachingOS />
      <Audiences />
      <Pricing />
      <FounderAccess />
      <FaqSection items={FAQ_ITEMS} />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}

/* ============================================================ HERO */

function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-20">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        {/* Masthead row */}
        <div
          className="mb-9 flex flex-wrap items-center justify-between gap-4 border-b pb-5"
          style={{ borderColor: "var(--color-ink)" }}
        >
          <div className="flex flex-wrap items-center gap-[18px]">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The Operating System
            </span>
            <span className="text-[11px] uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
              for winning programs — K–12 athletics
            </span>
          </div>
          <div
            className="inline-flex items-baseline gap-2 rounded-sm px-3 py-[7px]"
            style={{
              background: "var(--color-accent)",
              color: "var(--color-accent-ink)",
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 14,
              letterSpacing: "0.02em",
            }}
          >
            $300 OFF
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Founding price · locked for life
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="display"
          style={{
            fontSize: "clamp(56px, 12.5vw, 200px)",
          }}
        >
          Know what
          <br />
          you own.
          <br />
          <span className="headline-italic">Know who </span>
          <span className="text-accent-brand">has it.</span>
        </h1>

        {/* Sub-deck */}
        <div className="mt-10 grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <p
            className="max-w-[540px]"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(20px, 2.2vw, 30px)",
              lineHeight: 1.25,
            }}
          >
            From handout day to return day — uniforms, equipment, kits, fees, and follow-ups. One
            inventory standard for every sport in your program.
          </p>
          <div className="flex flex-col items-start gap-3.5">
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-[10px]">
              <ArrowBtn href="#pricing" large>Start with one sport</ArrowBtn>
              <a href="#pricing" className="btn btn-ghost btn-lg">See school-wide pricing</a>
            </div>
            <div
              className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]"
            >
              Founding Program Pricing · All Teams Included
            </div>
          </div>
        </div>

        {/* Stat band */}
        <div
          className="mt-20 grid border-t border-b sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: "var(--color-ink)" }}
        >
          {[
            ["$300", "Annual founding savings for individual Programs."],
            ["All", "Teams included — Varsity, JV, Freshman, every level."],
            ["1", "Inventory standard across every sport in the school.", "standard"],
            ["0", "Spreadsheets that don’t talk to each other.", "spreadsheets"],
          ].map(([big, label, sup], i) => (
            <div
              key={i}
              className="flex flex-col gap-2.5 border-[color:var(--color-line)] p-6 [&:not(:last-child)]:border-b sm:[&:not(:nth-child(2n))]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&]:border-b-0 lg:[&:not(:last-child)]:border-r"
            >
              <div
                className="display"
                style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}
              >
                {i === 0 ? <span className="text-accent-brand">{big}</span> : big}
                {sup ? (
                  <span
                    style={{ fontSize: "0.5em", verticalAlign: "super", fontWeight: 700 }}
                  >
                    {sup}
                  </span>
                ) : null}
              </div>
              <div className="text-[13px] leading-[1.35] text-[color:var(--color-ink-soft)]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero product showcase */}
      <div className="mx-auto mt-20 max-w-[1440px] px-5 md:px-8">
        <div className="relative">
          <p
            className="absolute hidden max-w-[240px] -translate-y-2 text-[18px] italic leading-tight md:block"
            style={{ top: -38, left: "4%", fontFamily: "var(--font-serif)" }}
          >
            Receive a vendor shipment — counts, condition, photos, backorders, all in one place.
          </p>
          <div
            className="relative overflow-hidden rounded-[10px] border"
            style={{
              borderColor: "var(--color-line-strong)",
              background: "#f4ede1",
              boxShadow:
                "0 30px 80px -20px rgba(14,30,46,.35), 0 8px 24px -8px rgba(14,30,46,.18)",
            }}
          >
            <Image
              src="/product-receive.png"
              alt="The Program Suite — Receive Shipment screen showing PO #1124 with item counts, conditions, and backorder flags"
              width={2156}
              height={1458}
              priority
              sizes="(min-width: 1200px) 1240px, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <p
            className="absolute hidden max-w-[240px] text-right text-[18px] italic leading-tight md:block"
            style={{ bottom: -42, right: "6%", fontFamily: "var(--font-serif)" }}
          >
            One click sets every row to expected — for the days nothing’s wrong.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ PILLARS */

function Pillars() {
  return (
    <section id="inventory" className="py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-[18px]"><Eyebrow>The front door · Inventory</Eyebrow></div>
        <div
          className="mb-12 grid items-end gap-10 border-b pb-9 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
          style={{ borderColor: "var(--color-ink)" }}
        >
          <h2 className="display" style={{ fontSize: "clamp(36px, 5.5vw, 88px)" }}>
            Inventory first.
            <br />
            <span className="headline-italic">The program </span>
            <span className="text-accent-brand">stays connected.</span>
          </h2>
          <p
            className="max-w-[540px]"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(17px, 1.6vw, 24px)",
              lineHeight: 1.35,
              color: "var(--color-ink-soft)",
            }}
          >
            Most schools start with Inventory. Coaches keep using The Program Suite because it
            becomes the daily operating system for the whole program.
          </p>
        </div>
        <div
          className="grid border-t sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: "var(--color-ink)" }}
        >
          {INVENTORY_PILLARS.map((p, i) => (
            <div
              key={p.num}
              className="flex min-h-[280px] flex-col gap-4 border-b border-[color:var(--color-line)] p-7 sm:[&:not(:nth-child(2n))]:border-r lg:[&:not(:last-child)]:border-r"
              style={{ borderBottomColor: "var(--color-ink)" }}
            >
              <div
                className="text-[14px] font-black tracking-[0.1em] text-[color:var(--color-accent)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.num} — {p.tag}
              </div>
              <h3
                className="display"
                style={{ fontSize: "clamp(26px, 2.4vw, 40px)", lineHeight: 0.92 }}
              >
                {p.title}
              </h3>
              <p className="mt-auto text-[14.5px] leading-[1.5] text-[color:var(--color-ink-soft)]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ PHOTO BAND */

function PhotoBand() {
  return (
    <section
      className="relative flex items-center overflow-hidden border-t border-b"
      style={{
        borderColor: "var(--color-ink)",
        background: "var(--color-ink)",
        minHeight: 420,
        padding: "64px 0",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 40%, color-mix(in srgb, var(--color-accent) 35%, transparent), transparent 55%),
            radial-gradient(ellipse at 80% 60%, rgba(245,240,231,.06), transparent 50%),
            repeating-linear-gradient(115deg, rgba(255,255,255,.025) 0 1px, transparent 1px 22px),
            linear-gradient(180deg, color-mix(in srgb, var(--color-ink) 92%, #000) 0%, var(--color-ink) 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--color-ink) 0%, rgba(0,0,0,0.3) 50%, var(--color-ink) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <div className="mb-5">
          <Eyebrow onDark>From the field</Eyebrow>
        </div>
        <p
          className="max-w-[920px] text-[color:var(--color-paper)]"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(24px, 3.6vw, 56px)",
            lineHeight: 1.15,
          }}
        >
          “We stopped chasing helmets in February. By October, every piece of inventory was already
          accounted for.”
        </p>
        <div className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-paper)]/70">
          Head Coach · High School Athletics
        </div>
      </div>
    </section>
  );
}

/* ============================================================ TIMELINE */

function Timeline() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-[18px]"><Eyebrow>Daily operations</Eyebrow></div>
        <div
          className="mb-12 grid items-end gap-10 border-b pb-9 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
          style={{ borderColor: "var(--color-ink)" }}
        >
          <h2 className="display" style={{ fontSize: "clamp(36px, 5.5vw, 88px)" }}>
            From handout day
            <br />
            <span className="headline-italic">to </span>
            <span className="text-accent-brand">return day.</span>
          </h2>
          <p
            className="max-w-[540px]"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(17px, 1.6vw, 24px)",
              lineHeight: 1.35,
              color: "var(--color-ink-soft)",
            }}
          >
            One workflow that runs the whole gear cycle. Built around the days that matter — not
            the days in between.
          </p>
        </div>

        <div className="border-t" style={{ borderColor: "var(--color-ink)" }}>
          {DAILY_OPS.map((s, i) => (
            <div
              key={s.num}
              className="grid items-baseline gap-4 border-b py-7 md:grid-cols-[60px_1fr] md:gap-6"
              style={{
                borderColor:
                  i === DAILY_OPS.length - 1 ? "var(--color-ink)" : "var(--color-line)",
              }}
            >
              <div
                className="display text-[color:var(--color-accent)]"
                style={{ fontSize: 36, lineHeight: 1 }}
              >
                {s.num}
              </div>
              <div>
                <h3
                  className="display"
                  style={{ fontSize: "clamp(24px, 2.2vw, 38px)", lineHeight: 0.95, marginBottom: 6 }}
                >
                  {s.title}
                </h3>
                <p className="max-w-[540px] text-[15px] leading-[1.45] text-[color:var(--color-ink-soft)]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ COACHING OS */

function CoachingOS() {
  return (
    <section
      id="coaching-os"
      className="py-24 md:py-[120px]"
      style={{ background: "var(--color-ink)", color: "var(--color-paper)" }}
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-[18px]"><Eyebrow onDark>Coaching OS · included</Eyebrow></div>
        <div
          className="mb-12 grid items-end gap-10 border-b pb-9 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
          style={{ borderColor: "rgba(245,240,231,.25)" }}
        >
          <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 92px)", color: "var(--color-paper)" }}>
            Inventory works
            <br />
            <span className="headline-italic">because the </span>
            <span className="text-accent-brand">program</span>
            <br />
            <span className="headline-italic">is connected.</span>
          </h2>
          <p
            className="max-w-[540px]"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(17px, 1.6vw, 24px)",
              lineHeight: 1.35,
              color: "rgba(245,240,231,.7)",
            }}
          >
            Gear accountability depends on rosters, schedules, staff follow-up, team levels, and
            clear communication with athletes. So we built all of it.
          </p>
        </div>

        <div
          className="grid border-t sm:grid-cols-2 lg:grid-cols-3"
          style={{ borderColor: "rgba(245,240,231,.15)" }}
        >
          {COACHING_OS_ITEMS.map((it, i) => (
            <div
              key={it.num}
              className="flex flex-col gap-2.5 p-6"
              style={{
                borderRight:
                  (i + 1) % 3 === 0
                    ? "0"
                    : "1px solid rgba(245,240,231,.10)",
                borderBottom: "1px solid rgba(245,240,231,.10)",
              }}
            >
              <div
                className="text-[12px] font-black tracking-[0.1em] text-[color:var(--color-accent)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {it.num}
              </div>
              <h3
                className="display"
                style={{ fontSize: 24, lineHeight: 0.95, color: "var(--color-paper)" }}
              >
                {it.title}
              </h3>
              <p
                className="text-[13.5px] leading-[1.45]"
                style={{ color: "rgba(245,240,231,.6)" }}
              >
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ AUDIENCES */

function Audiences() {
  return (
    <section id="audiences" className="py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-[18px]"><Eyebrow>Built for accountability</Eyebrow></div>
        <div
          className="mb-12 grid items-end gap-10 border-b pb-9 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
          style={{ borderColor: "var(--color-ink)" }}
        >
          <h2 className="display" style={{ fontSize: "clamp(36px, 5.5vw, 88px)" }}>
            Coaches, ADs, districts —
            <br />
            <span className="headline-italic">the </span>
            <span className="text-accent-brand">same standard.</span>
          </h2>
          <p
            className="max-w-[540px]"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(17px, 1.6vw, 24px)",
              lineHeight: 1.35,
              color: "var(--color-ink-soft)",
            }}
          >
            Every sport. Every level. Every campus. Whatever scale you operate at, the inventory
            standard doesn’t change.
          </p>
        </div>

        <div
          className="grid border-t border-b lg:grid-cols-3"
          style={{ borderColor: "var(--color-ink)" }}
        >
          {AUDIENCES.map((a, i) => (
            <div
              key={a.role}
              className="flex flex-col gap-4 p-8 md:p-11"
              style={{
                borderRight:
                  i === AUDIENCES.length - 1 ? "0" : "1px solid var(--color-line)",
                borderBottom: i === AUDIENCES.length - 1 ? "0" : "1px solid var(--color-line)",
              }}
            >
              <div
                className="text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-accent)]"
              >
                {a.role}
              </div>
              <h3
                className="display max-w-[14ch]"
                style={{ fontSize: "clamp(26px, 2.4vw, 38px)", lineHeight: 0.95 }}
              >
                {a.title}
              </h3>
              <p className="text-[15px] leading-[1.5] text-[color:var(--color-ink-soft)]">
                {a.desc}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {a.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-baseline gap-2.5 text-[13.5px] text-[color:var(--color-ink)]"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block size-[6px] shrink-0 -translate-y-[1px] rounded-full bg-[color:var(--color-accent)]"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ PRICING */

function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-[18px]"><Eyebrow>Pricing</Eyebrow></div>
        <div
          className="mb-12 grid items-end gap-10 border-b pb-9 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
          style={{ borderColor: "var(--color-ink)" }}
        >
          <h2 className="display" style={{ fontSize: "clamp(36px, 5.5vw, 88px)" }}>
            Three ways to buy.
            <br />
            <span className="headline-italic">One </span>
            <span className="text-accent-brand">inventory standard.</span>
          </h2>
          <p
            className="max-w-[540px]"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(17px, 1.6vw, 24px)",
              lineHeight: 1.35,
              color: "var(--color-ink-soft)",
            }}
          >
            Start with one sport, cover every sport at one school, or standardize across a district.
            Founding individual Programs save $300/year for life.
          </p>
        </div>

        {/* Pricing-intro band */}
        <div
          className="grid border-t border-b sm:grid-cols-3"
          style={{ borderColor: "var(--color-line)" }}
        >
          {[
            ["Shortages", "Know what must be ordered before a team is short on handout day."],
            ["Clearance", "See which athletes still owe items or fees before they move on."],
            ["Readiness", "Audit gaps, replacement needs, and program kit readiness by sport."],
          ].map(([t, d], i) => (
            <div
              key={t}
              className="p-6 [&:not(:last-child)]:border-b sm:[&:not(:nth-child(3n))]:border-r sm:[&:not(:last-child)]:border-b-0"
              style={{ borderColor: "var(--color-line)" }}
            >
              <h4
                className="display"
                style={{ fontSize: 20, marginBottom: 6 }}
              >
                {t}
              </h4>
              <p className="text-[13.5px] leading-[1.4] text-[color:var(--color-ink-soft)]">{d}</p>
            </div>
          ))}
        </div>

        {/* 3 plans */}
        <div
          className="grid border-t lg:grid-cols-3"
          style={{ borderColor: "var(--color-ink)" }}
        >
          {/* Program plan */}
          <PlanCard
            tag="Save $300/year for life"
            eyebrow="Program plan"
            name={<>One sport.<br />All teams included.</>}
            desc="For one sport that wants serious inventory accountability without waiting on a school-wide rollout."
            price="499"
            per="/year"
            priceSub="Founding annual — locked while active. Standard price is $799/year."
            rowLabel="Founding monthly"
            rowValue="$59/mo"
            features={[
              "Inventory Catalog",
              "Issue & Collect",
              "Program Kits",
              "Audit, labels, scan",
              "Fees and clearance",
              "All teams inside the Program",
              "Command Center, Athletes, Schedule, Practice, Game Prep, Messaging",
            ]}
            ctaLabel="Start with one sport"
            ctaHref="#founder-access"
            ctaVariant="ink"
            isFirst
          />
          {/* AD plan — featured (dark) */}
          <PlanCard
            tag="Best school value"
            eyebrow="Athletic Department"
            name={<>Every sport.<br />One school.</>}
            desc="For ADs who want the same inventory standard across football, volleyball, basketball, baseball, softball, soccer, track, wrestling — every sport."
            price="1,499"
            per="/year"
            priceSub="School-wide coverage already discounted."
            rowLabel="Per sport, roughly"
            rowValue="~$100/sport"
            features={[
              "Inventory for every sport",
              "Program switching",
              "School-wide accountability",
              "AD visibility",
              "All coaches and teams included",
              "Coaching OS for every program",
            ]}
            ctaLabel="Cover the whole school"
            ctaHref="#founder-access"
            ctaVariant="primary"
            featured
          />
          {/* District plan */}
          <PlanCard
            eyebrow="District plan"
            name={<>High schools<br />& middle schools.</>}
            desc="For districts standardizing inventory accountability, readiness, clearance risk, and replacement planning across campuses."
            priceCustom="Custom"
            priceSub="Built around school count and rollout needs."
            rowLabel="Includes"
            rowValue="Rollout support"
            features={[
              "Multi-school inventory visibility",
              "District-level readiness and risk",
              "Rollout support & training",
              "Custom school coverage",
              "Leadership reporting",
            ]}
            ctaLabel="Talk district coverage"
            ctaHref="mailto:founders@theprogramsuite.com?subject=District%20coverage"
            ctaVariant="ink"
            isLast
          />
        </div>

        <p
          className="mx-auto mt-8 text-center text-[12.5px] text-[color:var(--color-muted)]"
          style={{ letterSpacing: 0.02 }}
        >
          Founding pricing applies to individual Programs only. The Athletic Department plan is
          already discounted for school-wide coverage.
        </p>
      </div>
    </section>
  );
}

function PlanCard({
  tag,
  eyebrow,
  name,
  desc,
  price,
  per,
  priceCustom,
  priceSub,
  rowLabel,
  rowValue,
  features,
  ctaLabel,
  ctaHref,
  ctaVariant = "ink",
  featured = false,
  isFirst = false,
  isLast = false,
}: {
  tag?: string;
  eyebrow: string;
  name: React.ReactNode;
  desc: string;
  price?: string;
  per?: string;
  priceCustom?: string;
  priceSub: string;
  rowLabel: string;
  rowValue: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaVariant?: "primary" | "ink" | "ghost";
  featured?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  const bg = featured ? "var(--color-ink)" : "var(--color-paper)";
  const fg = featured ? "var(--color-paper)" : "var(--color-ink)";
  const sub = featured ? "rgba(245,240,231,.7)" : "var(--color-ink-soft)";
  const ruleC = featured ? "rgba(245,240,231,.15)" : "var(--color-line)";
  void isFirst;
  return (
    <div
      className="relative flex flex-col p-8 md:p-9"
      style={{
        background: bg,
        color: fg,
        borderRight: isLast ? "0" : "1px solid var(--color-line)",
        borderBottom: "1px solid var(--color-ink)",
      }}
    >
      {tag ? (
        <div
          className="absolute left-0 top-0 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em]"
          style={{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }}
        >
          {tag}
        </div>
      ) : null}
      <div
        className="mt-4 text-[12px] font-black uppercase tracking-[0.12em] text-[color:var(--color-accent)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {eyebrow}
      </div>
      <h3
        className="display mt-2"
        style={{ fontSize: "clamp(26px, 2.4vw, 36px)", lineHeight: 0.95, color: fg }}
      >
        {name}
      </h3>
      <p className="mt-3.5 max-w-[38ch] text-[14.5px] leading-[1.45]" style={{ color: sub }}>
        {desc}
      </p>
      <div className="my-6 h-px" style={{ background: ruleC }} />
      <div>
        <div
          className="display"
          style={{
            fontSize: priceCustom ? "clamp(40px, 5vw, 72px)" : "clamp(48px, 6vw, 84px)",
            lineHeight: 0.85,
            letterSpacing: "-0.015em",
            color: fg,
          }}
        >
          {priceCustom ? (
            priceCustom
          ) : (
            <>
              <span style={{ fontSize: "0.35em", verticalAlign: "super", fontWeight: 700, marginRight: 4 }}>$</span>
              {price}
              <span
                className="ml-2 align-baseline text-[13px] font-medium"
                style={{ fontFamily: "var(--font-body)", color: sub }}
              >
                {per}
              </span>
            </>
          )}
        </div>
        <div className="mt-1.5 text-[12px]" style={{ color: sub }}>
          {priceSub}
        </div>
      </div>
      <div
        className="mt-3 flex items-baseline justify-between border-t py-3 text-[13px]"
        style={{ borderColor: ruleC }}
      >
        <span>{rowLabel}</span>
        <strong
          className="display"
          style={{ fontSize: 18, letterSpacing: "0.01em", color: fg }}
        >
          {rowValue}
        </strong>
      </div>
      <ul className="my-5 flex flex-col gap-2.5">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-baseline gap-2.5 text-[13.5px] leading-[1.4]"
            style={{ color: featured ? "rgba(245,240,231,.7)" : "var(--color-ink)" }}
          >
            <span
              aria-hidden="true"
              className="inline-block size-[5px] shrink-0 -translate-y-[1px] rounded-full bg-[color:var(--color-accent)]"
            />
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-5">
        <a
          href={ctaHref}
          className={`btn ${ctaVariant === "primary" ? "btn-primary" : ctaVariant === "ink" ? "btn-ink" : "btn-ghost"}`}
          style={{ width: "100%", justifyContent: "center" }}
        >
          {ctaLabel}
          <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className="size-[14px]">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ============================================================ FOUNDER ACCESS FORM */

function FounderAccess() {
  return (
    <section
      id="founder-access"
      className="py-24 md:py-28"
      style={{ background: "var(--color-paper-2)" }}
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="mb-[18px]"><Eyebrow>Founder access</Eyebrow></div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.8vw, 72px)" }}>
              Lock in <span className="text-accent-brand">$300 off</span>
              <br />
              <span className="headline-italic">for life.</span>
            </h2>
            <p
              className="mt-6 max-w-[460px]"
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(18px, 1.8vw, 24px)",
                lineHeight: 1.3,
                color: "var(--color-ink-soft)",
              }}
            >
              Request founder pricing for your program. We’ll follow up with the right setup path
              and a payment link.
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-[14px] text-[color:var(--color-ink)]">
              {[
                "Founding price locked for life ($499/yr)",
                "All teams inside the Program included",
                "Personal onboarding from our team",
              ].map((b) => (
                <li key={b} className="flex items-baseline gap-2.5">
                  <span className="inline-block size-[6px] shrink-0 -translate-y-[1px] rounded-full bg-[color:var(--color-accent)]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <form
            method="POST"
            action="/api/founder-access"
            className="rounded-sm border bg-white p-6 md:p-8"
            style={{ borderColor: "var(--color-line-strong)" }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="field-label">Name</label>
                <input id="name" name="name" required className="field-input" placeholder="Jane Coach" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="field-label">Email</label>
                <input id="email" name="email" type="email" required className="field-input" placeholder="jane@school.edu" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="school" className="field-label">School</label>
                <input id="school" name="school" required className="field-input" placeholder="Memorial HS" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="role" className="field-label">Role</label>
                <select id="role" name="role" required className="field-select" defaultValue="">
                  <option value="" disabled>Select your role…</option>
                  <option>Head Coach</option>
                  <option>Assistant Coach</option>
                  <option>Athletic Director</option>
                  <option>District Admin</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="sports" className="field-label">Sport(s)</label>
                <input id="sports" name="sports" required className="field-input" placeholder="Football, basketball…" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="plan" className="field-label">Plan</label>
                <select id="plan" name="plan" required className="field-select" defaultValue="">
                  <option value="" disabled>Choose a plan…</option>
                  <option>Program — $499/yr (founding)</option>
                  <option>Program — $59/mo (founding)</option>
                  <option>Athletic Department — $1,499/yr</option>
                  <option>District — custom</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="field-label">
                  Biggest thing you need help managing (optional)
                </label>
                <textarea id="message" name="message" className="field-textarea" placeholder="Handout day chaos, missing gear at season end, AD reporting…" />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg mt-6 w-full justify-center"
            >
              Request founder access
              <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className="size-[14px]">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
            <p className="mt-3 text-[11.5px] uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
              We reply within one business day.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ FINAL CTA */

function FinalCta() {
  return (
    <section
      className="border-t py-24 md:py-[120px]"
      style={{
        background: "var(--color-accent)",
        color: "var(--color-accent-ink)",
        borderColor: "var(--color-ink)",
      }}
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-6">
          <span className="eyebrow" style={{ color: "var(--color-accent-ink)" }}>
            <span className="dot" style={{ background: "var(--color-accent-ink)" }} />
            Get started
          </span>
        </div>
        <h2
          className="display"
          style={{ fontSize: "clamp(48px, 8vw, 140px)", color: "var(--color-accent-ink)" }}
        >
          Your school
          <br />
          <span className="headline-italic">should know </span>where
          <br />
          every piece is.
        </h2>
        <div className="mt-12 flex flex-col items-stretch justify-between gap-6 md:flex-row md:items-end">
          <p
            className="max-w-[480px]"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(18px, 1.8vw, 22px)",
              lineHeight: 1.3,
            }}
          >
            Start with one sport — or bring every program under the same accountability system
            today.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-[10px]">
            <ArrowBtn href="#founder-access" variant="ink" large>Start with one sport</ArrowBtn>
            <a
              href="#pricing"
              className="btn btn-lg"
              style={{
                background: "transparent",
                color: "var(--color-accent-ink)",
                borderColor: "var(--color-accent-ink)",
              }}
            >
              School-wide pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import Image from "next/image";
import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Dumbbell,
  MessageSquare,
  PackageCheck,
  ShieldCheck,
  Users,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { ArrowBtn, Eyebrow } from "@/components/primitives";

const CORE_SYSTEMS = [
  {
    icon: Users,
    title: "Athlete 360",
    desc: "Roster, availability, sizing, follow-ups, family access, development notes, and health signals in one athlete profile.",
  },
  {
    icon: CalendarDays,
    title: "Season command",
    desc: "Games, practices, travel, attendance, confirmations, staffing, and game-day readiness stay tied to the active season.",
  },
  {
    icon: ClipboardList,
    title: "Practice planning",
    desc: "Install Goals, drill libraries, practice blocks, staff assignments, coverage checks, and carryover work move together.",
  },
  {
    icon: Dumbbell,
    title: "Training floor",
    desc: "Strength groups, session command, athlete switching, load tracking, max imports, and rack-side capture for iPad workflows.",
  },
  {
    icon: PackageCheck,
    title: "Inventory and budget",
    desc: "Catalog, issue, collect, scan, fee records, kit readiness, budget balances, purchase requests, and replacement planning.",
  },
  {
    icon: BarChart3,
    title: "District visibility",
    desc: "Cross-school readiness, inventory rollups, budget review, audit trails, alerts, action items, and board-ready reports.",
  },
];

const PRODUCT_SHOTS = [
  {
    src: "/product-receive.png",
    alt: "Receive shipment screen in The Program Suite with purchase order details, item counts, and condition tracking",
    eyebrow: "Real product screen",
    title: "Receive a vendor shipment without rebuilding the count in a spreadsheet.",
  },
  {
    src: "/images/practice-dashboard-hero.png",
    alt: "Practice planning product visual for The Program Suite",
    eyebrow: "Practice",
    title: "Turn the next practice into a staff-ready plan.",
  },
  {
    src: "/images/training-dashboard-hero.png",
    alt: "Training dashboard product visual for The Program Suite",
    eyebrow: "Training",
    title: "Keep the weight room tied to athletes, groups, and progress.",
  },
];

const WORKFLOWS = [
  {
    num: "01",
    title: "Open the day",
    desc: "The coach home base surfaces what needs attention now: attendance, game prep, inventory gaps, forms, messages, budget requests, and stale work.",
  },
  {
    num: "02",
    title: "Run the work",
    desc: "Build practice, take attendance, issue inventory, check availability, run a training session, or message families without bouncing between tools.",
  },
  {
    num: "03",
    title: "Close the loop",
    desc: "Follow-ups, fee records, carryover drills, makeup work, staff tasks, alerts, and district action items keep unfinished work from disappearing.",
  },
];

const ROLES = [
  {
    role: "For coaches",
    title: "A staff in your pocket.",
    desc: "Plan practice, prep for games, track athletes, handle inventory, communicate with families, and see what needs attention next.",
    bullets: ["Coach command center", "Athlete 360 profiles", "Practice and game prep", "Inventory issue and collect"],
  },
  {
    role: "For athletic directors",
    title: "One operating standard for every sport.",
    desc: "Give each program the same playbook for accountability while keeping sport-by-sport ownership clear.",
    bullets: ["School-wide sport visibility", "Budget and inventory review", "Program switching", "Staff and access controls"],
  },
  {
    role: "For districts",
    title: "Cross-school oversight without spreadsheet chasing.",
    desc: "Review readiness, risks, audit trails, budgets, inventory needs, and follow-up work across schools from one district layer.",
    bullets: ["District alerts", "Readiness reports", "Board packets", "Implementation tracking"],
  },
];

const MOBILE_FEATURES = [
  "Phone-first coach pocket app",
  "iPad training-floor workflows",
  "Inventory scanning and issue/collect",
  "Attendance and game-day checks",
  "Athlete lookup and messaging",
];

const FAQ_ITEMS = [
  {
    q: "Is The Program Suite only for inventory?",
    a: "No. Inventory is an easy place to start because every school feels that pain, but the product is a full operating system for school sports: athletes, practice, training, schedule, attendance, game prep, messaging, budget, forms, and district oversight.",
  },
  {
    q: "Who is it built for?",
    a: "It is built for coaches, athletic directors, school staff, athletes, families, and district leaders. Coaches get fast daily workflows; ADs get school-wide visibility; districts get cross-school reporting and accountability.",
  },
  {
    q: "Can one coach use it for multiple sports?",
    a: "Yes. The app is built around school, sport, team, and season context, so a coach can switch programs while each sport keeps its own roster, schedule, inventory, practice plans, and reports.",
  },
  {
    q: "Does it work on phones and tablets?",
    a: "Yes. The web dashboard is built for desktop operations, and mobile-first screens support quick coach actions on iPhone plus larger iPad workflows like training-floor capture and staff work.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is based on scope. A Program plan starts with one sport, the Athletic Department plan covers every sport at one school, and District coverage supports multiple schools with rollout and reporting needs.",
  },
  {
    q: "Can we start with one sport and expand later?",
    a: "Yes. Most schools can start with one sport, prove the operating rhythm, then expand to the full athletic department or district when leadership is ready.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <SiteNav />
      <Hero />
      <ProductProof />
      <OperatingSystem />
      <Workflow />
      <Screenshots />
      <MobileAndDistrict />
      <Audiences />
      <Pricing />
      <FounderAccess />
      <FaqSection items={FAQ_ITEMS} />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden pt-14 pb-20 md:pt-18">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div
          className="mb-9 flex flex-wrap items-center justify-between gap-4 border-b pb-5"
          style={{ borderColor: "var(--color-ink)" }}
        >
          <div className="flex flex-wrap items-center gap-[18px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
              The Program Suite
            </span>
            <span className="text-[11px] uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
              Operating system for school sports
            </span>
          </div>
          <a
            className="btn btn-ink"
            href="#founder-access"
            style={{ minHeight: 38, padding: "10px 16px", fontSize: 13 }}
          >
            Request founder access
          </a>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.72fr)] lg:items-end">
          <div>
            <h1 className="display" style={{ fontSize: "clamp(54px, 11vw, 164px)" }}>
              Run the
              <br />
              whole
              <br />
              <span className="headline-italic">program.</span>
            </h1>
            <p
              className="mt-9 max-w-[620px]"
              style={{
                color: "var(--color-ink-soft)",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 2.2vw, 30px)",
                fontStyle: "italic",
                lineHeight: 1.24,
              }}
            >
              One home base for coaches and athletic departments: athletes, practice, training,
              schedule, game day, inventory, budget, messages, and district oversight.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <ArrowBtn href="#founder-access" large>
                Start with one sport
              </ArrowBtn>
              <a className="btn btn-ghost btn-lg" href="#product">
                See the system
              </a>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-[10px] border bg-white"
            style={{
              borderColor: "var(--color-line-strong)",
              boxShadow:
                "0 34px 90px -28px rgba(14,30,46,.42), 0 10px 28px -14px rgba(14,30,46,.26)",
            }}
          >
            <Image
              src="/product-receive.png"
              alt="The Program Suite receive shipment screen"
              width={2156}
              height={1458}
              priority
              className="h-auto w-full"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </div>

        <div
          className="mt-16 grid border-t border-b sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: "var(--color-ink)" }}
        >
          {[
            ["1", "coach home base for what needs attention today"],
            ["10+", "major staff workflows connected across the season"],
            ["All", "teams and levels inside each sport"],
            ["3", "layers of visibility: sport, school, district"],
          ].map(([big, label], index) => (
            <div
              key={label}
              className="flex min-h-[132px] flex-col justify-between gap-4 border-[color:var(--color-line)] p-6 [&:not(:last-child)]:border-b sm:[&:not(:nth-child(2n))]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&]:border-b-0 lg:[&:not(:last-child)]:border-r"
            >
              <div className="display text-[color:var(--color-accent)]" style={{ fontSize: 58 }}>
                {big}
              </div>
              <p className="text-[13px] leading-[1.35] text-[color:var(--color-ink-soft)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductProof() {
  return (
    <section id="product" className="py-20 md:py-24" style={{ background: "var(--color-ink)" }}>
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-[18px]">
          <Eyebrow onDark>Built from the app</Eyebrow>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.35fr] lg:items-center">
          <div>
            <h2
              className="display text-[color:var(--color-paper)]"
              style={{ fontSize: "clamp(38px, 5.4vw, 86px)" }}
            >
              Real school
              <br />
              sports work.
            </h2>
            <p
              className="mt-6 max-w-[460px] text-[color:rgba(248,250,252,.76)]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(18px, 1.7vw, 24px)",
                fontStyle: "italic",
                lineHeight: 1.35,
              }}
            >
              This is not a landing-page mockup. The product already has screens for the daily
              work coaches and ADs actually manage.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { src: "/images/athletes-hub-hero.png", label: "Athlete 360" },
              { src: "/images/game-day-tools-hero.png", label: "Game Day" },
              { src: "/images/schedule-dashboard-hero.png", label: "Schedule" },
            ].map((shot) => (
              <figure
                className="overflow-hidden rounded-[8px] border bg-[color:var(--color-paper)]"
                key={shot.label}
                style={{ borderColor: "rgba(248,250,252,.18)" }}
              >
                <Image
                  src={shot.src}
                  alt={`${shot.label} screen in The Program Suite`}
                  width={900}
                  height={560}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(min-width: 1024px) 260px, 33vw"
                />
                <figcaption className="border-t border-[color:var(--color-line)] px-3 py-2 text-[12px] font-semibold text-[color:var(--color-ink)]">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OperatingSystem() {
  return (
    <section id="coaching-os" className="py-24 md:py-28">
      <SectionIntro
        eyebrow="Coaching OS"
        title={
          <>
            Everything a program
            <br />
            <span className="headline-italic">has to </span>
            <span className="text-accent-brand">keep moving.</span>
          </>
        }
        description="The Program Suite connects daily coaching work to the school and district layers that need accountability."
      />
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid border-t sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: "var(--color-ink)" }}>
          {CORE_SYSTEMS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                className="min-h-[250px] border-b border-[color:var(--color-line)] p-7 lg:p-8 sm:[&:not(:nth-child(2n))]:border-r lg:[&:not(:nth-child(3n))]:border-r"
                key={item.title}
              >
                <Icon aria-hidden="true" className="mb-6 size-7 text-[color:var(--color-accent)]" />
                <h3 className="display" style={{ fontSize: "clamp(25px, 2.4vw, 38px)", lineHeight: 0.95 }}>
                  {item.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-[1.5] text-[color:var(--color-ink-soft)]">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="py-24 md:py-28" style={{ background: "var(--color-paper-2)" }}>
      <SectionIntro
        eyebrow="Daily rhythm"
        title={
          <>
            Start with what
            <br />
            <span className="headline-italic">needs </span>
            <span className="text-accent-brand">attention.</span>
          </>
        }
        description="The first screen after login is a usable command center, not a marketing page. It answers what is next, what needs attention, and where to go now."
      />
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="border-t" style={{ borderColor: "var(--color-ink)" }}>
          {WORKFLOWS.map((item, index) => (
            <div
              className="grid gap-5 border-b py-8 md:grid-cols-[80px_0.8fr_1.2fr] md:items-baseline"
              key={item.num}
              style={{ borderColor: index === WORKFLOWS.length - 1 ? "var(--color-ink)" : "var(--color-line)" }}
            >
              <div className="display text-[color:var(--color-accent)]" style={{ fontSize: 42 }}>
                {item.num}
              </div>
              <h3 className="display" style={{ fontSize: "clamp(28px, 3vw, 48px)", lineHeight: 0.95 }}>
                {item.title}
              </h3>
              <p className="max-w-[640px] text-[15px] leading-[1.55] text-[color:var(--color-ink-soft)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  return (
    <section className="py-24 md:py-28">
      <SectionIntro
        eyebrow="Screenshots"
        title={
          <>
            Product proof,
            <br />
            <span className="headline-italic">not </span>
            <span className="text-accent-brand">promises.</span>
          </>
        }
        description="Use the screenshots throughout this page on sales calls, emails, or the existing website. They are pulled from the product asset library."
      />
      <div className="mx-auto grid max-w-[1240px] gap-6 px-5 md:px-8">
        {PRODUCT_SHOTS.map((shot, index) => (
          <figure
            className="grid overflow-hidden rounded-[10px] border bg-white lg:grid-cols-[minmax(0,1fr)_340px]"
            key={shot.title}
            style={{ borderColor: "var(--color-line-strong)" }}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1400}
              height={860}
              className="h-full min-h-[260px] w-full object-cover"
              sizes="(min-width: 1024px) 860px, 100vw"
            />
            <figcaption
              className={`flex flex-col justify-between gap-8 border-[color:var(--color-line)] p-6 ${
                index % 2 === 0 ? "bg-[color:var(--color-paper)]" : "bg-[color:var(--color-paper-2)]"
              }`}
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                  {shot.eyebrow}
                </p>
                <h3 className="display mt-3" style={{ fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 0.95 }}>
                  {shot.title}
                </h3>
              </div>
              <a className="btn btn-ghost w-fit" href="#founder-access">
                Talk through this screen
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function MobileAndDistrict() {
  return (
    <section className="py-24 md:py-28" style={{ background: "var(--color-ink)", color: "var(--color-paper)" }}>
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-[18px]">
              <Eyebrow onDark>Mobile and district</Eyebrow>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(38px, 5.4vw, 86px)" }}>
              Built for the
              <br />
              sideline and
              <br />
              the board room.
            </h2>
            <p
              className="mt-6 max-w-[500px] text-[color:rgba(248,250,252,.76)]"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(18px, 1.7vw, 24px)",
                fontStyle: "italic",
                lineHeight: 1.35,
              }}
            >
              Coaches get fast phone workflows. Training staff get iPad-ready capture. ADs and
              districts get the reporting layer leadership needs.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <InfoPanel
              title="Universal Apple direction"
              items={MOBILE_FEATURES}
              icon={<MessageSquare aria-hidden="true" className="size-6" />}
            />
            <InfoPanel
              title="District oversight"
              items={["School readiness rollups", "Budget and inventory review", "Audit trails", "Alerts and action items", "Exportable leadership reports"]}
              icon={<ShieldCheck aria-hidden="true" className="size-6" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section id="audiences" className="py-24 md:py-28">
      <SectionIntro
        eyebrow="Who it is for"
        title={
          <>
            One system.
            <br />
            <span className="headline-italic">Three </span>
            <span className="text-accent-brand">levels.</span>
          </>
        }
        description="The same product serves the people closest to the team and the leaders responsible for school-wide accountability."
      />
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid border-t border-b lg:grid-cols-3" style={{ borderColor: "var(--color-ink)" }}>
          {ROLES.map((role, index) => (
            <article
              className="flex flex-col gap-4 p-8 md:p-10"
              key={role.role}
              style={{
                borderRight: index === ROLES.length - 1 ? "0" : "1px solid var(--color-line)",
                borderBottom: index === ROLES.length - 1 ? "0" : "1px solid var(--color-line)",
              }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
                {role.role}
              </p>
              <h3 className="display max-w-[13ch]" style={{ fontSize: "clamp(28px, 2.7vw, 42px)", lineHeight: 0.95 }}>
                {role.title}
              </h3>
              <p className="text-[15px] leading-[1.5] text-[color:var(--color-ink-soft)]">{role.desc}</p>
              <ul className="mt-3 grid gap-2.5">
                {role.bullets.map((bullet) => (
                  <li className="flex items-baseline gap-2.5 text-[13.5px]" key={bullet}>
                    <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 translate-y-0.5 text-[color:var(--color-accent)]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-28" style={{ background: "var(--color-paper-2)" }}>
      <SectionIntro
        eyebrow="Pricing"
        title={
          <>
            Start narrow.
            <br />
            <span className="headline-italic">Scale </span>
            <span className="text-accent-brand">cleanly.</span>
          </>
        }
        description="Start with one sport, cover every sport at one school, or standardize across a district."
      />
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid border-t lg:grid-cols-3" style={{ borderColor: "var(--color-ink)" }}>
          <PlanCard
            eyebrow="Program"
            name="One sport"
            price="$499"
            sub="Founding annual pricing"
            desc="For a coach ready to run one sport with serious accountability."
            features={["All teams in the sport", "Athletes, schedule, practice, inventory", "Game prep and messaging", "Founder pricing locked while active"]}
            cta="Start with one sport"
          />
          <PlanCard
            featured
            eyebrow="Athletic department"
            name="Every sport"
            price="$1,499"
            sub="School-wide coverage"
            desc="For ADs who want one operating standard across every program."
            features={["Program switching", "School-wide inventory and budget visibility", "Staff access controls", "Every coach and team included"]}
            cta="Cover the school"
          />
          <PlanCard
            eyebrow="District"
            name="Multi-school"
            price="Custom"
            sub="Built around rollout needs"
            desc="For districts that need cross-school reporting, alerts, and implementation visibility."
            features={["District readiness reports", "Audit and action item tracking", "Board packet support", "Rollout planning"]}
            cta="Talk district coverage"
          />
        </div>
      </div>
    </section>
  );
}

function FounderAccess() {
  return (
    <section id="founder-access" className="py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="mb-[18px]">
              <Eyebrow>Founder access</Eyebrow>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.8vw, 72px)" }}>
              Bring your
              <br />
              <span className="headline-italic">program </span>
              <span className="text-accent-brand">online.</span>
            </h2>
            <p
              className="mt-6 max-w-[460px]"
              style={{
                color: "var(--color-ink-soft)",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(18px, 1.8vw, 24px)",
                fontStyle: "italic",
                lineHeight: 1.3,
              }}
            >
              Tell us where you want to start. We will follow up with the right setup path for your
              sport, school, or district.
            </p>
            <ul className="mt-8 grid gap-3 text-[14px] text-[color:var(--color-ink)]">
              {["Start with one sport or the whole school", "Use real product screens during onboarding", "Keep school, sport, team, and season work separated"].map((item) => (
                <li className="flex items-baseline gap-2.5" key={item}>
                  <span className="inline-block size-[6px] shrink-0 -translate-y-[1px] rounded-full bg-[color:var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <form
            action="/api/founder-access"
            className="rounded-sm border bg-white p-6 md:p-8"
            method="POST"
            style={{ borderColor: "var(--color-line-strong)" }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" placeholder="Jane Coach" required />
              <Field id="email" label="Email" placeholder="jane@school.edu" required type="email" />
              <Field id="school" label="School" placeholder="Memorial HS" required />
              <label>
                <span className="field-label">Role</span>
                <select className="field-select" defaultValue="" id="role" name="role" required>
                  <option disabled value="">
                    Select your role...
                  </option>
                  <option>Head Coach</option>
                  <option>Assistant Coach</option>
                  <option>Athletic Director</option>
                  <option>District Admin</option>
                  <option>Other</option>
                </select>
              </label>
              <Field id="sports" label="Sport(s)" placeholder="Football, basketball..." required />
              <label>
                <span className="field-label">Where do you want to start?</span>
                <select className="field-select" defaultValue="" id="plan" name="plan" required>
                  <option disabled value="">
                    Choose a starting point...
                  </option>
                  <option>One sport</option>
                  <option>Every sport at one school</option>
                  <option>District coverage</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="field-label">What do you need help running?</span>
                <textarea
                  className="field-textarea"
                  id="message"
                  name="message"
                  placeholder="Inventory, practice planning, training, attendance, budget, district reporting..."
                />
              </label>
            </div>
            <button className="btn btn-primary btn-lg mt-6 w-full justify-center" type="submit">
              Request founder access
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

function FinalCta() {
  return (
    <section
      className="border-t py-24 md:py-[120px]"
      style={{ background: "var(--color-accent)", borderColor: "var(--color-ink)", color: "var(--color-accent-ink)" }}
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-6">
          <span className="eyebrow" style={{ color: "var(--color-accent-ink)" }}>
            <span className="dot" style={{ background: "var(--color-accent-ink)" }} />
            Get started
          </span>
        </div>
        <h2 className="display" style={{ color: "var(--color-accent-ink)", fontSize: "clamp(48px, 8vw, 132px)" }}>
          Give every
          <br />
          sport a real
          <br />
          operating system.
        </h2>
        <div className="mt-12 flex flex-col items-stretch justify-between gap-6 md:flex-row md:items-end">
          <p
            className="max-w-[520px]"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(18px, 1.8vw, 22px)",
              fontStyle: "italic",
              lineHeight: 1.3,
            }}
          >
            Start with one sport, expand to the school, or bring district oversight into one shared
            system.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <ArrowBtn href="#founder-access" large variant="ink">
              Request access
            </ArrowBtn>
            <a
              className="btn btn-lg"
              href="#pricing"
              style={{
                background: "transparent",
                borderColor: "var(--color-accent-ink)",
                color: "var(--color-accent-ink)",
              }}
            >
              Compare pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  description,
  eyebrow,
  title,
}: {
  description: string;
  eyebrow: string;
  title: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1240px] px-5 md:px-8">
      <div className="mb-[18px]">
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <div
        className="mb-12 grid items-end gap-10 border-b pb-9 lg:grid-cols-[1fr_1.25fr] lg:gap-16"
        style={{ borderColor: "var(--color-ink)" }}
      >
        <h2 className="display" style={{ fontSize: "clamp(36px, 5.5vw, 88px)" }}>
          {title}
        </h2>
        <p
          className="max-w-[560px]"
          style={{
            color: "var(--color-ink-soft)",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(17px, 1.6vw, 24px)",
            fontStyle: "italic",
            lineHeight: 1.35,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function InfoPanel({ icon, items, title }: { icon: ReactNode; items: string[]; title: string }) {
  return (
    <article className="rounded-[8px] border border-[rgba(248,250,252,.18)] bg-[rgba(248,250,252,.06)] p-6">
      <div className="mb-5 text-[color:var(--color-accent)]">{icon}</div>
      <h3 className="display" style={{ fontSize: 34, lineHeight: 0.95 }}>
        {title}
      </h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li className="flex items-baseline gap-2.5 text-[14px] text-[rgba(248,250,252,.78)]" key={item}>
            <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 translate-y-0.5 text-[color:var(--color-accent)]" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function PlanCard({
  cta,
  desc,
  eyebrow,
  featured = false,
  features,
  name,
  price,
  sub,
}: {
  cta: string;
  desc: string;
  eyebrow: string;
  featured?: boolean;
  features: string[];
  name: string;
  price: string;
  sub: string;
}) {
  const background = featured ? "var(--color-ink)" : "var(--color-paper)";
  const foreground = featured ? "var(--color-paper)" : "var(--color-ink)";
  const muted = featured ? "rgba(248,250,252,.74)" : "var(--color-ink-soft)";

  return (
    <article
      className="flex min-h-[560px] flex-col border-b p-8 md:p-9 lg:border-r lg:last:border-r-0"
      style={{ background, borderColor: "var(--color-line)", color: foreground }}
    >
      <p className="text-[12px] font-black uppercase tracking-[0.12em] text-[color:var(--color-accent)]">
        {eyebrow}
      </p>
      <h3 className="display mt-3" style={{ color: foreground, fontSize: "clamp(34px, 3.2vw, 52px)", lineHeight: 0.9 }}>
        {name}
      </h3>
      <p className="mt-4 text-[14.5px] leading-[1.5]" style={{ color: muted }}>
        {desc}
      </p>
      <div className="my-7 h-px" style={{ background: featured ? "rgba(248,250,252,.16)" : "var(--color-line)" }} />
      <div className="display" style={{ color: foreground, fontSize: "clamp(52px, 5.4vw, 82px)", lineHeight: 0.88 }}>
        {price}
      </div>
      <p className="mt-2 text-[12px]" style={{ color: muted }}>
        {sub}
      </p>
      <ul className="my-7 grid gap-3">
        {features.map((feature) => (
          <li className="flex items-baseline gap-2.5 text-[13.5px] leading-[1.4]" key={feature} style={{ color: muted }}>
            <span className="inline-block size-[6px] shrink-0 -translate-y-[1px] rounded-full bg-[color:var(--color-accent)]" />
            {feature}
          </li>
        ))}
      </ul>
      <a className={`btn ${featured ? "btn-primary" : "btn-ink"} mt-auto justify-center`} href="#founder-access">
        {cta}
      </a>
    </article>
  );
}

function Field({
  id,
  label,
  placeholder,
  required = false,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label>
      <span className="field-label">{label}</span>
      <input className="field-input" id={id} name={id} placeholder={placeholder} required={required} type={type} />
    </label>
  );
}

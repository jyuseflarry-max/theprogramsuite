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
    src: "/images/current-app/coach-home.png",
    alt: "Current The Program Suite coach home screen with Do next items and today's schedule",
    eyebrow: "Coach home",
    title: "Open the day with the work that needs attention first.",
  },
  {
    src: "/images/current-app/athletes.png",
    alt: "Current The Program Suite roster screen with Athlete cards",
    eyebrow: "Athlete 360",
    title: "Keep roster details and Athlete follow-up in one staff view.",
  },
  {
    src: "/images/current-app/mobile-inventory.png",
    alt: "Current The Program Suite mobile Inventory screen",
    eyebrow: "Mobile inventory",
    title: "Give coaches phone-first Inventory actions on the sideline.",
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

const FOUNDING_PROGRAM_LIMIT = 40;
const FOUNDING_PROGRAMS_CLAIMED = 0;
const FOUNDING_SCHOOL_LIMIT = 15;
const FOUNDING_SCHOOLS_CLAIMED = 0;

const FAQ_ITEMS = [
  {
    q: "When will The Program Suite be available?",
    a: "The public launch is about a month away. Founder access is limited to the first 40 programs and 15 schools that want to get in early, help shape the rollout, and lock in founding pricing.",
  },
  {
    q: "What does one Program include?",
    a: "One Program includes the teams and athletes inside that program, with the core workflows coaches need: athletes, schedule, practice, training, inventory, communication, and program records.",
  },
  {
    q: "Why should we sign up before launch?",
    a: "Founding programs can join for $2,500 per year instead of the regular $3,500 annual price. Founding schools can lock in $10,500 per year instead of the regular $15,000 school plan. The founding window is capped at 40 programs and 15 schools.",
  },
  {
    q: "Can we pay monthly?",
    a: "Founder access is annual so schools can plan the season cleanly and lock the account price while the subscription stays active.",
  },
  {
    q: "Can we expand after starting with one Program?",
    a: "Yes. A school can start with one Program, prove the operating rhythm, then expand to full-school coverage. Founding pricing is locked to the original package scope. Additional schools, sports, premium modules, integrations, custom services, or materially expanded usage may be priced separately at then-current rates.",
  },
  {
    q: "What happens after we request founder access?",
    a: "We will follow up with the right setup path for your sport, school, or district and walk through where The Program Suite can replace the scattered tools you are using now.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] pb-20 text-[color:var(--color-ink)] md:pb-0">
      <SiteNav />
      <Hero />
      <ChaosToClarity />
      <CoachStory />
      <ProductProof />
      <Pricing />
      <FounderAccess />
      <FaqSection items={FAQ_ITEMS} />
      <FinalCta />
      <SiteFooter />
      <StickyMobileCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(460px,1fr)] lg:items-center">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {["One source of truth", "Built by a coach", "$2,500 founding program price"].map((item) => (
                <span
                  className="rounded-full border bg-white px-3 py-1.5 text-[12px] font-bold text-[color:var(--color-ink)]"
                  key={item}
                  style={{ borderColor: "var(--color-line-strong)" }}
                >
                  {item}
                </span>
              ))}
            </div>
            <h1 className="display" style={{ fontSize: "clamp(54px, 9.6vw, 132px)" }}>
              Stop
              <br />
              chasing
              <br />
              <span className="headline-italic">everything.</span>
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
              Stop running your program out of texts, spreadsheets, memory, multiple apps, and
              disconnected websites. The Program Suite gives staff, players, and families one source
              of truth.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
              <ArrowBtn href="#founder-access" large>
                Start one program
              </ArrowBtn>
              <a className="btn btn-ghost btn-lg" href="#product">
                See the system
              </a>
            </div>
            <p className="mt-4 text-[13px] font-semibold text-[color:var(--color-ink-soft)]">
              Founding pricing is locked to the original package scope.
            </p>
          </div>

          <div className="relative">
            <div
              className="overflow-hidden rounded-[10px] border bg-white"
              style={{
                borderColor: "var(--color-line-strong)",
                boxShadow:
                  "0 34px 90px -28px rgba(14,30,46,.42), 0 10px 28px -14px rgba(14,30,46,.26)",
              }}
            >
              <Image
                src="/images/current-app/coach-home.png"
                alt="Current The Program Suite coach home screen"
                width={1440}
                height={960}
                priority
                className="h-auto w-full"
                sizes="(min-width: 1024px) 640px, 100vw"
              />
            </div>
            <div
              className="absolute -bottom-8 right-3 hidden w-[31%] min-w-[148px] overflow-hidden rounded-[16px] border-[6px] border-[color:var(--color-paper)] bg-white shadow-2xl sm:block"
              style={{ boxShadow: "0 22px 55px -24px rgba(15,23,42,.7)" }}
            >
              <Image
                src="/images/current-app/mobile-game-day.png"
                alt="Current The Program Suite mobile game day screen"
                width={780}
                height={1688}
                className="aspect-[9/16] w-full object-cover object-top"
                sizes="180px"
              />
            </div>
          </div>
        </div>

        <div
          className="mt-16 grid overflow-hidden rounded-[8px] border bg-white sm:grid-cols-3"
          style={{ borderColor: "var(--color-ink)" }}
        >
          {[
            ["60 sec", "coach home base for what needs attention today"],
            ["No caps", "players, families, and staff stay connected"],
            ["1 place", "schedule, inventory, messages, practice, and proof"],
          ].map(([big, label], index) => (
            <div
              key={label}
              className="flex min-h-[118px] flex-col justify-between gap-4 border-[color:var(--color-line)] p-5 [&:not(:last-child)]:border-b sm:[&]:border-b-0 sm:[&:not(:last-child)]:border-r"
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

function ChaosToClarity() {
  const messy = [
    "Texts with no record",
    "Spreadsheets that go stale",
    "Team sites in different places",
    "Equipment tracked from memory",
    "Families asking the same questions",
  ];
  const clear = [
    "One shared athlete profile",
    "Live schedules and availability",
    "Program updates in one place",
    "Inventory with assignment history",
    "Staff, players, and families aligned",
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-24">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-10 max-w-[760px]">
          <Eyebrow>Before and after</Eyebrow>
          <h2 className="display mt-5" style={{ fontSize: "clamp(40px, 6.5vw, 94px)" }}>
            From scattered
            <br />
            to <span className="headline-italic text-accent-brand">settled.</span>
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <BeforeAfterPanel tone="bad" title="What coaches are stuck managing" items={messy} />
          <BeforeAfterPanel tone="good" title="What The Program Suite gives them" items={clear} />
        </div>
      </div>
    </section>
  );
}

function CoachStory() {
  return (
    <section className="py-20 md:py-24" style={{ background: "var(--color-paper-2)" }}>
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div
            className="overflow-hidden rounded-[10px] border bg-white"
            style={{
              borderColor: "var(--color-line-strong)",
              boxShadow: "0 24px 70px -32px rgba(14,30,46,.5)",
            }}
          >
            <Image
              src="/images/current-app/mobile-training.png"
              alt="The Program Suite mobile training floor workflow"
              width={780}
              height={1688}
              className="max-h-[620px] w-full object-cover object-top"
              sizes="(min-width: 1024px) 440px, 100vw"
            />
          </div>

          <div>
            <div className="mb-[18px]">
              <Eyebrow>Built by a coach</Eyebrow>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(38px, 5vw, 78px)", lineHeight: 0.92 }}>
              The job got bigger.
              <br />
              <span className="headline-italic">The tools </span>
              <span className="text-accent-brand">did not.</span>
            </h2>
            <p
              className="mt-6 max-w-[650px]"
              style={{
                color: "var(--color-ink-soft)",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(18px, 1.8vw, 25px)",
                fontStyle: "italic",
                lineHeight: 1.35,
              }}
            >
              I built The Program Suite from the same seat other coaches sit in: trying to run a
              program, keep athletes moving, answer leadership, manage equipment, communicate with
              families, and still get to practice prepared.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Less chasing", "The daily work starts where the coach starts, with what needs attention now."],
                ["More proof", "Every update creates a record staff and leadership can trust later."],
                ["One rhythm", "Practice, athletes, inventory, messages, and season work move together."],
              ].map(([title, desc]) => (
                <article className="border-t pt-4" key={title} style={{ borderColor: "var(--color-ink)" }}>
                  <h3 className="text-[15px] font-black text-[color:var(--color-ink)]">{title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.45] text-[color:var(--color-ink-soft)]">
                    {desc}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-[650px] text-[15px] leading-[1.55] text-[color:var(--color-ink-soft)]">
              That is the story coaches understand: this is not another admin platform asking them
              to do more data entry. It is a system for protecting their time, making the program
              visible, and keeping small problems from becoming end-of-season surprises.
            </p>
          </div>
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
              { src: "/images/current-app/athletes.png", label: "Athletes" },
              { src: "/images/current-app/mobile-game-day.png", label: "Game Day" },
              { src: "/images/current-app/mobile-practice.png", label: "Practice" },
            ].map((shot) => (
              <figure
                className="overflow-hidden rounded-[8px] border bg-[color:var(--color-paper)]"
                key={shot.label}
                style={{ borderColor: "rgba(248,250,252,.18)" }}
              >
                <Image
                  src={shot.src}
                  alt={`Current ${shot.label} screen in The Program Suite`}
                  width={shot.src.includes("mobile") ? 780 : 1440}
                  height={shot.src.includes("mobile") ? 1688 : 960}
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
            {[
              { src: "/images/current-app/mobile-training.png", label: "Strength" },
              { src: "/images/current-app/mobile-inventory.png", label: "Inventory" },
            ].map((shot) => (
              <figure
                className="overflow-hidden rounded-[10px] border border-[rgba(248,250,252,.18)] bg-[rgba(248,250,252,.06)]"
                key={shot.label}
              >
                <Image
                  alt={`Current mobile ${shot.label} screen in The Program Suite`}
                  className="aspect-[9/14] w-full object-cover object-top"
                  height={1688}
                  src={shot.src}
                  width={780}
                />
                <figcaption className="border-t border-[rgba(248,250,252,.14)] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[rgba(248,250,252,.72)]">
                  Current app | {shot.label}
                </figcaption>
              </figure>
            ))}
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
    <section id="pricing" className="py-20 md:py-24" style={{ background: "var(--color-paper-2)" }}>
      <SectionIntro
        eyebrow="Pricing"
        title={
          <>
            Easy to
            <br />
            <span className="headline-italic">say </span>
            <span className="text-accent-brand">yes.</span>
          </>
        }
        description="Founding members can lock in early annual pricing while we open the first program and school spots."
      />
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.18fr_0.91fr_0.91fr]">
          <PlanCard
            featured
            eyebrow="Program"
            name="One Program"
            price="$2,500"
            priceSuffix="/year"
            comparePrice="$3,500/year"
            sub="Founding member price for the first 40 programs."
            desc="For one coach or program ready to run, promote, fund, and report on the season from one place."
            features={["All teams in the program", "Athletes, schedule, practice, inventory", "Content Studio and fundraising tools", "Generous fair-use AI generation"]}
            cta="Start one program"
          />
          <PlanCard
            eyebrow="Athletic department"
            name="Entire school"
            price="$10,500"
            priceSuffix="/year"
            comparePrice="$15,000/year"
            sub="Founding member price for the first 15 schools."
            desc="For ADs who want one operating standard across every program, plus school-wide content and fundraising support."
            features={["Every program included", "School-wide inventory and budget visibility", "Content Studio, sponsor assets, and fundraising", "Staff access controls"]}
            cta="Cover the school"
          />
          <PlanCard
            eyebrow="District"
            name="Multi-school"
            price="Custom"
            sub="Built around rollout needs"
            desc="For districts that need cross-school reporting, rollout support, alerts, and implementation visibility."
            features={["District readiness reports", "Audit and action item tracking", "Board packet support", "Rollout planning"]}
            cta="Talk district coverage"
          />
        </div>
        <FoundingSpots />
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
              {["Start with one Program or the whole school", "Use real product screens during onboarding", "Keep school, sport, team, and season work separated"].map((item) => (
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
                  <option>One Program</option>
                  <option>Entire school</option>
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
            Start with one Program, expand to the school, or bring district oversight into one shared
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

function FoundingSpots() {
  const programRemaining = Math.max(FOUNDING_PROGRAM_LIMIT - FOUNDING_PROGRAMS_CLAIMED, 0);
  const schoolRemaining = Math.max(FOUNDING_SCHOOL_LIMIT - FOUNDING_SCHOOLS_CLAIMED, 0);
  const programProgress = Math.min((FOUNDING_PROGRAMS_CLAIMED / FOUNDING_PROGRAM_LIMIT) * 100, 100);
  const schoolProgress = Math.min((FOUNDING_SCHOOLS_CLAIMED / FOUNDING_SCHOOL_LIMIT) * 100, 100);

  return (
    <div
      className="mt-5 grid gap-5 rounded-[10px] border bg-white p-5 md:grid-cols-[1fr_minmax(260px,360px)] md:items-center md:p-6"
      style={{ borderColor: "var(--color-line-strong)" }}
    >
      <div>
        <p className="text-[12px] font-black uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
          Founding member window
        </p>
        <h3 className="mt-2 text-[22px] font-black tracking-tight text-[color:var(--color-ink)]">
          Founding pricing is capped at {FOUNDING_PROGRAM_LIMIT} programs and {FOUNDING_SCHOOL_LIMIT} schools.
        </h3>
        <p className="mt-2 max-w-[760px] text-[14px] leading-[1.5] text-[color:var(--color-ink-soft)]">
          One Program is $2,500 per year for founding members, compared with the regular $3,500 annual price.
          Whole-school founding pricing is $10,500 per year, compared with the standard $15,000 school plan.
          Pricing stays locked while the subscription stays active and applies to the original package scope.
        </p>
      </div>

      <div className="grid gap-3">
        <div className="rounded-[8px] border p-4" style={{ borderColor: "var(--color-line)" }}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[color:var(--color-muted)]">
                Program spots left
              </p>
              <p className="display mt-1 text-[color:var(--color-accent)]" style={{ fontSize: 46 }}>
                {programRemaining}
              </p>
            </div>
            <p className="pb-2 text-[13px] font-bold text-[color:var(--color-ink-soft)]">
              of {FOUNDING_PROGRAM_LIMIT}
            </p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[color:var(--color-accent-soft)]">
            <div className="h-full rounded-full bg-[color:var(--color-accent)]" style={{ width: `${programProgress}%` }} />
          </div>
        </div>
        <div className="rounded-[8px] border p-4" style={{ borderColor: "var(--color-line)" }}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[color:var(--color-muted)]">
                School spots left
              </p>
              <p className="display mt-1 text-[color:var(--color-accent)]" style={{ fontSize: 46 }}>
                {schoolRemaining}
              </p>
            </div>
            <p className="pb-2 text-[13px] font-bold text-[color:var(--color-ink-soft)]">
              of {FOUNDING_SCHOOL_LIMIT}
            </p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[color:var(--color-accent-soft)]">
            <div className="h-full rounded-full bg-[color:var(--color-accent)]" style={{ width: `${schoolProgress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BeforeAfterPanel({ items, title, tone }: { items: string[]; title: string; tone: "bad" | "good" }) {
  const isGood = tone === "good";
  return (
    <article
      className="overflow-hidden rounded-[10px] border bg-white"
      style={{
        borderColor: isGood ? "rgba(36,138,61,.35)" : "rgba(215,0,21,.28)",
        boxShadow: "0 18px 55px -38px rgba(15,23,42,.45)",
      }}
    >
      <div
        className="border-b px-5 py-4"
        style={{
          background: isGood ? "rgba(36,138,61,.08)" : "rgba(215,0,21,.06)",
          borderColor: isGood ? "rgba(36,138,61,.22)" : "rgba(215,0,21,.18)",
        }}
      >
        <h3 className="text-[16px] font-black text-[color:var(--color-ink)]">{title}</h3>
      </div>
      <ul className="grid gap-0">
        {items.map((item) => (
          <li
            className="flex items-center gap-3 border-b px-5 py-4 text-[15px] last:border-b-0"
            key={item}
            style={{ borderColor: "var(--color-line)", color: "var(--color-ink-soft)" }}
          >
            <span
              className="flex size-7 shrink-0 items-center justify-center rounded-full text-[16px] font-black"
              style={{
                background: isGood ? "rgba(36,138,61,.1)" : "rgba(215,0,21,.08)",
                color: isGood ? "var(--color-good)" : "var(--color-bad)",
              }}
            >
              {isGood ? "+" : "-"}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function PlanCard({
  comparePrice,
  cta,
  desc,
  eyebrow,
  featured = false,
  features,
  name,
  price,
  priceSuffix,
  sub,
}: {
  comparePrice?: string;
  cta: string;
  desc: string;
  eyebrow: string;
  featured?: boolean;
  features: string[];
  name: string;
  price: string;
  priceSuffix?: string;
  sub: string;
}) {
  const background = featured ? "var(--color-ink)" : "var(--color-paper)";
  const foreground = featured ? "var(--color-paper)" : "var(--color-ink)";
  const muted = featured ? "rgba(248,250,252,.74)" : "var(--color-ink-soft)";

  return (
    <article
      className="flex min-h-[520px] flex-col rounded-[10px] border p-7 md:p-8"
      style={{
        background,
        borderColor: featured ? "var(--color-ink)" : "var(--color-line-strong)",
        color: foreground,
        boxShadow: featured ? "0 28px 80px -40px rgba(15,23,42,.65)" : "0 16px 48px -40px rgba(15,23,42,.45)",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[12px] font-black uppercase tracking-[0.12em] text-[color:var(--color-accent)]">
          {eyebrow}
        </p>
        {featured ? (
          <span className="rounded-full bg-[color:var(--color-accent)] px-3 py-1 text-[11px] font-black uppercase tracking-[0.08em] text-white">
            Best start
          </span>
        ) : null}
      </div>
      <h3 className="display mt-3" style={{ color: foreground, fontSize: "clamp(34px, 3.2vw, 52px)", lineHeight: 0.9 }}>
        {name}
      </h3>
      <p className="mt-4 text-[14.5px] leading-[1.5]" style={{ color: muted }}>
        {desc}
      </p>
      <div className="my-7 h-px" style={{ background: featured ? "rgba(248,250,252,.16)" : "var(--color-line)" }} />
      <div className="flex flex-wrap items-end gap-2">
        <span className="display" style={{ color: foreground, fontSize: "clamp(52px, 5.4vw, 82px)", lineHeight: 0.88 }}>
          {price}
        </span>
        {priceSuffix ? (
          <span className="pb-2 text-[15px] font-bold" style={{ color: muted }}>
            {priceSuffix}
          </span>
        ) : null}
      </div>
      {comparePrice ? (
        <p className="mt-2 text-[13px] font-semibold" style={{ color: muted }}>
          Annual list price: {comparePrice}
        </p>
      ) : null}
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

function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-[color:var(--color-paper)]/95 p-3 shadow-[0_-12px_30px_-24px_rgba(15,23,42,.8)] backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12px] font-black text-[color:var(--color-ink)]">Start one Program</p>
          <p className="text-[11px] text-[color:var(--color-ink-soft)]">40 program spots. 15 school spots.</p>
        </div>
        <a className="btn btn-primary shrink-0" href="#founder-access" style={{ minHeight: 42, padding: "10px 14px" }}>
          Start
        </a>
      </div>
    </div>
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

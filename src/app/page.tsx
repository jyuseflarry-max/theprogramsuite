import Image from "next/image";
import {
  ArrowRight,
  Boxes,
  CalendarDays,
  Check,
  ClipboardCheck,
  ClipboardList,
  GraduationCap,
  Layers3,
  School,
  SearchCheck,
  ShieldCheck,
  Users,
  Warehouse,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

const APP_LOGIN_URL = "https://app.theprogramsuite.com";

const INVENTORY_SECTIONS = [
  {
    icon: Warehouse,
    eyebrow: "Catalog",
    title: "Know What You Own",
    copy:
      "Catalog inventory items with sizes, numbers, photos, condition, replacement value, vendor details, and reorder information.",
  },
  {
    icon: Users,
    eyebrow: "Assignments",
    title: "Know Who Has It",
    copy:
      "Issue inventory to Athletes, collect returns, track damage, mark missing items, and create fee records before accountability gets lost.",
  },
  {
    icon: Layers3,
    eyebrow: "Program Kits",
    title: "Build Program Kits",
    copy:
      "Create reusable Program Kits like Varsity Home Uniform, JV Away Uniform, Practice Kit, Travel Kit, or Game Day Pack. See how many complete kits can be built before handout day.",
  },
  {
    icon: SearchCheck,
    eyebrow: "Risk",
    title: "Catch Problems Early",
    copy:
      "Surface shortages, unpaid fees, lost or damaged items, clearance blockers, audit gaps, and replacement needs before they become end-of-season chaos.",
  },
];

const BUYER_SECTIONS = [
  {
    icon: ClipboardList,
    audience: "For Coaches",
    title: "Stop Chasing Gear and Paperwork",
    copy:
      "Run handout day, return day, Team kits, Athlete assignments, fees, and follow-ups from one place.",
  },
  {
    icon: ShieldCheck,
    audience: "For Athletic Directors",
    title: "One Inventory Standard for Every Sport",
    copy:
      "Give every sport the same accountability system without asking each coach to build their own spreadsheet.",
  },
  {
    icon: School,
    audience: "For Districts",
    title: "Inventory Visibility Across Schools",
    copy:
      "Standardize inventory accountability across high schools and middle schools, then review shortages, fees, clearance risk, and readiness from the district level.",
  },
];

const OPERATING_SYSTEM_ITEMS = [
  "Athlete records",
  "Team rosters",
  "Schedule",
  "Command Center",
  "Practice Focus",
  "Practice Builder",
  "Game Prep",
  "Staff tasks",
  "Messaging",
];

const DAILY_OPERATIONS = [
  ["Handout day", "Assign uniforms, equipment, travel gear, and kit pieces to each Athlete."],
  ["Return day", "See what came back, what is damaged, what is missing, and who needs a follow-up."],
  ["Fees", "Create fee records before the trail gets cold and clearance becomes a scramble."],
  ["Audit", "Check counts, labels, scan records, vendor details, and replacement needs."],
];

interface PricingTier {
  name: string;
  label: string;
  primaryPrice: string;
  priceNote: string;
  description: string;
  badge?: string;
  highlighted?: boolean;
  paymentOptions?: { label: string; value: string; note: string }[];
  features: string[];
  cta: string;
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: "Program Plan",
    label: "One sport. All Teams included.",
    primaryPrice: "$499/year",
    priceNote: "Founding price. Standard price is $799/year.",
    description:
      "For one sport that wants serious inventory accountability without waiting on a school-wide rollout.",
    badge: "Save $300/year for life",
    highlighted: true,
    paymentOptions: [
      {
        label: "Founding annual",
        value: "$499/year",
        note: "Best price. Locked while active.",
      },
      {
        label: "Founding monthly",
        value: "$59/month",
        note: "Only for early individual Programs.",
      },
    ],
    features: [
      "Inventory Catalog",
      "Issue & Collect",
      "Program Kits",
      "Audit, labels, scan",
      "Fees and clearance",
      "All Teams inside the Program",
      "Command Center, Athletes, Schedule, Practice, Game Prep, and Messaging included",
    ],
    cta: "Start with One Sport",
  },
  {
    name: "Athletic Department Plan",
    label: "Every sport at one school.",
    primaryPrice: "$1,499/year",
    priceNote: "School-wide coverage already discounted.",
    description:
      "For ADs who want the same inventory standard across football, volleyball, basketball, baseball, softball, soccer, track, wrestling, and every other sport.",
    badge: "Best school value",
    features: [
      "Inventory for every sport",
      "Program switching",
      "School-wide accountability",
      "AD visibility",
      "All coaches and Teams included",
      "Coaching OS included for every Program",
    ],
    cta: "Cover the Whole School",
  },
  {
    name: "District Plan",
    label: "High schools and middle schools.",
    primaryPrice: "Custom",
    priceNote: "Built around school count and rollout needs.",
    description:
      "For districts standardizing inventory accountability, readiness, clearance risk, and replacement planning across campuses.",
    features: [
      "Multi-school inventory visibility",
      "District-level readiness and risk",
      "Rollout support",
      "Custom school coverage",
      "Leadership reporting",
    ],
    cta: "Talk District Coverage",
  },
];

const FAQ_ITEMS = [
  {
    q: "How is Inventory priced?",
    a: "Inventory is sold by Program. A Program is one sport, and all Teams inside that Program are included.",
  },
  {
    q: "What is founding pricing?",
    a: "Early individual Programs can lock in $499/year instead of the standard $799/year price. That is a $300 annual savings for life while the account remains active.",
  },
  {
    q: "Is monthly pricing available?",
    a: "Yes, but only for founding individual Programs. The founding monthly option is $59/month. Athletic Department and District plans remain annual or custom.",
  },
  {
    q: "What counts as a Team?",
    a: "A Team is a level inside a Program, such as Varsity, JV, or Freshman. The Program Plan includes all Teams for that sport.",
  },
  {
    q: "Can an athletic department use this across every sport?",
    a: "Yes. The Athletic Department Plan covers every sport at one school, with inventory accountability and the coaching operating system included for every Program.",
  },
  {
    q: "What does the coaching OS include?",
    a: "The coaching operating system includes Athletes, Teams, Schedule, Command Center, Practice Focus, Practice Builder, Game Prep, staff tasks, and messaging.",
  },
];

function PrimaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#b28a2e] px-5 py-3 text-sm font-black text-white shadow-sm transition-colors hover:bg-[#967224]"
      href={href}
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4" />
    </a>
  );
}

function SecondaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/35 bg-white/10 px-5 py-3 text-sm font-black text-white transition-colors hover:bg-white/15"
      href={href}
    >
      {children}
    </a>
  );
}

function LightButton({ children, href, strong = false }: { children: React.ReactNode; href: string; strong?: boolean }) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-center text-sm font-black transition-colors ${
        strong
          ? "bg-[#b28a2e] text-white hover:bg-[#967224]"
          : "border border-[#172033]/15 text-[#172033] hover:border-[#b28a2e] hover:bg-[#f7f1df]"
      }`}
      href={href}
    >
      {children}
    </a>
  );
}

function InventoryCard({ item }: { item: (typeof INVENTORY_SECTIONS)[number] }) {
  const Icon = item.icon;

  return (
    <article className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b28a2e]">
          {item.eyebrow}
        </p>
        <span className="inline-flex size-10 items-center justify-center rounded-md border border-black/10 bg-[#fbfaf7] text-[#b28a2e]">
          <Icon aria-hidden="true" className="size-5" />
        </span>
      </div>
      <h3 className="text-2xl font-black tracking-tight text-[#172033]">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#667085]">{item.copy}</p>
    </article>
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <article
      className={`relative flex flex-col rounded-xl border bg-white p-5 shadow-sm ${
        tier.highlighted ? "border-[#b28a2e] ring-2 ring-[#b28a2e]/15" : "border-black/10"
      }`}
    >
      <div className="flex min-h-8 items-start justify-between gap-3">
        {tier.badge ? (
          <span
            className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.14em] ${
              tier.highlighted ? "bg-[#b28a2e] text-white" : "bg-[#f0eadc] text-[#775c1e]"
            }`}
          >
            {tier.badge}
          </span>
        ) : (
          <span />
        )}
      </div>

      <div className="mt-5">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#b28a2e]">{tier.name}</p>
        <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#172033]">
          {tier.primaryPrice}
        </h3>
        <p className="mt-2 text-sm font-bold text-[#775c1e]">{tier.label}</p>
        <p className="mt-4 text-sm leading-7 text-[#667085]">{tier.description}</p>
      </div>

      {tier.paymentOptions ? (
        <div className="mt-5 grid gap-3">
          {tier.paymentOptions.map((option) => (
            <div className="rounded-lg border border-black/10 bg-[#fbfaf7] p-4" key={option.label}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-black text-[#172033]">{option.label}</p>
                <p className="text-lg font-black text-[#172033]">{option.value}</p>
              </div>
              <p className="mt-1 text-xs font-semibold leading-5 text-[#667085]">{option.note}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-5 rounded-lg border border-black/10 bg-[#fbfaf7] p-4 text-sm font-bold leading-6 text-[#4d5668]">
          {tier.priceNote}
        </p>
      )}

      {tier.paymentOptions ? (
        <p className="mt-4 text-sm font-bold leading-6 text-[#4d5668]">{tier.priceNote}</p>
      ) : null}

      <ul className="my-6 flex-1 space-y-3" role="list">
        {tier.features.map((feature) => (
          <li className="flex gap-3 text-sm leading-6 text-[#4d5668]" key={feature}>
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#b28a2e]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <LightButton href="#pricing" strong={tier.highlighted}>
        {tier.cta}
      </LightButton>
    </article>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#172033]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5ef]/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <a aria-label="The Program Suite home" className="flex items-center gap-3" href="/">
            <Image
              alt="The Program Suite"
              className="h-9 w-auto object-contain"
              height={42}
              priority
              src="/logo.png"
              width={170}
            />
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 text-sm font-semibold text-[#4d5668] md:flex"
          >
            <a className="hover:text-[#172033]" href="#inventory">
              Inventory
            </a>
            <a className="hover:text-[#172033]" href="#coaches">
              Coaches
            </a>
            <a className="hover:text-[#172033]" href="#athletic-directors">
              Athletic Directors
            </a>
            <a className="hover:text-[#172033]" href="#pricing">
              Pricing
            </a>
          </nav>
          <a
            className="rounded-md border border-[#172033]/20 px-3 py-2 text-sm font-black text-[#172033] hover:border-[#b28a2e] hover:bg-white"
            href={APP_LOGIN_URL}
          >
            Login
          </a>
        </div>
      </header>

      <section className="relative min-h-[calc(90vh-4rem)] overflow-hidden">
        <Image
          alt="Texas school sports inventory room with football equipment in the foreground"
          className="absolute inset-0 h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/texas-football-inventory-hero.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172033]/92 via-[#172033]/70 to-[#172033]/20" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f7f5ef] to-transparent" />
        <div className="relative mx-auto flex min-h-[calc(90vh-4rem)] w-full max-w-7xl flex-col justify-center px-4 py-16 text-white sm:px-6">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#f3d27a]">
              Inventory accountability for school sports
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block">Inventory Accountability</span>
              <span className="block text-[#f3d27a]">for Every Sport</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              Track what your program owns, who has it, what is missing, and what needs to be
              collected before it becomes a problem.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#pricing">Start with One Sport</PrimaryButton>
              <SecondaryButton href="#pricing">See School-Wide Pricing</SecondaryButton>
            </div>
            <p className="mt-4 text-sm font-semibold text-white/70">
              Founding Program Pricing Available · All Teams Included
            </p>
          </div>
        </div>
      </section>

      <section className="relative -mt-10 px-4 sm:px-6">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl shadow-black/10 md:grid-cols-3">
          {[
            ["$300", "annual founding savings for individual Programs"],
            ["All Teams", "Varsity, JV, Freshman, and every level in one sport"],
            ["Every sport", "school-wide accountability when the AD is ready"],
          ].map(([value, label]) => (
            <div className="border-b border-black/10 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0" key={value}>
              <p className="text-4xl font-black tracking-tight text-[#172033]">{value}</p>
              <p className="mt-2 text-sm font-bold leading-6 text-[#667085]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
        <p className="mx-auto max-w-4xl text-2xl font-black leading-snug text-[#172033] sm:text-4xl">
          Most schools start with Inventory. Coaches keep using it because it becomes the daily
          operating system for the program.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6" id="inventory">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b28a2e]">
              The front door
            </p>
            <h2 className="mt-3 max-w-lg text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Inventory first. The program stays connected.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#5f6878]">
              The Program Suite is Inventory accountability for school sports, plus the coaching
              operating system that keeps Athletes, Teams, coaches, and schedules connected.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {INVENTORY_SECTIONS.map((item) => (
              <InventoryCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#172033] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-96 overflow-hidden rounded-xl border border-white/15">
            <Image
              alt="Program schedule and operations dashboard"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              src="/images/schedule-dashboard-hero.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/45 to-transparent" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f3d27a]">
              Coaching OS Included
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Inventory works because the program data is connected.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
              Gear accountability depends on rosters, schedules, staff follow-up, Team levels, and
              clear communication with Athletes.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {OPERATING_SYSTEM_ITEMS.map((item) => (
                <div className="rounded-md border border-white/10 bg-white/8 p-3" key={item}>
                  <span className="text-sm font-bold text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" id="coaches">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b28a2e]">
            Built for accountability
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Coaches, ADs, and districts get the same standard.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {BUYER_SECTIONS.map(({ audience, copy, icon: Icon, title }) => (
            <article
              className="rounded-xl border border-black/10 bg-white p-6 shadow-sm"
              id={audience === "For Athletic Directors" ? "athletic-directors" : undefined}
              key={audience}
            >
              <Icon aria-hidden="true" className="size-6 text-[#b28a2e]" />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#b28a2e]">
                {audience}
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#667085]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b28a2e]">
              Daily operations
            </p>
            <h2 className="mt-3 max-w-md text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              From handout day to return day.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {DAILY_OPERATIONS.map(([title, copy]) => (
              <div className="rounded-lg border border-black/10 bg-[#fbfaf7] p-5" key={title}>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#667085]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0eadc]" id="pricing">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b28a2e]">
                Pricing
              </p>
              <h2 className="mt-3 max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Three ways to buy. One inventory standard.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5f6878]">
              Start with one sport, cover every sport at one school, or standardize across a
              district. Individual Programs that onboard early save $300 per year for life.
            </p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-black/10 bg-white p-5 text-sm font-bold leading-7 text-[#4d5668]">
            Founding pricing applies to individual Programs only. The Athletic Department plan is
            already discounted for school-wide coverage.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Boxes,
              label: "Shortages",
              copy: "Know what must be ordered before a Team is short on handout day.",
            },
            {
              icon: GraduationCap,
              label: "Clearance",
              copy: "See which Athletes still owe items or fees before they move on.",
            },
            {
              icon: CalendarDays,
              label: "Readiness",
              copy: "Review audit gaps, replacement needs, and Program Kit readiness by sport.",
            },
          ].map(({ copy, icon: Icon, label }) => (
            <article className="rounded-xl border border-black/10 bg-white p-6 shadow-sm" key={label}>
              <Icon aria-hidden="true" className="size-6 text-[#b28a2e]" />
              <h3 className="mt-5 text-xl font-black">{label}</h3>
              <p className="mt-2 text-sm leading-7 text-[#667085]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <FaqSection items={FAQ_ITEMS} />

      <section className="bg-[#172033] text-white">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Your school should know where every piece of inventory is.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Start with one sport or bring every Program under the same accountability system.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryButton href="#pricing">Start with One Sport</PrimaryButton>
            <SecondaryButton href="#pricing">See School-Wide Pricing</SecondaryButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f7f5ef]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Image
              alt="The Program Suite"
              className="h-9 w-auto object-contain"
              height={42}
              src="/logo.png"
              width={170}
            />
            <p className="mt-3 text-sm text-[#667085]">Inventory accountability for school sports.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 text-sm font-semibold text-[#667085]">
            <a className="hover:text-[#172033]" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-[#172033]" href={APP_LOGIN_URL}>
              Login
            </a>
            <a className="hover:text-[#172033]" href="/privacy">
              Privacy
            </a>
            <a className="hover:text-[#172033]" href="/terms">
              Terms
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

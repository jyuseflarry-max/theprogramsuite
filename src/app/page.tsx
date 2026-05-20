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
  Shirt,
  Users,
  Warehouse,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

const APP_LOGIN_URL = "https://app.theprogramsuite.com/login";

const INVENTORY_SECTIONS = [
  {
    icon: Warehouse,
    eyebrow: "Inventory",
    title: "Know What You Own",
    copy:
      "Catalog inventory items with sizes, numbers, photos, condition, replacement value, vendor details, and reorder information.",
  },
  {
    icon: Users,
    eyebrow: "Accountability",
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
  {
    icon: ClipboardCheck,
    eyebrow: "Connected",
    title: "Coaching OS Included",
    copy:
      "Inventory works because it connects to the rest of the program: Athletes, Teams, Schedule, Command Center, Practice Focus, Practice Builder, Game Prep, staff tasks, and messaging.",
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
  price: string;
  scope: string;
  bestValue?: boolean;
  note?: string;
  features: string[];
  cta: string;
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: "Founding Program Plan",
    price: "$499/year",
    scope: "One sport. All Teams included.",
    note: "Limited founding price for early individual programs.",
    features: [
      "Inventory Catalog",
      "Issue & Collect",
      "Program Kits",
      "Audit, labels, scan",
      "Fees and clearance",
      "Command Center included",
      "Athlete, Schedule, Practice, Game Prep, and Messaging tools included",
    ],
    cta: "Start with One Sport",
  },
  {
    name: "Program Plan",
    price: "$799/year",
    scope: "One sport. All Teams included.",
    features: [
      "Everything in Founding Program",
      "Standard annual program pricing",
      "Built for serious high school programs",
    ],
    cta: "Start a Program",
  },
  {
    name: "Athletic Department Plan",
    price: "$1,499/year",
    scope: "Every sport at one school.",
    bestValue: true,
    features: [
      "Inventory for every sport",
      "Program switching",
      "School-wide accountability",
      "AD visibility",
      "All coaches and Teams included",
      "Coaching OS included for every program",
    ],
    cta: "Cover the Whole School",
  },
  {
    name: "District Plan",
    price: "Custom",
    scope: "High schools and middle schools.",
    features: [
      "Multi-school inventory visibility",
      "District-level readiness and risk",
      "Rollout support",
      "Custom school coverage",
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
  {
    q: "Can we start with one sport?",
    a: "Yes. Most schools start with Inventory for one Program, then expand once handout day, return day, fees, and clearance are running from one place.",
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

function LightButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#172033]/15 px-4 py-2 text-sm font-black text-[#172033] transition-colors hover:border-[#b28a2e] hover:bg-[#f7f1df]"
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
      className={`relative flex flex-col rounded-lg border bg-white p-5 shadow-sm ${
        tier.bestValue ? "border-[#b28a2e] ring-2 ring-[#b28a2e]/15" : "border-black/10"
      }`}
    >
      {tier.bestValue ? (
        <span className="mb-4 w-fit rounded-full bg-[#b28a2e] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">
          Best Value
        </span>
      ) : null}

      <h3 className="text-xl font-black text-[#172033]">{tier.name}</h3>
      <p className="mt-4 text-4xl font-black tracking-tight text-[#172033]">{tier.price}</p>
      <p className="mt-2 text-sm font-bold text-[#775c1e]">{tier.scope}</p>

      <ul className="my-6 flex-1 space-y-3" role="list">
        {tier.features.map((feature) => (
          <li className="flex gap-3 text-sm leading-6 text-[#4d5668]" key={feature}>
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#b28a2e]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {tier.note ? <p className="mb-5 text-xs leading-6 text-[#667085]">{tier.note}</p> : null}
      <LightButton href="#pricing">{tier.cta}</LightButton>
    </article>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#172033]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5ef]/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <a className="flex items-center gap-3" href="/" aria-label="The Program Suite home">
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
            <a className="font-black text-[#775c1e] hover:text-[#172033]" href={APP_LOGIN_URL}>
              Login
            </a>
          </nav>
          <a
            className="rounded-md bg-[#b28a2e] px-3 py-2 text-sm font-black text-white hover:bg-[#967224] md:hidden"
            href={APP_LOGIN_URL}
          >
            Login
          </a>
        </div>
      </header>

      <section className="relative min-h-[calc(88vh-4rem)] overflow-hidden">
        <Image
          alt="Inventory dashboard for school sports"
          className="absolute inset-0 h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/inventory-dashboard-hero.png"
        />
        <div className="absolute inset-0 bg-[#172033]/78" />
        <div className="relative mx-auto flex min-h-[calc(88vh-4rem)] w-full max-w-7xl flex-col justify-center px-4 py-16 text-white sm:px-6">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#f3d27a]">
              Inventory accountability for school sports
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Inventory Accountability for Every Sport
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">
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

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6">
          <p className="text-2xl font-black leading-snug text-[#172033] sm:text-4xl">
            Most schools start with Inventory. Coaches keep using it because it becomes the daily
            operating system for the program.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" id="inventory">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b28a2e]">
              The front door
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Inventory first. The program stays connected.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#5f6878]">
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
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-80 overflow-hidden rounded-lg border border-white/15">
            <Image
              alt="Program schedule and operations dashboard"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/schedule-dashboard-hero.png"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f3d27a]">
              Coaching OS Included
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Inventory works because the program data is connected.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Gear accountability depends on rosters, schedules, staff follow-up, Team levels, and
              clear communication with Athletes.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Coaches, ADs, and districts get the same standard.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {BUYER_SECTIONS.map(({ audience, copy, icon: Icon, title }) => (
            <article
              className="rounded-lg border border-black/10 bg-white p-5 shadow-sm"
              id={audience === "For Athletic Directors" ? "athletic-directors" : undefined}
              key={audience}
            >
              <Icon aria-hidden="true" className="size-6 text-[#b28a2e]" />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#b28a2e]">
                {audience}
              </p>
              <h3 className="mt-3 text-2xl font-black tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#667085]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b28a2e]">
              Daily operations
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
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
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b28a2e]">
              Pricing
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Start with one Program or cover every sport.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#5f6878]">
              Inventory is sold by Program. A Program is one sport, and all Teams inside that
              Program are included.
            </p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {PRICING_TIERS.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-black/10 bg-white p-5 text-sm font-bold leading-7 text-[#4d5668]">
            The Athletic Department plan is already discounted for school-wide coverage. Founding
            pricing applies to individual programs only.
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
            <article className="rounded-lg border border-black/10 bg-white p-5 shadow-sm" key={label}>
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
          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Your school should know where every piece of inventory is.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Start with one sport or bring every program under the same accountability system.
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

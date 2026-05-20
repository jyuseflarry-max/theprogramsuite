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

const APP_URL = "https://tpscoach.com";

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
    eyebrow: "Early Warning",
    title: "Catch Problems Early",
    copy:
      "Surface shortages, unpaid fees, lost or damaged items, clearance blockers, audit gaps, and replacement needs before they become end-of-season chaos.",
  },
  {
    icon: ClipboardCheck,
    eyebrow: "Connected Program",
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
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-black text-white transition-colors hover:bg-brand-orange-dark"
    >
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}

function SecondaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-gold/40 px-6 py-3 text-sm font-black text-white transition-colors hover:bg-brand-gold/10"
    >
      {children}
    </a>
  );
}

function InventoryCard({ item }: { item: (typeof INVENTORY_SECTIONS)[number] }) {
  const Icon = item.icon;

  return (
    <article className="rounded-lg border border-white/10 bg-brand-navy-mid p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-brand-gold/25 bg-brand-gold/10">
          <Icon size={20} className="text-brand-gold" aria-hidden="true" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
          {item.eyebrow}
        </p>
      </div>
      <h3 className="mb-3 text-2xl font-black tracking-tight text-white">{item.title}</h3>
      <p className="text-sm leading-relaxed text-gray-300">{item.copy}</p>
    </article>
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <article
      className={`relative flex flex-col rounded-lg border p-6 ${
        tier.bestValue
          ? "border-brand-gold bg-brand-navy shadow-2xl shadow-brand-gold/10"
          : "border-white/10 bg-brand-navy"
      }`}
    >
      {tier.bestValue && (
        <div className="absolute right-4 top-4 rounded-md bg-brand-gold px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-navy">
          Best Value
        </div>
      )}
      <div className="border-b border-white/10 pb-6">
        <h3 className="pr-24 text-xl font-black text-white">{tier.name}</h3>
        <p className="mt-4 text-4xl font-black tracking-tight text-white">{tier.price}</p>
        <p className="mt-2 text-sm font-semibold text-brand-gold">{tier.scope}</p>
      </div>

      <ul className="my-6 flex-1 space-y-3" role="list">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
            <Check size={15} className="mt-0.5 shrink-0 text-brand-gold" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {tier.note && <p className="mb-5 text-xs leading-relaxed text-gray-500">{tier.note}</p>}

      <a
        href={APP_URL}
        className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-center text-sm font-black transition-colors ${
          tier.bestValue
            ? "bg-brand-orange text-white hover:bg-brand-orange-dark"
            : "border border-brand-gold/35 text-white hover:bg-brand-gold/10"
        }`}
      >
        {tier.cta}
      </a>
    </article>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-navy text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" aria-label="The Program Suite home">
            <Image
              src="/logo.png"
              alt="The Program Suite"
              width={150}
              height={38}
              className="h-8 w-auto object-contain"
              priority
            />
          </a>
          <div className="hidden items-center gap-7 md:flex">
            <a href="#inventory" className="text-sm font-semibold text-gray-300 hover:text-white">
              Inventory
            </a>
            <a href="#coaches" className="text-sm font-semibold text-gray-300 hover:text-white">
              Coaches
            </a>
            <a href="#athletic-directors" className="text-sm font-semibold text-gray-300 hover:text-white">
              Athletic Directors
            </a>
            <a href="#pricing" className="text-sm font-semibold text-gray-300 hover:text-white">
              Pricing
            </a>
            <a href={APP_URL} className="text-sm font-black text-brand-gold hover:text-brand-gold-light">
              Login
            </a>
          </div>
          <a
            href={APP_URL}
            className="md:hidden rounded-md bg-brand-orange px-4 py-2 text-sm font-black text-white"
          >
            Login
          </a>
        </div>
      </nav>

      <main>
        <section className="border-b border-white/5">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                Inventory accountability for school sports
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Inventory Accountability for Every Sport
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-300">
                Track what your program owns, who has it, what is missing, and what needs to be
                collected before it becomes a problem.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={APP_URL}>Start with One Sport</PrimaryButton>
                <SecondaryButton href="#pricing">See School-Wide Pricing</SecondaryButton>
              </div>
              <p className="mt-5 text-sm font-semibold text-gray-500">
                Founding Program Pricing Available &middot; All Teams Included
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-brand-navy-mid p-5">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
                    Varsity Home Uniform
                  </p>
                  <p className="mt-1 text-sm text-gray-400">Program Kit readiness</p>
                </div>
                <Shirt size={30} className="text-brand-gold" aria-hidden="true" />
              </div>
              <div className="space-y-3">
                {[
                  ["Complete kits ready", "42"],
                  ["Missing or damaged items", "7"],
                  ["Unpaid fees", "$360"],
                  ["Clearance blockers", "5 Athletes"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-md border border-white/10 bg-brand-navy px-4 py-3"
                  >
                    <span className="text-sm text-gray-300">{label}</span>
                    <span className="text-sm font-black text-white">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-md border border-brand-gold/25 bg-brand-gold/10 p-4">
                  <p className="text-3xl font-black text-brand-gold">96%</p>
                  <p className="mt-1 text-xs text-gray-300">Audited this month</p>
                </div>
                <div className="rounded-md border border-brand-gold/25 bg-brand-gold/10 p-4">
                  <p className="text-3xl font-black text-brand-gold">18</p>
                  <p className="mt-1 text-xs text-gray-300">Items to collect</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-brand-gold">
          <div className="mx-auto max-w-5xl px-6 py-12 text-center">
            <p className="text-2xl font-black leading-snug text-brand-navy sm:text-4xl">
              Most schools start with Inventory. Coaches keep using it because it becomes the daily
              operating system for the program.
            </p>
          </div>
        </section>

        <section className="border-b border-white/5 py-24" id="inventory">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                The front door
              </p>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Inventory first. The program stays connected.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-300">
                The Program Suite is Inventory accountability for school sports, plus the coaching
                operating system that keeps Athletes, Teams, coaches, and schedules connected.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {INVENTORY_SECTIONS.map((item) => (
                <InventoryCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-brand-navy-mid py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                Coaching OS Included
              </p>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                The work around inventory matters too.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-300">
                Gear accountability does not live by itself. It depends on rosters, schedules, staff
                follow-up, Team levels, and clear communication with Athletes.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {OPERATING_SYSTEM_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-brand-navy p-4">
                  <Check size={16} className="shrink-0 text-brand-gold" aria-hidden="true" />
                  <span className="text-sm font-semibold text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 py-24" id="coaches">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                Built for the people accountable for the gear
              </p>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Coaches, ADs, and districts get the same standard.
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {BUYER_SECTIONS.map(({ icon: Icon, audience, title, copy }) => (
                <article
                  key={audience}
                  id={audience === "For Athletic Directors" ? "athletic-directors" : undefined}
                  className="rounded-lg border border-white/10 bg-brand-navy-mid p-6"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md border border-brand-gold/25 bg-brand-gold/10">
                    <Icon size={21} className="text-brand-gold" aria-hidden="true" />
                  </div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
                    {audience}
                  </p>
                  <h3 className="mb-4 text-2xl font-black tracking-tight text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-brand-navy-mid py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                Daily operations
              </p>
              <h2 className="text-4xl font-black tracking-tight text-white">
                From handout day to return day.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {[
                ["Handout day", "Assign uniforms, equipment, travel gear, and kit pieces to each Athlete."],
                ["Return day", "See what came back, what is damaged, what is missing, and who needs a follow-up."],
                ["Fees", "Create fee records before the trail gets cold and clearance becomes a scramble."],
                ["Audit", "Check counts, labels, scan records, vendor details, and replacement needs."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-lg border border-white/10 bg-brand-navy p-5">
                  <h3 className="mb-2 text-lg font-black text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 py-24" id="pricing">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">
                Pricing
              </p>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                Start with one Program or cover every sport.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-300">
                Inventory is sold by Program. A Program is one sport, and all Teams inside that
                Program are included.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-4">
              {PRICING_TIERS.map((tier) => (
                <PricingCard key={tier.name} tier={tier} />
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-brand-gold/25 bg-brand-gold/10 p-6">
              <p className="text-base font-semibold leading-relaxed text-white">
                The Athletic Department plan is already discounted for school-wide coverage. Founding
                pricing applies to individual programs only.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-brand-navy-mid py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-5 md:grid-cols-3">
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
              ].map(({ icon: Icon, label, copy }) => (
                <article key={label} className="rounded-lg border border-white/10 bg-brand-navy p-6">
                  <Icon size={24} className="mb-5 text-brand-gold" aria-hidden="true" />
                  <h3 className="mb-3 text-xl font-black text-white">{label}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={FAQ_ITEMS} />

        <section className="bg-brand-navy-mid py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
              Your school should know where every piece of inventory is.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Start with one sport or bring every program under the same accountability system.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryButton href={APP_URL}>Start with One Sport</PrimaryButton>
              <SecondaryButton href="#pricing">See School-Wide Pricing</SecondaryButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <Image
            src="/logo.png"
            alt="The Program Suite"
            width={120}
            height={32}
            className="h-7 w-auto object-contain opacity-70"
          />
          <p className="text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} The Program Suite. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-xs text-gray-600 transition-colors hover:text-gray-400">
              Privacy
            </a>
            <a href="/terms" className="text-xs text-gray-600 transition-colors hover:text-gray-400">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

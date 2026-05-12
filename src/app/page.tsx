import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Bell,
  Building2,
  CalendarDays,
  Check,
  ClipboardCheck,
  ClipboardList,
  Dumbbell,
  HeartPulse,
  Mail,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

const APP_LOGIN_URL = "https://app.theprogramsuite.com/login";

const sports = [
  "Basketball",
  "Football",
  "Volleyball",
  "Soccer",
  "Baseball",
  "Softball",
  "Track",
  "Wrestling"
];

const pillars = [
  {
    icon: Sparkles,
    title: "Coach Tools",
    text: "A daily command queue that tells coaches what needs attention before practice starts."
  },
  {
    icon: Dumbbell,
    title: "Practice & Game Week",
    text: "Build practice from the calendar, carry game prep into teaching blocks, and run the plan live."
  },
  {
    icon: PackageCheck,
    title: "Gear & Inventory",
    text: "Hand out gear, check it back in, track fees, and know what needs to be ordered."
  },
  {
    icon: HeartPulse,
    title: "Attendance & Availability",
    text: "Review conflicts, take roll call, manage wellness days, and close makeup work."
  }
];

const workflowCards = [
  {
    href: "#coach-tools",
    icon: Sparkles,
    label: "Do this first",
    title: "Start with the queue",
    text: "Practice missing a plan, game prep unfinished, pending availability, missing sizing, open gear fees, and staff ownership gaps all roll into one coach view."
  },
  {
    href: "#game-week",
    icon: ShieldCheck,
    label: "Game week",
    title: "Turn scout into practice",
    text: "Move from opponent notes to keys to win, Practice Focus, staff assignments, Athlete scout, and game-day logistics without rebuilding the week in separate tools."
  },
  {
    href: "#gear",
    icon: PackageCheck,
    label: "Gear day",
    title: "Stop running inventory on paper",
    text: "Create gear lists, issue kits, scan returns, capture missing sizes, track lost or damaged items, and show who is cleared."
  },
  {
    href: "#families",
    icon: Mail,
    label: "Families",
    title: "Cut down the repeat texts",
    text: "Share the schedule, travel details, availability status, gear reminders, and follow-ups from the same source coaches already use."
  }
];

const pricing = [
  {
    name: "Starter",
    regular: "$399",
    founder: "$199",
    monthly: "$39/month",
    description: "For one team getting organized.",
    badge: "Founder price",
    capacity: "1 team",
    cta: "Claim Starter Founder Price",
    highlight: false,
    features: [
      "Coach Tools daily command queue",
      "Schedule, practice planning, and attendance",
      "Athlete profiles and basic inventory",
      "My Availability for Athletes and families",
      "Founder price locked for life while active"
    ]
  },
  {
    name: "Pro",
    regular: "$999",
    founder: "$499",
    monthly: "$99/month",
    description: "For a full sport program.",
    badge: "Most popular",
    capacity: "Up to 5 teams",
    cta: "Claim Pro Founder Price",
    highlight: true,
    features: [
      "Everything in Starter",
      "Varsity, JV, Freshman, and more",
      "Game Prep, Drill Library, and practice reports",
      "Gear lists, check-in, fees, and planning",
      "Family packets and staff assignment tools"
    ]
  },
  {
    name: "Enterprise",
    regular: "Custom",
    founder: "From $4,000",
    monthly: null,
    description: "For schools, ADs, and districts.",
    badge: "Founder package",
    capacity: "Unlimited teams",
    cta: "Talk Founder Package",
    highlight: false,
    features: [
      "Everything in Pro",
      "Multiple sports and school-wide rollout",
      "District readiness and board packet reports",
      "Budget, inventory, audit, and implementation rollups",
      "Priority onboarding and support"
    ]
  }
];

const faqs = [
  {
    q: "Is this only for basketball?",
    a: "No. Basketball is a natural early fit, but The Program Suite is built for team sports. The core workflows apply to football, volleyball, soccer, baseball, softball, track, wrestling, and other school programs."
  },
  {
    q: "What does founder pricing mean?",
    a: "Founder pricing is a limited early-access price for the first programs that join. Starter is $199/year instead of $399/year, and Pro is $499/year instead of $999/year. You keep that founder price for the life of the account while it remains active."
  },
  {
    q: "Can I pay monthly?",
    a: "Yes. Starter is available at $39/month and Pro is available at $99/month. Lifetime founder pricing applies to annual plans, because those early annual programs are helping shape the product while it is new."
  },
  {
    q: "Why is there no checkout button yet?",
    a: "The founder window is being handled manually while early programs are onboarded. Use the founder access form or pricing buttons and we will follow up with the right plan, setup, and payment link."
  },
  {
    q: "Can families and Athletes use it too?",
    a: "Yes. Coaches run the program, while Athletes and families can use scoped self-service tools for schedule, availability, notifications, and the items a coach chooses to share."
  },
  {
    q: "What should a high school coach start with?",
    a: "Most coaches should start with Pro if they manage a full program with multiple levels. Starter is best for a single team. Enterprise is for school or district-wide oversight."
  }
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#172033]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f5ef]/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link className="flex items-center gap-3" href="/">
            <Image alt="The Program Suite" className="h-9 w-auto object-contain" height={42} priority src="/logo.png" width={170} />
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm font-semibold text-[#4d5668] md:flex">
            <a className="hover:text-[#172033]" href="#coach-tools">For Coaches</a>
            <a className="hover:text-[#172033]" href="#ad">For ADs</a>
            <a className="hover:text-[#172033]" href="#pricing">Pricing</a>
            <a className="hover:text-[#172033]" href="#founder-access">Founder Access</a>
          </nav>
          <div className="flex items-center gap-2">
            <a className="hidden rounded-md border border-[#172033]/20 px-3 py-2 text-sm font-semibold hover:border-[#b28a2e] sm:inline-flex" href={APP_LOGIN_URL}>
              Sign In
            </a>
            <a className="rounded-md bg-[#b28a2e] px-3 py-2 text-sm font-bold text-white hover:bg-[#967224]" href="#founder-access">
              Claim Founder Pricing
            </a>
          </div>
        </div>
      </header>

      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <Image
          alt="Coach command center with practice planning, team schedule, and program operations"
          className="absolute inset-0 h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/practice-dashboard-hero.png"
        />
        <div className="absolute inset-0 bg-[#172033]/78" />
        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col justify-center px-4 py-16 text-white sm:px-6">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#f3d27a]">
              Limited founder pricing is open
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Run your program like you have a full staff.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82 sm:text-xl">
              Coach Tools, practice planning, game week, gear, schedule, attendance, Athlete development, and family communication in one operating system for team sports.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#d99a2b] px-5 py-3 font-black text-[#172033] hover:bg-[#f0b449]" href="#pricing">
                See Founder Pricing
                <ArrowRight aria-hidden="true" className="size-5" />
              </a>
              <a className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 font-bold hover:bg-white/15" href="#coach-tools">
                See What Coaches Get
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold text-white/70">
              Starter founder price: $199/year. Pro founder price: $499/year. Monthly access is available for teams that need a lower starting point.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {sports.map((sport) => (
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/78" key={sport}>
                {sport}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article className="rounded-lg border border-black/10 bg-[#fbfaf7] p-4" key={pillar.title}>
                <Icon aria-hidden="true" className="size-5 text-[#b28a2e]" />
                <h2 className="mt-3 font-bold">{pillar.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#667085]">{pillar.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]" id="coach-tools">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b28a2e]">For high school coaches</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Open one page and know what to handle first.</h2>
          <p className="mt-4 text-lg leading-8 text-[#5f6878]">
            The Program Suite is not another team calendar. It is the daily operating layer for overloaded coaches who need practice, game prep, gear, attendance, Athletes, and families connected.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {workflowCards.map((card) => {
            const Icon = card.icon;

            return (
              <a className="rounded-lg border border-black/10 bg-white p-5 shadow-sm hover:border-[#b28a2e]" href={card.href} key={card.title}>
                <div className="flex items-center justify-between gap-3">
                  <Icon aria-hidden="true" className="size-5 text-[#b28a2e]" />
                  <span className="rounded-full border border-black/10 px-2.5 py-1 text-xs font-bold text-[#667085]">{card.label}</span>
                </div>
                <h3 className="mt-5 text-xl font-black">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#667085]">{card.text}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="bg-[#243b53] text-white" id="game-week">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-80 overflow-hidden rounded-lg border border-white/15">
            <Image alt="Game week command calendar" className="object-cover" fill sizes="(min-width: 1024px) 50vw, 100vw" src="/images/schedule-dashboard-hero.png" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f3d27a]">Practice & game week</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Turn the next opponent into the week&apos;s teaching plan.</h2>
            <div className="mt-6 grid gap-3">
              {[
                "Pick the opponent and save reusable personnel notes.",
                "Build keys to win and matchup rules.",
                "Carry game prep into Practice Focus and drill blocks.",
                "Publish the Athlete scout and keep logistics in Schedule."
              ].map((item) => (
                <p className="flex items-start gap-3 text-white/82" key={item}>
                  <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#f3d27a]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center" id="gear">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b28a2e]">Gear & inventory</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">One avoided gear mess can pay for the system.</h2>
          <p className="mt-4 text-lg leading-8 text-[#5f6878]">
            Gear Day Mode helps coaches issue, scan, check in, and clear gear without rebuilding the same spreadsheet every season.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["Hand Out Gear", "Assign uniforms, equipment, and kits by Athlete."],
              ["Check Gear Back In", "Mark what came back, what is damaged, and what is missing."],
              ["Handle Fees", "Track lost or damaged items and clearance status."],
              ["Know What to Buy", "See shortages by size, team, and gear group."]
            ].map(([title, text]) => (
              <div className="rounded-lg border border-black/10 bg-white p-4" key={title}>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#667085]">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-96 overflow-hidden rounded-lg border border-black/10 shadow-xl">
          <Image alt="Organized sports equipment room" className="object-cover" fill sizes="(min-width: 1024px) 50vw, 100vw" src="/images/inventory-dashboard-hero.png" />
        </div>
      </section>

      <section className="border-y border-black/10 bg-white" id="families">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 lg:grid-cols-3">
          <AudienceCard icon={<CalendarDays aria-hidden="true" className="size-6" />} title="Schedule & Communication" text="Games, practices, training, travel details, map links, and family updates stay attached to the source calendar." />
          <AudienceCard icon={<ClipboardCheck aria-hidden="true" className="size-6" />} title="Attendance & Availability" text="Athletes and families submit conflicts before roll call. Coaches review requests and close makeup work." />
          <AudienceCard icon={<Target aria-hidden="true" className="size-6" />} title="Athlete Development" text="Every Athlete can have goals, staff follow-ups, readiness notes, and gear/accountability context in one profile." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" id="ad">
        <div className="grid gap-8 rounded-xl bg-[#172033] p-6 text-white sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f3d27a]">For ADs and districts</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">See operational risk before it becomes a school problem.</h2>
            <p className="mt-4 leading-7 text-white/72">
              Enterprise brings school-wide readiness, district reports, budget rollups, inventory risk, action items, and board packet exports into one oversight layer.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Readiness Reports", "Which schools need setup, gear, fee, or follow-up support."],
              ["Board Packet", "Leadership-ready reporting for activity, risk, and accountability."],
              ["Budget Rollups", "Purchasing, requests, replacement risk, and inventory exposure."],
              ["Audit History", "Access, exports, school entry, and district-level actions."]
            ].map(([title, text]) => (
              <div className="rounded-lg border border-white/10 bg-white/8 p-4" key={title}>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/68">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0eadc]" id="pricing">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b28a2e]">Founder pricing</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Early programs get the price locked for life.</h2>
            <p className="mt-4 text-lg leading-8 text-[#5f6878]">
              Founder annual pricing is available for a limited time while the first coaches and schools help shape the product. Monthly access is available for Starter and Pro, but the lifetime founder lock applies to annual plans.
            </p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pricing.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" id="founder-access">
        <div className="grid gap-8 rounded-xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b28a2e]">Claim founder access</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Tell us where your program is starting.</h2>
            <p className="mt-4 leading-7 text-[#5f6878]">
              Checkout is being handled manually during the founder window so we can onboard early programs correctly. Send the founder access request and we will follow up with the right setup path and payment link.
            </p>
          </div>
          <form action="/api/founder-access" className="grid gap-3" method="post">
            <FormInput label="Name" name="name" />
            <FormInput label="Email" name="email" type="email" />
            <FormInput label="School" name="school" />
            <div className="grid gap-3 sm:grid-cols-2">
              <FormInput label="Role" name="role" />
              <FormInput label="Sport(s)" name="sports" />
            </div>
            <label className="grid gap-1.5 text-sm font-bold">
              Plan interested in
              <select className="min-h-11 rounded-md border border-black/15 bg-[#fbfaf7] px-3 py-2 font-normal" name="plan">
                <option>Pro founder price - $499/year</option>
                <option>Pro monthly - $99/month</option>
                <option>Starter founder price - $199/year</option>
                <option>Starter monthly - $39/month</option>
                <option>Enterprise founder package</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-bold">
              Biggest thing you need help managing
              <textarea className="min-h-28 rounded-md border border-black/15 bg-[#fbfaf7] px-3 py-2 font-normal" name="message" placeholder="Practice planning, gear, scheduling, attendance, family communication..." />
            </label>
            <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#b28a2e] px-5 py-3 font-black text-white hover:bg-[#967224]" type="submit">
              Request Founder Access
              <ArrowRight aria-hidden="true" className="size-5" />
            </button>
          </form>
        </div>
      </section>

      <FaqSection items={faqs} />

      <footer className="border-t border-black/10 bg-[#172033] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Image alt="The Program Suite" className="h-9 w-auto object-contain" height={42} src="/logo.png" width={170} />
            <p className="mt-3 text-sm text-white/60">The operating system for school sports.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 text-sm font-semibold text-white/70">
            <a className="hover:text-white" href="#pricing">Pricing</a>
            <a className="hover:text-white" href="#founder-access">Founder Access</a>
            <a className="hover:text-white" href={APP_LOGIN_URL}>Sign In</a>
            <Link className="hover:text-white" href="/privacy">Privacy</Link>
            <Link className="hover:text-white" href="/terms">Terms</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}

function AudienceCard({ icon, text, title }: { icon: React.ReactNode; text: string; title: string }) {
  return (
    <article className="rounded-lg border border-black/10 bg-[#fbfaf7] p-5">
      <span className="inline-flex size-11 items-center justify-center rounded-md border border-black/10 bg-white text-[#b28a2e]">{icon}</span>
      <h2 className="mt-5 text-xl font-black">{title}</h2>
      <p className="mt-2 leading-7 text-[#667085]">{text}</p>
    </article>
  );
}

function PricingCard({ plan }: { plan: (typeof pricing)[number] }) {
  return (
    <article className={`flex flex-col rounded-xl border bg-white p-5 shadow-sm ${plan.highlight ? "border-[#b28a2e] ring-2 ring-[#b28a2e]/20" : "border-black/10"}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#b28a2e]">{plan.name}</p>
          <h3 className="mt-2 text-2xl font-black">{plan.description}</h3>
        </div>
        <span className={`rounded-full px-2.5 py-1 text-xs font-black ${plan.highlight ? "bg-[#b28a2e] text-white" : "bg-[#f0eadc] text-[#775c1e]"}`}>{plan.badge}</span>
      </div>
      <div className="mt-6">
        <div className="flex items-end gap-3">
          <p className="text-5xl font-black tracking-tight">{plan.founder}</p>
          <p className="pb-1 text-sm font-bold text-[#667085]">/year</p>
        </div>
        <p className="mt-2 text-sm text-[#667085]">
          Regular price: <span className="line-through">{plan.regular}/year</span>
        </p>
        {plan.monthly ? (
          <p className="mt-1 text-sm font-bold text-[#172033]">or {plan.monthly}</p>
        ) : null}
        <p className="mt-1 text-sm font-bold text-[#172033]">{plan.capacity}</p>
      </div>
      <ul className="mt-6 grid gap-3">
        {plan.features.map((feature) => (
          <li className="flex gap-3 text-sm leading-6 text-[#4d5668]" key={feature}>
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#b28a2e]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a className={`mt-auto inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 font-black ${plan.highlight ? "bg-[#b28a2e] text-white hover:bg-[#967224]" : "border border-black/15 hover:border-[#b28a2e]"}`} href="#founder-access">
        {plan.cta}
      </a>
    </article>
  );
}

function FormInput({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="grid gap-1.5 text-sm font-bold">
      {label}
      <input className="min-h-11 rounded-md border border-black/15 bg-[#fbfaf7] px-3 py-2 font-normal" name={name} required type={type} />
    </label>
  );
}

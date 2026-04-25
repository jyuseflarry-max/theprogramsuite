import Image from "next/image";
import {
  ClipboardList, Users, Eye,
  ChevronRight, Check, Quote, Shield, ArrowRight,
  Play, Timer, Music2, Mic, Volume2,
} from "lucide-react";
import { FaqSection } from "@/components/FaqSection";

// ── Config ────────────────────────────────────────────────────────────────────
const APP_URL = "https://tpscoach.com";
const API_BASE = process.env.MARKETING_API_BASE ?? APP_URL;

// Re-fetch founder seat counts at most once per minute.
export const revalidate = 60;

type SeatRow = { remaining: number; total: number };
type SeatMap = Record<string, SeatRow>;

async function fetchFounderSeats(): Promise<SeatMap> {
  try {
    const res = await fetch(`${API_BASE}/api/public/founder-seats`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return {};
    return (await res.json()) as SeatMap;
  } catch {
    // Never let a fetch failure block render — fall back to defaults below.
    return {};
  }
}
// ─────────────────────────────────────────────────────────────────────────────

const SPORTS = [
  "Basketball", "Volleyball", "Football", "Soccer",
  "Baseball", "Softball", "Track & Field", "Wrestling",
  "Cross Country", "Swim & Dive",
];

const ADMIN_TAXES = [
  { time: "45 min", task: "Building tomorrow's practice plan from scratch" },
  { time: "20 min", task: "Updating S&C weights after last week's maxes" },
  { time: "15 min", task: "Texting your assistant the updated practice order" },
  { time: "10 min", task: "Finding last month's drill to rebuild the template" },
];

const PRACTICE_FEATURES = [
  "Sport-agnostic drill library — tag by category, intensity, and objective",
  "Drag-and-drop timed plan builder — done in under 10 minutes",
  "Reusable templates — build once, remix all season",
  "Live Co-Pilot: music, voice announcements, and transitions — hands-free",
  "Periodization calendar so you can see the whole season at a glance",
  "Staff collaboration — assistants see the live plan on their own device",
];

const SC_FEATURES = [
  "Build multi-week programs and assign them to your full team or individuals",
  "Daily loads auto-calculated from each athlete's recorded maxes — no spreadsheet",
  "Athletes walk in knowing exactly what weight to hit",
  "Progress tracked over the season — see who's improving, who's stalling",
  "S&C sessions live on the same calendar as practice and games",
  "Athlete-facing workout view with sets, reps, and coaching cues",
];

const COLLAB_FEATURES = [
  {
    icon: Users,
    title: "Your staff is always on the same plan",
    desc: "Assistants pull up today's practice on their own device — live, in real time. No printed sheets, no group text with a photo of the whiteboard, no version confusion at 3:30 when warmups start.",
  },
  {
    icon: Eye,
    title: "Athletes walk in prepared",
    desc: "When you publish a plan, athletes can see it before they hit the floor. They know the focus of the day. They know what to expect in the weight room. That 5-minute chalk talk gets sharper when everyone already has context.",
  },
  {
    icon: ClipboardList,
    title: "Attendance is automatic",
    desc: "Every practice and S&C session has an attendance log built in. No clipboard. No roster sheet. Absences, tardies, and makeup work tracked in the same place as the plan — because the plan and the record of who ran it belong together.",
  },
];

interface Tier {
  key:           "starter" | "pro" | "enterprise";
  name:          string;
  badge:         string;
  teamLabel:     string;
  foundingPrice: string;
  regularLine:   string;
  monthlyLine:   string;
  description:   string;
  features:      string[];
  highlight:     boolean;
  ctaLabel:      string;
  defaultTotal:  number;
}

const TIERS: Tier[] = [
  {
    key: "starter",
    name: "Starter",
    badge: "Founding Rate",
    teamLabel: "1 Team · One Coach · Any Sport",
    foundingPrice: "$99",
    regularLine: "$199/year regular",
    monthlyLine: "or $24/mo",
    description:
      "Everything you need to run one varsity squad like a professional program. The whole platform — just scoped to one team.",
    features: [
      "Full drill library and plan builder — any sport",
      "Live Co-Pilot — music, voice transitions, hands-free",
      "S&C program builder with auto-calculated daily loads",
      "Athlete-facing practice and workout view",
      "Scheduling, attendance, and season calendar",
      "Staff collaboration — live plan sharing",
      "Family view of schedule, games, and workouts",
    ],
    highlight: false,
    ctaLabel: "Claim Starter Founding Rate",
    defaultTotal: 100,
  },
  {
    key: "pro",
    name: "Pro",
    badge: "Most Popular · Founding Rate",
    teamLabel: "Up to 5 Teams · Full Program",
    foundingPrice: "$249",
    regularLine: "$499/year regular",
    monthlyLine: "or $59/mo",
    description:
      "Run V, JV, Freshman — boys, girls, and feeders — under one program. Everything you build flows across all five teams.",
    features: [
      "Everything in Starter, for up to 5 teams",
      "Shared drill library across the entire program",
      "Cross-team scheduling — calendar never double-books",
      "Athlete profiles that follow them up the levels",
      "Program-wide reports — attendance, lifts, drill effectiveness",
      "Standards & tiers — Bronze through Elite benchmarks",
      "Shared inventory, kit templates, and equipment tracking",
      "Program-share — distribute strength programs to peers",
    ],
    highlight: true,
    ctaLabel: "Claim Pro Founding Rate",
    defaultTotal: 25,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    badge: "Athletic Department",
    teamLabel: "Unlimited Teams · Multi-Sport",
    foundingPrice: "$749",
    regularLine: "$1,499/year regular",
    monthlyLine: "or $169/mo",
    description:
      "Built for the AD running the whole department. Every sport, every level, every athlete — one operating system.",
    features: [
      "Everything in Pro, with unlimited teams",
      "Multi-sport — basketball, football, volleyball, all of it",
      "AD-level dashboards across every team",
      "Cross-sport scheduling and facility management",
      "Bulk roster import and athlete history across sports",
      "Custom paperwork templates and e-sign flows",
      "Priority support and dedicated onboarding",
      "Pricing scales with school size — talk to us",
    ],
    highlight: false,
    ctaLabel: "Talk to Us About Enterprise",
    defaultTotal: 5,
  },
];

const PROGRAM_PATH = [
  {
    step: "01",
    title: "Your varsity squad goes first.",
    desc: "You build your drill library, your S&C program, your plan templates. By week three, your assistants have stopped asking what tomorrow looks like — they just open the app.",
    tier: "Starter",
  },
  {
    step: "02",
    title: "Your JV coach asks for access.",
    desc: "Then the freshman coach. They want the same drill library. They want their kids on the same workout standards. They want their attendance in the same place.",
    tier: "Move to Pro",
  },
  {
    step: "03",
    title: "Your athletes move up — and so does their data.",
    desc: "A freshman who lifted 135 in October is a JV varsity call-up by January. His maxes, his attendance, his vibe-check history — all of it follows him to the next level. No re-onboarding.",
    tier: "Pro",
  },
  {
    step: "04",
    title: "The volleyball coach sees what you're running.",
    desc: "So does the football staff. Now the AD is asking why every program isn't on the same rails. That conversation — across sports, across seasons — is what Enterprise is built for.",
    tier: "Enterprise",
  },
];

const FAQ_ITEMS = [
  {
    q: "What sports does this work for?",
    a: "Any team sport with a practice schedule and a weight room. Basketball, volleyball, football, soccer, baseball, softball, track, wrestling — the platform doesn't assume your sport. You build your drill library around your terminology, your drills, and your program.",
  },
  {
    q: "What counts as a team?",
    a: "A team is a roster you coach as a unit. Varsity, JV, and Freshman are three teams. Boys and girls programs at the same level are two teams. A booster summer squad is a team. Pro covers up to five — enough for a typical V/JV/Freshman boys-and-girls basketball program.",
  },
  {
    q: "I run two sports — do I need Enterprise?",
    a: "Probably not. Pro covers up to 5 teams within one program, and most coaches with two whistles keep their sports as separate plans because rosters and seasons don't overlap. Enterprise is built for athletic directors who want every sport in one dashboard, with cross-sport scheduling and facility management.",
  },
  {
    q: "What happens to my founding rate if I upgrade tiers?",
    a: "It carries with you. If you start on Starter and your program grows into Pro, you keep your founding 50% off — locked on the Pro tier from day one of the upgrade, for life. The founding rate is yours, not the tier's.",
  },
  {
    q: "Can I upgrade or downgrade mid-season?",
    a: "Yes. Annual plans are prorated. The platform doesn't care where you are in your season — you can move from Starter to Pro the week before playoffs without losing data, accounts, or settings.",
  },
  {
    q: "Can my assistant coaches see the plan live?",
    a: "Yes. Staff pull up the plan in real time on their own device. Any change you make is reflected immediately — no printed sheets, no email threads, no version confusion.",
  },
  {
    q: "Can my athletes see their practice plan and workouts?",
    a: "Yes. When you publish a plan, athletes can view it from their player dashboard before stepping into the gym. S&C sessions show their personalized weights based on their recorded maxes.",
  },
  {
    q: "How does the S&C weight calculation work?",
    a: "You record each athlete's max for a lift once. After that, daily loads are calculated automatically based on the intensity percentage you set in the program. Athletes see their target weight when they open their workout — no coach math required.",
  },
  {
    q: "Is the founding rate permanent for existing members?",
    a: "Your founding rate stays with you for as long as you remain an active member. When the founding window closes, the price moves to the regular rate for new members — but existing founding members keep their rate.",
  },
  {
    q: "Do I need a separate app for my athletes?",
    a: "No. Athletes log in through the same platform on any browser. Their view is scoped to what you've published — practice plans, today's S&C session, and the schedule. They never see administrative or coaching-only content.",
  },
  {
    q: "Can I use this without the live Co-Pilot feature?",
    a: "Absolutely. Practice planning and S&C stand entirely on their own. The Co-Pilot is there when you want hands-free floor management — but you get full value from day one just building and running your program.",
  },
];

// ── Components ────────────────────────────────────────────────────────────────

function PricingCard({ tier, seats }: { tier: Tier; seats: SeatRow }) {
  const pct = seats.total > 0 ? (seats.remaining / seats.total) * 100 : 0;
  return (
    <div
      className={`rounded-2xl overflow-hidden flex flex-col ${
        tier.highlight
          ? "border-2 border-brand-gold bg-brand-navy-mid lg:-translate-y-3 shadow-2xl shadow-brand-gold/20"
          : "border border-white/10 bg-brand-navy-mid"
      }`}
    >
      <div
        className={`px-4 py-1.5 text-center ${
          tier.highlight ? "bg-brand-gold" : "bg-white/5 border-b border-white/10"
        }`}
      >
        <span
          className={`text-[10px] font-black uppercase tracking-widest ${
            tier.highlight ? "text-[#0F172A]" : "text-gray-400"
          }`}
        >
          {tier.badge}
        </span>
      </div>

      <div className="p-7 border-b border-white/10">
        <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-3">
          {tier.name}
        </p>
        <p className="text-white text-sm font-semibold mb-5">{tier.teamLabel}</p>

        <div className="flex items-end gap-2 mb-1">
          <span className="text-white text-5xl font-black tabular-nums">{tier.foundingPrice}</span>
          <div className="mb-1.5">
            <p className="text-gray-400 text-sm">/year</p>
            <p className="text-gray-600 text-xs line-through">{tier.regularLine}</p>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-1 mb-5 font-mono">{tier.monthlyLine}</p>

        <p className="text-gray-400 text-sm leading-relaxed">{tier.description}</p>

        <div className="mt-6 pt-5 border-t border-white/5">
          <p className="text-brand-gold text-[11px] font-bold tracking-wider uppercase mb-2">
            {seats.remaining} of {seats.total} founder spots left
          </p>
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full bg-brand-gold" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      <div className="p-7 flex-1 flex flex-col">
        <ul className="space-y-3 mb-8 flex-1" role="list">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
              <Check size={14} className="text-brand-gold mt-0.5 shrink-0" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        <a
          href={APP_URL}
          className={`block text-center font-black text-base py-4 rounded-lg transition-colors ${
            tier.highlight
              ? "bg-brand-orange hover:bg-brand-orange-dark text-white"
              : "bg-white/5 border border-brand-gold/30 hover:bg-brand-gold/10 text-white"
          }`}
        >
          {tier.ctaLabel}
        </a>
      </div>
    </div>
  );
}


// ── Page ──────────────────────────────────────────────────────────────────────

export default async function LandingPage() {
  const liveSeats = await fetchFounderSeats();

  // Merge live counts with hardcoded defaults so the page always renders even
  // if the API is down or hasn't been configured yet.
  const seatsFor = (tier: Tier): SeatRow =>
    liveSeats[tier.key] ?? { remaining: tier.defaultTotal, total: tier.defaultTotal };

  return (
    <div className="bg-brand-navy text-white font-sans min-h-screen">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-brand-navy/95 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="The Program Suite"
            width={140}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
          <a
            href={APP_URL}
            className="bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-black px-5 py-2.5 rounded-lg transition-colors"
          >
            Get Access
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-brand-navy">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(197,160,89,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(197,160,89,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse at center, #C5A059 0%, transparent 70%)" }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
          <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">
            Built for High School Coaches
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8">
            Practice planning.
            <br />
            Strength programs.
            <br />
            <span className="text-brand-gold">One place.</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            From the head coach running varsity solo, to the program directing six teams across a
            department — built for the coach who shows up and makes it work.
          </p>

          {/* Sport tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl mx-auto">
            {SPORTS.map((sport) => (
              <span
                key={sport}
                className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full border border-white/10 text-gray-400"
              >
                {sport}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3">
            <a
              href="#pricing"
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-lg px-10 py-5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Claim Your Founding Spot <ArrowRight size={18} />
            </a>
            <span className="text-gray-500 text-sm">Founding rate from $99/year — locked for life</span>
          </div>
        </div>
      </section>

      {/* ── ANY SPORT CALLOUT ── */}
      <section className="bg-brand-gold">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <p className="text-brand-navy text-2xl sm:text-4xl font-black leading-snug mb-4">
            It doesn&rsquo;t matter what&rsquo;s on your whistle.
          </p>
          <p className="text-brand-navy/80 text-lg max-w-3xl mx-auto leading-relaxed">
            The Program Suite is built around <strong>your</strong> drills, <strong>your</strong> terminology,
            and <strong>your</strong> program — not a sport-specific template someone else designed.
            Football coaches build film-room-ready practice scripts.
            Volleyball coaches structure serve-receive progressions.
            Basketball coaches run timed blocks with music.
            The platform follows your system, not the other way around.
          </p>
        </div>
      </section>

      {/* ── ADMIN TAX ── */}
      <section className="py-28 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-8">
            You wear every hat.
            <br />
            <span className="text-brand-gold">The admin work wears you out.</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl">
            At the high school level there&rsquo;s no director of athletic performance,
            no director of player development, no full-time strength coach.
            There&rsquo;s you — and whoever shows up to help.
            Here&rsquo;s what your week looks like before the first whistle blows.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {ADMIN_TAXES.map(({ time, task }) => (
              <div key={task} className="bg-brand-navy-mid border border-white/10 rounded-xl p-5">
                <p className="text-brand-gold text-3xl font-black tabular-nums mb-1">{time}</p>
                <p className="text-gray-400 text-sm leading-snug">{task}</p>
              </div>
            ))}
          </div>
          <p className="text-white font-semibold text-xl max-w-3xl">
            That&rsquo;s 90 minutes a week not spent watching film, building relationships with your kids,
            or working the phones on next year&rsquo;s roster.
            The Program Suite handles the system so you can focus on the athlete
            standing in front of you.
          </p>
        </div>
      </section>

      {/* ── PRACTICE PLANNING ── */}
      <section className="py-28 bg-brand-navy-mid border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Practice Planning</p>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
                Build it once.
                <br />
                Run it all season.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Build your drill library once — every rep you&rsquo;ve ever run, tagged and
                ready. Pull from it to build a timed practice plan in minutes.
                Hit Run. The Co-Pilot handles transitions, music, and announcements.
                You put your phone in your pocket and coach.
              </p>
              <ul className="space-y-3" role="list">
                {PRACTICE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={14} className="text-brand-gold mt-0.5 shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Transition sequence */}
            <div className="flex flex-col gap-3">
              {[
                { icon: Volume2, step: "01", label: "Music ducks",        desc: "The gym quiets. No fumbling. The energy winds down on your tempo." },
                { icon: Mic,     step: "02", label: "Drill announced",    desc: "Your speakers call the next rotation — clearly, automatically, every time." },
                { icon: Music2,  step: "03", label: "New track fades in", desc: "Energy for the next drill builds back in. The gym moves before you say a word." },
                { icon: Timer,   step: "04", label: "Clock resets",       desc: "You never touched your phone. You never looked away from your players." },
              ].map(({ icon: Icon, step, label, desc }) => (
                <div key={label} className="bg-brand-navy border border-white/10 rounded-xl p-5 flex items-start gap-4">
                  <div className="flex items-center gap-2 shrink-0 mt-0.5">
                    <span className="text-brand-gold font-black text-xs font-mono">{step}</span>
                    <Icon size={14} className="text-brand-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{label}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
              <div className="bg-brand-navy border border-brand-gold/20 rounded-xl p-5 mt-2">
                <p className="text-white font-semibold text-sm leading-relaxed">
                  You are free to roam. Free to pull a player aside for a
                  30-second correction — without the entire practice grinding to a halt
                  because <span className="text-gray-500 italic">&ldquo;Coach forgot to hit the buzzer.&rdquo;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRENGTH & CONDITIONING ── */}
      <section className="py-28 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Workout card mockup */}
            <div className="order-2 lg:order-1">
              <div className="bg-brand-navy-mid border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">
                    Today&rsquo;s Session — Week 4, Day 2
                  </p>
                  <span className="text-xs font-mono text-gray-500">Lower Body Power</span>
                </div>
                {[
                  { lift: "Back Squat",    sets: "4×5", weight: "225 lbs", pct: "80%" },
                  { lift: "Romanian DL",   sets: "3×8", weight: "185 lbs", pct: "70%" },
                  { lift: "Box Jump",      sets: "4×4", weight: "Bodyweight", pct: "" },
                  { lift: "Nordic Curl",   sets: "3×6", weight: "Bodyweight", pct: "" },
                ].map(({ lift, sets, weight, pct }) => (
                  <div key={lift} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <div>
                      <p className="text-white font-semibold text-sm">{lift}</p>
                      <p className="text-gray-500 text-xs font-mono">{sets}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-brand-gold font-black text-sm tabular-nums">{weight}</p>
                      {pct && <p className="text-gray-600 text-xs font-mono">{pct} 1RM</p>}
                    </div>
                  </div>
                ))}
                <p className="text-gray-600 text-[10px] font-mono pt-1">
                  Weights auto-calculated from recorded maxes · Coach assigned
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Strength &amp; Conditioning</p>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
                Every athlete.
                <br />
                Right weight.
                <br />
                <span className="text-brand-gold">Every session.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Build a program once. Assign it to your team. Each athlete&rsquo;s daily loads
                are calculated from their individual maxes. They walk in knowing exactly
                what to lift. You walk in knowing exactly who&rsquo;s on track.
                No whiteboard math. No individual spreadsheets.
              </p>
              <ul className="space-y-3" role="list">
                {SC_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={14} className="text-brand-gold mt-0.5 shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLABORATION ── */}
      <section className="py-28 bg-brand-navy-mid border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Staff &amp; Athletes</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
              Everyone aligned.
              <br />
              <span className="text-brand-gold">Before you walk in the door.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Great coaching is communication. The Program Suite extends that
              communication before the first whistle — to your staff and to your athletes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {COLLAB_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-brand-gold/20 bg-brand-navy p-8 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                  <Icon size={22} className="text-brand-gold" aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-lg leading-snug">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-brand-gold/20 bg-brand-navy rounded-2xl p-8 max-w-3xl mx-auto text-center">
            <p className="text-2xl font-bold text-white leading-snug mb-3">
              When your athlete walks in already knowing what&rsquo;s on the plan,
              you skip the orientation and start coaching.
            </p>
            <p className="text-brand-gold font-semibold text-base">
              That&rsquo;s not a minor convenience. That&rsquo;s the first five minutes
              of every practice, reclaimed.
            </p>
          </div>
        </div>
      </section>

      {/* ── ONE TEAM BECOMES THREE ── */}
      <section className="py-28 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">The Natural Path</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              When one team
              <br />
              <span className="text-brand-gold">becomes three.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              It almost always starts with one varsity coach. Here&rsquo;s what happens next.
            </p>
          </div>

          <div className="space-y-4">
            {PROGRAM_PATH.map(({ step, title, desc, tier }) => (
              <div
                key={step}
                className="bg-brand-navy-mid border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6"
              >
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 sm:w-32 shrink-0">
                  <span className="text-brand-gold font-black text-3xl font-mono">{step}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-gold/80 px-2 py-1 rounded border border-brand-gold/30">
                    {tier}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white text-lg font-semibold max-w-2xl mx-auto">
              You don&rsquo;t plan to outgrow your tier. You earn it — one team at a time —
              as your program comes together.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUNDER'S MANIFESTO ── */}
      <section className="py-28 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <Quote
              size={48}
              className="text-brand-gold shrink-0 mt-1 hidden sm:block"
              aria-hidden="true"
            />
            <div>
              <blockquote className="text-white text-xl sm:text-2xl font-semibold leading-relaxed mb-8">
                &ldquo;I spent 22 years on the sideline. The best coaching I ever did
                happened in the moments I wasn&rsquo;t managing the logistics —
                when I was standing next to a kid at the baseline, talking through
                what I saw. I built this to create more of those moments.
                Not for the programs with full-time staff and budgets.
                For the coach who shows up alone and makes it{" "}
                <span className="text-brand-gold">work anyway.&rdquo;</span>
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center"
                  style={{ background: "rgba(197,160,89,0.1)" }}
                >
                  <span className="text-brand-gold font-black text-sm">JL</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Coach Jyusef Larry</p>
                  <p className="text-gray-500 text-xs">Founder · Texas High School Coach · 22 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-28 border-b border-white/5 bg-brand-navy-mid" id="pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Founding Rate</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
              Pick the size of your program.
              <br />
              <span className="text-brand-gold">Lock the rate for life.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every plan includes the full platform. The only thing that changes is how many teams it covers.
              Founding rate stays with you for as long as you stay active — half off the regular price, forever.
            </p>
          </div>

          {/* Three pricing cards */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12 lg:items-start">
            {TIERS.map((tier) => (
              <PricingCard key={tier.key} tier={tier} seats={seatsFor(tier)} />
            ))}
          </div>

          {/* The math callout */}
          <div className="max-w-3xl mx-auto bg-brand-navy border border-brand-gold/30 rounded-2xl p-8 mb-10">
            <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4 text-center">
              The math
            </p>
            <p className="text-white font-bold text-xl text-center mb-2 leading-snug">
              Three Starter plans for V / JV / Freshman ={" "}
              <span className="text-gray-500 line-through">$297/yr.</span>
            </p>
            <p className="text-white font-bold text-xl text-center mb-5 leading-snug">
              One Pro plan covering all three ={" "}
              <span className="text-brand-gold">$249/yr.</span>
            </p>
            <p className="text-gray-400 text-sm text-center max-w-xl mx-auto leading-relaxed">
              Pro is cheaper than three Starters, gives you up to five teams, and puts every roster, drill,
              and lift on the same calendar. One login. One source of truth.
            </p>
          </div>

          {/* 30-day guarantee */}
          <div className="max-w-2xl mx-auto border border-green-500/30 bg-green-500/5 rounded-2xl p-8 text-center">
            <Shield size={28} className="text-green-400 mx-auto mb-3" aria-hidden="true" />
            <p className="text-white font-bold text-lg mb-2">30-Day No-Questions Guarantee</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Try any plan for 30 days. If The Program Suite doesn&rsquo;t change how your practices and S&C weeks feel,
              you get a full refund. No forms, no follow-up. Just ask.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection items={FAQ_ITEMS} />

      {/* ── FINAL CTA ── */}
      <section className="py-28 bg-brand-navy-mid">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">
            High School Coaches
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-8">
            Your athletes deserve
            <br />
            <span className="text-brand-gold">your full attention.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Every practice plan built in minutes. Every S&C session loaded automatically.
            Every assistant on the same page before warmups start.
            The admin work is handled. The coaching can begin.
          </p>
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-xl px-12 py-6 rounded-lg transition-colors"
          >
            Claim Your Founding Spot <ChevronRight size={20} />
          </a>
          <p className="text-gray-600 text-sm mt-6">
            Founding rates from $99/year — limited spots — 30-day guarantee
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/logo.png"
            alt="The Program Suite"
            width={110}
            height={30}
            className="h-7 w-auto object-contain opacity-60"
          />
          <p className="text-gray-600 text-xs text-center">
            &copy; {new Date().getFullYear()} The Program Suite. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy</a>
            <a href="/terms"   className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

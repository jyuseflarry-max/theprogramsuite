"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Play, Timer, Music2, Mic, Volume2, BookOpen, Dumbbell, Target,
  ChevronDown, ChevronRight, Check, Quote, Shield, ArrowRight,
  Users, Globe, Zap,
} from "lucide-react";

// ── Config ────────────────────────────────────────────────────────────────────
const APP_URL = "https://tpscoach.com";
// ─────────────────────────────────────────────────────────────────────────────

const TRANSITION_STEPS = [
  { icon: Volume2, label: "Music Ducks",        desc: "The gym quiets. No fumbling, no abrupt cuts. The energy winds down on your tempo." },
  { icon: Mic,     label: "Drill Announced",    desc: "Your speakers call the next rotation — clearly, automatically, every single time." },
  { icon: Music2,  label: "New Track Fades In", desc: "The energy for the next drill builds back in. The gym is already moving before you say a word." },
  { icon: Timer,   label: "Clock Resets",       desc: "You never touched your phone. You never looked away from your players. Not once." },
];

const PILLARS = [
  {
    name:   "The Vault",
    icon:   BookOpen,
    tag:    "Practice & Planning",
    desc:   "Every drill you've ever run. Organized by tag, intensity, and objective. Build a timed practice plan from your library and share it with your staff — in under 10 minutes.",
    items:  [
      "Searchable drill library",
      "Drag-and-drop plan builder",
      "Reusable timed templates",
      "Staff collaboration — live",
    ],
  },
  {
    name:   "The Lab",
    icon:   Dumbbell,
    tag:    "Strength & Performance",
    desc:   "Assign training programs by team or individual. Daily loads auto-calculated from recorded maxes. Readiness scores surfaced before you ever hit the floor.",
    items:  [
      "S&C program assignment",
      "Auto-calculated daily weights",
      "Wellness check-ins",
      "Athlete-facing dashboard",
    ],
  },
  {
    name:   "The War Room",
    icon:   Target,
    tag:    "Scouting & Operations",
    desc:   "Build opponent profiles and printable scouting reports. Keep schedule, announcements, and team comms unified — so nothing gets buried in a group chat.",
    items:  [
      "Opponent tendencies & personnel",
      "Printable PDF scouting reports",
      "Unified game and practice calendar",
      "Team-wide announcements",
    ],
  },
];

interface Tier {
  name:        string;
  icon:        React.ElementType;
  audience:    string;
  founding:    string;
  regular:     string;
  badge?:      string;
  hook:        string;
  features:    string[];
  cta:         string;
}

const TIERS: Tier[] = [
  {
    name:     "Coach",
    icon:     Play,
    audience: "Single Coach",
    founding: "$150",
    regular:  "$300",
    badge:    "Most Popular",
    hook:     "The full Co-Pilot for one coach and their team. Every tool in the suite, one price.",
    features: [
      "Live Practice Co-Pilot (voice + music transitions)",
      "Full drill library with reusable templates",
      "S&C program assignment and tracking",
      "Scouting reports and opponent profiles",
      "Team scheduling and communications",
      "Staff collaboration — real time",
    ],
    cta: "Claim Coach Rate",
  },
  {
    name:     "Program",
    icon:     Users,
    audience: "HS Athletic Department",
    founding: "$600",
    regular:  "$1,200",
    hook:     "Every sport, every coach, one platform. Built for athletic directors who want visibility across the entire department.",
    features: [
      "Everything in Coach",
      "Unlimited coaches and sports",
      "Athletic Director overview dashboard",
      "Cross-sport scheduling and calendar",
      "Department-wide communications",
      "Priority email support",
    ],
    cta: "Claim Program Rate",
  },
  {
    name:     "Collegiate",
    icon:     Globe,
    audience: "Collegiate Program",
    founding: "$1,000",
    regular:  "$2,000",
    hook:     "Built for the demands of college athletics — recruiting, compliance, and performance tracking at a higher standard.",
    features: [
      "Everything in Program",
      "Recruiting pipeline & prospect tracking",
      "Transfer portal management",
      "Compliance documentation",
      "Advanced analytics and reporting",
      "Dedicated onboarding and support",
    ],
    cta: "Claim Collegiate Rate",
  },
  {
    name:     "Collegiate Dept",
    icon:     Zap,
    audience: "Collegiate Athletic Department",
    founding: "$5,000",
    regular:  "$10,000",
    hook:     "Every program across your institution, managed from one command center. API access included.",
    features: [
      "Everything in Collegiate",
      "Full department deployment",
      "API access and data integrations",
      "Scholarship & aid tracking",
      "NCAA / NAIA compliance tools",
      "Dedicated account manager",
    ],
    cta: "Contact Us",
  },
];

const FAQ_ITEMS = [
  {
    q: "What sports does this support?",
    a: "Any team sport with a practice floor. Basketball is the primary use case today, with football, volleyball, and soccer in active development.",
  },
  {
    q: "Does it work without a Bluetooth speaker?",
    a: "Yes. You can run it from any device with a browser. Audio transitions play through whatever output device you choose.",
  },
  {
    q: "Can my assistants see the practice plan live?",
    a: "Yes. Staff can pull up the plan in real time on their own device. No printing, no email threads, no version confusion.",
  },
  {
    q: "Is the Founding Rate permanent?",
    a: "Yes. The founding rate is locked to your account for the lifetime of your membership. You will never be repriced.",
  },
  {
    q: "How does the Collegiate recruiting pipeline work?",
    a: "You build prospect profiles, track communication logs, and manage evaluation notes all in one place — connected to your practice and performance data. Recruiting tools are currently in development; founding members get access first.",
  },
  {
    q: "Can an Athletic Director manage multiple teams?",
    a: "Yes. Program and Collegiate tiers include a department-level dashboard with visibility across all sports and coaching staffs.",
  },
];

// ── Components ────────────────────────────────────────────────────────────────

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-white font-semibold text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && <p className="pb-5 text-gray-400 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const { name, icon: Icon, audience, founding, regular, badge, hook, features, cta } = tier;
  const isPopular = !!badge;
  return (
    <div
      className={`relative flex flex-col rounded-2xl overflow-hidden border ${
        isPopular
          ? "border-brand-gold bg-brand-navy-mid"
          : "border-white/10 bg-brand-navy-mid/50"
      }`}
    >
      {isPopular && (
        <div className="bg-brand-gold px-4 py-1.5 text-center">
          <span className="text-[#0F172A] text-[10px] font-black uppercase tracking-widest">
            {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <Icon size={16} className="text-brand-gold" aria-hidden="true" />
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">{audience}</span>
        </div>
        <h3 className="text-white text-2xl font-black mb-4">{name}</h3>
        <div className="flex items-end gap-2 mb-1">
          <span className="text-white text-4xl font-black tabular-nums">{founding}</span>
          <span className="text-gray-400 text-sm mb-1.5">/year founding</span>
        </div>
        <p className="text-gray-600 text-xs line-through">Regular: {regular}/year</p>
      </div>

      {/* Hook */}
      <div className="px-6 py-4 border-b border-white/10">
        <p className="text-gray-300 text-sm leading-relaxed">{hook}</p>
      </div>

      {/* Features */}
      <div className="p-6 flex flex-col flex-1">
        <ul className="space-y-2.5 flex-1 mb-6" role="list">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
              <Check size={13} className="text-brand-gold mt-0.5 shrink-0" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        <a
          href={APP_URL}
          className={`block text-center font-black text-sm py-3.5 rounded-lg transition-colors ${
            isPopular
              ? "bg-brand-orange hover:bg-brand-orange-dark text-white"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function LandingPage() {
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
        {/* Subtle grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(197,160,89,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(197,160,89,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gold glow */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse at center, #C5A059 0%, transparent 70%)" }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
          <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">
            The Practice Co-Pilot
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8">
            Stop Managing
            <br />
            <span className="text-brand-gold">the Clock.</span>
            <br />
            Command the Gym.
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            You are the most important person in that gym.
            Every second you spend standing next to a Bluetooth speaker
            is a second you are&nbsp;<em>not</em> coaching.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_URL}
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-lg px-10 py-5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Claim Your Founding Spot <ArrowRight size={18} />
            </a>
            <span className="text-gray-500 text-sm">Starting at $150 / year — locked for life</span>
          </div>
        </div>
      </section>

      {/* ── 12-MINUTE CALL-OUT ── */}
      <section className="bg-brand-gold">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 text-center sm:text-left">
            <div>
              <p className="text-6xl sm:text-7xl font-black tabular-nums leading-none text-brand-navy">12</p>
              <p className="text-brand-navy/70 text-sm font-semibold uppercase tracking-widest mt-1">Minutes</p>
            </div>
            <div className="hidden sm:block w-px h-20 bg-brand-navy/20" aria-hidden="true" />
            <div className="max-w-md">
              <p className="text-xl sm:text-2xl font-bold leading-snug text-brand-navy">
                Reclaimed every practice. Handed back to coaching.
              </p>
              <p className="text-brand-navy/70 text-sm mt-2 leading-relaxed">
                Average transition waste per 90-minute practice across 3 drill rotations.
                Over a 40-game season, that&rsquo;s more than 8 hours of authority
                returned to you. Present this box to your Athletic Director. The math speaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-28 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-8">
            15% of your practice is{" "}
            <span className="text-brand-gold">logistics.</span>
            <br />
            None of it is coaching.
          </h2>
          <div className="space-y-5 text-gray-300 text-lg leading-relaxed max-w-3xl">
            <p>
              You walk in. You&rsquo;ve got a plan. You&rsquo;ve got a message. You&rsquo;ve got things
              to teach. And then the first 8 minutes look like this: find the music, set the
              timer, yell the drill over the noise, repeat.
            </p>
            <p>
              The problem isn&rsquo;t discipline. It&rsquo;s not your staff.
              It&rsquo;s that the floor has never had a system that runs <em>with</em> you.
            </p>
            <p className="text-white font-semibold text-xl">
              A professional practice should run with the precision of a clock —
              so the Head Coach can focus entirely on teaching and correction.
              That&rsquo;s not an aspiration. That&rsquo;s the standard.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE SCENE ── */}
      <section className="py-28 bg-brand-navy-mid border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">The Co-Pilot Experience</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Walk in. Hit Run.
              <br />
              <span className="text-brand-gold">The gym follows your lead.</span>
            </h2>
          </div>

          {/* Scene */}
          <div className="bg-brand-navy rounded-2xl border border-brand-gold/20 p-8 sm:p-12 mb-16">
            <div className="flex items-start gap-4 mb-6">
              <span
                className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <Play size={16} className="text-white ml-0.5" />
              </span>
              <p className="text-gray-200 text-lg sm:text-xl leading-relaxed">
                You walk into the gym. You open the app. You hit{" "}
                <span className="text-white font-bold">&ldquo;Run.&rdquo;</span>
              </p>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed pl-14">
              The music starts. The first drill is announced over your speakers.
              The timer begins. You put your phone in your pocket.
              You walk to the baseline. You start coaching.
            </p>
          </div>

          {/* Transition sequence */}
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6 text-center">
            What happens at every transition — without you touching a thing
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRANSITION_STEPS.map(({ icon: Icon, label, desc }, i) => (
              <div key={label} className="bg-brand-navy border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-brand-gold font-black text-xs font-mono">0{i + 1}</span>
                  <Icon size={15} className="text-brand-gold" aria-hidden="true" />
                </div>
                <p className="text-white font-bold text-base mb-2">{label}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Transformation */}
          <div className="mt-16 border-t border-white/10 pt-16 max-w-3xl mx-auto text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              You are free to roam. Free to pull a player aside
              for a 30-second correction — without the entire practice
              grinding to a halt because{" "}
              <span className="text-gray-400 italic">&ldquo;Coach forgot to hit the buzzer.&rdquo;</span>
            </p>
            <p className="text-brand-gold font-bold text-lg mt-6">
              The gym follows your rhythm, powered by the Co-Pilot.
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
                &ldquo;I spent 22 years on the sideline. I realized that my impact as a coach
                was capped by how much admin work I was doing on the floor.
                I built the Co-Pilot to take the logistics off my plate
                so I could actually lead.
                It&rsquo;s the tool for coaches who want their{" "}
                <span className="text-brand-gold">presence felt in every corner of the court.&rdquo;</span>
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center" style={{ background: "rgba(197,160,89,0.1)" }}>
                  <span className="text-brand-gold font-black text-sm">JL</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Coach Larry</p>
                  <p className="text-gray-500 text-xs">Founder, The Program Suite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UTILITY BELT ── */}
      <section className="py-28 bg-brand-navy-mid border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">The Utility Belt</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
              Everything else your program runs on.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              You use Hudl for film. You use FastModel for Xs and Os.
              Use <strong className="text-white">The Program Suite</strong> to lead the session.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map(({ name, icon: Icon, tag, desc, items }) => (
              <div
                key={name}
                className="rounded-2xl border border-brand-gold/20 bg-brand-navy p-8 flex flex-col gap-6"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={20} className="text-brand-gold" aria-hidden="true" />
                    <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">{tag}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
                <ul className="space-y-2.5" role="list">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <Check size={13} className="text-brand-gold mt-0.5 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-28 border-b border-white/5" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Founding Rates</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
              Lock in the professional standard.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Founding rates are your reward for being first.
              Every price below is locked to your account for life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {TIERS.map((tier) => (
              <TierCard key={tier.name} tier={tier} />
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-12 max-w-2xl mx-auto border border-green-500/30 bg-green-500/5 rounded-2xl p-8 text-center">
            <Shield size={28} className="text-green-400 mx-auto mb-3" aria-hidden="true" />
            <p className="text-white font-bold text-lg mb-2">30-Day No-Questions Guarantee</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              If the Co-Pilot doesn&rsquo;t change how your practice feels within 30 days,
              you get a full refund. No forms, no follow-up email. Just ask.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 bg-brand-navy-mid border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-4xl font-black mb-12 text-center">Questions.</h2>
          {FAQ_ITEMS.map((item) => (
            <FaqRow key={item.q} {...item} />
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">
            The Floor Generals
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-8">
            The gym is waiting.
            <br />
            <span className="text-brand-gold">Time to run it.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            The coaches who build great programs don&rsquo;t manage clocks.
            They command attention, correct in real time, and leave the
            logistics to a system that never misses a transition.
          </p>
          <a
            href={APP_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-xl px-12 py-6 rounded-lg transition-colors"
          >
            Claim Your Founding Spot <ChevronRight size={20} />
          </a>
          <p className="text-gray-600 text-sm mt-6">
            Starting at $150/year — locked for life — 30-day guarantee
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

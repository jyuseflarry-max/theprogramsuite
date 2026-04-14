"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Play, Timer, Music2, Mic, Volume2, BookOpen, Dumbbell, Target,
  ChevronDown, ChevronRight, Check, Quote, Shield, Zap, ArrowRight,
} from "lucide-react";

// ── Config ────────────────────────────────────────────────────────────────────
const APP_URL = "https://tpscoach.com";
// ─────────────────────────────────────────────────────────────────────────────

// ── Data ──────────────────────────────────────────────────────────────────────

const TRANSITION_STEPS = [
  { icon: Volume2, label: "Music Ducks",        desc: "The gym quiets. No fumbling, no abrupt cuts. The energy winds down on your tempo." },
  { icon: Mic,     label: "Drill Announced",    desc: "Your speakers call the next rotation — clearly, automatically, every single time." },
  { icon: Music2,  label: "New Track Fades In", desc: "The energy for the next drill builds back in. The gym is already moving before you say a word." },
  { icon: Timer,   label: "Clock Resets",       desc: "You never touched your phone. You never looked away from your players. Not once." },
];

const PILLARS = [
  {
    name:    "The Vault",
    icon:    BookOpen,
    tag:     "Practice & Planning",
    color:   "text-amber-400",
    border:  "border-amber-400/30",
    bg:      "bg-amber-400/5",
    desc:    "Every drill you've ever run. Organized by tag, intensity, and objective. Build a timed practice plan from your library and share it with your staff — in under 10 minutes.",
    items:   [
      "Searchable drill library",
      "Drag-and-drop plan builder",
      "Reusable timed templates",
      "Staff collaboration — live",
    ],
  },
  {
    name:    "The Lab",
    icon:    Dumbbell,
    tag:     "Strength & Performance",
    color:   "text-blue-400",
    border:  "border-blue-400/30",
    bg:      "bg-blue-400/5",
    desc:    "Assign training programs by team or individual. Daily loads auto-calculated from recorded maxes. Readiness scores surfaced before you ever hit the floor.",
    items:   [
      "S&C program assignment",
      "Auto-calculated daily weights",
      "Wellness check-ins",
      "Athlete-facing dashboard",
    ],
  },
  {
    name:    "The War Room",
    icon:    Target,
    tag:     "Scouting & Operations",
    color:   "text-red-400",
    border:  "border-red-400/30",
    bg:      "bg-red-400/5",
    desc:    "Build opponent profiles and printable scouting reports. Keep schedule, announcements, and team comms unified — so nothing gets buried in a group chat.",
    items:   [
      "Opponent tendencies & personnel",
      "Printable PDF scouting reports",
      "Unified game and practice calendar",
      "Team-wide announcements",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "What sports does this support?",
    a: "Any team sport with a practice floor. Basketball is the primary use case today, with football, volleyball, and soccer in active development.",
  },
  {
    q: "Does it work without a Bluetooth speaker?",
    a: "Yes. You can run it from your phone, tablet, or any device with a browser. The audio transitions run through whatever output device you choose.",
  },
  {
    q: "Can my assistants see the practice plan live?",
    a: "Yes. Your staff can pull up the plan in real time on their own device. No printing, no email threads, no version confusion.",
  },
  {
    q: "Is the Founding Coach rate permanent?",
    a: "Yes. The $149/year rate is locked to your account for the lifetime of your membership. You will never be repriced.",
  },
  {
    q: "Can an Athletic Director manage multiple teams?",
    a: "Yes. The program supports multi-sport accounts — multiple head coaches, multiple teams, under one dashboard.",
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
      {open && (
        <p className="pb-5 text-gray-400 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="The Program Suite" width={120} height={32} className="h-7 w-auto object-contain brightness-0 invert" priority />
          </div>
          <a
            href={APP_URL}
            className="bg-red-600 hover:bg-red-500 text-white text-sm font-bold px-5 py-2 rounded transition-colors"
          >
            Get Access
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-black">
        {/* Championship grid texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
          <p className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase mb-6">
            The Practice Co-Pilot
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8">
            Stop Managing
            <br />
            <span className="text-red-500">the Clock.</span>
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
              className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-black text-lg px-10 py-5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Claim Your Founding Spot <ArrowRight size={18} />
            </a>
            <span className="text-gray-500 text-sm">$149 / year — locked for life</span>
          </div>
        </div>
      </section>

      {/* ── 12-MINUTE CALL-OUT ── */}
      <section className="bg-red-600">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 text-center sm:text-left">
            <div>
              <p className="text-6xl sm:text-7xl font-black tabular-nums leading-none">12</p>
              <p className="text-red-100 text-sm font-semibold uppercase tracking-widest mt-1">Minutes</p>
            </div>
            <div className="hidden sm:block w-px h-20 bg-red-400/40" aria-hidden="true" />
            <div className="max-w-md">
              <p className="text-xl sm:text-2xl font-bold leading-snug">
                Reclaimed every practice. Handed back to coaching.
              </p>
              <p className="text-red-200 text-sm mt-2 leading-relaxed">
                Average transition waste per 90-minute practice across 3 drill rotations.
                Over a 40-game season, that&rsquo;s more than 8 hours of your authority returned to you.
                Present this box to your Athletic Director. The math speaks.
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
            <span className="text-red-500">logistics.</span>
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
      <section className="py-28 bg-gray-950 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">The Co-Pilot Experience</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Walk in. Hit Run.<br />
              <span className="text-red-500">The gym follows your lead.</span>
            </h2>
          </div>

          {/* Scene description */}
          <div className="bg-black rounded-2xl border border-white/10 p-8 sm:p-12 mb-16">
            <div className="flex items-start gap-4 mb-6">
              <span
                className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0 mt-0.5"
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
          <h3 className="text-white font-bold text-lg mb-6 text-center tracking-wide uppercase text-sm">
            What happens at every transition — without you touching a thing
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRANSITION_STEPS.map(({ icon: Icon, label, desc }, i) => (
              <div key={label} className="bg-black border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-red-500 font-black text-xs font-mono">0{i + 1}</span>
                  <Icon size={16} className="text-red-400" aria-hidden="true" />
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
            <p className="text-red-400 font-bold text-lg mt-6">
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
              className="text-red-600 shrink-0 mt-1 hidden sm:block"
              aria-hidden="true"
            />
            <div>
              <blockquote className="text-white text-xl sm:text-2xl font-semibold leading-relaxed mb-8">
                &ldquo;I spent 22 years on the sideline. I realized that my impact as a coach
                was capped by how much admin work I was doing on the floor.
                I built the Co-Pilot to take the logistics off my plate
                so I could actually lead.
                It&rsquo;s the tool for coaches who want their{" "}
                <span className="text-red-400">presence felt in every corner of the court.&rdquo;</span>
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center">
                  <span className="text-red-400 font-black text-sm">JL</span>
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
      <section className="py-28 bg-gray-950 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">The Utility Belt</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
              Everything else your program runs on.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              You use Hudl for film. You use FastModel for Xs and Os.
              Use <strong className="text-white">The Program Suite</strong> to lead the session.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PILLARS.map(({ name, icon: Icon, tag, color, border, bg, desc, items }) => (
              <div
                key={name}
                className={`rounded-2xl border ${border} ${bg} p-8 flex flex-col gap-6`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={22} className={color} aria-hidden="true" />
                    <span className={`text-xs font-bold uppercase tracking-widest ${color}`}>{tag}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
                <ul className="space-y-2.5" role="list">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <Check size={14} className={`${color} mt-0.5 shrink-0`} aria-hidden="true" />
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
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase mb-4">Founding Coach Offer</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
              Lock in the professional standard.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              This rate is your reward for being a founding member of the tribe.
              It stays with you for life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Coach tier */}
            <div className="bg-black border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-8 border-b border-white/10">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-3">Coach</p>
                <p className="text-white text-3xl sm:text-4xl font-black mb-1">
                  $149<span className="text-gray-400 text-lg font-normal"> /year</span>
                </p>
                <p className="text-gray-500 text-xs mt-1 line-through">Regular rate: $299/year</p>
              </div>
              <div className="p-8 border-b border-white/10">
                <p className="text-white font-bold mb-1">The Full Floor, Solo.</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every tool in the suite — Practice Co-Pilot, Drill Vault, The Lab,
                  and The War Room — for one coach and their team.
                </p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-8" role="list">
                  {[
                    "Live Practice Co-Pilot (voice + music transitions)",
                    "Full drill library with templates",
                    "S&C program assignment and tracking",
                    "Scouting reports and opponent profiles",
                    "Team scheduling and communications",
                    "Staff collaboration — real time",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={14} className="text-red-400 mt-0.5 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_URL}
                  className="w-full block text-center bg-red-600 hover:bg-red-500 text-white font-black text-base py-4 rounded-lg transition-colors"
                >
                  Claim Founding Coach Rate
                </a>
              </div>
            </div>

            {/* Program tier */}
            <div className="bg-black border-2 border-red-600 rounded-2xl overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-red-600" aria-hidden="true" />
              <div className="px-8 pt-4 pb-0 flex justify-end">
                <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="p-8 border-b border-white/10">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-3">Program</p>
                <p className="text-white text-3xl sm:text-4xl font-black mb-1">
                  $399<span className="text-gray-400 text-lg font-normal"> /year</span>
                </p>
                <p className="text-gray-500 text-xs mt-1 line-through">Regular rate: $799/year</p>
              </div>
              <div className="p-8 border-b border-white/10">
                <p className="text-white font-bold mb-1">The Full Program. Every Staff Member.</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Multiple sports, multiple coaches, one Athletic Director dashboard.
                  Built for programs that want a single system across the entire department.
                </p>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-8" role="list">
                  {[
                    "Everything in Coach",
                    "Unlimited staff and assistant coaches",
                    "Multi-sport support (basketball, football, and more)",
                    "Athletic Director overview dashboard",
                    "Cross-team scheduling and communications",
                    "Priority onboarding and support",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                      <Check size={14} className="text-red-400 mt-0.5 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_URL}
                  className="w-full block text-center bg-red-600 hover:bg-red-500 text-white font-black text-base py-4 rounded-lg transition-colors"
                >
                  Claim Founding Program Rate
                </a>
              </div>
            </div>
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
      <section className="py-28 bg-gray-950 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-4xl font-black mb-12 text-center">Questions.</h2>
          <div role="list">
            {FAQ_ITEMS.map((item) => (
              <FaqRow key={item.q} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase mb-6">
            The Floor Generals
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.9] mb-8">
            The gym is waiting.
            <br />
            <span className="text-red-500">Time to run it.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            The coaches who build great programs don&rsquo;t manage clocks.
            They command attention, correct in real time, and leave the
            logistics to a system that never forgets a transition.
          </p>
          <a
            href={APP_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-black text-xl px-12 py-6 rounded-lg transition-colors"
          >
            Claim Your Founding Spot <ChevronRight size={20} />
          </a>
          <p className="text-gray-600 text-sm mt-6">
            $149/year — locked for life — 30-day guarantee
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image src="/logo.png" alt="The Program Suite" width={100} height={28} className="h-6 w-auto object-contain brightness-0 invert opacity-50" />
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

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ClipboardList, Dumbbell, Users, MessageSquare,
  Check, Play, X, ChevronRight, Quote, Menu, Timer, Music2, Mic,
  Minus, ChevronDown, BookOpen, Target, HeartPulse, Calendar,
  Volume2, Zap,
} from "lucide-react";

// ── Configuration ─────────────────────────────────────────────────────────────
const APP_URL     = "https://tpscoach.com";
const VIDEO_EMBED = ""; // paste YouTube embed URL when ready
// ──────────────────────────────────────────────────────────────────────────────

// ── Data ──────────────────────────────────────────────────────────────────────

const COPILOT_STEPS = [
  {
    step:  "01",
    icon:  ClipboardList,
    title: "Build It.",
    desc:  "Drag your drills into a timed plan. Assign a playlist to each segment. Add coaching cues for your staff. The whole setup takes under 10 minutes.",
  },
  {
    step:  "02",
    icon:  Play,
    title: "Hit Run.",
    desc:  "One tap. The Co-Pilot takes over. The timer starts, the first drill is announced over your speakers, and the music fades in — all at once, automatically.",
  },
  {
    step:  "03",
    icon:  Zap,
    title: "Just Coach.",
    desc:  "At every transition, music fades, the next drill is called out, and the clock resets — without you touching a thing. Phone in pocket. Eyes on your athletes.",
  },
];

const TRANSITION_SEQUENCE = [
  {
    icon:  Volume2,
    label: "Music fades smoothly",
    desc:  "The gym quiets down automatically. No fumbling. No abrupt cuts.",
  },
  {
    icon:  Mic,
    label: "Drill announced",
    desc:  "Your speakers call the next drill — clearly, every single time.",
  },
  {
    icon:  Music2,
    label: "Next playlist begins",
    desc:  "The energy for the next drill builds back in automatically.",
  },
  {
    icon:  Timer,
    label: "Clock resets",
    desc:  "You never touched your phone. You never looked away from your players.",
  },
];

const BEFORE_AFTER = [
  {
    icon:   Mic,
    before: "You yell the next drill into a loud gym. Half the team is still shooting. You yell again.",
    after:  "The Co-Pilot announces it clearly over your speakers. Every player hears it. Every time.",
  },
  {
    icon:   Music2,
    before: "You stop mid-coaching, unlock your phone, find the playlist. The energy dies. You've lost the room.",
    after:  "Playlists transition seamlessly between drills. The pace never breaks. The energy stays.",
  },
  {
    icon:   Timer,
    before: "You're watching the clock instead of watching your players. You miss the teachable moment.",
    after:  "The clock manages itself. You manage your athletes. That's the entire difference.",
  },
];

const UTILITY_BELT = [
  {
    name:  "The Vault",
    icon:  BookOpen,
    tag:   "Practice & Planning",
    desc:  "Your full drill library, practice plan templates, and session history — searchable, reusable, shareable with your staff in real time.",
    items: ["Drill library with tags and objectives", "Practice plan builder", "Session history and analytics", "Staff collaboration tools"],
  },
  {
    name:  "The Lab",
    icon:  Dumbbell,
    tag:   "Strength & Wellness",
    desc:  "Assign strength programs, auto-calculate daily weights from athlete maxes, and surface readiness scores before practice even starts.",
    items: ["Strength & conditioning programs", "Auto-calculated daily weights", "Daily wellness check-ins", "Player readiness scores"],
  },
  {
    name:  "The War Room",
    icon:  Target,
    tag:   "Scouting & Comms",
    desc:  "Build opponent profiles, generate printable scouting reports, and keep your entire program on the same page — schedule, announcements, and messages unified.",
    items: ["Opponent scouting profiles", "Printable scouting reports", "Game and practice schedule", "Team messaging + announcements"],
  },
];

const COMPARE_ROWS = [
  { feature: "Live Practice Runner",        us: true,  fastmodel: false, hudl: false   },
  { feature: "Automated Announcements",     us: true,  fastmodel: false, hudl: false   },
  { feature: "Seamless Music Transitions",  us: true,  fastmodel: false, hudl: false   },
  { feature: "Drill Vault / Library",       us: true,  fastmodel: true,  hudl: false   },
  { feature: "Practice Planning",           us: true,  fastmodel: true,  hudl: "partial" },
  { feature: "Scouting Reports",            us: true,  fastmodel: true,  hudl: true    },
  { feature: "Strength & Conditioning",     us: true,  fastmodel: false, hudl: false   },
  { feature: "Player Wellness Tracking",    us: true,  fastmodel: false, hudl: false   },
  { feature: "Athlete-Facing Views",        us: true,  fastmodel: false, hudl: "partial" },
  { feature: "Film Review",                 us: false, fastmodel: false, hudl: true    },
  { feature: "Single-team annual price",    us: "$149 founding", fastmodel: "$149–$999", hudl: "$1,000–$4,000" },
];

const TIERS = [
  {
    name:          "Coach",
    tagline:       "Your personal Floor Manager. One program, everything included.",
    badge:         "Best for Co-Pilot",
    foundingPrice: 149,
    regularPrice:  290,
    highlight:     true,
    features: [
      "Full Practice Co-Pilot — live runner, announcements, music",
      "Drill Vault (unlimited drills)",
      "Spotify integration + seamless transitions",
      "Practice planning + session history",
      "Scouting (up to 10 opponents)",
      "Up to 25 players",
      "1 head coach + 2 assistant accounts",
      "Founding rate locked for life",
    ],
    cta: "Claim Your Founding Rate",
  },
  {
    name:          "Program",
    tagline:       "Your whole department. One platform.",
    badge:         null,
    foundingPrice: 390,
    regularPrice:  790,
    highlight:     false,
    features: [
      "Everything in Coach",
      "Multiple sports under one account",
      "Up to 100 players",
      "Unlimited coaching staff accounts",
      "Strength & conditioning module",
      "Individual athlete plan views",
      "Player wellness tracking",
      "Priority support",
      "Founding rate locked for life",
    ],
    cta: "Start as a Founding Program",
  },
  {
    name:          "Elite",
    tagline:       "Collegiate programs and serious clubs.",
    badge:         null,
    foundingPrice: 990,
    regularPrice:  1990,
    highlight:     false,
    features: [
      "Everything in Program",
      "Unlimited players and staff",
      "Advanced drill analytics",
      "API access",
      "Custom branding",
      "Dedicated onboarding call",
      "SLA support",
      "Conference / multi-school licensing",
      "Founding rate locked for life",
    ],
    cta: "Start as a Founding Elite",
  },
];

const FAQS = [
  {
    q: "What exactly does the Practice Co-Pilot do?",
    a: "When you tap Run Practice, the Co-Pilot manages your entire floor automatically — it announces each drill by name through your device speaker, keeps a visible countdown timer, transitions your Spotify playlists between drills, and signals the end of each period. You plan it once; it handles every transition so you can focus on coaching.",
  },
  {
    q: "Do I need Spotify Premium for the music features?",
    a: "Yes. Seamless playlist transitions require a Spotify Premium account. All other features — practice planning, drill vault, scouting, S&C — work without it.",
  },
  {
    q: "Can my assistant coaches see the plan in real time?",
    a: "Yes. Staff accounts see the full plan and can collaborate live. Players get their own view showing their schedule for the day — no ability to edit.",
  },
  {
    q: "Is this only for basketball?",
    a: "The platform was built first for basketball, where the live runner is most natural — timed segments, music culture, fast transitions. The architecture is sport-agnostic. Volleyball, soccer, and football are on the roadmap.",
  },
  {
    q: "What happens to my founding price if you add new features?",
    a: "Nothing. Your founding price is locked for life as long as you stay subscribed. Every new feature we ship is included at no extra cost.",
  },
  {
    q: "Can I upgrade my tier later and keep founding pricing?",
    a: "Yes. You can upgrade anytime. As long as you upgrade before the founding window closes, you keep founding pricing on the new tier.",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function CellIcon({ value }: { value: boolean | "partial" | string }) {
  if (typeof value === "string" && value !== "partial") {
    return <span className="text-gray-300 text-xs font-mono">{value}</span>;
  }
  if (value === true)      return <Check size={16} className="text-blue-400 mx-auto" />;
  if (value === "partial") return <Minus size={14} className="text-gray-500 mx-auto" />;
  return <X size={14} className="text-gray-700 mx-auto" />;
}

function VideoModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Product walkthrough video"
    >
      <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-10 right-0 text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
        >
          <X size={16} /> Close
        </button>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-700">
          {VIDEO_EMBED ? (
            <iframe
              src={VIDEO_EMBED}
              title="The Program Suite — Product Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <Play size={28} className="text-blue-400 ml-1" />
              </div>
              <p className="text-white font-semibold text-lg">Walkthrough Video</p>
              <p className="text-gray-400 text-sm">Coming soon — check back shortly.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Nav({ onVideoOpen }: { onVideoOpen: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#0b0e14]/95 backdrop-blur border-b border-gray-800/80 shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Image src="/logo.png" alt="The Program Suite" width={140} height={36} className="h-9 w-auto object-contain" priority />

        <div className="hidden sm:flex items-center gap-6">
          <a href="#how-it-works" className="text-gray-400 hover:text-white text-sm transition-colors">How It Works</a>
          <a href="#features"     className="text-gray-400 hover:text-white text-sm transition-colors">Features</a>
          <a href="#pricing"      className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a>
          <button
            onClick={onVideoOpen}
            className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1.5"
          >
            <Play size={13} className="text-blue-400" /> See it live
          </button>
          <a
            href={APP_URL}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors"
          >
            Claim Founding Pricing <ChevronRight size={14} />
          </a>
        </div>

        <button
          className="sm:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <Menu size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden bg-[#0f1420] border-t border-gray-800 px-4 py-4 flex flex-col gap-3">
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-gray-300 text-sm">How It Works</a>
          <a href="#features"     onClick={() => setMenuOpen(false)} className="text-gray-300 text-sm">Features</a>
          <a href="#pricing"      onClick={() => setMenuOpen(false)} className="text-gray-300 text-sm">Pricing</a>
          <button
            onClick={() => { onVideoOpen(); setMenuOpen(false); }}
            className="text-gray-300 text-sm text-left flex items-center gap-2"
          >
            <Play size={13} className="text-blue-400" /> See it live
          </button>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors"
          >
            Claim Founding Pricing
          </a>
        </div>
      )}
    </nav>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-800 last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-white font-medium text-sm">{q}</span>
        <ChevronDown
          size={16}
          className={`text-gray-500 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <p className="text-gray-400 text-sm leading-relaxed pb-5 -mt-1">{a}</p>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <Nav onVideoOpen={() => setVideoOpen(true)} />
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}

      <main id="main-content">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
              Introducing: The Practice Co-Pilot
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Plan it once.
              <br />
              <span className="gradient-text">The floor runs itself.</span>
            </h1>

            {/* Subhead */}
            <p className="max-w-2xl text-gray-400 text-lg sm:text-xl leading-relaxed">
              The first system that automates your drill timers,{" "}
              <span className="text-gray-200 font-semibold">Spotify transitions</span>, and{" "}
              <span className="text-gray-200 font-semibold">voice announcements</span>.
              Keep your phone in your pocket and your eyes on your players.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs" role="list">
              {[
                { icon: Mic,    label: "Automated Announcements" },
                { icon: Music2, label: "Seamless Transitions"    },
                { icon: Timer,  label: "Hands-Free Timing"       },
                { icon: Volume2,label: "Auto Volume Control"     },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  role="listitem"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800/80 border border-gray-700 text-gray-400"
                >
                  <Icon size={11} className="text-blue-400" aria-hidden="true" /> {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <a
                href={APP_URL}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                Claim Founding Pricing — $149/yr
                <ChevronRight size={18} aria-hidden="true" />
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Play size={14} className="ml-0.5 text-blue-400" aria-hidden="true" />
                </span>
                See it in action
              </button>
            </div>

            <p className="text-gray-600 text-sm">Annual billing · Founding rate locked for life · No per-player fees</p>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
            <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
          </div>
        </section>

        {/* ── STAT BAR ──────────────────────────────────────────────────────── */}
        <section className="py-12 px-4 bg-[#0f1420] border-y border-gray-800/60" aria-label="Key statistics">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
            {[
              { stat: "12 min",   label: "lost to logistics every practice" },
              { stat: "~8 hrs",   label: "of coaching stolen per season"    },
              { stat: "1 tap",    label: "to give it all back"              },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <p className="text-3xl sm:text-4xl font-black text-white mb-1">{stat}</p>
                <p className="text-gray-500 text-xs sm:text-sm leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── THE VILLAIN ───────────────────────────────────────────────────── */}
        <section className="relative py-24 px-4 section-glow">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-4">
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">The Problem</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                You planned a great practice.
                <br className="hidden sm:block" />
                <span className="gradient-text">Then you spent it managing the clock.</span>
              </h2>
            </div>

            {/* The math */}
            <div className="max-w-2xl mx-auto mb-14">
              <div className="rounded-2xl bg-[#0f1420] border border-red-500/20 p-6 text-center">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every drill transition costs you{" "}
                  <strong className="text-white">30–90 seconds</strong> — yelling drill names,
                  fading music, watching the clock, losing the moment.
                  At <strong className="text-white">8+ transitions per practice</strong>, that&apos;s{" "}
                  <strong className="text-red-400 text-lg">12 minutes gone</strong> — every single practice.
                  Over a 40-practice season, that&apos;s{" "}
                  <strong className="text-white">8 full hours of coaching</strong> stolen by logistics.
                </p>
              </div>
            </div>

            {/* Before / After */}
            <div className="grid sm:grid-cols-3 gap-6">
              {BEFORE_AFTER.map(({ icon: Icon, before, after }) => (
                <div key={before} className="rounded-2xl bg-[#0f1420] border border-gray-800 overflow-hidden">
                  <div className="p-5 border-b border-gray-800/80">
                    <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">Before</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{before}</p>
                  </div>
                  <div className="p-5 bg-blue-500/5">
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">After</p>
                    <div className="flex items-start gap-2">
                      <Icon size={14} className="text-blue-400 mt-0.5 shrink-0" aria-hidden="true" />
                      <p className="text-gray-200 text-sm leading-relaxed">{after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE CO-PILOT FLOW ─────────────────────────────────────────────── */}
        <section id="how-it-works" className="py-24 px-4 bg-[#0f1420]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Three steps. Then just coach.
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Every other coaching platform stops at the plan.
                The Practice Co-Pilot is what happens when you hit <strong className="text-gray-200">Run</strong>.
              </p>
            </div>

            {/* Steps */}
            <div className="grid sm:grid-cols-3 gap-8 mb-16">
              {COPILOT_STEPS.map(({ step, icon: Icon, title, desc }) => (
                <div key={step} className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500/40 font-black text-4xl leading-none" aria-hidden="true">{step}</span>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-blue-400" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-black text-lg mb-1.5">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What happens at each transition */}
            <div className="rounded-2xl bg-[#0b0e14] border border-blue-500/20 p-8">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                At every drill transition — automatically
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {TRANSITION_SEQUENCE.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex flex-col gap-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Icon size={16} className="text-blue-400" aria-hidden="true" />
                    </div>
                    <p className="text-white text-sm font-semibold">{label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── THE MISSING PILLAR ────────────────────────────────────────────── */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-[#0f1420] border border-blue-500/20 p-8 sm:p-12 text-center">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">The Missing Piece</p>
              <blockquote className="text-white text-xl sm:text-2xl font-black leading-tight mb-6">
                You use <span className="text-blue-400">Hudl</span> for film.
                <br />
                You use <span className="text-blue-400">FastModel</span> for Xs and Os.
                <br />
                Use <span className="gradient-text">The Program Suite</span> to actually run the floor.
              </blockquote>
              <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
                Every coach has tools for the <em>before</em> and the <em>after</em>. Nobody built
                a tool for the <strong className="text-gray-200">during</strong> — the two hours
                where coaching actually happens. Until now.
              </p>
            </div>
          </div>
        </section>

        {/* ── UTILITY BELT ──────────────────────────────────────────────────── */}
        <section id="features" className="py-24 px-4 bg-[#0f1420]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Everything Else</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Three modules. One platform.
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                The Co-Pilot runs your practice floor. These three modules run everything around it.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {UTILITY_BELT.map(({ name, icon: Icon, tag, desc, items }) => (
                <div key={name} className="rounded-2xl bg-[#0b0e14] border border-gray-800 hover:border-blue-500/30 transition-colors p-7 flex flex-col gap-5">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-blue-400" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-white font-black text-base">{name}</p>
                        <p className="text-gray-500 text-xs">{tag}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <ul className="flex flex-col gap-2 mt-auto" role="list">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2" role="listitem">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                          <Check size={9} className="text-blue-400" aria-hidden="true" />
                        </div>
                        <span className="text-gray-400 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ───────────────────────────────────────────────── */}
        <section id="compare" className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">How We Compare</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Built for the floor, not the film room.
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Hudl is exceptional for film. FastModel is excellent for Xs and Os.
                Neither one steps onto the floor with you.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-800">
              <div className="grid grid-cols-4 bg-[#0f1420] border-b border-gray-800">
                <div className="px-4 py-4 col-span-1" />
                {[
                  { name: "The Program Suite", highlight: true  },
                  { name: "FastModel",          highlight: false },
                  { name: "Hudl",               highlight: false },
                ].map(({ name, highlight }) => (
                  <div key={name} className={`px-4 py-4 text-center ${highlight ? "bg-blue-500/10" : ""}`}>
                    <p className={`text-xs font-bold uppercase tracking-wider ${highlight ? "text-blue-400" : "text-gray-500"}`}>
                      {name}
                    </p>
                  </div>
                ))}
              </div>

              {COMPARE_ROWS.map(({ feature, us, fastmodel, hudl }, i) => (
                <div
                  key={feature}
                  className={`grid grid-cols-4 border-b border-gray-800/60 last:border-0 ${
                    i % 2 === 0 ? "bg-[#0f1420]" : "bg-[#0b0e14]"
                  }`}
                >
                  <div className="px-4 py-3.5 text-gray-300 text-sm">{feature}</div>
                  <div className="px-4 py-3.5 text-center bg-blue-500/5"><CellIcon value={us} /></div>
                  <div className="px-4 py-3.5 text-center"><CellIcon value={fastmodel} /></div>
                  <div className="px-4 py-3.5 text-center"><CellIcon value={hudl} /></div>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-xs text-center mt-4">
              — = partial or limited · ✗ = not available · Film review is intentionally not in our scope
            </p>
          </div>
        </section>

        {/* ── FOUNDER'S STORY ───────────────────────────────────────────────── */}
        <section className="relative py-24 px-4 overflow-hidden bg-[#0f1420]">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/8 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="text-center mb-12">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Why This Exists</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Built from the sideline.
                <br />Not a boardroom.
              </h2>
            </div>

            <div className="relative p-8 sm:p-12 rounded-2xl bg-[#0b0e14] border border-gray-800">
              <Quote size={56} className="absolute top-6 left-8 text-blue-500/12" aria-hidden="true" />
              <blockquote className="relative z-10">
                <p className="text-white text-2xl sm:text-3xl font-black leading-tight mb-6">
                  &ldquo;I spent 22 years coaching, but too much time managing data.
                  I built this so we can finally get back to the work that matters:
                  coaching our athletes, not managing a clock.&rdquo;
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Every tool I bought was best-in-class at one thing. But none of them talked to
                  each other — and none of them stepped onto the floor with me when practice started.
                  I kept my eyes on my phone when they should have been on my players.
                  This is the tool I wish I had when I started.
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center" aria-hidden="true">
                    <span className="text-blue-400 font-bold text-xs">TPS</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Founder, The Program Suite</p>
                    <p className="text-gray-500 text-xs">22 Years on the Sideline</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── PRICING ────────────────────────────────────────────────────────── */}
        <section id="pricing" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Founding Pricing</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Hire your Floor Manager.
                <br />
                <span className="gradient-text">$149 for the entire year.</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                We&apos;re in early access. Founding members lock in this rate for life —
                every feature we ship is included at no extra cost.
              </p>
            </div>

            <div className="flex items-center justify-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
                Founding prices are ~50% off regular pricing · Annual billing only
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-7 flex flex-col gap-6 transition-all ${
                    tier.highlight
                      ? "bg-[#0b0e14] card-glow border border-blue-500/40"
                      : "bg-[#0f1420] border border-gray-800"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className={tier.badge ? "pt-3" : ""}>
                    <h3 className="text-white font-bold text-lg mb-0.5">{tier.name}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{tier.tagline}</p>
                  </div>

                  <div>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-black text-white">${tier.foundingPrice}</span>
                      <div className="mb-1">
                        <span className="text-gray-600 text-sm line-through block">${tier.regularPrice}/yr</span>
                        <span className="text-gray-400 text-sm">/ year</span>
                      </div>
                    </div>
                    <p className="text-blue-400 text-xs font-medium mt-1.5">
                      Save ${tier.regularPrice - tier.foundingPrice} · Locked for life
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2.5 flex-1" role="list">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5" role="listitem">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0" aria-hidden="true">
                          <Check size={9} className="text-blue-400" />
                        </div>
                        <span className={`text-xs leading-relaxed ${
                          tier.highlight && f.startsWith("Full Practice Co-Pilot")
                            ? "text-blue-300 font-semibold"
                            : "text-gray-300"
                        }`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={APP_URL}
                    className={`block w-full text-center px-5 py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95 ${
                      tier.highlight
                        ? "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25"
                        : "bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 text-xs mt-8">
              All tiers include annual billing · Cancel any time in year one · No per-player fees · No hidden charges
            </p>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────────────── */}
        <section className="py-24 px-4 bg-[#0f1420]">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Questions</p>
              <h2 className="text-3xl font-black text-white">Common Questions</h2>
            </div>
            <div className="rounded-2xl bg-[#0b0e14] border border-gray-800 px-6 divide-y divide-gray-800">
              {FAQS.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
        <section className="relative py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/12 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-2xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
              Founding window is open
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Stop managing the clock.
              <br />
              <span className="gradient-text">Start coaching your athletes.</span>
            </h2>

            <p className="text-gray-400 text-lg mb-3">
              For <strong className="text-white">$149 a year</strong>, you get a Floor Manager
              that never misses a transition, never fumbles with Spotify,
              and never looks away from your players.
            </p>
            <p className="text-gray-500 text-sm mb-10">
              That&apos;s 41 cents a day to get back 8 hours of coaching every season.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={APP_URL}
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
              >
                Claim Founding Pricing — $149/yr
                <ChevronRight size={18} aria-hidden="true" />
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Play size={14} className="text-blue-400" aria-hidden="true" />
                See how it works first
              </button>
            </div>

            <p className="text-gray-600 text-xs mt-6">
              Founding rate locked for life · Cancel any time in year one · No per-player fees
            </p>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="bg-[#080b10] border-t border-gray-800/60 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-8">
            <div className="flex flex-col gap-3">
              <Image src="/logo.png" alt="The Program Suite" width={130} height={32} className="h-8 w-auto object-contain" />
              <p className="text-gray-600 text-xs max-w-xs leading-relaxed">
                The Practice Co-Pilot. Plan it once — the floor runs itself.
              </p>
            </div>
            <div className="flex gap-12 text-sm">
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Product</p>
                <a href="#how-it-works" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">How It Works</a>
                <a href="#features"     className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Features</a>
                <a href="#compare"      className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Compare</a>
                <a href="#pricing"      className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Pricing</a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Company</p>
                <a href={`${APP_URL}/login`}               className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Log In</a>
                <a href="mailto:hello@theprogramsuite.com" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Contact</a>
                <a href="/privacy"                          className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Privacy</a>
                <a href="/terms"                            className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Terms</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs">© {new Date().getFullYear()} The Program Suite. All rights reserved.</p>
            <p className="text-gray-700 text-xs">The Practice Co-Pilot for Winning Programs.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

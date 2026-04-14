"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ClipboardList, Dumbbell, Check, Play, X, ChevronRight, Quote,
  Menu, Timer, Music2, Mic, Minus, ChevronDown, BookOpen, Target,
  Volume2, Zap, Star, Shield, TrendingUp, AlertCircle,
} from "lucide-react";

// ── Configuration ─────────────────────────────────────────────────────────────
const APP_URL     = "https://tpscoach.com";
const VIDEO_EMBED = ""; // paste YouTube embed URL when ready
// ──────────────────────────────────────────────────────────────────────────────

// ── Data ──────────────────────────────────────────────────────────────────────

const TRIBE_BELIEFS = [
  "A well-run practice is a form of respect for your athletes' time.",
  "The gap between good programs and great ones is usually invisible — it's infrastructure.",
  "Systems don't limit creativity. They create the space for it.",
  "You're not looking for another tool. You're building a program that runs at a higher level.",
];

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
  { icon: Volume2, label: "Music fades smoothly",  desc: "The gym quiets down automatically. No fumbling. No abrupt cuts." },
  { icon: Mic,     label: "Drill announced",        desc: "Your speakers call the next drill — clearly, every single time."    },
  { icon: Music2,  label: "Next playlist begins",   desc: "The energy for the next drill builds back in automatically."        },
  { icon: Timer,   label: "Clock resets",           desc: "You never touched your phone. You never looked away from your players." },
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
    name:     "The Vault",
    icon:     BookOpen,
    tag:      "Practice & Planning",
    headline: "Your entire practice system. Searchable, shareable, reusable.",
    desc:     "Every drill you've ever run, organized by tag, intensity, and objective. Build practice plans from your library and share them with staff in real time.",
    items: [
      { label: "Drill library",         detail: "Tag by space, intensity, objective, and stat impact" },
      { label: "Practice plan builder", detail: "Drag-and-drop, reusable templates, and timed segments" },
      { label: "Session history",       detail: "Review what you ran, how long it took, what you skipped" },
      { label: "Staff collaboration",   detail: "Assistants see the plan live — no email threads"         },
    ],
  },
  {
    name:     "The Lab",
    icon:     Dumbbell,
    tag:      "Strength & Wellness",
    headline: "A strength program your athletes can actually see.",
    desc:     "Assign training programs by team or individual. Auto-calculate daily weights from recorded maxes. Surface readiness scores before practice ever starts.",
    items: [
      { label: "S&C program builder",      detail: "Assign by team, group, or individual athlete"        },
      { label: "Auto-calculated weights",  detail: "Daily loads computed from athlete's recorded maxes"  },
      { label: "Wellness check-ins",       detail: "Daily vibe scores surfaced before you hit the floor" },
      { label: "Athlete-facing dashboard", detail: "Players see their program on their own device"       },
    ],
  },
  {
    name:     "The War Room",
    icon:     Target,
    tag:      "Scouting & Comms",
    headline: "Know your opponent. Know your schedule. Know your team.",
    desc:     "Build opponent profiles and printable scouting reports. Keep schedule, announcements, and team messages unified — so nothing gets lost in a group chat.",
    items: [
      { label: "Scouting profiles",       detail: "Build opponent tendencies, personnel, and play notes"  },
      { label: "Printable reports",       detail: "Clean, shareable PDFs for your staff and players"     },
      { label: "Unified schedule",        detail: "Game, practice, and strength — one calendar"          },
      { label: "Team communications",     detail: "Announcements and messages inside the platform"       },
    ],
  },
];

const TESTIMONIALS = [
  {
    quote: "I ran a 90-minute practice without touching my phone once. My assistant asked me what changed. I said: the system.",
    name:  "Head Coach",
    role:  "High School Basketball",
    initials: "HC",
  },
  {
    quote: "I've had FastModel, Hudl, and every spreadsheet you can name. This is the only tool that actually stepped onto the floor with me. Everything else was just planning.",
    name:  "Assistant Coach",
    role:  "Division II Basketball",
    initials: "AC",
  },
  {
    quote: "We run four sports under one account. For the first time, every head coach is working from the same system. The visibility alone is worth it.",
    name:  "Athletic Director",
    role:  "Private High School",
    initials: "AD",
  },
];

const CHAOS_COSTS = [
  "12 min of transitions × 40 practices = 8 hours of coaching replaced by clock-watching",
  "3 separate tools = 3 logins, 3 invoices, zero integration",
  "Strength programs in spreadsheets your athletes can't access",
  "Practice plans emailed to staff who can't find them on the sideline",
  "Teachable moments lost because your eyes are on your phone, not your players",
];

const SUITE_RETURNS = [
  "8 hours of real coaching returned — every season",
  "One platform: practice, S&C, scouting, scheduling, comms",
  "Athletes see their program live on their own device",
  "Staff collaboration in real time, not in text threads",
  "Eyes on your athletes. Every transition. Every drill.",
];

const COMPARE_ROWS = [
  { feature: "Live Practice Runner",        us: true,  fastmodel: false, hudl: false    },
  { feature: "Automated Announcements",     us: true,  fastmodel: false, hudl: false    },
  { feature: "Seamless Music Transitions",  us: true,  fastmodel: false, hudl: false    },
  { feature: "Drill Vault / Library",       us: true,  fastmodel: true,  hudl: false    },
  { feature: "Practice Planning",           us: true,  fastmodel: true,  hudl: "partial" },
  { feature: "Scouting Reports",            us: true,  fastmodel: true,  hudl: true     },
  { feature: "Strength & Conditioning",     us: true,  fastmodel: false, hudl: false    },
  { feature: "Player Wellness Tracking",    us: true,  fastmodel: false, hudl: false    },
  { feature: "Athlete-Facing Views",        us: true,  fastmodel: false, hudl: "partial" },
  { feature: "Film Review",                 us: false, fastmodel: false, hudl: true     },
  { feature: "Single-team annual price",    us: "$149 founding", fastmodel: "$149–$999", hudl: "$1,000–$4,000" },
];

const TIERS = [
  {
    name:          "Coach",
    headline:      "Run Your Floor Hands-Free.",
    magicGift:     "The Practice Co-Pilot handles every drill transition — timers, announcements, and music — so you can put your phone away and coach.",
    badge:         "Best for Co-Pilot",
    foundingPrice: 149,
    regularPrice:  290,
    highlight:     true,
    features: [
      { text: "Full Practice Co-Pilot — live runner, announcements, music", star: true  },
      { text: "Drill Vault — unlimited drills",                              star: false },
      { text: "Spotify integration + seamless transitions",                 star: false },
      { text: "Practice planning + full session history",                   star: false },
      { text: "Scouting (up to 10 opponents)",                              star: false },
      { text: "Up to 25 players",                                           star: false },
      { text: "1 head coach + 2 assistant accounts",                        star: false },
      { text: "Founding rate locked for life",                              star: false },
    ],
    cta: "Claim Your Founding Rate",
  },
  {
    name:          "Program",
    headline:      "One Platform for Your Entire Department.",
    magicGift:     "Everything in Coach, plus strength programs, wellness tracking, and multi-sport management — all under a single dashboard.",
    badge:         null,
    foundingPrice: 390,
    regularPrice:  790,
    highlight:     false,
    features: [
      { text: "Everything in Coach",                         star: false },
      { text: "Multiple sports under one account",           star: false },
      { text: "Up to 100 players",                           star: false },
      { text: "Unlimited coaching staff accounts",           star: false },
      { text: "Strength & conditioning module",              star: false },
      { text: "Individual athlete plan views",               star: false },
      { text: "Player wellness tracking",                    star: false },
      { text: "Priority support",                            star: false },
      { text: "Founding rate locked for life",               star: false },
    ],
    cta: "Start as a Founding Program",
  },
  {
    name:          "Elite",
    headline:      "Built for Programs That Don't Compromise.",
    magicGift:     "The full platform with unlimited roster, custom branding, and a dedicated onboarding partner — for programs that operate like organizations.",
    badge:         null,
    foundingPrice: 990,
    regularPrice:  1990,
    highlight:     false,
    features: [
      { text: "Everything in Program",                       star: false },
      { text: "Unlimited players and staff",                 star: false },
      { text: "Advanced drill analytics",                    star: false },
      { text: "API access",                                  star: false },
      { text: "Custom branding",                             star: false },
      { text: "Dedicated onboarding call",                   star: false },
      { text: "SLA support",                                 star: false },
      { text: "Conference / multi-school licensing",         star: false },
      { text: "Founding rate locked for life",               star: false },
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
    a: "Yes. You can upgrade anytime before the founding window closes and keep founding pricing on the new tier.",
  },
];

// ── Components ────────────────────────────────────────────────────────────────

function CellIcon({ value }: { value: boolean | "partial" | string }) {
  if (typeof value === "string" && value !== "partial")
    return <span className="text-gray-300 text-xs font-mono">{value}</span>;
  if (value === true)      return <Check size={16} className="text-blue-400 mx-auto" />;
  if (value === "partial") return <Minus size={14} className="text-gray-500 mx-auto" />;
  return <X size={14} className="text-gray-700 mx-auto" />;
}

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
      ))}
    </div>
  );
}

/** Utility Belt card with progressive disclosure. */
function ModuleCard({
  name, icon: Icon, tag, headline, desc, items,
}: (typeof UTILITY_BELT)[number]) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-[#0b0e14] border border-gray-800 hover:border-blue-500/30 transition-colors overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
            <Icon size={18} className="text-blue-400" aria-hidden="true" />
          </div>
          <div>
            <p className="text-white font-black text-base leading-none">{name}</p>
            <p className="text-gray-500 text-xs mt-0.5">{tag}</p>
          </div>
        </div>

        <h3 className="text-white font-bold text-lg leading-snug mb-3">{headline}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="mt-5 flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-xs font-semibold transition-colors"
        >
          {open ? "Hide details" : "See what's inside"}
          <ChevronDown
            size={13}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-800 bg-[#0f1420] px-8 py-5">
          <ul className="flex flex-col gap-3" role="list">
            {items.map(({ label, detail }) => (
              <li key={label} className="flex items-start gap-3" role="listitem">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0" aria-hidden="true">
                  <Check size={9} className="text-blue-400" />
                </div>
                <div>
                  <span className="text-gray-200 text-xs font-semibold">{label}</span>
                  <span className="text-gray-500 text-xs"> — {detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
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
          <X size={16} aria-hidden="true" /> Close
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
                <Play size={28} className="text-blue-400 ml-1" aria-hidden="true" />
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
            <Play size={13} className="text-blue-400" aria-hidden="true" /> See it live
          </button>
          <a
            href={APP_URL}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
          >
            Claim Founding Pricing <ChevronRight size={14} aria-hidden="true" />
          </a>
        </div>

        <button
          className="sm:hidden text-gray-400 hover:text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden bg-[#0f1420] border-t border-gray-800 px-4 py-5 flex flex-col gap-4">
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-gray-300 text-sm">How It Works</a>
          <a href="#features"     onClick={() => setMenuOpen(false)} className="text-gray-300 text-sm">Features</a>
          <a href="#pricing"      onClick={() => setMenuOpen(false)} className="text-gray-300 text-sm">Pricing</a>
          <button
            onClick={() => { onVideoOpen(); setMenuOpen(false); }}
            className="text-gray-300 text-sm text-left flex items-center gap-2"
          >
            <Play size={13} className="text-blue-400" aria-hidden="true" /> See it live
          </button>
          {/* Full-width thumb-zone CTA on mobile */}
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors mt-1"
          >
            Claim Founding Pricing — $149/yr
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
      {open && <p className="text-gray-400 text-sm leading-relaxed pb-5 -mt-1">{a}</p>}
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

        {/* ── HERO ── Identity-first, not product-first ─────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-7">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
              For coaches who invest in their infrastructure
            </div>

            {/* Anchor headline — readable in a 2-second scan */}
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-black tracking-tight text-white leading-[1.04]">
              Plan it once.
              <br />
              <span className="gradient-text">The floor runs itself.</span>
            </h1>

            {/* Identity-first subhead */}
            <p className="max-w-2xl text-gray-400 text-lg sm:text-xl leading-relaxed">
              The Practice Co-Pilot is built for the coach who refuses to let logistics
              get between them and their athletes.{" "}
              <strong className="text-gray-200 font-semibold">Automated timers, seamless music transitions,
              and voice announcements</strong> — so your phone stays in your pocket
              and your focus stays on the floor.
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

            {/* CTAs — thumb-zone sized, full-width on mobile */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-1 w-full sm:w-auto">
              <a
                href={APP_URL}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold transition-all hover:shadow-xl hover:shadow-blue-500/25 active:scale-95"
              >
                Claim Founding Pricing — $149/yr
                <ChevronRight size={18} aria-hidden="true" />
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors group"
              >
                <span className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
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

        {/* ── TRIBE — Who This Is For ───────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#0f1420] border-y border-gray-800/60">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Who This Is For</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-10">
              Not every coach is ready for this.
              <br />
              <span className="text-gray-400 font-medium">You might be, if you recognize yourself here.</span>
            </h2>

            <ul className="flex flex-col gap-4 text-left max-w-xl mx-auto" role="list">
              {TRIBE_BELIEFS.map((belief) => (
                <li key={belief} className="flex items-start gap-3" role="listitem">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0" aria-hidden="true">
                    <Check size={10} className="text-blue-400" />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{belief}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-sm mt-10 italic">
              If that&apos;s you — this was built for you. If it&apos;s not — that&apos;s okay too.
            </p>
          </div>
        </section>

        {/* ── STAT BAR ──────────────────────────────────────────────────────── */}
        <section className="py-14 px-4" aria-label="Key statistics">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center divide-x divide-gray-800">
            {[
              { stat: "12 min",  label: "lost to logistics every practice" },
              { stat: "~8 hrs",  label: "of coaching stolen per season"    },
              { stat: "1 tap",   label: "to give it all back"              },
            ].map(({ stat, label }) => (
              <div key={stat} className="px-4">
                <p className="text-3xl sm:text-4xl font-black text-white mb-1.5">{stat}</p>
                <p className="text-gray-500 text-xs sm:text-sm leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── THE VILLAIN ───────────────────────────────────────────────────── */}
        <section className="relative py-28 px-4 bg-[#0f1420] section-glow">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-5">
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">The Real Problem</p>
              {/* Bold anchor — readable in isolation */}
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-5 leading-tight">
                You planned a great practice.
                <br />
                <span className="gradient-text">Then you spent it managing the clock.</span>
              </h2>
            </div>

            <div className="max-w-2xl mx-auto mb-16">
              <div className="rounded-2xl bg-[#0b0e14] border border-red-500/20 p-6 text-center">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every drill transition costs you{" "}
                  <strong className="text-white">30–90 seconds</strong> — yelling drill names,
                  fading music, watching the clock, losing the moment.
                  At <strong className="text-white">8+ transitions per practice</strong>, that&apos;s{" "}
                  <strong className="text-red-400 text-xl">12 minutes gone</strong> — every single day.
                  Over a 40-practice season, that&apos;s{" "}
                  <strong className="text-white">8 full hours of coaching</strong> stolen by logistics.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {BEFORE_AFTER.map(({ icon: Icon, before, after }) => (
                <div key={before} className="rounded-2xl bg-[#0b0e14] border border-gray-800 overflow-hidden">
                  <div className="p-6 border-b border-gray-800/80">
                    <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">Before</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{before}</p>
                  </div>
                  <div className="p-6 bg-blue-500/5">
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

        {/* ── CO-PILOT FLOW ─────────────────────────────────────────────────── */}
        <section id="how-it-works" className="py-28 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">How It Works</p>
              {/* Bold anchor */}
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-5 leading-tight">
                Three steps. Then just coach.
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Every other coaching platform stops at the plan.
                The Co-Pilot is what happens when you hit <strong className="text-gray-200">Run</strong>.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-10 mb-16">
              {COPILOT_STEPS.map(({ step, icon: Icon, title, desc }) => (
                <div key={step} className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500/35 font-black text-5xl leading-none tabular-nums" aria-hidden="true">{step}</span>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-blue-400" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-[#0f1420] border border-blue-500/20 p-8 sm:p-10">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
                At every drill transition — automatically
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {TRANSITION_SEQUENCE.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex flex-col gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Icon size={16} className="text-blue-400" aria-hidden="true" />
                    </div>
                    <p className="text-white text-sm font-bold">{label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── THE MISSING PILLAR ────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#0f1420]">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-[#0b0e14] border border-blue-500/20 p-8 sm:p-12 text-center">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">The Missing Piece</p>
              {/* This is a standalone bold anchor */}
              <blockquote className="text-white text-2xl sm:text-3xl font-black leading-snug mb-6">
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

        {/* ── UTILITY BELT — with progressive disclosure ────────────────────── */}
        <section id="features" className="py-28 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Everything Else</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Three modules. One platform.</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                The Co-Pilot runs your practice floor. These three modules run everything around it.
                Tap <strong className="text-gray-300">See what&apos;s inside</strong> to explore each one.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {UTILITY_BELT.map((module) => (
                <ModuleCard key={module.name} {...module} />
              ))}
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF — High-status, outcome-focused ───────────────────── */}
        <section className="py-28 px-4 bg-[#0f1420]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">From the Field</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Coaches describe what changed.
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {TESTIMONIALS.map(({ quote, name, role, initials }) => (
                <div key={name} className="rounded-2xl bg-[#0b0e14] border border-gray-800 p-7 flex flex-col gap-5">
                  <StarRow />
                  <blockquote>
                    <p className="text-gray-200 text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
                  </blockquote>
                  <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-800">
                    <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0" aria-hidden="true">
                      <span className="text-blue-400 font-bold text-xs">{initials}</span>
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">{name}</p>
                      <p className="text-gray-500 text-xs">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 text-xs mt-6">
              * Early access participants. Testimonials reflect individual experience.
            </p>
          </div>
        </section>

        {/* ── COST OF CHAOS — Logical justification block ───────────────────── */}
        <section className="py-28 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">The Real Math</p>
              {/* Bold anchor */}
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                The old way has a price too.
                <br />
                <span className="text-gray-400 font-medium text-2xl">You&apos;re just not seeing the invoice.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Left: cost of chaos */}
              <div className="rounded-2xl bg-[#0f1420] border border-red-500/20 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <AlertCircle size={16} className="text-red-400" aria-hidden="true" />
                  <p className="text-red-400 text-xs font-bold uppercase tracking-widest">Cost of the Old Way</p>
                </div>
                <ul className="flex flex-col gap-4" role="list">
                  {CHAOS_COSTS.map((cost) => (
                    <li key={cost} className="flex items-start gap-3" role="listitem">
                      <X size={14} className="text-red-500 mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-gray-400 text-sm leading-relaxed">{cost}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 pt-5 border-t border-red-500/15">
                  <p className="text-red-400 text-xs font-bold uppercase tracking-wider">Hidden cost</p>
                  <p className="text-white font-black text-lg mt-1">Burnout, inconsistency, lost momentum.</p>
                </div>
              </div>

              {/* Right: return on $149 */}
              <div className="rounded-2xl bg-blue-500/5 border border-blue-500/25 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp size={16} className="text-blue-400" aria-hidden="true" />
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Return on $149</p>
                </div>
                <ul className="flex flex-col gap-4" role="list">
                  {SUITE_RETURNS.map((ret) => (
                    <li key={ret} className="flex items-start gap-3" role="listitem">
                      <Check size={14} className="text-blue-400 mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-gray-200 text-sm leading-relaxed">{ret}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 pt-5 border-t border-blue-500/20">
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-wider">The math</p>
                  <p className="text-white font-black text-lg mt-1">
                    $149/yr = <strong className="text-blue-400">41¢ a day.</strong>
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Less than a gas station coffee. More than a full-time assistant coach.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ───────────────────────────────────────────────── */}
        <section id="compare" className="py-28 px-4 bg-[#0f1420]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
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
              <div className="grid grid-cols-4 bg-[#0b0e14] border-b border-gray-800">
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

        {/* ── RISK REVERSAL — Guarantee ─────────────────────────────────────── */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-[#0f1420] border border-green-500/20 p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  <Shield size={24} className="text-green-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-1">Risk Reversal</p>
                  <h2 className="text-white font-black text-2xl sm:text-3xl leading-tight">
                    Try it. If it doesn&apos;t change your floor, we&apos;ll refund every cent.
                  </h2>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We&apos;re confident enough in the Co-Pilot to offer a simple guarantee:{" "}
                <strong className="text-gray-200">if the system doesn&apos;t change the way you run
                your practice within 30 days, cancel for a full refund</strong> — no questions,
                no friction, no hoops to jump through. We&apos;re not interested in keeping
                subscribers who aren&apos;t winning.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 text-center">
                {[
                  { stat: "30 days",     label: "risk-free trial"              },
                  { stat: "Full refund", label: "if it's not right for you"    },
                  { stat: "No friction", label: "cancel in two clicks"         },
                ].map(({ stat, label }) => (
                  <div key={stat} className="rounded-xl bg-[#0b0e14] border border-gray-800 p-4">
                    <p className="text-white font-black text-lg">{stat}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FOUNDER STORY ─────────────────────────────────────────────────── */}
        <section className="relative py-28 px-4 overflow-hidden bg-[#0f1420]">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/8 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="text-center mb-14">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Why This Exists</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Built from the sideline.
                <br />Not a boardroom.
              </h2>
            </div>

            <div className="relative p-8 sm:p-12 rounded-2xl bg-[#0b0e14] border border-gray-800">
              <Quote size={56} className="absolute top-6 left-8 text-blue-500/10" aria-hidden="true" />
              <blockquote className="relative z-10">
                {/* Bold anchor quote — readable standalone */}
                <p className="text-white text-2xl sm:text-3xl font-black leading-tight mb-6">
                  &ldquo;I spent 22 years coaching, but too much time managing data.
                  I built this so we can finally get back to the work that matters:
                  coaching our athletes, not managing a clock.&rdquo;
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Every tool I bought was best-in-class at one thing. But none of them talked
                  to each other — and none of them stepped onto the floor with me when practice
                  started. I kept my eyes on my phone when they should have been on my players.
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

        {/* ── PRICING — Layer-Cake layout ────────────────────────────────────── */}
        <section id="pricing" className="py-28 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Founding Pricing</p>
              {/* Bold anchor */}
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

            <div className="flex items-center justify-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
                Founding prices are ~50% off regular pricing · Annual billing only
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl flex flex-col overflow-hidden transition-all ${
                    tier.highlight
                      ? "card-glow border border-blue-500/40 bg-[#0b0e14]"
                      : "border border-gray-800 bg-[#0f1420]"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  {/* Layer 1: Benefit headline */}
                  <div className={`px-7 pt-8 pb-5 border-b border-gray-800/60 ${tier.badge ? "mt-5" : ""}`}>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{tier.name}</p>
                    <h3 className="text-white font-black text-xl leading-tight">{tier.headline}</h3>
                  </div>

                  {/* Layer 2: Magic Gift */}
                  <div className="px-7 py-5 border-b border-gray-800/60 bg-blue-500/5">
                    <p className="text-gray-300 text-sm leading-relaxed">{tier.magicGift}</p>
                    <div className="mt-4 flex items-end gap-2">
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

                  {/* Layer 3: The Goods */}
                  <div className="px-7 py-6 flex-1 flex flex-col gap-6">
                    <ul className="flex flex-col gap-2.5 flex-1" role="list">
                      {tier.features.map(({ text, star }) => (
                        <li key={text} className="flex items-start gap-2.5" role="listitem">
                          <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            star
                              ? "bg-blue-500/25 border border-blue-400/50"
                              : "bg-blue-500/15 border border-blue-500/30"
                          }`} aria-hidden="true">
                            <Check size={9} className="text-blue-400" />
                          </div>
                          <span className={`text-xs leading-relaxed ${
                            star ? "text-blue-300 font-semibold" : "text-gray-300"
                          }`}>{text}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA — thumb-zone sized */}
                    <a
                      href={APP_URL}
                      className={`block w-full text-center px-5 py-4 rounded-xl font-bold text-sm transition-all active:scale-95 ${
                        tier.highlight
                          ? "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25"
                          : "bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white"
                      }`}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 text-xs mt-8">
              All tiers include annual billing · 30-day money-back guarantee · No per-player fees · No hidden charges
            </p>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────────────── */}
        <section className="py-28 px-4 bg-[#0f1420]">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-14">
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

        {/* ── FINAL CTA — Tribal framing ─────────────────────────────────────── */}
        <section className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/12 rounded-full blur-[120px]" />
          </div>
          <div className="relative max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
              Founding window is open
            </div>

            {/* Final bold anchor */}
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
              Stop managing the clock.
              <br />
              <span className="gradient-text">Start coaching your athletes.</span>
            </h2>

            <p className="text-gray-400 text-lg mb-2">
              For <strong className="text-white">$149 a year</strong>, you get a Floor Manager
              that never misses a transition, never fumbles with Spotify,
              and never looks away from your players.
            </p>
            <p className="text-gray-500 text-sm mb-10">
              41 cents a day. 8 hours of coaching back. Zero transitions missed — ever.
            </p>

            {/* Primary CTA — full-width on mobile for thumb-zone */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={APP_URL}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
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
              30-day money-back guarantee · Founding rate locked for life · Cancel any time in year one
            </p>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="bg-[#080b10] border-t border-gray-800/60 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-10 mb-10">
            <div className="flex flex-col gap-3 max-w-xs">
              <Image src="/logo.png" alt="The Program Suite" width={130} height={32} className="h-8 w-auto object-contain" />
              <p className="text-gray-600 text-xs leading-relaxed">
                The Practice Co-Pilot. Built by a coach, for coaches who believe systems create freedom.
              </p>
            </div>
            <div className="flex gap-14 text-sm">
              <div className="flex flex-col gap-2.5">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Product</p>
                <a href="#how-it-works" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">How It Works</a>
                <a href="#features"     className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Features</a>
                <a href="#compare"      className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Compare</a>
                <a href="#pricing"      className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Pricing</a>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Company</p>
                <a href={`${APP_URL}/login`}               className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Log In</a>
                <a href="mailto:hello@theprogramsuite.com" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Contact</a>
                <a href="/privacy"                          className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Privacy</a>
                <a href="/terms"                            className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Terms</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs">© {new Date().getFullYear()} The Program Suite. All rights reserved.</p>
            <p className="text-gray-700 text-xs">For coaches who invest in their infrastructure.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

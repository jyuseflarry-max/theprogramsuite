"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ClipboardList, Dumbbell, Calendar, Users, Package, MessageSquare,
  Check, Play, X, ChevronRight, Quote, Menu, Timer, Music2, Mic,
  Zap, BarChart2, Activity, Volume2, Minus, ChevronDown,
} from "lucide-react";

// ── Configuration ─────────────────────────────────────────────────────────────
const APP_URL       = "https://tpscoach.com";
const VIDEO_EMBED   = ""; // paste YouTube embed URL when ready
// ──────────────────────────────────────────────────────────────────────────────

// ── Data ──────────────────────────────────────────────────────────────────────

const RUNNER_STEPS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Build your practice",
    desc: "Drag drills from your Vault into a timed plan. Set durations, assign music, add coaching notes. Takes 10 minutes.",
  },
  {
    icon: Play,
    step: "02",
    title: "Hit Run Practice",
    desc: "One button. The timer starts, the first drill is announced, and your music fades in at practice volume.",
  },
  {
    icon: Zap,
    step: "03",
    title: "Coach — not manage",
    desc: "At every transition, music fades, the next drill is called out, and the clock resets. Automatically. You never touch your phone.",
  },
];

const FEATURES = [
  {
    icon: Timer,
    title: "Live Practice Runner",
    desc: "The first platform with a real-time floor manager. Drill timer, voice announcements, and period tracking — all running hands-free.",
    highlight: true,
  },
  {
    icon: Music2,
    title: "Automatic Music Transitions",
    desc: "Spotify playlists assigned per drill. Music crossfades and loops between drills. Volume ducks during announcements, then fades back in.",
    highlight: true,
  },
  {
    icon: ClipboardList,
    title: "Practice Planning Suite",
    desc: "Build, save, and reuse drill-level practice scripts. Your entire library in one place — shareable with staff in real time.",
  },
  {
    icon: Package,
    title: "Drill Vault",
    desc: "A searchable library of every drill you've ever run. Tagged by intensity, space, objectives, and stat impact. Your playbook, organized.",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    desc: "Assign programs by team or athlete, track maxes automatically, and generate daily weights. No more spreadsheet gymnastics.",
  },
  {
    icon: Activity,
    title: "Player Wellness Tracking",
    desc: "Daily vibe checks surface readiness scores before practice. Know who's dragging before they step on the floor.",
  },
  {
    icon: Users,
    title: "Player & Roster Database",
    desc: "Full roster management with attendance history, readiness trends, and athlete-facing plan views — all in one dashboard.",
  },
  {
    icon: BarChart2,
    title: "Scouting & Reports",
    desc: "Build opponent profiles, generate printable scouting reports, and track team tendencies across your full schedule.",
  },
  {
    icon: Calendar,
    title: "Live-Sync Scheduling",
    desc: "Game schedule, strength calendar, and practice schedule unified. Players see updates the moment you make them.",
  },
  {
    icon: MessageSquare,
    title: "Team Communications",
    desc: "Message players, parents, and staff from the same platform your whole program already lives in. No more lost group texts.",
  },
];

const COMPARE_ROWS = [
  { feature: "Live Practice Runner",        us: true,  fastmodel: false, hudl: false  },
  { feature: "Auto Music Transitions",      us: true,  fastmodel: false, hudl: false  },
  { feature: "Drill Voice Announcements",   us: true,  fastmodel: false, hudl: false  },
  { feature: "Drill Vault / Library",       us: true,  fastmodel: true,  hudl: false  },
  { feature: "Practice Planning",           us: true,  fastmodel: true,  hudl: "partial" },
  { feature: "Scouting Reports",            us: true,  fastmodel: true,  hudl: true   },
  { feature: "Strength & Conditioning",     us: true,  fastmodel: false, hudl: false  },
  { feature: "Player Wellness Tracking",    us: true,  fastmodel: false, hudl: false  },
  { feature: "Athlete-Facing Views",        us: true,  fastmodel: false, hudl: "partial" },
  { feature: "Film Review",                 us: false, fastmodel: false, hudl: true   },
  { feature: "Single-team annual price",    us: "$149 founding",  fastmodel: "$149–$999", hudl: "$1,000–$4,000" },
];

const TIERS = [
  {
    name: "Coach",
    tagline: "One program. Everything included.",
    foundingPrice: 149,
    regularPrice: 290,
    period: "year",
    badge: null,
    features: [
      "Full practice planner + live runner",
      "Drill Vault (unlimited drills)",
      "Spotify integration + audio ducking",
      "Scouting (up to 10 opponents)",
      "Up to 25 players",
      "1 head coach + 2 assistant accounts",
      "Lock in founding rate for life",
    ],
    cta: "Start as a Founding Coach",
    highlight: false,
  },
  {
    name: "Program",
    tagline: "Your whole department. One platform.",
    foundingPrice: 390,
    regularPrice: 790,
    period: "year",
    badge: "Most Popular",
    features: [
      "Everything in Coach",
      "Multiple sports under one account",
      "Up to 100 players",
      "Unlimited coaching staff accounts",
      "Strength & conditioning module",
      "Individual athlete plan views",
      "Player vibe check + wellness tracking",
      "Priority support",
      "Lock in founding rate for life",
    ],
    cta: "Start as a Founding Program",
    highlight: true,
  },
  {
    name: "Elite",
    tagline: "Collegiate programs and serious clubs.",
    foundingPrice: 990,
    regularPrice: 1990,
    period: "year",
    badge: null,
    features: [
      "Everything in Program",
      "Unlimited players and staff",
      "Advanced drill analytics",
      "API access",
      "Custom branding",
      "Dedicated onboarding call",
      "SLA support",
      "Conference / multi-school licensing",
      "Lock in founding rate for life",
    ],
    cta: "Start as a Founding Elite",
    highlight: false,
  },
];

const FAQS = [
  {
    q: "What is the live practice runner?",
    a: "When you hit Run Practice, the app manages the floor automatically — it announces each drill name through your device speaker, keeps a visible countdown clock, fades your Spotify music between drills, and signals the end of each period. You plan it once; the app manages every transition so you stay focused on coaching.",
  },
  {
    q: "Do I need Spotify Premium for the music features?",
    a: "Yes, the audio ducking and automatic playlist transitions require a Spotify Premium account. The rest of the platform — practice planning, drill vault, scouting, S&C — works without it.",
  },
  {
    q: "Can my assistant coaches and players see the same practice plan?",
    a: "Yes. Staff accounts see the full plan and can collaborate in real time. Players get their own view showing their individual schedule and plan for the day — no ability to edit.",
  },
  {
    q: "Is this only for basketball?",
    a: "The platform was built first for basketball, where the live runner is most natural (timed segments, music culture, fast transitions). But the architecture is sport-agnostic — volleyball, soccer, and football coaches are all on the roadmap.",
  },
  {
    q: "What happens to my founding price if you add new features?",
    a: "Nothing. Your founding price is locked for as long as you stay subscribed. When we add new features — and we will — they're included at no additional cost.",
  },
  {
    q: "Can I switch tiers later?",
    a: "Yes. You can upgrade anytime. If you upgrade from a founding Coach plan to a founding Program plan, you keep founding pricing on the new tier as long as you upgrade before the founding window closes.",
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
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
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
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      scrolled ? "bg-[#0b0e14]/95 backdrop-blur border-b border-gray-800/80 shadow-xl" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Image src="/logo.png" alt="The Program Suite" width={140} height={36} className="h-9 w-auto object-contain" priority />

        <div className="hidden sm:flex items-center gap-6">
          <a href="#features"  className="text-gray-400 hover:text-white text-sm transition-colors">Features</a>
          <a href="#compare"   className="text-gray-400 hover:text-white text-sm transition-colors">Compare</a>
          <a href="#pricing"   className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a>
          <button
            onClick={onVideoOpen}
            className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1.5"
          >
            <Play size={13} className="text-blue-400" /> See it in action
          </button>
          <a
            href={APP_URL}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            Get Started <ChevronRight size={14} />
          </a>
        </div>

        <button
          className="sm:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden bg-[#0f1420] border-t border-gray-800 px-4 py-4 flex flex-col gap-3">
          <a href="#features" onClick={() => setMenuOpen(false)} className="text-gray-300 text-sm">Features</a>
          <a href="#compare"  onClick={() => setMenuOpen(false)} className="text-gray-300 text-sm">Compare</a>
          <a href="#pricing"  onClick={() => setMenuOpen(false)} className="text-gray-300 text-sm">Pricing</a>
          <button
            onClick={() => { onVideoOpen(); setMenuOpen(false); }}
            className="text-gray-300 text-sm text-left flex items-center gap-2"
          >
            <Play size={13} className="text-blue-400" /> See it in action
          </button>
          <a
            href={APP_URL}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            Get Started — Founding Pricing Available
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
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-white font-medium text-sm">{q}</span>
        <ChevronDown
          size={16}
          className={`text-gray-500 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[130px]" />
          </div>

          <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Now in Early Access · Founding Pricing Available
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Plan it once.
              <br />
              <span className="gradient-text">The floor runs itself.</span>
            </h1>

            <p className="max-w-2xl text-gray-400 text-lg sm:text-xl leading-relaxed">
              The first coaching platform with a{" "}
              <span className="text-gray-200 font-semibold">live practice runner</span> — drill
              announcements, automatic Spotify transitions, and hands-free timing.
              So you can coach instead of manage.
            </p>

            {/* Mini feature badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
              {[
                { icon: Mic,    label: "Drill Voice Announcements" },
                { icon: Music2, label: "Auto Music Transitions" },
                { icon: Timer,  label: "Hands-Free Timer" },
                { icon: Volume2,label: "Auto Volume Ducking" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800/80 border border-gray-700 text-gray-400">
                  <Icon size={11} className="text-blue-400" /> {label}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <a
                href={APP_URL}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                Get Started — Founding Pricing
                <ChevronRight size={18} />
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Play size={14} className="ml-0.5 text-blue-400" />
                </span>
                See How It Works
              </button>
            </div>

            <p className="text-gray-600 text-sm">
              Annual billing · Founding rate locked for life · No per-player fees
            </p>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
          </div>
        </section>

        {/* ── THE PROBLEM ───────────────────────────────────────────────────── */}
        <section className="relative py-24 px-4 section-glow">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">The Problem</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                You plan a great practice.
                <br className="hidden sm:block" />
                <span className="gradient-text">Then you manage it instead of coaching it.</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Every drill transition costs you 30–90 seconds — yelling across the gym,
                managing your phone, watching the clock. At 8 transitions, that's 12 minutes
                of every practice lost to logistics.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  before: "You yell a drill name across a noisy gym and half the team doesn't hear it",
                  after:  "The app announces the next drill automatically — clearly, every time",
                  icon: Mic,
                },
                {
                  before: "You manually fade music, unlock your phone, switch playlists mid-drill",
                  after:  "Music crossfades automatically between drills. Volume ducks during announcements.",
                  icon: Music2,
                },
                {
                  before: "Your practice plan is in a folder. Your S&C is in a spreadsheet. Your players can't access either.",
                  after:  "Every drill, every lift, every player — in one real-time platform",
                  icon: ClipboardList,
                },
              ].map(({ before, after, icon: Icon }) => (
                <div key={before} className="bg-[#0f1420] rounded-2xl border border-gray-800 overflow-hidden">
                  <div className="p-5 border-b border-gray-800/80">
                    <p className="text-xs font-mono text-red-400 uppercase tracking-widest mb-2">Before</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{before}</p>
                  </div>
                  <div className="p-5 bg-blue-500/5">
                    <p className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">After</p>
                    <div className="flex items-start gap-2">
                      <Icon size={14} className="text-blue-400 mt-0.5 shrink-0" />
                      <p className="text-gray-200 text-sm leading-relaxed">{after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIVE RUNNER SPOTLIGHT ──────────────────────────────────────────── */}
        <section className="py-24 px-4 bg-[#0f1420]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">The Breakthrough Feature</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                The Live Practice Runner
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every other coaching platform stops at the plan. We built what comes next.
                The first platform that actually manages the practice session itself —
                so your phone stays in your pocket where it belongs.
              </p>
            </div>

            {/* Steps */}
            <div className="grid sm:grid-cols-3 gap-8 mb-16">
              {RUNNER_STEPS.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500/40 font-black text-4xl leading-none">{step}</span>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1.5">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What happens at each transition */}
            <div className="rounded-2xl bg-[#0b0e14] border border-blue-500/20 p-8">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">At every drill transition</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Volume2, label: "Music fades to 10%",    desc: "Smooth 600ms ramp so the gym goes quiet" },
                  { icon: Mic,     label: "Drill name announced",  desc: "Clear voice reads the next drill name" },
                  { icon: Music2,  label: "New playlist starts",   desc: "Drill-specific Spotify URI begins playing" },
                  { icon: Volume2, label: "Music fades back up",   desc: "Ramps to your practice volume as speech ends" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex flex-col gap-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Icon size={16} className="text-blue-400" />
                    </div>
                    <p className="text-white text-sm font-semibold">{label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FULL FEATURE GRID ──────────────────────────────────────────────── */}
        <section id="features" className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Everything In One Place</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                One Platform. Every Tool Your Program Needs.
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Replace three separate subscriptions with a single professional platform that
                actually knows how each piece connects to the others.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map(({ icon: Icon, title, desc, highlight }) => (
                <div
                  key={title}
                  className={`group p-6 rounded-2xl border transition-all duration-300 ${
                    highlight
                      ? "bg-blue-500/8 border-blue-500/30 hover:border-blue-500/60"
                      : "bg-[#0f1420] border-gray-800 hover:border-blue-500/30 hover:bg-blue-500/5"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    highlight
                      ? "bg-blue-500/20 border border-blue-500/40 group-hover:bg-blue-500/30"
                      : "bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20"
                  }`}>
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div className="flex items-start gap-2 mb-2">
                    <h3 className="text-white font-bold">{title}</h3>
                    {highlight && (
                      <span className="shrink-0 text-[9px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/15 border border-blue-500/30 px-1.5 py-0.5 rounded mt-0.5">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ───────────────────────────────────────────────── */}
        <section id="compare" className="py-24 px-4 bg-[#0f1420]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">How We Compare</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Built for the gym floor, not the film room.
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Hudl is exceptional for film. FastModel is excellent for play diagramming.
                Neither one runs your practice for you.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-800">
              {/* Header */}
              <div className="grid grid-cols-4 bg-[#0b0e14] border-b border-gray-800">
                <div className="px-4 py-4 col-span-1" />
                {[
                  { name: "The Program Suite", highlight: true },
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

              {/* Rows */}
              {COMPARE_ROWS.map(({ feature, us, fastmodel, hudl }, i) => (
                <div
                  key={feature}
                  className={`grid grid-cols-4 border-b border-gray-800/60 last:border-0 ${
                    i % 2 === 0 ? "bg-[#0f1420]" : "bg-[#0b0e14]"
                  }`}
                >
                  <div className="px-4 py-3.5 text-gray-300 text-sm">{feature}</div>
                  <div className="px-4 py-3.5 text-center bg-blue-500/5">
                    <CellIcon value={us} />
                  </div>
                  <div className="px-4 py-3.5 text-center">
                    <CellIcon value={fastmodel} />
                  </div>
                  <div className="px-4 py-3.5 text-center">
                    <CellIcon value={hudl} />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-xs text-center mt-4">
              — = partial or limited feature · ✗ = not available · Film review intentionally not in our roadmap
            </p>
          </div>
        </section>

        {/* ── FOUNDER STORY ──────────────────────────────────────────────────── */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/8 rounded-full blur-[100px]" />
          </div>
          <div className="max-w-3xl mx-auto relative">
            <div className="text-center mb-12">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Why This Exists</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Built From the Sideline,
                <br /> Not a Boardroom.
              </h2>
            </div>

            <div className="relative p-8 sm:p-10 rounded-2xl bg-[#0f1420] border border-gray-800">
              <Quote size={48} className="absolute top-6 left-8 text-blue-500/15" aria-hidden="true" />
              <blockquote className="relative z-10">
                <p className="text-gray-200 text-lg sm:text-xl leading-relaxed font-medium mb-6">
                  "In 22 years on the sideline, I've built hundreds of practice templates, designed
                  countless scouting reports, and managed a dozen different weight programs.
                  I've bought the 'gold standard' versions of all of them, too.
                </p>
                <p className="text-gray-200 text-lg sm:text-xl leading-relaxed font-medium mb-6">
                  The problem was never the tools — it was that none of them talked to each other.
                  My practice plan was in a folder, my strength program was in a spreadsheet, and
                  my players couldn't access any of it in real time. I spent more time managing data
                  than coaching athletes.
                </p>
                <p className="text-gray-200 text-lg sm:text-xl leading-relaxed font-medium">
                  I built this because I needed a system where the plan, the development, and the
                  players finally lived in one place — and where the app runs the practice so I can
                  run the team. It's the tool I wish I had when I started two decades ago."
                </p>
                <footer className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-sm">TPS</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Founder, The Program Suite</p>
                    <p className="text-gray-500 text-xs">22 Years on the Sideline</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── PRICING ────────────────────────────────────────────────────────── */}
        <section id="pricing" className="py-24 px-4 bg-[#0f1420]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Founding Pricing</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Lock in your rate before the price goes up.
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                We're in early access. Founding members lock in their price for life — no matter
                how many features we add. Once the window closes, regular pricing applies.
              </p>
            </div>

            {/* Savings callout */}
            <div className="flex items-center justify-center gap-2 mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Founding prices are ~50% off regular pricing · Annual billing only
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-7 flex flex-col gap-6 transition-all ${
                    tier.highlight
                      ? "bg-[#0b0e14] card-glow border border-blue-500/30"
                      : "bg-[#0b0e14] border border-gray-800"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className={tier.badge ? "pt-3" : ""}>
                    <h3 className="text-white font-bold text-lg mb-0.5">{tier.name}</h3>
                    <p className="text-gray-500 text-xs">{tier.tagline}</p>
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

                  <ul className="flex flex-col gap-2.5 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                          <Check size={9} className="text-blue-400" />
                        </div>
                        <span className="text-gray-300 text-xs leading-relaxed">{f}</span>
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
        <section className="py-24 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Questions</p>
              <h2 className="text-3xl font-black text-white">Common Questions</h2>
            </div>
            <div className="rounded-2xl bg-[#0f1420] border border-gray-800 px-6 divide-y divide-gray-800">
              {FAQS.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
        <section className="relative py-24 px-4 overflow-hidden bg-[#0f1420]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[80px]" />
          </div>
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Your program deserves
              <br />
              <span className="gradient-text">a platform that runs with it.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join the founding class. Lock in your rate before the window closes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={APP_URL}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                Get Started — Founding Pricing <ChevronRight size={18} />
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Play size={14} className="text-blue-400" />
                See how it works first
              </button>
            </div>
            <p className="text-gray-600 text-xs mt-6">
              Coach tier from $149/yr · Program tier from $390/yr · Elite tier from $990/yr
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
                The first coaching platform with a live practice runner. Plan it once — the floor runs itself.
              </p>
            </div>
            <div className="flex gap-12 text-sm">
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">Product</p>
                <a href="#features" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Features</a>
                <a href="#compare"  className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Compare</a>
                <a href="#pricing"  className="text-gray-500 hover:text-gray-300 transition-colors text-xs">Pricing</a>
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
            <p className="text-gray-700 text-xs">The Operating System for Winning Programs.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ClipboardList, Dumbbell, Calendar, Users,
  Package, MessageSquare, Check, Play, X,
  ChevronRight, Quote, Menu,
} from "lucide-react";

// ── Configuration — update these two lines when ready ─────────────────────
const APP_SIGNUP_URL = "https://tpscoach.com";        // link to account creation
const VIDEO_EMBED_URL = "";                            // paste YouTube embed URL e.g. https://www.youtube.com/embed/XXXXX
// ──────────────────────────────────────────────────────────────────────────

// ── Features ───────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: ClipboardList,
    title: "Practice Planning Suite",
    desc: "Build, save, and reuse drill-level practice scripts. Your entire library in one place — shareable with staff in real time.",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    desc: "Assign programs by team or athlete, track maxes automatically, and generate daily weights. No more spreadsheet gymnastics.",
  },
  {
    icon: Calendar,
    title: "Live-Sync Scheduling",
    desc: "Game schedule, strength calendar, and practice schedule in one unified view. Players see updates the moment you make them.",
  },
  {
    icon: Users,
    title: "Player & Roster Database",
    desc: "Full roster management with readiness scores, daily vibe checks, and attendance history — all surfaced in one dashboard.",
  },
  {
    icon: Package,
    title: "Inventory & Scouting",
    desc: "Track equipment, build scouting reports, and keep every program asset organized and accessible from the sideline.",
  },
  {
    icon: MessageSquare,
    title: "Team Communications",
    desc: "Message players, parents, and staff from the same platform your whole program already lives in. No more lost group texts.",
  },
];

// ── Pricing features ───────────────────────────────────────────────────────
const PRICING_FEATURES = [
  "Full Access to the Practice Planning Suite",
  "Strength & Conditioning Management Tools",
  "Live-Sync Game & Program Scheduling",
  "Player & Roster Database",
  "Inventory & Scouting Modules",
  "Team Communication Hub",
  "Lock-In Pricing: Keep this rate for life as we add new features",
  "Early access to the mobile app",
];

// ── Video Modal ─────────────────────────────────────────────────────────────
function VideoModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Product walkthrough video"
    >
      <div
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-10 right-0 text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
        >
          <X size={16} /> Close
        </button>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-700">
          {VIDEO_EMBED_URL ? (
            <iframe
              src={VIDEO_EMBED_URL}
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

// ── Nav ─────────────────────────────────────────────────────────────────────
function Nav({ onVideoOpen }: { onVideoOpen: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#0b0e14]/95 backdrop-blur border-b border-gray-800/80 shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Image src="/logo.png" alt="The Program Suite" width={140} height={36} className="h-9 w-auto object-contain" priority />

        {/* Desktop right side */}
        <div className="hidden sm:flex items-center gap-6">
          <button
            onClick={onVideoOpen}
            className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1.5"
          >
            <Play size={13} className="text-blue-400" />
            See it in action
          </button>
          <a
            href={APP_SIGNUP_URL}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            Join as Founding Coach <ChevronRight size={14} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-[#0f1420] border-t border-gray-800 px-4 py-4 flex flex-col gap-3">
          <button
            onClick={() => { onVideoOpen(); setMenuOpen(false); }}
            className="text-gray-300 text-sm text-left flex items-center gap-2"
          >
            <Play size={13} className="text-blue-400" /> See it in action (2 min)
          </button>
          <a
            href={APP_SIGNUP_URL}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            Join as Founding Coach — $89/Year
          </a>
        </div>
      )}
    </nav>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <Nav onVideoOpen={() => setVideoOpen(true)} />
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}

      <main id="main-content">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Now in Early Access · Founding Pricing Available
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Stop Coaching Data.
              <br />
              <span className="gradient-text">Start Coaching Athletes.</span>
            </h1>

            {/* Sub */}
            <p className="max-w-2xl text-gray-400 text-lg sm:text-xl leading-relaxed">
              For the Head Coach who is tired of acting as a part-time IT director.
              Replace your messy web of spreadsheets and apps with a{" "}
              <span className="text-gray-200">professional-grade suite</span> that keeps
              players, parents, and staff in real-time sync.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <a
                href={APP_SIGNUP_URL}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-base font-bold transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                Join as Founding Coach — $89/Year
                <ChevronRight size={18} />
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Play size={14} className="ml-0.5 text-blue-400" />
                </span>
                See How It Works (2-Min Video)
              </button>
            </div>

            {/* Trust line */}
            <p className="text-gray-600 text-sm">
              No monthly fees. Annual billing. Lock in your founding rate forever.
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600">
            <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
          </div>
        </section>

        {/* ── THE PROBLEM ───────────────────────────────────────────────── */}
        <section className="relative py-24 px-4 section-glow">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">The Problem</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Why Are You Managing Three Different
                <br className="hidden sm:block" /> Logins for One Job?
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                You bought the gold standard for each category. The problem was never the tools —
                it was that <span className="text-gray-200">none of them talked to each other.</span>
              </p>
            </div>

            {/* Before/After */}
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  before: "Practice plan is in a folder on your desktop",
                  after: "Live, shareable practice scripts your whole staff sees in real time",
                  icon: ClipboardList,
                },
                {
                  before: "Strength program is in a spreadsheet nobody can access",
                  after: "Weight programs auto-calculated from player maxes, accessible from any device",
                  icon: Dumbbell,
                },
                {
                  before: "Players can't see any of it until you text the group chat",
                  after: "Players, parents, and staff stay in sync — automatically",
                  icon: Users,
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
                      <Check size={15} className="text-blue-400 mt-0.5 shrink-0" />
                      <p className="text-gray-200 text-sm leading-relaxed">{after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────────────────── */}
        <section id="features" className="py-24 px-4 bg-[#0f1420]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Everything In One Place</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                One Platform. Every Tool You Need.
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Why pay for three different subscriptions? We've consolidated your Practice Planner,
                Strength Program, and Team Comms into a single, high-performance engine.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group p-6 rounded-2xl bg-[#0b0e14] border border-gray-800 hover:border-blue-500/40 transition-all duration-300 hover:bg-blue-500/5"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon size={19} className="text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDER STORY ─────────────────────────────────────────────── */}
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
              <Quote
                size={48}
                className="absolute top-6 left-8 text-blue-500/15"
                aria-hidden="true"
              />
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
                  players finally lived in one place. It's the tool I wish I had when I started
                  two decades ago."
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

        {/* ── PRICING ───────────────────────────────────────────────────── */}
        <section id="pricing" className="py-24 px-4 bg-[#0f1420]">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-12">
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">Simple Pricing</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                The Founding Coach Offer
              </h2>
              <p className="text-gray-400">
                We're opening the doors to a limited number of founding members.
                Lock in your rate before the price goes up.
              </p>
            </div>

            {/* Pricing card */}
            <div className="relative rounded-2xl bg-[#0b0e14] card-glow p-8">
              {/* Limited time badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Limited Time — Founding Rate
                </span>
              </div>

              <div className="text-center mb-8 pt-2">
                <h3 className="text-white text-xl font-bold mb-1">Founding Coach Membership</h3>
                <div className="flex items-end justify-center gap-2 mt-4">
                  <span className="text-5xl font-black text-white">$89</span>
                  <div className="mb-2">
                    <span className="text-gray-400 text-sm line-through block">$119/yr</span>
                    <span className="text-gray-400 text-sm">/ year</span>
                  </div>
                </div>
                <p className="text-blue-400 text-sm mt-2 font-medium">
                  Save $30 — lock in this rate for life
                </p>
              </div>

              {/* Features list */}
              <ul className="flex flex-col gap-3 mb-8">
                {PRICING_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={APP_SIGNUP_URL}
                className="block w-full text-center px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                Get Started Now
              </a>
              <p className="text-center text-gray-600 text-xs mt-3">
                Annual billing · Cancel any time in year one
              </p>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[80px]" />
          </div>
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Your program deserves
              <br />
              <span className="gradient-text">better than a spreadsheet.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join the founding class. Lock in $89/year before the price increases.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={APP_SIGNUP_URL}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
              >
                Join as Founding Coach <ChevronRight size={18} />
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <Play size={14} className="text-blue-400" />
                See how it works first
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="bg-[#080b10] border-t border-gray-800/60 py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <Image src="/logo.png" alt="The Program Suite" width={120} height={30} className="h-7 w-auto object-contain" />
            <p className="text-gray-600 text-xs">The Operating System for Winning Programs.</p>
          </div>
          <div className="flex items-center gap-6 text-gray-600 text-xs">
            <a href={`${APP_SIGNUP_URL}/login`} className="hover:text-gray-300 transition-colors">Log In</a>
            <a href="mailto:hello@theprogramsuite.com" className="hover:text-gray-300 transition-colors">Contact</a>
            <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-gray-300 transition-colors">Terms</a>
            <span>© {new Date().getFullYear()} The Program Suite</span>
          </div>
        </div>
      </footer>
    </>
  );
}

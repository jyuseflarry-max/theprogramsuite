"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ClipboardList, Users, Eye,
  ChevronDown, ChevronRight, Check, Quote, Shield, ArrowRight,
  Play, Timer, Music2, Mic, Volume2,
} from "lucide-react";

// ── Config ────────────────────────────────────────────────────────────────────
const APP_URL = "https://tpscoach.com";
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

const COACH_FEATURES = [
  "Full drill library and plan builder — any sport",
  "Live Co-Pilot — music, voice transitions, hands-free",
  "S&C program builder and athlete tracking",
  "Auto-calculated daily weights from recorded maxes",
  "Athlete-facing practice and workout view",
  "Scheduling, attendance, and season calendar",
  "Staff collaboration — live plan sharing",
];

const FAQ_ITEMS = [
  {
    q: "What sports does this work for?",
    a: "Any team sport with a practice schedule and a weight room. Basketball, volleyball, football, soccer, baseball, softball, track, wrestling — the platform doesn't assume your sport. You build your drill library around your terminology, your drills, and your program.",
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
            Built for Texas High School Coaches
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8">
            Practice planning.
            <br />
            Strength programs.
            <br />
            <span className="text-brand-gold">One place.</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            The only platform built for the high school coach who runs the practice
            <em> and</em> the weight room — regardless of the sport on your whistle.
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_URL}
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-lg px-10 py-5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Claim Your Founding Spot <ArrowRight size={18} />
            </a>
            <span className="text-gray-500 text-sm">Starting at $79 / year — founding rate, limited spots</span>
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
                  <p className="text-white font-bold text-sm">Coach Larry</p>
                  <p className="text-gray-500 text-xs">Founder · Texas High School Coach · 22 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-28 border-b border-white/5 bg-brand-navy-mid" id="pricing">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-4">Founding Rate</p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
              One plan.
              <br />
              Everything you need.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Practice planning and S&C in one place — for one coach, any sport.
              Founding rate is locked in for life as long as you stay active.
            </p>
          </div>

          {/* Single pricing card */}
          <div className="rounded-2xl overflow-hidden border border-brand-gold bg-brand-navy-mid">
            <div className="bg-brand-gold px-4 py-1.5 text-center">
              <span className="text-[#0F172A] text-[10px] font-black uppercase tracking-widest">
                Founding Member Rate
              </span>
            </div>

            <div className="p-8 border-b border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Play size={16} className="text-brand-gold" aria-hidden="true" />
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Single Coach · Any Sport</span>
              </div>
              <div className="flex items-end gap-3 mb-1">
                <span className="text-white text-6xl font-black tabular-nums">$79</span>
                <div className="mb-2">
                  <p className="text-gray-400 text-sm">/year</p>
                  <p className="text-gray-600 text-xs line-through">$149/year after founding window</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                Practice planning and S&amp;C management in one place — everything a high school coach
                needs to run a professional program, regardless of sport.
              </p>
            </div>

            <div className="p-8">
              <ul className="space-y-3 mb-8" role="list">
                {COACH_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={14} className="text-brand-gold mt-0.5 shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={APP_URL}
                className="block text-center font-black text-base py-4 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white transition-colors"
              >
                Claim Your Founding Rate
              </a>
            </div>
          </div>

          <div className="mt-8 border border-green-500/30 bg-green-500/5 rounded-2xl p-8 text-center">
            <Shield size={28} className="text-green-400 mx-auto mb-3" aria-hidden="true" />
            <p className="text-white font-bold text-lg mb-2">30-Day No-Questions Guarantee</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              If The Program Suite doesn&rsquo;t change how your practices and S&C weeks feel
              within 30 days, you get a full refund. No forms, no follow-up. Just ask.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl sm:text-4xl font-black mb-12 text-center">Questions.</h2>
          {FAQ_ITEMS.map((item) => (
            <FaqRow key={item.q} {...item} />
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 bg-brand-navy-mid">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brand-gold text-xs font-bold tracking-[0.25em] uppercase mb-6">
            Texas High School Coaches
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
            href={APP_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-black text-xl px-12 py-6 rounded-lg transition-colors"
          >
            Claim Your Founding Spot <ChevronRight size={20} />
          </a>
          <p className="text-gray-600 text-sm mt-6">
            Starting at $79/year — founding rate while spots last — 30-day guarantee
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

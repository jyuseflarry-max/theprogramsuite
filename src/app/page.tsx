import type { ReactNode } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Ico, type IcoName } from "@/components/marketing/icons";
import { LeadForm } from "@/components/marketing/LeadForm";
import { PlanPrefill } from "@/components/marketing/PlanPrefill";
import { Reveal } from "@/components/marketing/Reveal";
import { HeroV3 } from "@/components/marketing/HeroV3";
import { ModuleModal, type ModDetail } from "@/components/marketing/ModuleModal";

export default function LandingPage() {
  return (
    <div className="rx">
      <Reveal />
      <PlanPrefill />
      <SiteNav />
      <HeroV3 />
      <ModuleGrid />
      <ModuleModal modules={MOD_LIST} />
      <Pricing />
      <LeadForm />
      <Faq />
      <CtaBand />
      <Trust />
      <SiteFooter />
    </div>
  );
}

/* ============================================================ Module grid (the platform) */
type Mod = {
  name: string;
  desc: string;
  tint: string;
  dark?: boolean;
  chip?: string;
  chipGold?: boolean;
  media: ReactNode;
  ico: ReactNode;
};

function Shot({ src, alt, className }: { src: string; alt: string; className?: string }) {
  /* eslint-disable-next-line @next/next/no-img-element */
  return <img src={src} alt={alt} loading="lazy" className={className} />;
}

const MODS: Mod[] = [
  {
    name: "Schedule",
    desc: "Games, practices, training, and trips on one calendar — quick-add, drag to move, conflict checks built in.",
    tint: "#0b8f5b",
    ico: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    ),
    media: (
      <div className="v3-vig" style={{ background: "linear-gradient(160deg,#eafaf0,#e2ecfb)" }}>
        <div className="v3-vrow">
          <span className="v3-vdot" style={{ background: "var(--accent)" }} />
          Tue · Practice — Field 2 · 3:30
        </div>
        <div className="v3-vrow">
          <span className="v3-vdot" style={{ background: "#0b8f5b" }} />
          Wed · Weights — Group A · 6:00 AM
        </div>
        <div className="v3-vrow">
          <span className="v3-vdot" style={{ background: "var(--warn)" }} />
          Fri · vs Ridgeline — HOME · 7:00
          <span className="v3-vbadge">No conflicts</span>
        </div>
        <div className="v3-vrow">
          <span className="v3-vdot" style={{ background: "var(--faint)" }} />
          Sat · Film + team breakfast · 9:00
        </div>
      </div>
    ),
  },
  {
    name: "Practice",
    desc: "Plan in blocks and periods, pull from your drill library, and run practice live from the field.",
    tint: "#007a5c",
    ico: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 3v3h6V3M8.5 11h7M8.5 15h5" />
      </svg>
    ),
    media: (
      <div className="v3-vig" style={{ background: "linear-gradient(160deg,#e8f7ee,#e6f0fb)" }}>
        <div className="v3-vrow">
          <span className="v3-vdot" style={{ background: "var(--accent)" }} />1 · Dynamic Warmup ·
          10 min
          <span className="v3-vbadge">Run live</span>
        </div>
        <div className="v3-vrow">
          <span className="v3-vdot" style={{ background: "#007a5c" }} />2 · Inside Run — Install 12
          · 15 min
        </div>
        <div className="v3-vrow">
          <span className="v3-vdot" style={{ background: "var(--warn)" }} />3 · 7-on-7 vs scout
          look · 20 min
        </div>
        <div className="v3-vrow">
          <span className="v3-vdot" style={{ background: "var(--faint)" }} />4 · Special teams ·
          10 min
        </div>
      </div>
    ),
  },
  {
    name: "Training",
    desc: "Periodized programs, rack layouts, and a weight-room kiosk — loads captured while the lift happens.",
    tint: "#7a5195",
    ico: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12h3M19 12h3M7 12h10" />
        <rect x="4" y="8" width="3" height="8" rx="1" />
        <rect x="17" y="8" width="3" height="8" rx="1" />
      </svg>
    ),
    media: (
      <div className="v3-vig" style={{ background: "linear-gradient(160deg,#fdf3e3,#f3e9fb)" }}>
        <div className="v3-vrow">
          <span className="v3-vdot" style={{ background: "var(--accent)" }} />
          Back Squat · Group B · 5×5
          <span className="v3-vbadge">185 lb · 45+25+2.5</span>
        </div>
        <div className="v3-vrow">
          <span className="v3-vdot" style={{ background: "var(--good)" }} />
          Rack 3 — Jordan M. checked in ✓
        </div>
        <div className="v3-vrow">
          <span className="v3-vdot" style={{ background: "var(--warn)" }} />
          Bench · Week 6 of 8 · deload next
        </div>
        <div className="v3-vrow">
          <span className="v3-vdot" style={{ background: "var(--faint)" }} />
          Kiosk mode · iPad rack-side
        </div>
      </div>
    ),
  },
  {
    name: "Athletes",
    desc: "Roster, attendance, eligibility, and development — one clearance verdict per athlete, with the fix one tap away.",
    tint: "#5856d6",
    ico: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c.8-4 3.5-6 7-6s6.2 2 7 6" />
      </svg>
    ),
    media: (
      <Shot
        src="/marketing/screens/cards/athlete-profile-card.png"
        alt="Athlete 360 profile: status pills, section tabs, and review checks"
      />
    ),
  },
  {
    name: "Game Day & Hosting",
    desc: "Run the nights you host: officials, table crew, gate, setup, and the duty board.",
    tint: "#e8590c",
    ico: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <circle cx="12" cy="12" r="6" />
      </svg>
    ),
    media: (
      <Shot
        src="/marketing/screens/cards/game-day-card.png"
        alt="Game day board: 5 things to fix and final blockers"
      />
    ),
  },
  {
    name: "Inventory & Budget",
    desc: "Catalog, issue, track, collect, reconcile, buy — the full gear lifecycle, with auto-fees and a settlement desk.",
    tint: "#8e6b3a",
    ico: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 8l-9-5-9 5v8l9 5 9-5z" />
        <path d="M3 8l9 5 9-5M12 13v8" />
      </svg>
    ),
    media: (
      <Shot
        src="/marketing/screens/cards/inventory-home-card.png"
        alt="Inventory dashboard: available, issued, open fees, and the command center"
      />
    ),
  },
  {
    name: "Messages",
    desc: "One inbox for the whole program — MAAPP-aligned, so a minor is never alone in a chat with an adult.",
    tint: "var(--good)",
    ico: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" />
      </svg>
    ),
    media: (
      <div className="v3-vig" style={{ background: "linear-gradient(160deg,#eefcf1,#e1f4ff)" }}>
        <div className="v3-bubble">
          Bus leaves at 3:45 — varsity dress is white.
          <small>Coach → Team · families can view</small>
        </div>
        <div className="v3-bubble v3-bubble--me">
          Marcus will be there, thank you Coach!
          <small>Parent · in the conversation by default</small>
        </div>
        <div className="v3-vrow" style={{ marginTop: "auto" }}>
          <span className="v3-vdot" style={{ background: "var(--good)" }} />
          Open · monitored · retained for AD review
        </div>
      </div>
    ),
  },
  {
    name: "Strategy",
    desc: "Playbook, scouting, call sheets, and analytics — shaped to your sport: football, basketball, cross country, volleyball.",
    tint: "#0a84ff",
    chip: "Sport pack",
    ico: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    media: (
      <div className="v3-vig" style={{ background: "linear-gradient(160deg,#eaf3ff,#dbe9fb)", justifyContent: "center" }}>
        <svg className="v3-court" viewBox="0 0 300 180" fill="none" aria-hidden="true">
          <rect x="6" y="6" width="288" height="168" rx="8" stroke="#9db8dd" strokeWidth="2" />
          <circle cx="150" cy="90" r="28" stroke="#9db8dd" strokeWidth="2" />
          <path d="M6 40h70v100H6M294 40h-70v100h70" stroke="#9db8dd" strokeWidth="2" />
          <path d="M76 90 Q 120 40 165 78" stroke="var(--gold)" strokeWidth="2.5" strokeDasharray="6 5" />
          <path d="M165 78 L 210 120" stroke="var(--gold)" strokeWidth="2.5" />
          <circle cx="76" cy="90" r="7" fill="#007aff" />
          <text x="76" y="94" fontSize="9" fill="#fff" textAnchor="middle">1</text>
          <circle cx="165" cy="78" r="7" fill="#007aff" />
          <text x="165" y="82" fontSize="9" fill="#fff" textAnchor="middle">2</text>
          <circle cx="210" cy="120" r="7" fill="var(--gold)" />
          <text x="210" y="124" fontSize="9" fill="#1c1c1e" textAnchor="middle">3</text>
        </svg>
      </div>
    ),
  },
  {
    name: "Studio",
    desc: "School-branded graphics, an approval queue, scheduled posting — and sponsors sold, fulfilled, and proven.",
    tint: "var(--gold)",
    dark: true,
    chip: "Showcase",
    chipGold: true,
    ico: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l1.9 5.6L20 10l-5 3.8L16.5 21 12 17.5 7.5 21 9 13.8 4 10l6.1-1.4z" />
      </svg>
    ),
    media: (
      <Shot src="/marketing/screens/studio-flyer-card.png" alt="A school-branded game-day graphic made in Studio, with a local sponsor" />
    ),
  },
];

function ModuleGrid() {
  return (
    <section className="v3-platform" id="platform">
      <div className="container">
        <div className="v3-sec-head reveal">
          <h2 className="rx-display v3-h2">One platform. Every part of your program.</h2>
          <p>
            Each module runs one part of the job — together they run the whole program. Turn on what
            you need; nothing nags you about what you don&apos;t.
          </p>
        </div>
        <div className="v3-grid">
          {MOD_LIST.map((m) => (
            <a
              className="v3-card reveal"
              href={`?m=${m.slug}`}
              data-module={m.slug}
              key={m.name}
            >
              <div className="v3-card-media">{m.media}</div>
              <div className="v3-card-body">
                <div className="v3-card-top">
                  <span
                    className="v3-mod-ico"
                    style={{ background: m.tint, color: m.dark ? "var(--gold-ink)" : "#fff" }}
                  >
                    {m.ico}
                  </span>
                  <h3>{m.name}</h3>
                  {m.chip && (
                    <span className={"v3-chip" + (m.chipGold ? " v3-chip--gold" : "")}>{m.chip}</span>
                  )}
                </div>
                <p>{m.desc}</p>
                <span className="v3-card-link">
                  Learn more <Ico.arrow width="13" height="13" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ Module detail panels
   Rich content shown inside the URL-synced modal (ModuleModal). Keyed by slug.
   Modules without an entry fall back to a light panel (headline + desc + media). */
const DETAILS: Record<string, ModDetail> = {
  schedule: {
    headline: "One calendar for everything you run.",
    lead: "Games, practices, lifts, and travel on a single calendar — build the season once, then drag to adjust when the week changes on you.",
    bullets: [
      {
        head: "Everything in one place.",
        body: "Games, practices, training blocks, and trips share one source of truth — no more three calendars that disagree.",
      },
      {
        head: "Conflict checks built in.",
        body: "A double-booked field, an overlapping practice, a bus that can't make it back in time — flagged before you publish.",
      },
      {
        head: "Quick-add, drag to move.",
        body: "Add an event in seconds; drag it when the opponent reschedules and every view updates at once.",
      },
      {
        head: "Families stay current.",
        body: "Publish once and athletes, parents, and staff all see the same times and locations.",
      },
    ],
    ctas: (
      <a className="btn btn-ink" href="#access">
        See the calendar <Ico.arrow />
      </a>
    ),
  },
  practice: {
    headline: "Plan the practice. Run it from the field.",
    lead: "Build practice in blocks and periods, pull from your own drill library, and run the script live from your phone — a rolling clock keeps the whole staff on the same period.",
    bullets: [
      {
        head: "Blocks and periods.",
        body: "Lay out the session on a timeline with a length per segment, so a two-hour practice actually fits in two hours.",
      },
      {
        head: "Your drill library.",
        body: "Save the drills you run, tag them by install and phase, and drop them into any practice.",
      },
      {
        head: "Run it live.",
        body: "The clock moves every coach period to period — no whistle math, no drifting twenty minutes long.",
      },
      {
        head: "It carries over.",
        body: "Today's plan becomes a record you can copy, tweak, and reuse next week.",
      },
    ],
    media: (
      <div className="v3-spot-media">
        <Shot
          src="/marketing/screens/practice-planner.png"
          alt="The practice planner: a session laid out in timed blocks and periods, pulled from the drill library"
        />
      </div>
    ),
    ctas: (
      <a className="btn btn-ink" href="#access">
        See practice live <Ico.arrow />
      </a>
    ),
  },
  training: {
    headline: "A weight room that logs itself.",
    lead: "Periodized programs, rack assignments, and a rack-side kiosk — athletes see their numbers and record their lifts while the set is happening, not from memory afterward.",
    bullets: [
      {
        head: "Periodized by design.",
        body: "Build multi-week programs with sets, reps, and percentages that progress on their own.",
      },
      {
        head: "Rack layouts.",
        body: "Assign groups to racks and rotations so a full team lifts without a traffic jam.",
      },
      {
        head: "Kiosk mode.",
        body: "An iPad at the rack shows the day's lifts and captures loads as athletes go — no clipboard, no re-entry.",
      },
      {
        head: "Loads that mean something.",
        body: "Every rep is stored, so PRs, trends, and deloads are built on real numbers.",
      },
    ],
    ctas: (
      <a className="btn btn-ink" href="#access">
        Tour the weight room <Ico.arrow />
      </a>
    ),
  },
  athletes: {
    headline: "Every athlete, cleared or not — one verdict.",
    lead: "Roster, attendance, eligibility, and development in one profile, with a single clearance verdict per athlete and the exact thing standing in the way one tap down.",
    bullets: [
      {
        head: "One clearance verdict.",
        body: "Forms, physicals, fees, and grades roll up into a single cleared-or-not — no cross-checking five systems.",
      },
      {
        head: "The fix, one tap away.",
        body: "“Missing physical,” “fee outstanding” — tap the flag and go straight to what resolves it.",
      },
      {
        head: "Attendance that counts.",
        body: "Practice and lift attendance ties back to your eligibility rules automatically.",
      },
      {
        head: "Development on the record.",
        body: "Growth, testing, and notes live on the profile — not in a coach's notebook.",
      },
    ],
    ctas: (
      <a className="btn btn-ink" href="#access">
        See a clearance <Ico.arrow />
      </a>
    ),
  },
  "game-day": {
    headline: "Run the nights you host — without the clipboard.",
    lead: "The home-game plan that assigns every job — officials, table crew, gate, setup, teardown — and shows the whole crew who's on what, in real time.",
    bullets: [
      {
        head: "The duty board.",
        body: "Every role for the night in one view, assigned and checkable, so nothing gets dropped at 6:45.",
      },
      {
        head: "Officials and crew.",
        body: "Confirm officials, table workers, and gate staff ahead of time — and see who has actually shown up.",
      },
      {
        head: "Setup to teardown.",
        body: "A running list from lining the field to locking the gate, split across the people you assigned.",
      },
      {
        head: "Nothing forgotten.",
        body: "Recurring game-night tasks come pre-loaded, so week eight runs like week one.",
      },
    ],
    ctas: (
      <a className="btn btn-ink" href="#access">
        See a game night <Ico.arrow />
      </a>
    ),
  },
  messages: {
    headline: "One inbox. Every conversation, on the record.",
    lead: "Team, staff, and family messaging in one place — built MAAPP-aligned from the start, so a minor is never alone in a thread with an adult and every message is retained for review.",
    bullets: [
      {
        head: "Safe by default.",
        body: "Athlete-coach conversations include a second adult and stay visible — safety isn't a setting someone can forget to turn on.",
      },
      {
        head: "One inbox for the program.",
        body: "Announcements, staff coordination, and family updates without three apps and a group text.",
      },
      {
        head: "Families in the loop.",
        body: "Parents see what's sent to their athlete and can reply where it's appropriate.",
      },
      {
        head: "Retained for review.",
        body: "Every message is kept and searchable, so your AD has a record if it's ever needed.",
      },
    ],
    ctas: (
      <a className="btn btn-ink" href="#access">
        See messaging <Ico.arrow />
      </a>
    ),
  },
  studio: {
    headline: "The program that funds itself.",
    lead: "Studio turns every game into school-branded content — and every banner, post, and scoreboard slot into sponsorship revenue you can prove.",
    bullets: [
      {
        head: "Create in seconds.",
        body: "AI media packs from a game, a template, or scratch — social, campus displays, print.",
      },
      {
        head: "Approve, schedule, post.",
        body: "A season-wide calendar with an approval queue and connected channels.",
      },
      {
        head: "Sell → fulfill → prove → renew.",
        body: "Sponsor slots with valuation and proof-of-display, on a public sponsor page.",
      },
      {
        head: "Consent-aware by default.",
        body: "Athlete media rights and wording checks on every graphic.",
      },
    ],
    media: (
      <div
        className="v3-spot-media v3-modal-poster"
        style={{ background: "linear-gradient(150deg,#101827,#1d2c49)" }}
      >
        <Shot
          className="v3-studio-poster--lg"
          src="/marketing/screens/studio-flyer.png"
          alt="A school-branded game-day flyer made in Studio, featuring both teams and a local sponsor"
        />
      </div>
    ),
    ctas: (
      <>
        <a className="btn btn-ink" href="#access">
          Explore Studio <Ico.arrow />
        </a>
        <a href="#pricing" className="v3-spot-alt">
          See Showcase pricing
        </a>
      </>
    ),
  },
  strategy: {
    headline: "College-grade tools. High-school staff size.",
    lead: "Every sport gets its own Strategy tab — design the scheme in your own terminology, scout the opponent, and read the numbers that used to take a college staff.",
    bullets: [
      { head: "Football", body: "— playbook builder, opponent tendencies, situational call sheets." },
      { head: "Basketball", body: "— live tagging, shot charts, lineup analytics, game simulator." },
      { head: "Cross country", body: "— meet predictor, pack analytics, course adjustments." },
      { head: "Volleyball", body: "— rotations, overlap planner, one-manager live match stats." },
    ],
    media: (
      <div className="v3-spot-media">
        <Shot
          src="/marketing/screens/strategy-playbook.png"
          alt="The basketball play designer: a half-court diagram with players, defenders, and movement arrows, beside the play editor"
        />
      </div>
    ),
    ctas: (
      <a className="btn btn-ink" href="#access">
        See your sport <Ico.arrow />
      </a>
    ),
  },
  inventory: {
    headline: "Every jersey home. Every dollar accounted for.",
    lead: "Six jobs — catalog, issue, track, collect, reconcile, purchase. Scan gear out at the door, auto-create fees for what doesn’t come back, and turn shortages into a purchase plan.",
    bullets: [
      {
        head: "Exception-first collect.",
        body: "“13 athletes have nothing out” — you only work the exceptions.",
      },
      {
        head: "Settlement desk.",
        body: "Athlete clearance ties gear, fees, and forms into one verdict.",
      },
      {
        head: "Budget pipeline.",
        body: "Request → approval → receiving → documentation, board-ready.",
      },
    ],
    media: (
      <div className="v3-spot-media">
        <Shot
          src="/marketing/screens/buying-needs.png"
          alt="Buying needs — turn shortages into a purchase plan"
        />
      </div>
    ),
    ctas: (
      <>
        <a className="btn btn-ink" href="#access">
          Tour inventory <Ico.arrow />
        </a>
        <a href="/equipment" className="v3-spot-alt">
          Compare vs gear-only trackers
        </a>
      </>
    ),
  },
};

const SLUGS: Record<string, string> = {
  "Schedule": "schedule",
  "Practice": "practice",
  "Training": "training",
  "Athletes": "athletes",
  "Game Day & Hosting": "game-day",
  "Inventory & Budget": "inventory",
  "Messages": "messages",
  "Strategy": "strategy",
  "Studio": "studio",
};

const slugFor = (name: string) => SLUGS[name] ?? name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const MOD_LIST = MODS.map((m) => {
  const slug = slugFor(m.name);
  return { ...m, slug, detail: DETAILS[slug] };
});

/* ============================================================ Pricing (unchanged) */
type Tier = {
  name: string;
  popular: boolean;
  badge: string | null;
  for: string;
  bands: Band[];
  monthly: boolean;
  everything: string | null;
  feats: string[];
  hook: ReactNode | null;
  cta: string;
  ctaCls: string;
};

type Band = { size: string; price: string };

const TIERS: Tier[] = [
  {
    name: "Command",
    popular: false,
    badge: "Most popular",
    for: "Everything you need to run the whole program day to day.",
    bands: [
      { size: "Small · under 500", price: "800" },
      { size: "Mid · 500–1,500", price: "1,200" },
      { size: "Large · 1,500+", price: "1,600" },
    ],
    monthly: true,
    everything: null,
    feats: [
      "Athletes, roster & family access",
      "Schedule, attendance & game prep",
      "Practice planning + strength & training",
      "Inventory, gear & budget",
      "Staff roles, access & audit",
      "MAAPP-aligned messaging",
    ],
    hook: null,
    cta: "Start with Command",
    ctaCls: "btn-ink",
  },
  {
    name: "Showcase",
    popular: true,
    badge: "Most valuable",
    for: "Everything in Command, plus the ability to generate funds for your program.",
    bands: [
      { size: "Small · under 500", price: "1,600" },
      { size: "Mid · 500–1,500", price: "2,400" },
      { size: "Large · 1,500+", price: "3,200" },
    ],
    monthly: false,
    everything: "Everything in Command, plus",
    feats: [
      "Media gallery",
      "Studio",
      "Sponsorship sales",
      "Fundraising tools",
      "AI graphics every year — 200 Small · 300 Mid · 400 Large",
    ],
    hook: null,
    cta: "Start Showcase",
    ctaCls: "btn-primary",
  },
];

const BANDS: {
  band: string;
  commandPrice?: string;
  showPrice?: string;
}[] = [
  { band: "Small · under 500", commandPrice: "$3,600", showPrice: "$7,200" },
  { band: "Mid · 500–1,500", commandPrice: "$8,000", showPrice: "$16,000" },
  { band: "Large · 1,500+", commandPrice: "$16,000", showPrice: "$32,000" },
];

const COLLEGE: { tier: string; commandPrice: string; showPrice: string }[] = [
  { tier: "Non-Division I", commandPrice: "$2,000", showPrice: "$4,000" },
  { tier: "Division I", commandPrice: "$2,400", showPrice: "$4,800" },
];

function Pricing() {
  return (
    <section className="section rx-pricing" id="pricing">
      <div className="container">
        <div className="section-head center reveal" style={{ maxWidth: 820, margin: "0 auto" }}>
          <h2 className="rx-display rx-h2">Start with one program. Grow into the whole department.</h2>
          <p className="rx-lead">
            Every plan covers one full program — one sport, one gender, all levels — so an
            athlete&apos;s history follows them year over year. Boys&apos; and girls&apos; teams count as
            separate programs; a true coed sport is one.
          </p>
        </div>

        <div className="plans reveal">
          {TIERS.map((t) => (
            <div className={"plan" + (t.popular ? " popular" : "")} key={t.name}>
              {t.badge && (
                <span className={"plan-badge" + (t.popular ? "" : " plan-badge--soft")}>{t.badge}</span>
              )}
              <div className="plan-name">{t.name}</div>
              <div className="plan-for">{t.for}</div>
              <div className="plan-price">
                <span className="from">from</span>
                <span className="cur">$</span>
                <span className="amt">{t.bands[0].price}</span>
                <span className="per">/year</span>
              </div>
              <div className="plan-list">Priced by student enrollment</div>
              <ul className="plan-bands">
                {t.bands.map((b) => (
                  <li key={b.size}>
                    <span className="band">{b.size}</span>
                    <span className="amt">
                      ${b.price}
                      <i>/yr</i>
                    </span>
                  </li>
                ))}
              </ul>
              {t.monthly && (
                <div className="plan-monthly">
                  or pay <b>monthly</b> (+25%) — Command only
                </div>
              )}
              <hr className="div" />
              <ul className="plan-feats">
                {t.everything && <li className="everything">{t.everything}</li>}
                {t.feats.map((f) => (
                  <li key={f}>
                    <Ico.check className="ck" width="15" height="15" /> {f}
                  </li>
                ))}
              </ul>
              {t.hook && <p className="plan-hook">{t.hook}</p>}
              <div className="plan-cta">
                <a
                  href="#access"
                  data-plan={`${t.name} (one program)`}
                  className={"btn btn-block " + t.ctaCls}
                >
                  {t.cta} <Ico.arrow />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="dept reveal">
          <div className="dept-head">
            <div>
              <h3>Whole athletic department</h3>
              <p>
                Bring the whole department onto Command or Showcase, plus a department roll-up of
                inventory, budget, and staff for the AD. Each sport counts as one program; boys&apos;
                and girls&apos; teams count separately. Showcase departments share one school-wide
                pool of AI graphics — 900 a year Small, 2,000 Mid, 4,000 Large.
              </p>
            </div>
          </div>
          <div className="dept-rows">
            {BANDS.map((b) => (
              <div className="dept-row" key={b.band}>
                <span className="band">{b.band}</span>
                <div className="dept-tier">
                  <span className="dept-tier-name">Command</span>
                  <span className="price sm">
                    {b.commandPrice}
                    <i>/yr</i>
                  </span>
                </div>
                <div className="dept-tier">
                  <span className="dept-tier-name">Showcase</span>
                  <span className="price sm">
                    {b.showPrice}
                    <i>/yr</i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dept college reveal">
          <div className="dept-head">
            <div>
              <h3>College programs</h3>
              <p>
                Colleges run leaner than high schools — fewer teams per sport — so college
                programs are priced by division, not enrollment. Showcase adds fundraising and
                sponsorship sales, plus a yearly pool of AI graphics — 500 for Non-Division&nbsp;I,
                600 for Division&nbsp;I.
              </p>
            </div>
          </div>
          <div className="dept-rows">
            {COLLEGE.map((c) => (
              <div className="dept-row" key={c.tier}>
                <span className="band">{c.tier}</span>
                <div className="dept-tier">
                  <span className="dept-tier-name">Command</span>
                  <span className="price sm">
                    {c.commandPrice}
                    <i>/yr</i>
                  </span>
                </div>
                <div className="dept-tier">
                  <span className="dept-tier-name">Showcase</span>
                  <span className="price sm">
                    {c.showPrice}
                    <i>/yr</i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="price-foot">
          High-school pricing is banded by student enrollment; college programs are priced by
          division (Division&nbsp;I or below).
        </p>
        <p className="price-foot">
          Multiple schools? School District pricing is custom — <a href="#access">contact us</a>.
        </p>
      </div>
    </section>
  );
}

/* ============================================================ FAQ (unchanged) */
const FAQ_ITEMS = [
  {
    q: 'What exactly is "one program"?',
    a: "One program is one sport, one gender, with all of its levels — freshman, JV, and varsity together. Boys' and girls' teams of the same sport are two separate programs; a true coed sport counts as one. You're never charged per level, and because everything lives under the program, an athlete's history follows them from one season to the next.",
  },
  {
    q: "We run on spreadsheets and group texts today. Is switching painful?",
    a: "No. Most programs start with the one area that hurts most — usually inventory or scheduling — and import their existing roster and gear lists. You can grow into the other modules whenever you're ready; nothing has to migrate twice.",
  },
  {
    q: "How is this different from an equipment-inventory app?",
    a: (
      <>
        Equipment-only trackers count gear and log check-outs, and charge $800&ndash;$1,600 a year to
        do it. Inventory here goes further &mdash; automatic lost-gear fees, athlete and family
        self-service, QR labels, purchasing and budget &mdash; and it&apos;s one module of a platform
        that runs the entire program for less than most gear trackers cost alone.{" "}
        <a href="/equipment">See the equipment &amp; inventory tour &rarr;</a>
      </>
    ),
  },
  {
    q: "Is this serious enough for a district procurement review?",
    a: "Yes. Roles and permissions, full audit trails, budget and spend reconciliation, and board-ready reporting are built in. Administrators get the visibility and accountability a purchase of this size requires — not just a coach's convenience tool.",
  },
  {
    q: "How do you keep coach–athlete messaging safe?",
    a: "Messaging is MAAPP-aligned: open, monitored, and auditable. A minor can never end up in a private one-to-one channel with an adult — a parent or guardian is automatically part of every direct conversation, and when no family account exists, a second adult from the program is added instead. Group messages and announcements follow our Silent Guardian model: families of minors can always see everything sent to their athlete, without their phone buzzing for every routine update. And when a coach needs to raise something sensitive about one athlete — discipline, eligibility, health — it has to happen in that athlete's own conversation, so each family only ever sees their own athlete's business. Every message is scanned on send, anyone can flag one, and the full history is retained for athletic-director review.",
  },
  {
    q: "What do coaches actually do on their phones?",
    a: "The coach app is phone-first: messaging, attendance, schedules, game-day readiness, and quick gear actions all work from the sideline. Training workflows are tuned for an iPad rack-side, so loads and groups get captured while the lift is happening.",
  },
  {
    q: "Who built it, and who do we talk to?",
    a: "The Program Suite was built by coaches who ran programs on the same scattered tools you're trying to replace. When you reach out, you're talking to people who've run a program — not a call center.",
  },
];

function Faq() {
  return (
    <section className="section rx-faq" id="faq">
      <div className="container">
        <div className="section-head center reveal" style={{ margin: "0 auto" }}>
          <h2 className="rx-display rx-h2">Frequently asked questions</h2>
        </div>
        <div className="faq-list reveal">
          {FAQ_ITEMS.map((it) => (
            <details className="faq-item" key={it.q}>
              <summary className="faq-q">
                <span>{it.q}</span>
                <span className="faq-ico">+</span>
              </summary>
              <div className="faq-a">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ CTA band */
function CtaBand() {
  return (
    <section className="v3-cta">
      <div className="container reveal">
        <h2 className="rx-display v3-cta-h2">
          See it on <em>your</em> program.
        </h2>
        <p>
          A 20-minute walkthrough with people who&apos;ve run a program — not a call center. Bring
          your roster and your gear list; leave with both imported.
        </p>
        <a className="btn btn-lg v3-cta-btn" href="#access">
          Request a demo <Ico.arrow />
        </a>
      </div>
    </section>
  );
}

/* ============================================================ Trust (unchanged) */
const TRUST: { ico: IcoName; t: string; d: string }[] = [
  { ico: "shield", t: "Trusted by coaches", d: "Across every sport" },
  { ico: "lock", t: "Secure & reliable", d: "Your data. Your program." },
  { ico: "whistle", t: "Built by coaches", d: "Backed by experience" },
  { ico: "devices", t: "Web & mobile", d: "Always with you" },
];

function Trust() {
  return (
    <section className="rx-trust">
      <div className="container">
        <ul className="rx-trust-grid reveal">
          {TRUST.map((t) => {
            const Glyph = Ico[t.ico];
            return (
              <li key={t.t} className="rx-trust-item">
                <span className="rx-trust-ico">
                  <Glyph />
                </span>
                <span className="rx-trust-text">
                  <b>{t.t}</b>
                  <span>{t.d}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

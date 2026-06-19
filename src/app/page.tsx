import type { ReactNode } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Frame } from "@/components/marketing/Frame";
import { Ico, ModIcon, type IcoName, type ModName } from "@/components/marketing/icons";
import { LeadForm } from "@/components/marketing/LeadForm";
import { ProductProof } from "@/components/marketing/ProductProof";
import { Reveal } from "@/components/marketing/Reveal";

export default function LandingPage() {
  return (
    <div>
      <Reveal />
      <SiteNav />
      <Hero />
      <BeforeAfter />
      <Founder />
      <ProductProof />
      <Capabilities />
      <ContentStudio />
      <Audiences />
      <Pricing />
      <LeadForm />
      <Faq />
      <FinalCta />
      <SiteFooter />
      <MobileBar />
    </div>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-top reveal">
          <h1 className="h-display h1">
            Run your whole program
            <br /> from <span className="accent">one place.</span>
          </h1>
          <p className="lead hero-lead">
            The Program Suite is the operating system for school sports — it replaces the group
            texts, spreadsheets, and half-dozen apps your program runs on today with one source of
            truth for staff, athletes, and families.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary btn-lg">
              Start one program <Ico.arrow />
            </a>
            <a href="#product" className="btn btn-ghost btn-lg">
              <Ico.play /> See it in action
            </a>
          </div>
        </div>

        <div className="hero-shot reveal">
          <Frame
            src="/marketing/screens/inventory-home.png"
            url="app.theprogramsuite.com/summit-ridge/inventory"
            alt="The Program Suite — inventory command center showing tasks, kit readiness, buying needs, and team clearance"
          />
        </div>
      </div>
    </header>
  );
}

function BeforeAfter() {
  return (
    <section className="section section--tight" id="why">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h-display h2">
            Most programs aren&apos;t run on a system. They&apos;re run on scraps.
          </h2>
          <p className="lead">
            When the information lives in five places, nothing is actually accountable. One source of
            truth changes that.
          </p>
        </div>

        <div className="ba-grid reveal">
          <div className="ba-card ba-before">
            <div className="ba-head">
              <span className="ba-kicker">Before — the scattered way</span>
            </div>
            <h3>A different tool for every job</h3>
            <p className="sub">…and none of them talk to each other.</p>
            <ul className="ba-list">
              <li>
                <span className="mk">✕</span> Group texts that scroll away by Tuesday
              </li>
              <li>
                <span className="mk">✕</span> A gear spreadsheet only one coach can find
              </li>
              <li>
                <span className="mk">✕</span> Fees and missing uniforms chased from memory
              </li>
              <li>
                <span className="mk">✕</span> Budget reconciled in a binder at season&apos;s end
              </li>
              <li>
                <span className="mk">✕</span> Nothing follows the athlete to next year
              </li>
            </ul>
          </div>
          <div className="ba-card ba-after">
            <div className="ba-head">
              <span className="ba-kicker">After — one source of truth</span>
            </div>
            <h3>One system the whole program shares</h3>
            <p className="sub">Staff, athletes, and families, finally in sync.</p>
            <ul className="ba-list">
              <li>
                <span className="mk">
                  <Ico.check width="16" height="16" />
                </span>{" "}
                Every roster, schedule, and message in one place
              </li>
              <li>
                <span className="mk">
                  <Ico.check width="16" height="16" />
                </span>{" "}
                Gear, fees, and budget accounted for to the dollar
              </li>
              <li>
                <span className="mk">
                  <Ico.check width="16" height="16" />
                </span>{" "}
                Staff roles, access, and audit trails on every change
              </li>
              <li>
                <span className="mk">
                  <Ico.check width="16" height="16" />
                </span>{" "}
                Board-ready reports without the late-night export
              </li>
              <li>
                <span className="mk">
                  <Ico.check width="16" height="16" />
                </span>{" "}
                History that follows each athlete every season
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="section founder" id="story">
      <div className="container">
        <div className="founder-grid reveal">
          <div className="founder-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/marketing/founder.png"
              alt="The founding coach in a huddle with the Memorial girls basketball team"
            />
          </div>
          <div className="founder-body">
            <p className="founder-quote serif-quote">
              &ldquo;I built the system I wished I&apos;d had when I began coaching{" "}
              <span className="accent">23 years ago</span>.&rdquo;
            </p>
            <div className="founder-text">
              <p>
                I&apos;m a high school coach. For years my program ran on a phone full of group texts,
                a laptop full of spreadsheets, and a memory that kept dropping the things that
                mattered — who still had a jersey, which athlete owed a fee, what we could actually
                afford.
              </p>
              <p>
                Nothing on the market was built for the way a program actually works, so I built it.
                The Program Suite is the tool I needed 23 seasons ago — and it&apos;s now the
                operating system for the whole department.
              </p>
            </div>
            <div className="founder-sign">
              <div>
                <div className="name">Founder &amp; Head Coach</div>
                <div className="role">The Program Suite</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CAP_MODS: { ico: ModName; title: string; desc: string; tags: string[] }[] = [
  {
    ico: "athlete",
    title: "Athlete profiles",
    desc: "One record per athlete — roster, availability, sizing, family access, and the notes that matter.",
    tags: ["Roster", "Family access", "Sizing", "Development notes", "Health signals"],
  },
  {
    ico: "season",
    title: "Season command",
    desc: "Games, practices, and travel in one calendar, with confirmations and game-day readiness built in.",
    tags: ["Schedule", "Attendance", "Travel", "Staffing", "Confirmations"],
  },
  {
    ico: "practice",
    title: "Practice planning",
    desc: "Set install goals, pull from your drill library, and assign staff to every block of the plan.",
    tags: ["Install goals", "Drill library", "Practice blocks", "Staff assignments"],
  },
  {
    ico: "training",
    title: "Training floor",
    desc: "Strength groups and load tracking, captured rack-side on an iPad while the lift is happening.",
    tags: ["Strength groups", "Load tracking", "iPad capture"],
  },
  {
    ico: "inventory",
    title: "Inventory & budget",
    desc: "Catalog, issue, collect, and scan gear — with fees, budget balances, and purchase requests attached.",
    tags: ["Catalog", "Issue / collect", "Scanning", "Fees", "Budget", "Purchase requests"],
  },
  {
    ico: "district",
    title: "District visibility",
    desc: "Cross-school readiness, rollups, audit trails, and board-ready reports for the people who answer to a board.",
    tags: ["Cross-school", "Rollups", "Audit trails", "Board reports"],
  },
  {
    ico: "mobile",
    title: "Mobile, on the field",
    desc: "A phone-first coach app and iPad training workflows — the system goes where the program goes.",
    tags: ["Coach app", "iPad workflows", "Offline-friendly"],
  },
];

function Capabilities() {
  return (
    <section className="section cap-band" id="capabilities">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h-display h2">One system, deep enough to run the whole department.</h2>
          <p className="lead">
            Seven connected modules — start with what you need today, grow into the rest without
            migrating anything.
          </p>
        </div>
        <div className="cap-grid reveal">
          {CAP_MODS.map((m) => (
            <div className="cap-cell" key={m.title}>
              <ModIcon name={m.ico} />
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <div className="cap-tags">
                {m.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
          <div className="cap-cell" style={{ justifyContent: "center" }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>
              Always on
            </div>
            <p style={{ color: "rgba(255,255,255,.82)", fontSize: 15 }}>
              Messaging, fair-use AI, roles &amp; permissions, and a full audit trail run underneath
              every module — so the system is accountable, not just convenient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const STUDIO_POINTS: { ico: IcoName; t: string; d: string }[] = [
  {
    ico: "bolt",
    t: "Pro-grade graphics in minutes",
    d: "Pick a template, drop in the matchup and your logos, and Content Studio renders a broadcast-quality post — no designer, no Canva afternoon.",
  },
  {
    ico: "handshake",
    t: "Sell the spot to a local business",
    d: "Every graphic has a sponsor slot. Caldwell's Pizza Kitchen gets the whole town's game-day feed; you get a check.",
  },
  {
    ico: "cash",
    t: "The suite pays for itself",
    d: "One local sponsor across a season typically covers the subscription — the rest is money back in the program's pocket.",
  },
];

function ContentStudio() {
  return (
    <section className="section studio" id="content-studio">
      <div className="container">
        <div className="studio-grid">
          <div className="studio-copy">
            <div className="eyebrow">
              <span className="dot" />
              Content Studio · Full Suite
            </div>
            <h2 className="h-display h2">Turn game day into revenue.</h2>
            <p className="lead">
              The reason Full Suite pays for itself: generate the graphics a program would pay an
              agency for, then sell the sponsorship to local businesses who want in front of your
              community.
            </p>
            <ul className="studio-points">
              {STUDIO_POINTS.map((p) => {
                const Glyph = Ico[p.ico];
                return (
                  <li key={p.t}>
                    <span className="pico">
                      <Glyph />
                    </span>
                    <span>
                      <span className="pt-t">{p.t}</span>
                      <span className="pt-d" style={{ display: "block", marginTop: 2 }}>
                        {p.d}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
            <a href="#pricing" className="btn btn-primary btn-lg">
              See Full Suite pricing <Ico.arrow />
            </a>
            <div className="studio-tag">
              <Ico.cash width="15" height="15" /> Also powers <b>fundraising</b> &amp;{" "}
              <b>public sponsor pages</b>
            </div>
          </div>

          <div className="studio-visual">
            <div className="social-card">
              <div className="social-head">
                <span className="social-ava">M</span>
                <span className="social-meta">
                  <span className="n">memorialmustangs</span>
                  <span className="s">Sponsored · game day</span>
                </span>
                <span className="social-dots">•••</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="social-img"
                src="/marketing/content-studio.png"
                alt="Game day social graphic — Memorial Mustangs vs Stratford Spartans, sponsored by Caldwell's Pizza Kitchen"
              />
              <div className="social-foot">
                <div className="social-acts">
                  <Ico.heart />
                  <Ico.comment />
                  <Ico.send />
                </div>
                <div className="social-cap">
                  <b>memorialmustangs</b> Thursday under the lights. 🏈 Proudly sponsored by{" "}
                  <span className="by">@caldwellspizza</span> — grab a game-day slice before kickoff.
                  #RideTogether
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Audience = {
  role: string;
  title: string;
  blurb: string;
  bullets: string[];
  foot: string;
  feature?: boolean;
};

const AUDIENCES: Audience[] = [
  {
    role: "For coaches",
    title: "Built by someone who sat in your seat",
    blurb:
      "Less time on logistics, more time coaching. The day-to-day stuff finally lives in one place — and it was designed by a coach who hated the chaos too.",
    bullets: [
      "Run handout day and return day without a clipboard",
      "Plan practice and share it with your staff",
      "Message athletes and families, with receipts",
      "Stop chasing gear, fees, and forms from memory",
    ],
    foot: "Start running your program in an afternoon.",
  },
  {
    role: "For athletic directors",
    title: "Serious software your department can stand on",
    blurb:
      "Every program on one standard. Real depth, real accountability, and the visibility to answer any question about gear, money, or readiness on the spot.",
    bullets: [
      "One source of truth across every sport",
      "Audit trails and roles on every change",
      "Budget, spend, and fees reconciled live",
      "Replace a half-dozen disconnected tools",
    ],
    foot: "ROI in one season of recovered gear and budget.",
    feature: true,
  },
  {
    role: "For districts",
    title: "Readiness and reporting across every school",
    blurb:
      "Roll the whole region onto one platform. Compare readiness across schools, pull board-ready reports, and standardize accountability district-wide.",
    bullets: [
      "Cross-school readiness rollups",
      "District-level audit and reporting",
      "Standardized accountability everywhere",
      "Guided rollout and onboarding support",
    ],
    foot: "Built for procurement and the board room.",
  },
];

function Audiences() {
  return (
    <section className="section" id="audiences">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h-display h2">Coaches feel it. Directors and districts can prove it.</h2>
          <p className="lead">
            The same system serves the coach who buys on instinct and the administrator who buys on
            evidence.
          </p>
        </div>
        <div className="aud-grid reveal">
          {AUDIENCES.map((a) => (
            <div className={"aud-card" + (a.feature ? " feature" : "")} key={a.role}>
              <div className="aud-role">{a.role}</div>
              <h3>{a.title}</h3>
              <p className="blurb">{a.blurb}</p>
              <ul className="aud-bul">
                {a.bullets.map((b) => (
                  <li key={b}>
                    <Ico.check className="ck" width="16" height="16" /> {b}
                  </li>
                ))}
              </ul>
              <div className="aud-foot">{a.foot}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type Tier = {
  name: string;
  popular: boolean;
  for: string;
  price: string;
  list: string;
  everything: string | null;
  feats: string[];
  hook: ReactNode | null;
  cta: string;
  ctaCls: string;
};

const TIERS: Tier[] = [
  {
    name: "Coach",
    popular: false,
    for: "For the coach running the program day to day.",
    price: "800",
    list: "1,200",
    everything: null,
    feats: [
      "Athletes, roster & family access",
      "Schedule, attendance & game prep",
      "Practice planning",
      "Strength & training",
      "Messaging + fair-use AI",
    ],
    hook: null,
    cta: "Start as Coach",
    ctaCls: "btn-ink",
  },
  {
    name: "Director",
    popular: true,
    for: "For the head coach or director responsible for gear, budget, and staff.",
    price: "1,600",
    list: "2,400",
    everything: "Everything in Coach, plus",
    feats: ["Inventory & gear", "Budget & spend", "Media library for approved photos"],
    hook: null,
    cta: "Start as Director",
    ctaCls: "btn-primary",
  },
  {
    name: "Full Suite",
    popular: false,
    for: "For programs ready to generate revenue.",
    price: "2,400",
    list: "3,600",
    everything: "Everything in Director, plus",
    feats: ["Content Studio", "Sponsorship sales", "Fundraising tools", "Sponsor assets & public pages"],
    hook: (
      <>
        Founding <b>Full Suite</b> costs what others pay for Director — the revenue tools only need to
        earn that much to pay for themselves.
      </>
    ),
    cta: "Start Full Suite",
    ctaCls: "btn-ink",
  },
];

const BANDS: { band: string; price: string; list: string | null; talk?: boolean }[] = [
  { band: "1–10 programs", price: "$9,600", list: "$14,400" },
  { band: "11–20 programs", price: "$19,200", list: "$28,800" },
  { band: "21–30 programs", price: "$28,800", list: "$43,200" },
  { band: "31+ or a district", price: "Let's talk", list: null, talk: true },
];

function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head reveal" style={{ maxWidth: 820 }}>
          <h2 className="h-display h2">
            Start with one program. Grow into the whole department.
          </h2>
          <p className="lead">
            Every plan covers one full program — one sport, one gender, all levels — so an
            athlete&apos;s history follows them year over year. Boys&apos; and girls&apos; teams count
            as separate programs; a true coed sport is one.
          </p>
        </div>

        <div className="price-frame reveal" style={{ marginTop: 28 }}>
          <span className="founding-note">
            <Ico.check width="15" height="15" /> Founding members lock in <b>33% off for life</b> —
            first 40 programs, 15 schools
          </span>
        </div>

        <div className="plans reveal">
          {TIERS.map((t) => (
            <div className={"plan" + (t.popular ? " popular" : "")} key={t.name}>
              {t.popular && <span className="plan-badge">Most popular</span>}
              <div className="plan-name">{t.name}</div>
              <div className="plan-for">{t.for}</div>
              <div className="plan-price">
                <span className="cur">$</span>
                <span className="amt">{t.price}</span>
                <span className="per">/year</span>
              </div>
              <div className="plan-list">
                Founding price · list <s>${t.list}/yr</s>
              </div>
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
                <a href="#access" className={"btn btn-block " + t.ctaCls}>
                  {t.cta} <Ico.arrow />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Whole department */}
        <div className="dept reveal">
          <div className="dept-head">
            <div>
              <h3>Whole athletic department</h3>
              <p>
                Full Suite for every program, plus school-wide inventory, budget, and staff
                visibility. Each sport counts as one program — boys and girls teams count separately.
              </p>
            </div>
            <span className="founding-note" style={{ alignSelf: "center" }}>
              33% off for life · founding schools
            </span>
          </div>
          <div className="dept-rows">
            {BANDS.map((b) => (
              <div className={"dept-row" + (b.talk ? " talk" : "")} key={b.band}>
                <span className="band">{b.band}</span>
                <span className="price">
                  {b.price}
                  {!b.talk && (
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--muted)",
                      }}
                    >
                      /yr
                    </span>
                  )}
                </span>
                {b.list && (
                  <span className="list">
                    list <s>{b.list}/yr</s>
                  </span>
                )}
                {b.talk && <span className="list">districts &amp; large departments</span>}
              </div>
            ))}
          </div>
        </div>

        <FoundingSpots />

        <p className="price-foot">
          Founding pricing locks your rate for the life of the account and is capped at the first 40
          programs and 15 schools. Department pricing is banded by program count. Custom pricing
          available for school districts with multiple schools.
        </p>
      </div>
    </section>
  );
}

const SPOTS = [
  { num: 40, total: 40, label: "Program spots left", claimed: 0, sub: "0 of 40 founding programs claimed" },
  { num: 15, total: 15, label: "School spots left", claimed: 0, sub: "0 of 15 founding schools claimed" },
];

function FoundingSpots() {
  return (
    <div className="spots reveal">
      {SPOTS.map((s) => (
        <div className="spot" key={s.label}>
          <div className="spot-top">
            <div className="spot-num">
              {s.num}
              <span className="of"> / {s.total}</span>
            </div>
            <div className="spot-label">{s.label}</div>
          </div>
          <div className="spot-bar">
            <i style={{ width: (s.claimed / s.total) * 100 + "%" }} />
          </div>
          <div className="spot-sub">{s.sub}</div>
        </div>
      ))}
    </div>
  );
}

const FAQ_ITEMS = [
  {
    q: 'What exactly is "one program"?',
    a: "One program is one sport, one gender, with all of its levels — freshman, JV, and varsity together. Boys' and girls' teams of the same sport are two separate programs; a true coed sport counts as one. You're never charged per level, and because everything lives under the program, an athlete's history follows them from one season to the next.",
  },
  {
    q: "How does founding pricing work?",
    a: "Founding members lock in 33% off the regular list price for the life of the account — it doesn't reset or step up later. It's capped at the first 40 programs and 15 schools, so once those spots are claimed, pricing returns to list.",
  },
  {
    q: "We run on spreadsheets and group texts today. Is switching painful?",
    a: "No. Most programs start with the one area that hurts most — usually inventory or scheduling — and import their existing roster and gear lists. You can grow into the other modules whenever you're ready; nothing has to migrate twice.",
  },
  {
    q: "Is this serious enough for a district procurement review?",
    a: "Yes. Roles and permissions, full audit trails, budget and spend reconciliation, and board-ready reporting are built in. Administrators get the visibility and accountability a purchase of this size requires — not just a coach's convenience tool.",
  },
  {
    q: "How is the whole-department price calculated?",
    a: "It's banded by the number of programs, where each sport counts as one program and boys' and girls' teams count separately. 1–10 programs, 11–20, and 21–30 each have a set annual price; 31+ programs or a multi-school district requires a custom quote.",
  },
  {
    q: "What do coaches actually do on their phones?",
    a: "The coach app is phone-first: messaging, attendance, schedules, game-day readiness, and quick gear actions all work from the sideline. Training workflows are tuned for an iPad rack-side, so loads and groups get captured while the lift is happening.",
  },
  {
    q: "Who built it, and who do we talk to?",
    a: "The Program Suite was built by a high school coach who ran a program on the same scattered tools you're trying to replace. When you reach out, you're often talking to the founding coach — not a call center.",
  },
];

function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head center reveal">
          <h2 className="h-display h2">Frequently asked questions</h2>
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

function FinalCta() {
  return (
    <section className="section final">
      <div className="container reveal">
        <h2 className="h-display">Your program deserves a system, not scraps.</h2>
        <p>
          Start with one program today, or bring the whole department onto one source of truth — and
          lock your founding rate while spots last.
        </p>
        <div className="final-actions">
          <a href="#access" className="btn btn-ink btn-lg">
            Claim a founding spot <Ico.arrow />
          </a>
          <a href="#pricing" className="btn btn-ghost btn-lg">
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}

function MobileBar() {
  return (
    <div className="mobile-bar">
      <div className="mb-info">
        <div className="t">Founding pricing — 33% off</div>
        <div className="s">40 of 40 program spots left</div>
      </div>
      <a href="#access" className="btn btn-primary">
        Start one program
      </a>
    </div>
  );
}

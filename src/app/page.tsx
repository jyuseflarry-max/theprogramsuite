import type { ReactNode } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Ico, ModIcon, type IcoName, type ModName } from "@/components/marketing/icons";
import { LeadForm } from "@/components/marketing/LeadForm";
import { Reveal } from "@/components/marketing/Reveal";
import { Photo, type PhotoId } from "@/components/marketing/Photo";

export default function LandingPage() {
  return (
    <div className="rx">
      <Reveal />
      <SiteNav />
      <Hero />
      <Problem />
      <Founder />
      <Platform />
      <Tools />
      {/* <Stories /> — hidden until we have real, attributable testimonials */}
      <LiveBetter />
      <Pricing />
      <LeadForm />
      <Faq />
      <Trust />
      <SiteFooter />
      <MobileBar />
    </div>
  );
}

/* ============================================================ Hero */
function Hero() {
  return (
    <header className="rx-hero">
      <div className="rx-hero-bg" aria-hidden="true">
        <span className="rx-hero-glow" />
        <span className="rx-hero-grid" />
      </div>
      <div className="container rx-hero-inner">
        <div className="rx-hero-copy reveal">
          <span className="rx-eyebrow rx-eyebrow--light">
            <span className="dot" /> Your program. Your way.
          </span>
          <h1 className="rx-display rx-h1">
            Give coaches the freedom to focus on
            <span className="rx-script rx-script--hero"> Changing Lives.</span>
          </h1>
          <p className="rx-lead rx-lead--light">
            You became a coach to build relationships, develop athletes, and leave a lasting
            impact. The Program Suite handles everything else — so the work that matters most is
            the work you get to do.
          </p>
          <div className="rx-hero-actions">
            <a href="#access" className="btn btn-primary btn-lg">
              <Ico.play /> Watch the story
            </a>
            <a href="#platform" className="btn btn-on-ink btn-ghost btn-lg">
              Explore the platform <Ico.arrow />
            </a>
          </div>
        </div>

        <div className="rx-hero-media reveal">
          <Photo
            id="hero-coach"
            ratio="4 / 5"
            label="Coach courtside at dusk, phone in hand"
            alt="A coach sitting courtside in an empty gym at dusk, checking The Program Suite on a phone"
            className="rx-hero-photo"
          />
          <div className="rx-hero-card" aria-hidden="true">
            <div className="rx-hc-head">
              <span className="rx-hc-dot" />
              Dashboard
            </div>
            <div className="rx-hc-row">
              <span className="rx-hc-k">Practice today</span>
              <span className="rx-hc-v">4:00 PM · Offensive install</span>
            </div>
            <div className="rx-hc-row">
              <span className="rx-hc-k">Roster availability</span>
              <span className="rx-hc-v rx-hc-good">18 / 22</span>
            </div>
            <div className="rx-hc-row">
              <span className="rx-hc-k">Equipment status</span>
              <span className="rx-hc-v rx-hc-good">All good</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="rx-stats reveal">
          {STATS.map((s) => {
            const Glyph = Ico[s.ico];
            return (
              <li key={s.t} className="rx-stat">
                <span className="rx-stat-ico">
                  <Glyph />
                </span>
                <span className="rx-stat-text">
                  <b>{s.t}</b>
                  <span>{s.d}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

const STATS: { ico: IcoName; t: string; d: string }[] = [
  { ico: "clock", t: "Hours saved", d: "Every single week" },
  { ico: "family", t: "More time for", d: "Family & friends" },
  { ico: "prep", t: "Better prepared", d: "Every practice" },
  { ico: "impact", t: "Stronger impact", d: "On & off the field" },
];

/* ============================================================ Problem */
const PROBLEM_TILES: { ico: IcoName; t: string }[] = [
  { ico: "apps", t: "Too many apps" },
  { ico: "hourglass", t: "Hours lost" },
  { ico: "chat", t: "Scattered comms" },
  { ico: "scatter", t: "Data everywhere" },
];

function Problem() {
  return (
    <section className="section rx-problem" id="why">
      <div className="container">
        <div className="rx-problem-grid">
          <div className="rx-problem-left reveal">
            <span className="rx-eyebrow rx-eyebrow--bad">The problem</span>
            <h2 className="rx-display rx-h2">
              More apps. More administration.
              <span className="rx-h2-gold"> Less coaching.</span>
            </h2>
            <p className="rx-lead">
              Coaches are buried in disconnected tools, manual work, and constant fires — stealing
              time from what matters most. Every spreadsheet, group text, and one-off app is one
              more thing between you and your athletes.
            </p>
            <ul className="rx-tiles">
              {PROBLEM_TILES.map((t) => {
                const Glyph = Ico[t.ico];
                return (
                  <li key={t.t} className="rx-tile">
                    <span className="rx-tile-ico">
                      <Glyph />
                    </span>
                    {t.t}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rx-problem-right reveal">
            <Photo
              id="problem-embrace"
              ratio="5 / 6"
              label="Coach hugging their child at home"
              alt="A coach embracing their young daughter at home, fully present"
              className="rx-problem-photo"
            />
            <div className="rx-moments">
              <h3 className="rx-display">
                The people who need your best aren&apos;t <i>only</i> on your roster.
              </h3>
              <ul className="rx-moments-list">
                <li>Every hour saved is another dinner together.</li>
                <li>Another bedtime story.</li>
                <li>Another game in the backyard.</li>
                <li>Another moment you don&apos;t get back.</li>
              </ul>
              <p className="rx-moments-tag">
                We protect the <span className="rx-h2-gold">moments that matter most.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ Founder */
function Founder() {
  return (
    <section className="section rx-founder" id="story">
      <div className="container">
        <div className="rx-founder-grid reveal">
          <div className="rx-founder-media">
            <Photo
              id="founder"
              ratio="4 / 5"
              label="Jyusef Larry, founder & head coach"
              alt="Jyusef Larry, founder and head coach"
              className="rx-founder-photo"
            />
          </div>
          <div className="rx-founder-body">
            <span className="rx-eyebrow rx-eyebrow--light">Why I built this</span>
            <h2 className="rx-display rx-h2">
              I built The Program Suite because <span className="rx-h2-gold">I live it.</span>
            </h2>
            <div className="rx-founder-text">
              <p>
                23 years ago I became a coach to change lives. Somewhere along the way, I found
                myself managing software instead of athletes — and missing the moments that
                mattered most.
              </p>
              <p>
                Nothing on the market was built for the way a program actually works, so I built
                it. The Program Suite is the all-in-one operating system I needed back then:
                designed by a coach, built for every coach.
              </p>
            </div>
            <div className="rx-sign">
              <span className="rx-sign-name rx-script">Jyusef Larry</span>
              <span className="rx-sign-role">Jyusef Larry · Founder &amp; Head Coach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ Platform (connected modules) */
const MODULES: { ico: ModName | null; gico?: IcoName; t: string }[] = [
  { ico: "practice", t: "Practice Planner" },
  { ico: null, gico: "chat", t: "Communication" },
  { ico: null, gico: "bolt", t: "Graphics" },
  { ico: "inventory", t: "Inventory" },
  { ico: null, gico: "handshake", t: "Sponsor Showcase" },
  { ico: "training", t: "Training" },
  { ico: "district", t: "Analytics" },
  { ico: "season", t: "Scheduling" },
];

// Even points around a circle (top, clockwise), as % within the ring box.
const RING_POS = [
  { x: 50, y: 3 },
  { x: 82, y: 16 },
  { x: 92, y: 50 },
  { x: 82, y: 84 },
  { x: 50, y: 97 },
  { x: 18, y: 84 },
  { x: 8, y: 50 },
  { x: 18, y: 16 },
];

function Platform() {
  return (
    <section className="section rx-platform" id="platform">
      <div className="container">
        <div className="rx-platform-grid">
          <div className="rx-platform-copy reveal">
            <span className="rx-eyebrow rx-eyebrow--light">One platform</span>
            <h2 className="rx-display rx-h2">
              One platform. <span className="rx-h2-gold">Everything connected.</span>
            </h2>
            <p className="rx-lead rx-lead--light">
              The all-in-one operating system built for athletic programs. Eight connected modules,
              one source of truth — start with what you need today and grow into the rest without
              migrating anything.
            </p>
            <a href="#tools" className="btn btn-primary btn-lg">
              See the platform <Ico.arrow />
            </a>
          </div>

          <div className="rx-ring reveal" aria-hidden="false">
            <div className="rx-ring-core">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/marketing/logo-mark.png" alt="The Program Suite" />
            </div>
            <svg className="rx-ring-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {RING_POS.map((p, i) => (
                <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} />
              ))}
            </svg>
            {MODULES.map((m, i) => {
              const p = RING_POS[i];
              const Glyph = m.gico ? Ico[m.gico] : null;
              return (
                <div
                  className="rx-node"
                  key={m.t}
                  style={{ left: p.x + "%", top: p.y + "%" }}
                >
                  <span className="rx-node-ico">
                    {m.ico ? <ModIcon name={m.ico} /> : Glyph ? <Glyph /> : null}
                  </span>
                  <span className="rx-node-t">{m.t}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ Tools */
const TOOLS: { id: PhotoId; t: string; line1: string; line2: string }[] = [
  { id: "tools-practice", t: "Practice Planner", line1: "Plan smarter.", line2: "Coach better." },
  { id: "tools-training", t: "Training", line1: "Build athletes.", line2: "Develop people." },
  { id: "tools-communication", t: "Communication", line1: "Connect staff,", line2: "players & parents." },
  { id: "tools-graphics", t: "Graphics", line1: "Create like a pro.", line2: "In minutes." },
  { id: "tools-inventory", t: "Inventory", line1: "Track everything.", line2: "Know what you have." },
];

function Tools() {
  return (
    <section className="section rx-tools" id="tools">
      <div className="container">
        <div className="section-head center reveal" style={{ margin: "0 auto", maxWidth: 720 }}>
          <span className="rx-eyebrow">Powerful tools. Simple to use.</span>
          <h2 className="rx-display rx-h2">Everything your program runs on, in one place.</h2>
          <p className="rx-lead">
            Pro-grade depth where you need it, an interface anyone on staff can pick up in an
            afternoon. Here&apos;s a look at the daily drivers.
          </p>
        </div>
        <div className="rx-tools-grid reveal">
          {TOOLS.map((tool) => (
            <article className="rx-tool" key={tool.t}>
              <div className="rx-tool-phone">
                <Photo
                  id={tool.id}
                  ratio="9 / 19"
                  label={tool.t + " screen"}
                  alt={tool.t + " on a phone"}
                  className="rx-tool-shot"
                />
              </div>
              <h3>{tool.t}</h3>
              <p>
                {tool.line1}
                <br />
                {tool.line2}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ Stories (HIDDEN)
   Hidden until real, attributable coach testimonials exist. Re-enable by
   uncommenting <Stories /> in LandingPage above and this block.
*/
/*
type Story = { id: PhotoId; quote: string; name: string; role: string };
const STORIES: Story[] = [
  {
    id: "story-1",
    quote:
      "The Program Suite has given me my Sundays back, so I can be present for my family — and my team.",
    name: "Michael H.",
    role: "Head Varsity Coach",
  },
  {
    id: "story-2",
    quote:
      "I replaced six apps and a stack of spreadsheets with one login. My staff actually uses it.",
    name: "Dana R.",
    role: "Athletic Director",
  },
  {
    id: "story-3",
    quote:
      "Game-day graphics that used to take an afternoon now take five minutes — and a local sponsor pays for the whole thing.",
    name: "Coach T. Alvarez",
    role: "Football",
  },
];

function Stories() {
  const featured = STORIES[0];
  return (
    <section className="section rx-stories" id="stories">
      <div className="container">
        <div className="section-head center reveal" style={{ margin: "0 auto" }}>
          <span className="rx-eyebrow rx-eyebrow--light">Coaches. Real stories. Real impact.</span>
        </div>
        <div className="rx-stories-grid reveal">
          <figure className="rx-quote">
            <span className="rx-quote-mark">
              <Ico.quote width="38" height="38" />
            </span>
            <blockquote>{featured.quote}</blockquote>
            <figcaption>
              <span className="rx-quote-name">{featured.name}</span>
              <span className="rx-quote-role">{featured.role}</span>
              <span className="rx-quote-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Ico.star key={i} width="15" height="15" />
                ))}
              </span>
            </figcaption>
          </figure>

          <div className="rx-stories-photos">
            <Photo id="story-1" ratio="4 / 3" label="Coach and athlete celebrate" alt="A coach and a young athlete celebrate together" className="rx-story-photo rx-story-lg" />
            <Photo id="story-2" ratio="1 / 1" label="Team huddle" alt="A team huddle" className="rx-story-photo" />
            <Photo id="story-3" ratio="1 / 1" label="Coach on the sideline" alt="A coach on the sideline" className="rx-story-photo" />
          </div>
        </div>

        <ul className="rx-stories-strip reveal">
          {STORIES.slice(1).map((s) => (
            <li key={s.name} className="rx-strip-card">
              <span className="rx-strip-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Ico.star key={i} width="13" height="13" />
                ))}
              </span>
              <p>&ldquo;{s.quote}&rdquo;</p>
              <span className="rx-strip-by">
                {s.name} · {s.role}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
*/

/* ============================================================ Live better */
function LiveBetter() {
  return (
    <section className="rx-live">
      <Photo
        id="live-better"
        ratio="16 / 7"
        label="Coach at the dinner table with family, laughing"
        alt="A coach at the dinner table laughing with their family"
        className="rx-live-photo"
        tone="dark"
      />
      <div className="rx-live-overlay">
        <div className="container">
          <div className="rx-live-copy reveal">
            <h2 className="rx-script rx-script--live">
              Coach better.
              <br />
              Lead better.
              <br />
              Live better.
            </h2>
            <p>
              The Program Suite gives you time back for the moments that matter most. Run the whole
              program from one place — and be home for the rest.
            </p>
            <div className="rx-live-actions">
              <a href="#access" className="btn btn-primary btn-lg">
                Request a demo <Ico.arrow />
              </a>
              <a href="#tools" className="btn btn-on-ink btn-ghost btn-lg">
                <Ico.play /> See how it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ Pricing (retained, restyled) */
type Tier = {
  name: string;
  popular: boolean;
  badge: string | null;
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
    name: "Command",
    popular: false,
    badge: "Most popular",
    for: "Everything you need to run the whole program day to day.",
    price: "800",
    list: "1,200",
    everything: null,
    feats: [
      "Athletes, roster & family access",
      "Schedule, attendance & game prep",
      "Practice planning + strength & training",
      "Inventory, gear & budget",
      "Staff roles, access & audit",
      "Messaging + fair-use AI",
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
    price: "1,600",
    list: "2,400",
    everything: "Everything in Command, plus",
    feats: [
      "Media gallery",
      "Content Studio",
      "Sponsorship sales",
      "Fundraising tools",
      "600 premium AI creations/yr (~50/mo)",
    ],
    hook: (
      <>
        Founding <b>Showcase</b> is just $800 more than Command — the revenue tools only need to earn
        that back to pay for themselves.
      </>
    ),
    cta: "Start Showcase",
    ctaCls: "btn-primary",
  },
];

const BANDS: {
  band: string;
  commandPrice?: string;
  commandList?: string;
  showPrice?: string;
  showList?: string;
  talk?: boolean;
}[] = [
  { band: "1–12 programs", commandPrice: "$6,000", commandList: "$9,000", showPrice: "$10,000", showList: "$15,000" },
  { band: "13–30 programs", commandPrice: "$10,000", commandList: "$15,000", showPrice: "$16,000", showList: "$24,000" },
  { band: "31+ or a district", talk: true },
];

function Pricing() {
  return (
    <section className="section rx-pricing" id="pricing">
      <div className="container">
        <div className="section-head center reveal" style={{ maxWidth: 820, margin: "0 auto" }}>
          <span className="rx-eyebrow">Pricing</span>
          <h2 className="rx-display rx-h2">Start with one program. Grow into the whole department.</h2>
          <p className="rx-lead">
            Every plan covers one full program — one sport, one gender, all levels — so an
            athlete&apos;s history follows them year over year. Boys&apos; and girls&apos; teams count as
            separate programs; a true coed sport is one.
          </p>
        </div>

        <div className="price-frame reveal" style={{ marginTop: 28, justifyContent: "center" }}>
          <span className="founding-note">
            <Ico.check width="15" height="15" /> Founding members lock in <b>33% off for life</b> —
            first 40 programs, 15 schools
          </span>
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

        <div className="dept reveal">
          <div className="dept-head">
            <div>
              <h3>Whole athletic department</h3>
              <p>
                Bring the whole department onto Command or Showcase, plus a department roll-up of
                inventory, budget, and staff for the AD. Each sport counts as one program; boys&apos;
                and girls&apos; teams count separately.
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
                {b.talk ? (
                  <>
                    <span className="price">Let&apos;s talk</span>
                    <span className="list">districts &amp; large departments</span>
                  </>
                ) : (
                  <>
                    <div className="dept-tier">
                      <span className="dept-tier-name">Command</span>
                      <span className="price sm">
                        {b.commandPrice}
                        <i>/yr</i>
                      </span>
                      <span className="list">
                        list <s>{b.commandList}/yr</s>
                      </span>
                    </div>
                    <div className="dept-tier">
                      <span className="dept-tier-name">Showcase</span>
                      <span className="price sm">
                        {b.showPrice}
                        <i>/yr</i>
                      </span>
                      <span className="list">
                        list <s>{b.showList}/yr</s>
                      </span>
                    </div>
                  </>
                )}
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
  { num: 37, total: 40, label: "Program spots left", claimed: 3, sub: "3 of 40 founding programs claimed" },
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

/* ============================================================ FAQ */
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
    <section className="section rx-faq" id="faq">
      <div className="container">
        <div className="section-head center reveal" style={{ margin: "0 auto" }}>
          <span className="rx-eyebrow">Questions</span>
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

/* ============================================================ Trust */
const TRUST: { ico: IcoName; t: string; d: string }[] = [
  { ico: "shield", t: "Trusted by coaches", d: "Across every sport" },
  { ico: "lock", t: "Secure & reliable", d: "Your data. Your program." },
  { ico: "whistle", t: "Built by a coach", d: "Backed by experience" },
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

/* ============================================================ Sticky mobile CTA */
function MobileBar() {
  return (
    <div className="mobile-bar">
      <div className="mb-info">
        <div className="t">Founding pricing — 33% off</div>
        <div className="s">37 of 40 program spots left</div>
      </div>
      <a href="#access" className="btn btn-primary">
        Request a demo
      </a>
    </div>
  );
}

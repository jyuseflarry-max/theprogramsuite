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
      <Truth />
      <Founder />
      <Platform />
      <GivesBack />
      <SneakPeek />
      {/* <Stories /> — hidden until we have real, attributable testimonials */}
      <TwoHours />
      <Pricing />
      <LeadForm />
      <Faq />
      <Trust />
      <SiteFooter />
    </div>
  );
}

/* ============================================================ Hero (full-bleed) */
function Hero() {
  return (
    <header className="rx-hero2">
      <Photo
        id="hero-field"
        ratio="16 / 9"
        tone="dark"
        label="Coach from behind on the field at night, team under the lights"
        alt="A coach seen from behind standing on a football field at night, his team in front under the stadium lights"
        className="rx-hero2-photo"
      />
      <div className="rx-hero2-overlay">
        <div className="container">
          <div className="rx-hero2-copy reveal">
            <h1 className="rx-display rx-h1">
              The system for
              <br />
              <span className="rx-h2-gold">Coaches.</span>
            </h1>
            <p className="rx-lead rx-lead--light">
              Everything your program needs. One platform. More coaching. Less administration.
            </p>
            <a href="#access" className="btn btn-primary btn-lg">
              Request a demo <Ico.arrow />
            </a>
          </div>
        </div>
        <span className="rx-hero2-script" aria-hidden="true">
          Built for <em>the moments</em>
          <br />
          that matter.
        </span>
      </div>
    </header>
  );
}

/* ============================================================ The Truth */
function Truth() {
  return (
    <section className="rx-truth" id="truth">
      <div className="container">
        <div className="rx-truth-inner reveal">
          <span className="rx-eyebrow rx-eyebrow--blue">The truth</span>
          <h2 className="rx-display rx-h2">
            Coaches don&apos;t need more software.
            <br />
            <span className="rx-h2-gold">
              They need one place where everything works together.
            </span>
          </h2>
          <p className="rx-lead rx-lead--light">
            That&apos;s why we built The Program Suite — an all-in-one system that
            simplifies your day, connects your entire program, and gives you the time back that
            matters most.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ Problem */
const PROBLEM_TILES: { ico: IcoName; t: string }[] = [
  { ico: "apps", t: "Too many apps" },
  { ico: "hourglass", t: "Hours lost" },
  { ico: "chat", t: "Scattered comms" },
  { ico: "scatter", t: "Data everywhere" },
];

function Problem() {
  return (
    <section className="rx-problem2" id="why">
      <Photo
        id="problem-buried"
        ratio="16 / 10"
        tone="dark"
        label="Coach buried in tablets, a laptop, phones & paperwork at his desk"
        alt="A stressed coach at a cluttered desk surrounded by tablets, a laptop, phones, sticky notes, and binders"
        className="rx-problem2-photo"
      />
      <div className="rx-problem2-overlay">
        <div className="container">
          <div className="rx-problem2-copy reveal">
            <span className="rx-eyebrow rx-eyebrow--bad">The problem</span>
            <h2 className="rx-display rx-h2">
              More apps.
              <br />
              More administration.
              <br />
              <span className="rx-h2-gold">Less coaching.</span>
            </h2>
            <p className="rx-lead rx-lead--light">
              Coaches are buried in disconnected tools, manual work, and constant fires — stealing
              time from what matters most. Every spreadsheet, group text, and one-off app is one
              more thing between you and your athletes.
            </p>
            <ul className="rx-problem2-tiles">
              {PROBLEM_TILES.map((t) => {
                const Glyph = Ico[t.ico];
                return (
                  <li key={t.t} className="rx-tile2">
                    <span className="rx-tile-ico">
                      <Glyph />
                    </span>
                    {t.t}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ Founder */
function Founder() {
  return (
    <section className="rx-founder2" id="story">
      <Photo
        id="founder-wide"
        ratio="16 / 9"
        tone="dark"
        label="The founding coach in a team huddle (wide)"
        alt="Jyusef Larry, founder and head coach, in a huddle with his team"
        className="rx-founder2-photo"
      />
      <div className="rx-founder2-overlay">
        <div className="container">
          <div className="rx-founder2-body reveal">
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
                it. The Program Suite is the all-in-one system I needed back then:
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
  { ico: "practice", t: "Practice" },
  { ico: "training", t: "Athlete Development" },
  { ico: null, gico: "chat", t: "Communication" },
  { ico: "season", t: "Scheduling" },
  { ico: "athlete", t: "Team Management" },
  { ico: "district", t: "Analytics" },
  { ico: "inventory", t: "Operations" },
  { ico: null, gico: "picture", t: "Media" },
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
            <span className="rx-eyebrow rx-eyebrow--blue">The solution</span>
            <h2 className="rx-display rx-h2">
              One platform.
              <br />
              <span className="rx-h2-blue">Every part</span> of your program.
            </h2>
            <p className="rx-lead">
              All the systems you need. Working together. In real time — one source of truth for
              your staff, athletes, and families.
            </p>
            <a href="#tools" className="btn btn-primary btn-lg">
              See the platform <Ico.arrow />
            </a>
          </div>

          <div className="rx-ring reveal" aria-hidden="false">
            <div className="rx-ring-core">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/marketing/logo-mark.png" alt="The Program Suite" />
              <span className="rx-ring-core-t">The Program Suite</span>
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
                  <span className="rx-node-t">
                    {m.t}
                    <small>System</small>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ What it gives you back */
const GIVES: { id: PhotoId; ico: IcoName; t: string; d: string }[] = [
  {
    id: "gives-coach",
    ico: "whistle",
    t: "You coach. We'll handle the busy work.",
    d: "Save hours every week by automating the administration.",
  },
  {
    id: "gives-athletes",
    ico: "users",
    t: "Your athletes deserve your attention.",
    d: "More intentional time to develop, connect, and lead.",
  },
  {
    id: "gives-family",
    ico: "family",
    t: "Your family deserves your evenings.",
    d: "Get the moments back that you can't get anywhere else.",
  },
  {
    id: "gives-consistency",
    ico: "impact",
    t: "Great programs are built with consistency.",
    d: "Stay organized, align your staff, and elevate your entire culture.",
  },
];

function GivesBack() {
  return (
    <section className="rx-gives" id="gives">
      <div className="container">
        <div className="rx-gives-head reveal">
          <span className="rx-eyebrow rx-eyebrow--blue">What it gives you back</span>
        </div>
      </div>
      <div className="rx-gives-grid reveal">
        {GIVES.map((g) => {
          const Glyph = Ico[g.ico];
          return (
            <article className="rx-give" key={g.t}>
              <Photo
                id={g.id}
                ratio="3 / 4"
                tone="dark"
                label={g.t}
                alt={g.t}
                className="rx-give-photo"
              />
              <div className="rx-give-body">
                <span className="rx-give-ico">
                  <Glyph />
                </span>
                <h3 className="rx-display">{g.t}</h3>
                <p>{g.d}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ============================================================ Sneak peek (product) */
function SneakPeek() {
  return (
    <section className="section rx-peek" id="tools">
      <div className="container">
        <div className="rx-peek-grid">
          <div className="rx-peek-copy reveal">
            <span className="rx-eyebrow rx-eyebrow--blue">A sneak peek</span>
            <h2 className="rx-display rx-h2">Powerful. Simple. Built for coaches.</h2>
            <p className="rx-lead rx-lead--light">
              A modern experience designed to bring clarity to your day and focus back to your
              program — on the web and in your pocket.
            </p>
          </div>
          <div className="rx-peek-media reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rx-peek-dash"
              src="/images/practice-dashboard-hero.png"
              alt="The Program Suite web dashboard"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rx-peek-phone"
              src="/images/current-app/mobile-home.png"
              alt="The Program Suite mobile app"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ Two hours back (CTA) */
const TWO_HOURS: { ico: IcoName; t: string }[] = [
  { ico: "whistle", t: "Coach more" },
  { ico: "film", t: "Study film" },
  { ico: "utensils", t: "Eat dinner together" },
  { ico: "heart", t: "Watch them play" },
  { ico: "moon", t: "Rest" },
];

function TwoHours() {
  return (
    <section className="rx-twohours" id="cta">
      <Photo
        id="cta-sunset"
        ratio="16 / 7"
        tone="dark"
        label="Coach walking off the field at sunset with a child"
        alt="A coach walking off the field at sunset holding a child's hand"
        className="rx-twohours-photo"
      />
      <div className="rx-twohours-overlay">
        <div className="container rx-twohours-grid">
          <div className="rx-twohours-copy reveal">
            <h2 className="rx-display rx-h2">
              Imagine getting <span className="rx-h2-gold">two hours</span> of your week back.
            </h2>
            <p className="rx-twohours-q">What would you do with them?</p>
            <ul className="rx-twohours-icons">
              {TWO_HOURS.map((i) => {
                const Glyph = Ico[i.ico];
                return (
                  <li key={i.t}>
                    <span className="rx-th-ico">
                      <Glyph />
                    </span>
                    {i.t}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="rx-twohours-card reveal">
            <p>
              Be the first to see <b>The Program Suite</b> in action.
            </p>
            <a href="#access" className="btn btn-primary btn-lg btn-block">
              Request a demo <Ico.arrow />
            </a>
            <a href="#access" className="rx-waitlist">
              Or join the waitlist <Ico.arrow width="14" height="14" />
            </a>
          </div>
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

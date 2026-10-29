import type { ReactNode } from "react";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Ico, type IcoName } from "@/components/marketing/icons";
import { LeadForm } from "@/components/marketing/LeadForm";
import { PlanPrefill } from "@/components/marketing/PlanPrefill";
import { Reveal } from "@/components/marketing/Reveal";
import { HeroV3 } from "@/components/marketing/HeroV3";
import { ModuleModal, type ModDetail } from "@/components/marketing/ModuleModal";
import { JsonLd } from "@/components/StructuredData";
import { PRODUCT_CATALOG, formatAnnualPrice } from "@/lib/product-catalog";
import { AnnualPricing } from "./AnnualPricing";
import { PackageCarousel } from "./PackageCarousel";

type Presentation = { tint: string; ico: ReactNode; media: ReactNode; detail: ModDetail };

function CardShot({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} fill sizes="(max-width: 640px) 85vw, (max-width: 1200px) 45vw, 520px" />;
}

function ProductShot({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} width={1440} height={900} sizes="(max-width: 900px) 92vw, 620px" style={{ width: "100%", height: "auto" }} />;
}

const glyphs = {
  practice: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3v3h6V3M8.5 11h7M8.5 15h5" /></svg>,
  strength: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h3M19 12h3M7 12h10" /><rect x="4" y="8" width="3" height="8" rx="1" /><rect x="17" y="8" width="3" height="8" rx="1" /></svg>,
  inventory: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8l-9-5-9 5v8l9 5 9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /></svg>,
  scouting: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 5h16v11H4zM8 20h8M12 16v4" /><path d="m9 9 2 2 4-4" /></svg>,
};

const PRESENTATION: Record<string, Presentation> = {
  practice: {
    tint: "#007a5c", ico: glyphs.practice,
    media: <CardShot src="/marketing/screens/cards/practice-photo.jpg" alt="A coach running practice on the field" />,
    detail: { headline: "Plan the practice. Run it from the field.", lead: "Build the day from drills and templates, execute it live, and carry the result into reports.", bullets: [{ head: "Plan", body: "Build reusable practice plans from drills and templates." }, { head: "Run", body: "Keep the staff on the same period with live execution and boards." }, { head: "Review", body: "Use practice reports to improve the next session." }], media: <div className="v3-spot-media"><ProductShot src="/marketing/screens/practice-planner.png" alt="The Practice planner with timed blocks and drills" /></div> },
  },
  strength: {
    tint: "#e8590c", ico: glyphs.strength,
    media: <CardShot src="/marketing/screens/cards/training-photo.jpg" alt="Athletes training in a school weight room" />,
    detail: { headline: "Program the room. Understand the work.", lead: "Build programs from workouts and exercises, run sessions, capture testing, and understand athlete training load.", bullets: [{ head: "Program", body: "Build training programs from reusable workouts and exercises." }, { head: "Execute", body: "Run training sessions with the groups and assignments the room needs." }, { head: "Measure", body: "Capture testing and training load in the same workflow." }], media: <div className="v3-spot-media"><ProductShot src="/marketing/screens/training-planner.png" alt="The Performance training planner" /></div> },
  },
  inventory: {
    tint: "#8e6b3a", ico: glyphs.inventory,
    media: <CardShot src="/marketing/screens/cards/inventory-photo.jpg" alt="A school athletics inventory room" />,
    detail: { headline: "Every item accounted for.", lead: "Size athletes, catalog physical items, issue and collect, track custody and counts, plan maintenance, and purchase what is short.", bullets: [{ head: "Issue and collect", body: "Match items to athlete sizes and keep custody history." }, { head: "Count and maintain", body: "Track storage, physical counts, loans, reservations, and maintenance." }, { head: "Purchase", body: "Turn shortages into purchasing needs with the item history intact." }], media: <div className="v3-spot-media"><ProductShot src="/marketing/screens/buying-needs.png" alt="Inventory buying needs and purchasing plan" /></div>, ctas: <a href="/inventory" className="v3-spot-alt">Explore Inventory</a> },
  },
  scouting_film_analytics: {
    tint: "#5b52a3", ico: glyphs.scouting,
    media: <CardShot src="/marketing/screens/cards/strategy-photo.jpg" alt="A coaching staff reviewing strategy" />,
    detail: { headline: "Teach the system. Prepare with purpose.", lead: "Connect playbooks, opponent scouting, and film review in one teaching workspace.", bullets: [{ head: "Scout", body: "Organize opponent information and scouting reports." }, { head: "Review", body: "Keep film review in the same staff workflow." }, { head: "Teach", body: "Assign clips and installs, then check understanding with quizzes." }], media: <div className="v3-spot-media"><ProductShot src="/marketing/screens/strategy-playbook.png" alt="The scouting and strategy workspace" /></div>, ctas: <a href="/strategy-film" className="v3-spot-alt">Explore Strategy &amp; Film</a> },
  },
  live_game_analytics: {
    tint: "#0b7285", ico: glyphs.scouting,
    media: <CardShot src="/marketing/screens/cards/gameday-photo.jpg" alt="Game-day coaching and capture" />,
    detail: { headline: "Capture the possession. See the game.", lead: "Live Game & Analytics is built for basketball: capture events as they happen and turn them into player, team, and lineup insight.", bullets: [{ head: "Capture", body: "Log basketball events and possessions with immediate live updates." }, { head: "Analyze", body: "Review player and team stats, shot charts, lineups, and season reports." }, { head: "Review", body: "Keep the staff connected through live basketball dashboards." }], ctas: <a href="/live-game-analytics" className="v3-spot-alt">Explore Live Game &amp; Analytics</a> },
  },
};

export function ModularLandingPage() {
  const modalProducts = PRODUCT_CATALOG.map((product) => ({ ...product, desc: product.description, chip: formatAnnualPrice(product.price), ...PRESENTATION[product.id] }));
  return <div className="rx"><Reveal /><PlanPrefill /><SiteNav /><HeroV3 /><ProductGrid /><ModuleModal modules={modalProducts} /><ConnectedWorkspace /><AnnualPricing /><Growth /><LeadForm /><Faq /><CtaBand /><Trust /><SiteFooter /></div>;
}

function ProductGrid() {
  return (
    <section className="v3-platform" id="platform">
      <div className="container">
        <div className="v3-sec-head reveal">
          <h2 className="rx-display v3-h2">Five packages. One connected platform.</h2>
          <p>Core is included with every package. Start with one or combine the tools your program needs.</p>
        </div>
        <PackageCarousel names={PRODUCT_CATALOG.map((product) => product.name)}>
          {PRODUCT_CATALOG.map((product) => {
            const presentation = PRESENTATION[product.id];
            return (
              <a className="v3-card" href={`?m=${product.slug}`} data-module={product.slug} key={product.id} id={product.slug} aria-haspopup="dialog">
                <div className="v3-card-media">{presentation.media}</div>
                <div className="v3-card-body">
                  <div className="v3-card-top">
                    <span className="v3-mod-ico" style={{ background: presentation.tint, color: "#fff" }}>{presentation.ico}</span>
                    <h3>{product.name}</h3>
                    <span className="v3-chip">{formatAnnualPrice(product.price)}</span>
                  </div>
                  <p>{product.description}</p>
                  <ul className="product-feature-list">{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <span className="v3-card-link">See what&apos;s included <Ico.arrow width="13" height="13" /></span>
                </div>
              </a>
            );
          })}
        </PackageCarousel>
      </div>
    </section>
  );
}

const CONNECTIONS = [{ title: "Choose the job", body: "Choose Practice, Performance, Strategy & Film, Live Game & Analytics, or Inventory." }, { title: "Keep one foundation", body: "Every purchased product uses the same rosters, schedules, trips, meals, forms, messaging, and family access." }, { title: "See only what matters", body: "Add the specialist tools your program needs. Core keeps people, communication, and scheduling connected." }, { title: "Add products later", body: "Combine products with simple additive annual pricing when another area is ready." }];

function ConnectedWorkspace() {
  return <section className="section connected-workspace"><div className="container"><div className="section-head center reveal"><h2 className="rx-display rx-h2">One workspace, shaped around your program.</h2><p className="rx-lead">Five focused packages share one included Core.</p></div><ol className="connection-grid reveal">{CONNECTIONS.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.body}</p></li>)}</ol></div></section>;
}

function Growth() {
  return <section className="section growth-band"><div className="container growth-grid reveal"><div><p className="eyebrow"><span className="dot" />Choose What You Need</p><h2 className="rx-display rx-h2">Start focused. Add another product when it fits.</h2></div><div><p>Package prices add together, with Core included at no extra charge. Start with the work that matters today and add another package when your program needs it.</p><a className="btn btn-primary" href="#access">Request a Demo <Ico.arrow /></a></div></div></section>;
}

const FAQ_ITEMS = [
  { q: "Do we have to buy all five packages?", a: "No. Choose one package or combine several. Practice is $250/year, Performance is $500/year, Strategy & Film is $250/year, Live Game & Analytics is $250/year, and Inventory is $400/year. Each includes Core." },
  { q: "What does per program mean?", a: "A program covers one sport and its teams, such as Varsity, JV, and Freshman. Prices are per program, per year, billed annually in USD." },
  { q: "How does additive pricing work?", a: "Add the annual prices of your selected packages. Practice plus Performance is $750/year; all five packages are $1,650/year. Core has no separate charge. These totals do not assume a bundle discount." },
  { q: "What is included in Core?", a: "Core includes rosters, accounts, invitations, communication, scheduling, calendars, basic results, attendance and absences, manual Athlete Care, Game Operations, Travel & Meals, and Public Presence. Optional Core tools can be turned on as needed." },
  { q: "Can we buy Core by itself?", a: "Core is included with a paid package and is not sold separately." },
  { q: "Does Practice include uploaded drill videos?", a: "Practice includes YouTube and Vimeo drill links. Uploaded drill videos require Strategy & Film and use the same shared hosted video allowance as Film and Playbook." },
  { q: "What video allowance comes with Strategy & Film?", a: "Each annual subscription includes 10 hours of new uploads, 10 hours stored at once, and 10,000 delivered playback minutes across viewers, at Basic 1080p. Sharing one uploaded asset between Film, Playbook, and Practice counts it once. YouTube and Vimeo links are unlimited." },
  { q: "Which sports does Live Game & Analytics support?", a: "Live Game & Analytics currently supports basketball only. Core includes basic scheduling, scores, and results for every program; live event capture, shot charts, and basketball analytics are in the paid package." },
];

const FAQ_SCHEMA = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_ITEMS.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };

function Faq() {
  return <section className="section rx-faq" id="faq"><JsonLd data={FAQ_SCHEMA} /><div className="container"><div className="section-head center reveal" style={{ margin: "0 auto" }}><h2 className="rx-display rx-h2">Frequently Asked Questions</h2></div><div className="faq-list reveal">{FAQ_ITEMS.map((item) => <details className="faq-item" key={item.q}><summary className="faq-q"><span>{item.q}</span><span className="faq-ico">+</span></summary><div className="faq-a">{item.a}</div></details>)}</div></div></section>;
}

function CtaBand() {
  return <section className="v3-cta"><div className="container reveal"><h2 className="rx-display v3-cta-h2">Choose the right tools for <em>your</em> program.</h2><p>A focused walkthrough with people who have run programs—not a call center.</p><a className="btn btn-lg v3-cta-btn" href="#access">Request a Demo <Ico.arrow /></a></div></section>;
}

const TRUST: { ico: IcoName; t: string; d: string }[] = [{ ico: "shield", t: "Built for schools", d: "Roles, records, and privacy" }, { ico: "lock", t: "One connected platform", d: "Shared people and operations" }, { ico: "whistle", t: "Built by coaches", d: "For real program work" }, { ico: "devices", t: "Web & mobile", d: "Office to sideline" }];

function Trust() {
  return <section className="rx-trust"><div className="container"><ul className="rx-trust-grid reveal">{TRUST.map((item) => { const Glyph = Ico[item.ico]; return <li key={item.t} className="rx-trust-item"><span className="rx-trust-ico"><Glyph /></span><span className="rx-trust-text"><b>{item.t}</b><span>{item.d}</span></span></li>; })}</ul></div></section>;
}

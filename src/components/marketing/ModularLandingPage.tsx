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
import { PRODUCT_CATALOG, formatAnnualPrice, productLeadHref } from "@/lib/product-catalog";

type Presentation = { tint: string; ico: ReactNode; media: ReactNode; detail: ModDetail };

function CardShot({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} fill sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw" />;
}

function ProductShot({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} width={1440} height={900} sizes="(max-width: 900px) 92vw, 620px" style={{ width: "100%", height: "auto" }} />;
}

const glyphs = {
  practice: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3v3h6V3M8.5 11h7M8.5 15h5" /></svg>,
  strength: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h3M19 12h3M7 12h10" /><rect x="4" y="8" width="3" height="8" rx="1" /><rect x="17" y="8" width="3" height="8" rx="1" /></svg>,
  inventory: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 8l-9-5-9 5v8l9 5 9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /></svg>,
  scouting: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 5h16v11H4zM8 20h8M12 16v4" /><path d="m9 9 2 2 4-4" /></svg>,
  travel: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 17h14M7 17l1-9h8l1 9M10 8V5h4v3" /><circle cx="8" cy="20" r="1" /><circle cx="16" cy="20" r="1" /></svg>,
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
    detail: { headline: "Program the room. Understand the work.", lead: "Build programs from workouts and exercises, run sessions, capture testing, and understand athlete training load.", bullets: [{ head: "Program", body: "Build training programs from reusable workouts and exercises." }, { head: "Execute", body: "Run training sessions with the groups and assignments the room needs." }, { head: "Measure", body: "Capture testing and training load in the same workflow." }], media: <div className="v3-spot-media"><ProductShot src="/marketing/screens/training-planner.png" alt="The Strength and Conditioning training planner" /></div> },
  },
  inventory: {
    tint: "#8e6b3a", ico: glyphs.inventory,
    media: <CardShot src="/marketing/screens/cards/inventory-photo.jpg" alt="A school athletics inventory room" />,
    detail: { headline: "Every item accounted for.", lead: "Size athletes, catalog physical items, issue and collect, track custody and counts, plan maintenance, and purchase what is short.", bullets: [{ head: "Issue and collect", body: "Match items to athlete sizes and keep custody history." }, { head: "Count and maintain", body: "Track storage, physical counts, loans, reservations, and maintenance." }, { head: "Purchase", body: "Turn shortages into purchasing needs with the item history intact." }], media: <div className="v3-spot-media"><ProductShot src="/marketing/screens/buying-needs.png" alt="Inventory buying needs and purchasing plan" /></div>, ctas: <a href="/inventory" className="v3-spot-alt">Explore Inventory</a> },
  },
  scouting_film_analytics: {
    tint: "#5b52a3", ico: glyphs.scouting,
    media: <CardShot src="/marketing/screens/cards/strategy-photo.jpg" alt="A coaching staff reviewing strategy" />,
    detail: { headline: "See the opponent. Review the film. Learn from the work.", lead: "Keep scouting, film, and analysis together so the staff can prepare and review from one focused product.", bullets: [{ head: "Scout", body: "Organize opponent information and scouting reports." }, { head: "Review", body: "Keep film review in the same staff workflow." }, { head: "Analyze", body: "Use performance analysis to support the next decision." }], media: <div className="v3-spot-media"><ProductShot src="/marketing/screens/strategy-playbook.png" alt="The scouting and strategy workspace" /></div>, ctas: <a href="/scouting-film-analytics" className="v3-spot-alt">Explore Scouting, Film &amp; Analytics</a> },
  },
  travel_meals: {
    tint: "#0b7285", ico: glyphs.travel,
    media: <CardShot src="/marketing/screens/cards/gameday-photo.jpg" alt="A team preparing to travel for a game" />,
    detail: { headline: "Move the team without losing the details.", lead: "Coordinate trips, itineraries, and team meals in one focused product connected to the same roster and communication foundation.", bullets: [{ head: "Plan", body: "Keep trip plans and itineraries organized." }, { head: "Coordinate", body: "Give staff one place for travel details." }, { head: "Feed the team", body: "Collect and coordinate team meal orders." }], media: <div className="v3-spot-media"><ProductShot src="/marketing/screens/game-day.png" alt="The connected team planning workspace" /></div>, ctas: <a href="/travel-meals" className="v3-spot-alt">Explore Travel &amp; Meals</a> },
  },
};

export function ModularLandingPage() {
  const modalProducts = PRODUCT_CATALOG.map((product) => ({ ...product, desc: product.description, ...PRESENTATION[product.id] }));
  return <div className="rx"><Reveal /><PlanPrefill /><SiteNav /><HeroV3 /><ProductGrid /><ModuleModal modules={modalProducts} /><IncludedOperations /><ConnectedWorkspace /><PricingSection /><Growth /><LeadForm /><Faq /><CtaBand /><Trust /><SiteFooter /></div>;
}

function ProductGrid() {
  return <section className="v3-platform" id="platform"><div className="container"><div className="v3-sec-head reveal"><h2 className="rx-display v3-h2">Five products. One connected platform.</h2><p>Choose only the focused products your program needs. Every selection works from the same included team and athlete operations foundation.</p></div><div className="v3-grid v3-grid--products">{PRODUCT_CATALOG.map((product) => { const presentation = PRESENTATION[product.id]; return <a className="v3-card reveal" href={`?m=${product.slug}`} data-module={product.slug} key={product.id} id={product.slug}><div className="v3-card-media">{presentation.media}</div><div className="v3-card-body"><div className="v3-card-top"><span className="v3-mod-ico" style={{ background: presentation.tint, color: "#fff" }}>{presentation.ico}</span><h3>{product.name}</h3><span className="v3-chip">{formatAnnualPrice(product.price)}</span></div><p>{product.description}</p><ul className="product-feature-list">{product.features.slice(0, 4).map((feature) => <li key={feature}>{feature}</li>)}</ul><span className="v3-card-link">See what&apos;s included <Ico.arrow width="13" height="13" /></span></div></a>; })}</div></div></section>;
}

const OPERATIONS = ["Athlete and roster management", "Teams and staff", "Athlete profiles", "Health, readiness, and availability", "Return-to-play coordination", "Game schedules, opponents, and results", "Communication and shared operational tools"];

export function IncludedOperations() {
  return <section className="section included-ops" id="included"><div className="container included-ops-grid"><div className="reveal"><p className="eyebrow"><span className="dot" />Included With Every Product</p><h2 className="rx-display rx-h2">Team &amp; Athlete Operations is the shared foundation.</h2><p className="rx-lead">Every purchase includes Team &amp; Athlete Operations—the shared foundation for managing your roster, staff, athlete availability, communication, and season. It is not a sixth product and is not sold by itself.</p><a className="btn btn-ghost" href="/team-athlete-operations">Explore the Included Foundation <Ico.arrow /></a></div><ul className="included-ops-list reveal">{OPERATIONS.map((item) => <li key={item}><Ico.check width="16" height="16" />{item}</li>)}</ul></div></section>;
}

const CONNECTIONS = [{ title: "Choose the job", body: "Select Practice, Strength & Conditioning, Inventory, Scouting, Film & Analytics, or Travel & Meals." }, { title: "Keep one foundation", body: "Every purchased product uses the same roster, athlete profiles, staff access, communication, and season." }, { title: "See only what matters", body: "Choose only the paid products your program needs without presenting the shared foundation as another plan." }, { title: "Add products later", body: "Combine products with simple additive annual pricing when another area is ready." }];

function ConnectedWorkspace() {
  return <section className="section connected-workspace"><div className="container"><div className="section-head center reveal"><h2 className="rx-display rx-h2">One workspace, shaped around your program.</h2><p className="rx-lead">Five focused products share one included operational foundation.</p></div><ol className="connection-grid reveal">{CONNECTIONS.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.body}</p></li>)}</ol></div></section>;
}

export function PricingSection() {
  return <section className="section rx-pricing" id="pricing"><div className="container"><div className="section-head center reveal" style={{ maxWidth: 820, margin: "0 auto" }}><p className="eyebrow"><span className="dot" />Simple Additive Pricing</p><h2 className="rx-display rx-h2">Choose the tools your program needs.</h2><p className="rx-lead">Every product is $250 per program, per year. Choose one or combine several. Team &amp; Athlete Operations is included with every purchase.</p></div><div className="plans plans--products reveal">{PRODUCT_CATALOG.map((product) => <article className="plan" key={product.id}><div className="plan-name">{product.name}</div><div className="plan-for">{product.description}</div><div className="plan-price"><span className="cur">$</span><span className="amt">{product.price}</span><span className="per">/year</span></div><div className="plan-qualifier">Per program</div><hr className="div" /><ul className="plan-feats">{product.features.map((feature) => <li key={feature}><Ico.check className="ck" width="15" height="15" />{feature}</li>)}</ul><div className="plan-cta"><a href={productLeadHref(product.id)} data-product={product.id} className="btn btn-block btn-primary">Choose {product.name} <Ico.arrow /></a></div></article>)}</div><div className="pricing-examples reveal" aria-label="Example additive product totals"><h3>How additive pricing works</h3><div className="pricing-example-grid"><div><span>One product</span><strong>$250/year</strong></div><div><span>Any two products</span><strong>$500/year</strong></div><div><span>All five products</span><strong>$1,250/year</strong></div></div><p>Prices add together. These examples are not separately named bundles and do not include a bundle discount.</p></div></div></section>;
}

function Growth() {
  return <section className="section growth-band"><div className="container growth-grid reveal"><div><p className="eyebrow"><span className="dot" />Choose What You Need</p><h2 className="rx-display rx-h2">Start focused. Add another product when it fits.</h2></div><div><p>Each product costs the same $250 per program, per year. The shared Team &amp; Athlete Operations foundation is included with the first product and remains connected as you add more.</p><a className="btn btn-primary" href="#access">Request a Demo <Ico.arrow /></a></div></div></section>;
}

const FAQ_ITEMS = [{ q: "Do we have to buy all five products?", a: "No. Choose only the product or products your program needs. Each product is $250 per program, per year." }, { q: "How does additive pricing work?", a: "One product is $250/year, any two products are $500/year, and all five products are $1,250/year. These are additive totals, not discounted bundles." }, { q: "What is included with every product?", a: "Team & Athlete Operations is included with every purchase: athlete and roster management, teams and staff, athlete profiles, health, readiness and availability, return-to-play coordination, game schedules, opponents and results, communication, and shared operational tools." }, { q: "Can we buy Team & Athlete Operations by itself?", a: "No. It is the shared foundation included with a product purchase, not a standalone product or free plan." }, { q: "Where do game schedules, opponents, and results belong?", a: "They are part of the included Team & Athlete Operations foundation. Scouting, Film & Analytics focuses on preparation and review; Travel & Meals focuses on trip and meal coordination." }, { q: "Are these five separate apps?", a: "No. They are five selectable products inside one connected platform, using the same included team and athlete operations foundation." }];

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

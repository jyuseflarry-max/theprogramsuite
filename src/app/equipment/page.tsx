import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowBtn, Eyebrow } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Athletic Equipment & Inventory Management Software | The Program Suite",
  description:
    "Track, issue, collect, and settle team gear — with QR labels, automatic lost-gear fees, athlete and family visibility, and AD roll-ups. Inventory is one module of a platform that runs the whole program.",
};

/* The six spoken jobs of the equipment room, in lifecycle order. */
const JOBS: { t: string; d: string }[] = [
  { t: "Catalog", d: "Every item type in one place — serialized units for helmets and jerseys, counted stock for cones and tape, consumables for the gear that never comes back." },
  { t: "Issue", d: "Hand out a full kit per athlete, size-matched from the roster's own sizes. Scan a QR label or tap a name — either way it's logged." },
  { t: "Track", d: "Walk the storage room with your phone. Recount stock, hand out consumables, and see exactly what's out and with whom." },
  { t: "Collect", d: "Check-in shows only the athletes who still have gear out. Everyone else collapses to one quiet line." },
  { t: "Reconcile", d: "Lost or damaged at check-in? The fee is already created. Settle it, waive it, or let clearance hold until it's resolved." },
  { t: "Purchase", d: "Buying needs roll up from what's short. Purchase orders carry vendors, unit costs, and budget categories — receiving restocks automatically." },
];

const DEEPER: { t: string; d: string }[] = [
  {
    t: "Fees create themselves",
    d: "Marking a helmet Lost at check-in creates the replacement fee in the same motion — with the item, size, and value already on it. Nobody transcribes a clipboard into a spreadsheet in June.",
  },
  {
    t: "Athletes and families see what they owe",
    d: "Every athlete — and every parent — can open the app or the web and see exactly what's checked out to them and any fee that's open. Gear comes back faster when the list isn't a secret.",
  },
  {
    t: "Labels you print are labels you scan",
    d: "Print QR labels for units and kits straight from the app, then scan them at handout and check-in. Checkout takes seconds, and the audit trail writes itself.",
  },
  {
    t: "Consumables don't pollute collection",
    d: "Mouthguards and tape are handed out, not loaned. Mark an item consumable and handing it out simply decrements stock through a logged movement — it never shows up as something to chase.",
  },
  {
    t: "The AD sees every program at once",
    d: "A department roll-up shows issued gear, losses, open fees, and replacement risk across every sport — exportable for the principal, the board, or the booster club.",
  },
  {
    t: "It already knows your roster",
    d: "No spreadsheet import to start a season. Sizes come from athlete profiles, fees notify families through the same messaging the program already uses, and clearance ties into the rest of the platform.",
  },
];

export default function EquipmentPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <SiteNav />

      {/* Title band */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Equipment &amp; Inventory</Eyebrow></div>
          <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 104px)" }}>
            The equipment room, <span className="headline-italic">run like a program.</span>
          </h1>
          <p className="mt-6 max-w-[720px] text-[17px] leading-[1.65] text-[color:var(--color-muted)]">
            Unreturned gear quietly costs programs thousands every year — and chasing it costs the
            coach a season of evenings. The Program Suite runs the whole gear lifecycle: catalog it,
            issue it, track it, collect it, settle the fees, and reorder what&apos;s short.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ArrowBtn href="/#access" large>Request a demo</ArrowBtn>
            <ArrowBtn href="/#pricing" variant="ghost" large>See pricing</ArrowBtn>
          </div>
        </div>
      </section>

      {/* Six jobs */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>The whole lifecycle</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
            Six jobs. One system.
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {JOBS.map((j, i) => (
              <div key={j.t}>
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-[13px] font-semibold tabular-nums"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[19px] font-semibold">{j.t}</h3>
                </div>
                <p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--color-muted)]">{j.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deeper than a tracker */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Deeper than a gear tracker</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
            We don&apos;t just track the helmet.
            <br />
            We bill for it, waive it, and reorder it.
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {DEEPER.map((f) => (
              <div
                key={f.t}
                className="p-5"
                style={{ background: "var(--color-paper-2)", borderLeft: "3px solid var(--color-accent)" }}
              >
                <h3 className="text-[17px] font-semibold">{f.t}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--color-muted)]">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price comparison */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Do the math</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
            A gear tracker costs more than the <span className="headline-italic">whole program.</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="p-6" style={{ background: "var(--color-paper-2)" }}>
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-muted)]">
                Equipment-only trackers
              </p>
              <p className="mt-3 text-[34px] font-semibold">$800–$1,600<span className="text-[16px] font-normal text-[color:var(--color-muted)]">/yr</span></p>
              <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--color-muted)]">
                Counts your gear and logs check-outs. Fees, purchasing, athlete self-service, and the
                other twenty jobs of your program live somewhere else.
              </p>
            </div>
            <div className="p-6" style={{ background: "var(--color-ink)", color: "var(--color-paper)" }}>
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--color-accent)" }}>
                The Program Suite — Command
              </p>
              <p className="mt-3 text-[34px] font-semibold">from $800<span className="text-[16px] font-normal opacity-70">/yr</span></p>
              <p className="mt-3 text-[15px] leading-[1.6] opacity-85">
                Inventory at this depth — plus practice planning, training, scheduling, attendance,
                messaging, compliance, travel, and the rest of the program. One login, one price.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <ArrowBtn href="/#pricing">Compare the plans</ArrowBtn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20 text-center">
          <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
            Spend the season coaching, <span className="headline-italic">not counting.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.65] text-[color:var(--color-muted)]">
            Most programs start with inventory — and grow into the rest whenever
            they&apos;re ready.
          </p>
          <div className="mt-8 flex justify-center">
            <ArrowBtn href="/#access" large>Request a demo</ArrowBtn>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

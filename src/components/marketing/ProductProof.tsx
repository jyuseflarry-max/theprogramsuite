"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Frame, ShotPlaceholder } from "./Frame";
import { Ico } from "./icons";

type Shot = { src: string; alt: string; url?: string; cap?: ReactNode };

const ROWS = [
  {
    kicker: "Inventory command center",
    title: "Walk in knowing exactly what's next.",
    body: "The home view ranks what needs attention today — orders to place, items to collect, shipments to receive — so nothing slips between a head coach and three assistants.",
    points: [
      "Today's tasks, ranked by urgency",
      "Live kit readiness by team",
      "Buying needs before you're short",
      "Per-team clearance at a glance",
    ],
    src: "/marketing/screens/inventory-home.png",
    url: "app.theprogramsuite.com/summit-ridge/inventory",
    alt: "Inventory command center showing available, issued, fees, and setup",
    flip: false,
  },
  {
    kicker: "Game-day readiness",
    title: "Know every kit is ready before the bus leaves.",
    body: "Track packs, med kits, balls, and practice gear by team — with a staff owner on every category — so nothing's missing at kickoff.",
    points: [
      "Pack, available, and total counts by category",
      "A staff owner on every kit",
      "Shortages flagged before game day",
      "Practice and game readiness in one view",
    ],
    src: "/marketing/screens/receive-shipment.png",
    url: "app.theprogramsuite.com/summit-ridge/inventory/readiness",
    alt: "Practice and game-day readiness by category",
    flip: true,
  },
  {
    kicker: "Buying & purchasing",
    title: "From buying needs to purchase order in one pass.",
    body: "See what's short, what's already ordered, and what's ready to receive — then place the order with the running spend, replacement forecast, and vendor durability in view.",
    points: [
      "Order-now shortages vs current stock",
      "Already ordered and ready to receive",
      "Replacement risk & cost forecast",
      "Vendor durability and hold-up",
    ],
    src: "/marketing/screens/purchase-order.png",
    url: "app.theprogramsuite.com/summit-ridge/inventory/planning",
    alt: "Buying needs and purchasing screen",
    flip: false,
  },
];

const MINIS: { real: boolean; src?: string; title: string; note: string }[] = [
  { real: true, src: "/marketing/screens/item-detail.png", title: "Item & athlete history", note: "every unit, size, condition, and hand-off" },
  { real: true, src: "/marketing/screens/buying-needs.png", title: "Equipment catalog", note: "every item type, stock, and replacement value" },
  { real: true, src: "/marketing/screens/athlete-profile.png", title: "Athlete 360 profiles", note: "roster, family access, development notes" },
  { real: true, src: "/marketing/screens/game-day.png", title: "Game day", note: "travel, attendance, staffing, readiness" },
  { real: true, src: "/marketing/screens/practice-planner.png", title: "Practice planner", note: "install goals, drill library, staff blocks" },
  { real: true, src: "/marketing/screens/budget.png", title: "Budget & purchasing", note: "spend, approvals, and purchase orders" },
];

function Lightbox({ shot, onClose }: { shot: Shot | null; onClose: () => void }) {
  useEffect(() => {
    if (!shot) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [shot, onClose]);

  if (!shot) return null;
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox-close" aria-label="Close" onClick={onClose}>
        &times;
      </button>
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <div className="frame">
          <div className="frame-bar">
            <span className="frame-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="frame-url">{shot.url || "app.theprogramsuite.com"}</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="frame-img" src={shot.src} alt={shot.alt || ""} />
        </div>
        {shot.cap && <figcaption className="lightbox-cap">{shot.cap}</figcaption>}
      </figure>
    </div>
  );
}

export function ProductProof() {
  const [shot, setShot] = useState<Shot | null>(null);

  return (
    <section className="section" id="product">
      <Lightbox shot={shot} onClose={() => setShot(null)} />
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h-display h2">This is the actual app. Every pixel earns its keep.</h2>
          <p className="lead">
            Most software demos hide behind illustrations. We&apos;d rather show you the depth — these
            are real screens from the running system.
          </p>
        </div>

        <div style={{ marginTop: 16 }}>
          {ROWS.map((r) => (
            <div className={"proof-row reveal" + (r.flip ? " flip" : "")} key={r.kicker}>
              <div className="proof-copy">
                <div className="kicker">{r.kicker}</div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
                <ul className="proof-points">
                  {r.points.map((p) => (
                    <li key={p}>
                      <Ico.check className="ck" width="16" height="16" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="proof-shot">
                <Frame src={r.src} url={r.url} alt={r.alt} />
              </div>
            </div>
          ))}
        </div>

        <div className="section-head reveal" style={{ marginTop: 72, marginBottom: 8 }}>
          <h2 className="h-display h3" style={{ fontWeight: 700 }}>
            Depth across the whole program — not just gear.
          </h2>
        </div>
        <div className="proof-grid">
          {MINIS.map((m) => (
            <div className="proof-mini reveal" key={m.title}>
              {m.real && m.src ? (
                <button
                  type="button"
                  className="shot-zoom"
                  aria-label={"Enlarge — " + m.title}
                  onClick={() =>
                    setShot({
                      src: m.src!,
                      alt: m.title,
                      cap: (
                        <>
                          <b>{m.title}</b> — {m.note}
                        </>
                      ),
                    })
                  }
                >
                  <Frame src={m.src} alt={m.title} />
                </button>
              ) : (
                <ShotPlaceholder title={m.title} note={m.note} />
              )}
              <div className="cap">
                <b>{m.title}</b> — {m.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

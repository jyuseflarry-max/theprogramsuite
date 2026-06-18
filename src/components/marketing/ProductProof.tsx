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
    url: "app.theprogramsuite.com/inventory",
    alt: "Inventory command center",
    flip: false,
  },
  {
    kicker: "Receiving",
    title: "Check in a shipment without a clipboard.",
    body: "Open the box, count what's inside, flag what's short or damaged, and the system updates kits, labels, and budget in the same pass.",
    points: [
      "Counts and condition per item",
      "Backorder & shortage flags",
      "Photos and notes on the unit",
      "Auto-generated labels and IDs",
    ],
    src: "/marketing/screens/receive-shipment.png",
    url: "app.theprogramsuite.com/inventory/receive",
    alt: "Receive shipment screen",
    flip: true,
  },
  {
    kicker: "Budget & purchasing",
    title: "From short list to purchase order in one pass.",
    body: "Buying needs pre-fill the order. Pick a vendor and budget code, see the running balance, and route it for approval — the paper trail builds itself.",
    points: [
      "Pre-filled from buying needs",
      "Vendor, ship-to, and budget code",
      "Live budget balance after the order",
      "Approval routing and audit trail",
    ],
    src: "/marketing/screens/purchase-order.png",
    url: "app.theprogramsuite.com/inventory/purchase",
    alt: "Build a purchase order screen",
    flip: false,
  },
];

const MINIS: { real: boolean; src?: string; title: string; note: string }[] = [
  { real: true, src: "/marketing/screens/item-detail.png", title: "Athlete & item history", note: "every unit, condition, and hand-off tracked" },
  { real: true, src: "/marketing/screens/buying-needs.png", title: "Buying needs", note: "what to order before handout day" },
  { real: false, title: "Coach home", note: "the daily command center for staff" },
  { real: false, title: "Athlete profiles", note: "roster, family access, development notes" },
  { real: false, title: "Practice planner", note: "install goals, drill library, staff blocks" },
  { real: false, title: "Game day", note: "travel, attendance, staffing, readiness" },
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

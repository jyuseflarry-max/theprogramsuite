"use client";

import { useState, type ReactNode } from "react";

/**
 * Rotating hero (Adobe-style): four first-person hero photos, one per
 * category card. Rolling over (or focusing) a card slides its pane in and
 * swaps the headline. Pane images live in /marketing/redesign/hero-*.jpg and
 * are rebuilt from the -blank originals by scripts/compose-hero-screens.py.
 */

type Pane = {
  img: string;
  alt: string;
  h1: ReactNode;
  sub: string;
};

const PANES: Pane[] = [
  {
    img: "/marketing/redesign/hero-run.jpg",
    alt: "First-person view of a coach's desk: The Program Suite home dashboard on the monitor, the coach app on an iPhone, the gym through the window",
    h1: (
      <>
        Coach at the
        <br />
        highest <em>level.</em>
      </>
    ),
    sub: "Schedule, athletes, practice, game day, gear, and content — the system for school sports. Run your program as if you had a full staff.",
  },
  {
    img: "/marketing/redesign/hero-game.jpg",
    alt: "First-person view at the scorer's table: game-day checklist on an iPad, practice plan on a laptop, a bright gym beyond",
    h1: (
      <>
        Win the game
        <br />
        before <em>game day.</em>
      </>
    ),
    sub: "Playbook, scouting, call sheets, and live analytics — college-grade strategy tools, shaped to your sport and your staff size.",
  },
  {
    img: "/marketing/redesign/hero-fund.jpg",
    alt: "First-person view holding a phone over the field at golden hour, reviewing a school-branded game graphic",
    h1: (
      <>
        The program that
        <br />
        funds <em>itself.</em>
      </>
    ),
    sub: "School-branded graphics in seconds, an approval queue, and sponsors sold, fulfilled, and proven — every Friday night becomes revenue.",
  },
  {
    img: "/marketing/redesign/hero-family.jpg",
    alt: "First-person view of a parent's phone at the kitchen counter showing the team app, their athlete leaning in smiling",
    h1: (
      <>
        Every family,
        <br />
        in the <em>loop.</em>
      </>
    ),
    sub: "A phone-first app athletes actually use — and messaging where a minor is never alone in a chat with an adult. Families see everything.",
  },
];

type Cat = { t: string; d: string; href: string; mod?: string; ico: ReactNode; tint: string; dark?: boolean };

const CATS: Cat[] = [
  {
    t: "Run the program",
    d: "Schedule · athletes · gear",
    href: "#platform",
    tint: "var(--accent)",
    ico: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="3" width="8" height="8" rx="2" />
        <rect x="3" y="13" width="8" height="8" rx="2" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
      </svg>
    ),
  },
  {
    t: "Coach the game",
    d: "Playbook · scouting · analytics",
    href: "?m=strategy",
    mod: "strategy",
    tint: "#e8590c",
    ico: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    t: "Fund the program",
    d: "Content · sponsors · fundraising",
    href: "?m=studio",
    mod: "studio",
    tint: "var(--gold)",
    dark: true,
    ico: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l1.9 5.6L20 10l-5 3.8L16.5 21 12 17.5 7.5 21 9 13.8 4 10l6.1-1.4z" />
      </svg>
    ),
  },
  {
    t: "Bring families in",
    d: "Athlete & family app",
    href: "?m=messages",
    mod: "messages",
    tint: "var(--good)",
    ico: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20c.6-3.4 2.8-5 5.5-5s4.9 1.6 5.5 5" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M15.5 20c.4-2.4 1.6-3.8 3.5-3.8 1.4 0 2.5.8 3 2.3" />
      </svg>
    ),
  },
];

export function HeroV3() {
  const [pane, setPane] = useState(0);

  const go = (i: number) => setPane(i);

  return (
    <>
      <header className="v3-hero">
        {PANES.map((p, i) => (
          <div className={"v3-pane" + (i === pane ? " on" : "")} key={p.img} aria-hidden={i !== pane}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.img} alt={i === pane ? p.alt : ""} loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}
        <div className="v3-hero-scrim" aria-hidden="true" />
        <div className="container v3-hero-in">
          {/* All four copy blocks share one grid cell, so the block (and the
              buttons below it) keeps the height of the tallest copy — nothing
              jumps when panes swap. */}
          <div className="v3-hero-copies">
            {PANES.map((p, i) =>
              i === 0 ? (
                <div className={"v3-hero-copy" + (i === pane ? " on" : "")} key={p.img} aria-hidden={i !== pane}>
                  <h1 className="rx-display v3-h1">{p.h1}</h1>
                  <p className="v3-hero-sub">{p.sub}</p>
                </div>
              ) : (
                <div className={"v3-hero-copy" + (i === pane ? " on" : "")} key={p.img} aria-hidden={i !== pane}>
                  <p className="rx-display v3-h1">{p.h1}</p>
                  <p className="v3-hero-sub">{p.sub}</p>
                </div>
              ),
            )}
          </div>
          <div className="v3-hero-ctas reveal">
            <a href="#access" className="btn btn-primary btn-lg">
              Request a demo
            </a>
            <a href="#platform" className="btn btn-ghost btn-lg">
              Explore the platform
            </a>
          </div>
        </div>
      </header>

      <div className="v3-cats">
        <div className="container">
          <div className="v3-cats-row reveal">
            {CATS.map((c, i) => (
              <a
                key={c.t}
                className={"v3-cat" + (i === pane ? " active" : "")}
                href={c.href}
                data-module={c.mod}
                onMouseEnter={() => go(i)}
                onFocus={() => go(i)}
                onTouchStart={() => go(i)}
              >
                <span
                  className="v3-cat-ico"
                  style={{ background: c.tint, color: c.dark ? "var(--gold-ink)" : "#fff" }}
                >
                  {c.ico}
                </span>
                <span className="v3-cat-t">
                  {c.t}
                  <small>{c.d}</small>
                </span>
                <span className="v3-cat-arrow" aria-hidden="true">
                  ›
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

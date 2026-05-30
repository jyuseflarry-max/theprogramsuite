"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

function FaqRow({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[color:var(--color-line)]">
      <button
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        type="button"
        className="flex w-full items-baseline justify-between gap-6 py-7 text-left transition-colors hover:text-[color:var(--color-accent)]"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "-0.005em",
          lineHeight: 1,
          fontSize: "clamp(20px, 2vw, 30px)",
        }}
      >
        <span>{q}</span>
        <span
          aria-hidden="true"
          className="shrink-0 text-[color:var(--color-accent)] transition-transform"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: 18,
            transform: open ? "rotate(45deg)" : "rotate(0)",
            transitionDuration: "0.2s",
          }}
        >
          +
        </span>
      </button>
      {open ? (
        <p className="max-w-[800px] pb-7 pr-0 text-[15.5px] leading-[1.55] text-[color:var(--color-ink-soft)] md:pr-16">
          {a}
        </p>
      ) : null}
    </div>
  );
}

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <section id="faq" className="py-24 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mb-[18px]">
          <span className="eyebrow"><span className="dot" />FAQ</span>
        </div>
        <div
          className="mb-12 grid items-end gap-10 border-b pb-9 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
          style={{ borderColor: "var(--color-ink)" }}
        >
          <h2 className="display" style={{ fontSize: "clamp(36px, 5.5vw, 88px)" }}>
            Product and pricing
            <br />
            <span className="headline-italic">questions, </span>
            <span className="text-accent-brand">answered.</span>
          </h2>
          <p
            className="max-w-[540px]"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(17px, 1.6vw, 24px)",
              lineHeight: 1.35,
              color: "var(--color-ink-soft)",
            }}
          >
            Don&apos;t see your question? Drop a line — we&apos;ll answer like a coach who&apos;s
            been there.
          </p>
        </div>
        <div className="border-t" style={{ borderColor: "var(--color-ink)" }}>
          {items.map((item) => (
            <FaqRow key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

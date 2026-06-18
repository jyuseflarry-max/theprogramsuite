"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal activator. Mount once near the top of the page.
 *
 * Elements with the `.reveal` class are visible by default (server-rendered
 * markup is never hidden). On mount — and only when motion is allowed — we add
 * `.anim-on` to <html>, which arms the from-hidden CSS, then immediately reveal
 * anything already in view (same JS tick, before the next paint, so there is no
 * flash). An IntersectionObserver reveals the rest on scroll, with rAF, scroll,
 * and a 1.2s timeout as fallbacks so content is never stranded hidden.
 */
export function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // leave everything in its visible base state

    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!els.length) return;

    // Arm the animation, then synchronously reveal what's already on screen.
    root.classList.add("anim-on");
    const showIfVisible = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((el) => {
        if (el.classList.contains("in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");
      });
    };
    showIfVisible();
    requestAnimationFrame(() => requestAnimationFrame(showIfVisible));

    let io: IntersectionObserver | null = null;
    try {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
      );
      els.forEach((el) => io?.observe(el));
    } catch {
      /* no IntersectionObserver — fallbacks below cover it */
    }

    const onScroll = () => showIfVisible();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    // Safety net: if observers never fire, nothing stays hidden.
    const t = window.setTimeout(() => els.forEach((el) => el.classList.add("in")), 1200);

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(t);
    };
  }, []);

  return null;
}

"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { Ico } from "./icons";

/** Native scrolling keeps swiping and card links working without a slider library. */
export function PackageCarousel({
  children,
  names,
}: {
  children: ReactNode;
  names: string[];
}) {
  const slides = Children.toArray(children);
  const railRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ first: 0, last: 0, atStart: true, atEnd: false });

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let frame = 0;

    const measure = () => {
      const bounds = rail.getBoundingClientRect();
      const visible = Array.from(rail.children).flatMap((slide, index) => {
        const rect = slide.getBoundingClientRect();
        const overlap = Math.min(rect.right, bounds.right) - Math.max(rect.left, bounds.left);
        return overlap >= rect.width / 2 ? [index] : [];
      });
      setPosition({
        first: visible[0] ?? 0,
        last: visible.at(-1) ?? 0,
        atStart: rail.scrollLeft <= 2,
        atEnd: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2,
      });
    };

    const scheduleMeasure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    measure();
    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(rail);
    rail.addEventListener("scroll", scheduleMeasure, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      rail.removeEventListener("scroll", scheduleMeasure);
    };
  }, []);

  function move(direction: -1 | 1) {
    const rail = railRef.current;
    const first = rail?.firstElementChild as HTMLElement | null;
    if (!rail || !first) return;
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
    rail.scrollBy({
      left: direction * (first.offsetWidth + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  return (
    <div className="package-carousel" role="region" aria-roledescription="carousel" aria-label="Program packages">
      <div className="package-carousel-toolbar">
        <p>Swipe or use the arrows. Select a package for the full details.</p>
        <div className="package-carousel-controls">
          <button type="button" aria-label="Previous packages" aria-controls="package-carousel-track" disabled={position.atStart} onClick={() => move(-1)}><Ico.arrow width="20" height="20" aria-hidden="true" /></button>
          <button type="button" aria-label="Next packages" aria-controls="package-carousel-track" disabled={position.atEnd} onClick={() => move(1)}><Ico.arrow width="20" height="20" aria-hidden="true" /></button>
        </div>
      </div>
      <div
        ref={railRef}
        className="package-carousel-track"
        id="package-carousel-track"
        tabIndex={0}
        aria-label="Scrollable package cards"
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        {slides.map((slide, index) => (
          <div className="package-carousel-slide" key={names[index]} role="group" aria-roledescription="slide" aria-label={`${names[index]}, ${index + 1} of ${slides.length}`}>
            {slide}
          </div>
        ))}
      </div>
      <p className="package-carousel-position" role="status" aria-live="polite" aria-atomic="true">
        Showing {position.first + 1}{position.last !== position.first ? `–${position.last + 1}` : ""} of {slides.length} packages
      </p>
    </div>
  );
}

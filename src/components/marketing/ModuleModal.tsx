"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Ico } from "@/components/marketing/icons";

/**
 * URL-synced module detail modal.
 *
 * Any element on the page with a `data-module="<slug>"` attribute (the grid
 * cards, the hero category cards) opens the matching panel in place. The open
 * module is reflected in the URL as `?m=<slug>`, so a panel is shareable, the
 * browser back button closes it, and a link that lands directly on `?m=studio`
 * opens straight into that panel.
 *
 * Cards stay real <a href="?m=slug"> links, so this is pure enhancement:
 * cmd-click still opens a new tab, and with JS off the link is a plain nav.
 */

export type ModDetail = {
  headline: string;
  lead: ReactNode;
  bullets?: { head: string; body: ReactNode }[];
  /** Large panel visual. Omit to reuse the module's card media (the vignette). */
  media?: ReactNode;
  /** Optional in-panel links. Omit entirely — the pinned "Request a demo" is the primary CTA. */
  ctas?: ReactNode;
};

export type ModalMod = {
  slug: string;
  name: string;
  tint: string;
  dark?: boolean;
  chip?: string;
  chipGold?: boolean;
  desc: string;
  ico: ReactNode;
  media: ReactNode;
  detail?: ModDetail;
};

const getParam = () =>
  typeof window === "undefined" ? null : new URLSearchParams(window.location.search).get("m");

const urlWith = (slug: string | null) => {
  const u = new URL(window.location.href);
  if (slug) u.searchParams.set("m", slug);
  else u.searchParams.delete("m");
  return u.pathname + u.search + u.hash;
};

export function ModuleModal({ modules }: { modules: ModalMod[] }) {
  const [slug, setSlug] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const openRef = useRef(false); // is a panel currently shown
  const pushedRef = useRef(false); // did we add a history entry to open it
  const triggerRef = useRef<HTMLElement | null>(null); // element to restore focus to
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  openRef.current = slug !== null;

  const validSlug = (s: string | null) => !!s && modules.some((m) => m.slug === s);

  const openNew = useCallback(
    (s: string, trigger: HTMLElement | null) => {
      triggerRef.current = trigger;
      window.history.pushState(null, "", urlWith(s));
      pushedRef.current = true;
      setSlug(s);
    },
    [],
  );

  const switchTo = useCallback((s: string) => {
    window.history.replaceState(null, "", urlWith(s));
    setSlug(s);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, []);

  const closePanel = useCallback(() => {
    if (pushedRef.current) {
      pushedRef.current = false;
      window.history.back(); // popstate drives setSlug(null)
    } else {
      window.history.replaceState(null, "", urlWith(null));
      setSlug(null);
    }
  }, []);

  // A link inside the panel (a CTA to #access, /equipment, …). Close the panel
  // and hand off to the link's destination. Same-page hash links need us to
  // unlock scroll and jump ourselves — at the moment the browser would scroll,
  // the body is still locked, so the native anchor jump is swallowed.
  const followLink = useCallback((link: HTMLAnchorElement, e: MouseEvent) => {
    const href = link.getAttribute("href") || "";
    document.body.style.overflow = "";
    pushedRef.current = false;
    window.history.replaceState(null, "", urlWith(null)); // drop ?m so it won't reopen
    setSlug(null);
    if (href.startsWith("#") && href.length > 1) {
      // Same-page anchor: the browser's own smooth jump gets cancelled by the
      // modal unmount, so scroll ourselves once the close has settled.
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) setTimeout(() => el.scrollIntoView(), 0);
    }
    // Other-page links (e.g. /equipment) keep their default navigation.
  }, []);

  useEffect(() => {
    setMounted(true);
    const s = getParam();
    if (validSlug(s)) setSlug(s);

    const onPop = () => {
      const next = getParam();
      pushedRef.current = false;
      setSlug(validSlug(next) ? next : null);
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const target = e.target as Element | null;
      const trigger = target?.closest?.("[data-module]") as HTMLElement | null;
      if (trigger) {
        const s = trigger.getAttribute("data-module");
        if (!validSlug(s)) return;
        e.preventDefault();
        if (openRef.current) switchTo(s!);
        else openNew(s!, trigger);
        return;
      }
      // closing navigation from a link inside the panel
      const link = target?.closest?.("[data-modal-panel] a[href]") as HTMLAnchorElement | null;
      if (link) followLink(link, e);
    };

    window.addEventListener("popstate", onPop);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", onPop);
      document.removeEventListener("click", onClick);
    };
    // modules identity is stable for the page's lifetime
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openNew, switchTo, followLink]);

  // Esc to close + body scroll lock while open.
  useEffect(() => {
    if (!slug) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      triggerRef.current?.focus?.({ preventScroll: true });
    };
  }, [slug, closePanel]);

  if (!mounted || !slug) return null;
  const mod = modules.find((m) => m.slug === slug);
  if (!mod) return null;

  const d = mod.detail;
  const titleId = "v3-modal-title";

  return createPortal(
    <div
      className="v3-modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closePanel();
      }}
    >
      <div
        className="v3-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-modal-panel
      >
        <header className="v3-modal-head">
          <span
            className="v3-mod-ico"
            style={{ background: mod.tint, color: mod.dark ? "var(--gold-ink)" : "#fff" }}
          >
            {mod.ico}
          </span>
          <h2 id={titleId} className="v3-modal-name">
            {mod.name}
          </h2>
          {mod.chip && (
            <span className={"v3-chip" + (mod.chipGold ? " v3-chip--gold" : "")}>{mod.chip}</span>
          )}
          <button
            ref={closeBtnRef}
            type="button"
            className="v3-modal-x"
            aria-label="Close"
            onClick={closePanel}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        <div className="v3-modal-scroll" ref={scrollRef}>
          <div className="v3-modal-body">
            <div className="v3-modal-media">
              {d?.media ?? <div className="v3-card-media">{mod.media}</div>}
            </div>
            <div className="v3-modal-copy">
              <h3 className="rx-display v3-spot-h3">{d ? d.headline : mod.name}</h3>
              <p className="v3-spot-lead">{d ? d.lead : mod.desc}</p>
              {d?.bullets && (
                <ul className="v3-spot-list">
                  {d.bullets.map((b, i) => (
                    <li key={i}>
                      <Ico.check className="v3-ck" width="15" height="15" />
                      <span>
                        <b>{b.head}</b> {b.body}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {d ? (
                d.ctas && <div className="v3-spot-cta">{d.ctas}</div>
              ) : (
                <div className="v3-spot-cta">
                  <span className="v3-modal-soon">Full walkthrough coming soon</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="v3-modal-foot">
          <span className="v3-modal-foot-label">Explore another</span>
          <div className="v3-modal-pills">
            {modules.map((m) => (
              <a
                key={m.slug}
                href={`?m=${m.slug}`}
                data-module={m.slug}
                className={"v3-modal-pill" + (m.slug === mod.slug ? " is-current" : "")}
                aria-current={m.slug === mod.slug ? "true" : undefined}
              >
                <span
                  className="v3-modal-pill-ico"
                  style={{ background: m.tint, color: m.dark ? "var(--gold-ink)" : "#fff" }}
                >
                  {m.ico}
                </span>
                {m.name}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>,
    document.body,
  );
}

/* ui.jsx — shared primitives for The Program Suite marketing site */

/* ---- Icons (stroke, 1.6, currentColor) ---- */
const Ico = {
  arrow: (p) => (<svg viewBox="0 0 16 16" fill="none" {...p}><path d="M2 8h11M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  check: (p) => (<svg viewBox="0 0 16 16" fill="none" {...p}><path d="M3 8.5l3.2 3.2L13 4.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  play: (p) => (<svg viewBox="0 0 16 16" fill="none" {...p}><path d="M5 3.5l8 4.5-8 4.5z" fill="currentColor"/></svg>),
  bolt: (p) => (<svg viewBox="0 0 20 20" fill="none" {...p}><path d="M11 2L4 11h5l-1 7 7-9h-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  cash: (p) => (<svg viewBox="0 0 20 20" fill="none" {...p}><rect x="2" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/><circle cx="10" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6"/></svg>),
  handshake: (p) => (<svg viewBox="0 0 20 20" fill="none" {...p}><path d="M2 7l3-1 4 3 1-1 5 1 3 1M10 8l2 2M2 7v6l3 1M18 7v6l-3 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  heart: (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 20s-7-4.3-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.7-7 9-7 9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  comment: (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  send: (p) => (<svg viewBox="0 0 24 24" fill="none" {...p}><path d="M21 3L10 14M21 3l-7 18-4-7-7-4 18-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>),
};

/* Module glyphs for capability grid — simple geometric, brand-safe */
const ModIcon = ({ name }) => {
  const c = { width: 34, height: 34, viewBox: "0 0 34 34", fill: "none" };
  const s = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  const maps = {
    athlete: <g {...s}><circle cx="17" cy="11" r="5"/><path d="M7 28c0-5.5 4.5-9 10-9s10 3.5 10 9"/></g>,
    season:  <g {...s}><rect x="5" y="7" width="24" height="22" rx="2.5"/><path d="M5 13h24M11 4v6M23 4v6"/><path d="M11 19h4M19 19h4M11 24h4"/></g>,
    practice:<g {...s}><path d="M6 6v22M6 28h22"/><path d="M6 19l6-6 5 4 9-9"/></g>,
    training:<g {...s}><path d="M4 17h3M27 17h3M9 12v10M25 12v10"/><rect x="9" y="13.5" width="4" height="7" rx="1"/><rect x="21" y="13.5" width="4" height="7" rx="1"/><path d="M13 17h8"/></g>,
    inventory:<g {...s}><path d="M5 11l12-6 12 6-12 6z"/><path d="M5 11v12l12 6 12-6V11"/><path d="M17 17v12"/></g>,
    district:<g {...s}><rect x="5" y="14" width="10" height="15" rx="1.5"/><rect x="19" y="6" width="10" height="23" rx="1.5"/><path d="M8 19h4M8 24h4M23 11h2M23 16h2M23 21h2"/></g>,
    mobile:  <g {...s}><rect x="10" y="4" width="14" height="26" rx="3"/><path d="M15 26h4"/></g>,
  };
  return <svg {...c} className="cap-ico">{maps[name]}</svg>;
};

/* Logo */
const Logo = () => (
  <a href="#top" className="logo" aria-label="The Program Suite — home">
    <img className="logo-img" src="assets/logo-mark.png" alt="" />
    <span className="logo-word">The Program Suite</span>
  </a>
);

/* Browser frame around a real screenshot */
function Frame({ src, alt, url = "app.theprogramsuite.com", flush = false }) {
  return (
    <div className={"frame" + (flush ? " frame--flush" : "")}>
      <div className="frame-bar">
        <span className="frame-dots"><i></i><i></i><i></i></span>
        <span className="frame-url">{url}</span>
      </div>
      <img className="frame-img" src={src} alt={alt} loading="lazy" />
    </div>
  );
}

/* Placeholder for a module screenshot we don't have yet */
function ShotPlaceholder({ title, note }) {
  return (
    <div className="frame">
      <div className="frame-bar">
        <span className="frame-dots"><i></i><i></i><i></i></span>
        <span className="frame-url">app.theprogramsuite.com</span>
      </div>
      <div className="shot-ph">
        <div className="tag"><b>{title}</b>{note}</div>
      </div>
    </div>
  );
}

/* Reveal hook — IntersectionObserver where it works, with a guaranteed
   fallback so content is never left hidden (some preview/capture engines
   never deliver IO callbacks). */
function useReveal() {
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!els.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { els.forEach(el => el.classList.add("in")); return; }

    // Reveal anything already in (or near) the viewport on first paint.
    const showIfVisible = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(el => {
        if (el.classList.contains("in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");
      });
    };
    requestAnimationFrame(() => requestAnimationFrame(showIfVisible));

    let io = null;
    try {
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
      els.forEach(el => io.observe(el));
    } catch (_) {}

    const onScroll = () => showIfVisible();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    // Safety net: if IO never fires, nothing stays hidden.
    const t = setTimeout(() => els.forEach(el => el.classList.add("in")), 1200);

    return () => {
      if (io) io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(t);
    };
  }, []);
}

/* Lightbox — click a screenshot to enlarge it in a focused, dimmed overlay.
   Backdrop click or Esc closes; body scroll locks while open. */
function Lightbox({ shot, onClose }) {
  React.useEffect(() => {
    if (!shot) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
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
      <button className="lightbox-close" aria-label="Close" onClick={onClose}>&times;</button>
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <div className="frame">
          <div className="frame-bar">
            <span className="frame-dots"><i></i><i></i><i></i></span>
            <span className="frame-url">{shot.url || "app.theprogramsuite.com"}</span>
          </div>
          <img className="frame-img" src={shot.src} alt={shot.alt || ""} />
        </div>
        {shot.cap && <figcaption className="lightbox-cap">{shot.cap}</figcaption>}
      </figure>
    </div>
  );
}

Object.assign(window, { Ico, ModIcon, Logo, Frame, ShotPlaceholder, Lightbox, useReveal });

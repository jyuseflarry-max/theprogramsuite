/* footer.jsx — FAQ, Final CTA, Footer, sticky mobile bar */

function FAQ() {
  const items = [
    { q: "What exactly is \"one program\"?", a: "One program is one sport, one gender, with all of its levels — freshman, JV, and varsity together. Boys' and girls' teams of the same sport are two separate programs; a true coed sport counts as one. You're never charged per level, and because everything lives under the program, an athlete's history follows them from one season to the next." },
    { q: "How does founding pricing work?", a: "Founding members lock in 33% off the regular list price for the life of the account — it doesn't reset or step up later. It's capped at the first 40 programs and 15 schools, so once those spots are claimed, pricing returns to list." },
    { q: "We run on spreadsheets and group texts today. Is switching painful?", a: "No. Most programs start with the one area that hurts most — usually inventory or scheduling — and import their existing roster and gear lists. You can grow into the other modules whenever you're ready; nothing has to migrate twice." },
    { q: "Is this serious enough for a district procurement review?", a: "Yes. Roles and permissions, full audit trails, budget and spend reconciliation, and board-ready reporting are built in. Administrators get the visibility and accountability a purchase of this size requires — not just a coach's convenience tool." },
    { q: "How is the whole-department price calculated?", a: "It's banded by the number of programs, where each sport counts as one program and boys' and girls' teams count separately. 1–10 programs, 11–20, and 21–30 each have a set annual price; 31+ programs or a multi-school district requires a custom quote." },
    { q: "What do coaches actually do on their phones?", a: "The coach app is phone-first: messaging, attendance, schedules, game-day readiness, and quick gear actions all work from the sideline. Training workflows are tuned for an iPad rack-side, so loads and groups get captured while the lift is happening." },
    { q: "Who built it, and who do we talk to?", a: "The Program Suite was built by a high school coach who ran a program on the same scattered tools you're trying to replace. When you reach out, you're often talking to the founding coach — not a call center." },
  ];
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head center reveal">
          <h2 className="h-display h2">Frequently asked questions</h2>
        </div>
        <div className="faq-list reveal">
          {items.map((it, i) => (
            <details className="faq-item" key={i}>
              <summary className="faq-q">
                <span>{it.q}</span>
                <span className="faq-ico">+</span>
              </summary>
              <div className="faq-a">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section final">
      <div className="container reveal">
        <h2 className="h-display">Your program deserves a system, not scraps.</h2>
        <p>Start with one program today, or bring the whole department onto one source of truth — and lock your founding rate while spots last.</p>
        <div className="final-actions">
          <a href="#access" className="btn btn-ink btn-lg">Claim a founding spot <Ico.arrow /></a>
          <a href="#pricing" className="btn btn-ghost btn-lg">See pricing</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Explore", links: [
      { l: "Story", href: "#story" },
      { l: "Capabilities", href: "#capabilities" },
      { l: "Who it's for", href: "#audiences" },
      { l: "Pricing", href: "#pricing" },
    ] },
    { h: "Get started", links: [
      { l: "Start one program", href: "#pricing" },
      { l: "Founder access", href: "#access" },
      { l: "Log in", href: "https://app.theprogramsuite.com" },
    ] },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Logo />
            <p>The operating system for school sports. One source of truth for staff, athletes, and families — built by a coach who lived the chaos.</p>
          </div>
          {cols.map((c) => (
            <div className="footer-col" key={c.h}>
              <h4>{c.h}</h4>
              <ul>{c.links.map((it) => <li key={it.l}><a href={it.href}>{it.l}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer-meta">
          <span>© 2026 The Program Suite</span>
          <span>Made for coaches, ADs, and the people who run school sports.</span>
        </div>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="mobile-bar">
      <div className="mb-info">
        <div className="t">Founding pricing — 33% off</div>
        <div className="s">9 of 40 program spots left</div>
      </div>
      <a href="#access" className="btn btn-primary">Start one program</a>
    </div>
  );
}

Object.assign(window, { FAQ, FinalCTA, Footer, MobileBar });

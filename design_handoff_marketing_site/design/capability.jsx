/* capability.jsx — Capability overview (navy band) + Audiences */

function Capabilities() {
  const mods = [
    { ico: "athlete", title: "Athlete profiles", desc: "One record per athlete — roster, availability, sizing, family access, and the notes that matter.",
      tags: ["Roster", "Family access", "Sizing", "Development notes", "Health signals"] },
    { ico: "season", title: "Season command", desc: "Games, practices, and travel in one calendar, with confirmations and game-day readiness built in.",
      tags: ["Schedule", "Attendance", "Travel", "Staffing", "Confirmations"] },
    { ico: "practice", title: "Practice planning", desc: "Set install goals, pull from your drill library, and assign staff to every block of the plan.",
      tags: ["Install goals", "Drill library", "Practice blocks", "Staff assignments"] },
    { ico: "training", title: "Training floor", desc: "Strength groups and load tracking, captured rack-side on an iPad while the lift is happening.",
      tags: ["Strength groups", "Load tracking", "iPad capture"] },
    { ico: "inventory", title: "Inventory & budget", desc: "Catalog, issue, collect, and scan gear — with fees, budget balances, and purchase requests attached.",
      tags: ["Catalog", "Issue / collect", "Scanning", "Fees", "Budget", "Purchase requests"] },
    { ico: "district", title: "District visibility", desc: "Cross-school readiness, rollups, audit trails, and board-ready reports for the people who answer to a board.",
      tags: ["Cross-school", "Rollups", "Audit trails", "Board reports"] },
    { ico: "mobile", title: "Mobile, on the field", desc: "A phone-first coach app and iPad training workflows — the system goes where the program goes.",
      tags: ["Coach app", "iPad workflows", "Offline-friendly"] },
  ];
  return (
    <section className="section cap-band" id="capabilities">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h-display h2">One system, deep enough to run the whole department.</h2>
          <p className="lead">Seven connected modules — start with what you need today, grow into the rest without migrating anything.</p>
        </div>
        <div className="cap-grid reveal">
          {mods.map((m) => (
            <div className="cap-cell" key={m.title}>
              <ModIcon name={m.ico} />
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <div className="cap-tags">
                {m.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
          <div className="cap-cell" style={{ justifyContent: "center" }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Always on</div>
            <p style={{ color: "rgba(255,255,255,.82)", fontSize: 15 }}>
              Messaging, fair-use AI, roles &amp; permissions, and a full audit trail run underneath
              every module — so the system is accountable, not just convenient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  const coach = {
    role: "For coaches", title: "Built by someone who sat in your seat",
    blurb: "Less time on logistics, more time coaching. The day-to-day stuff finally lives in one place — and it was designed by a coach who hated the chaos too.",
    bullets: ["Run handout day and return day without a clipboard", "Plan practice and share it with your staff", "Message athletes and families, with receipts", "Stop chasing gear, fees, and forms from memory"],
    foot: "Start running your program in an afternoon.",
  };
  const ad = {
    role: "For athletic directors", title: "Serious software your department can stand on",
    blurb: "Every program on one standard. Real depth, real accountability, and the visibility to answer any question about gear, money, or readiness on the spot.",
    bullets: ["One source of truth across every sport", "Audit trails and roles on every change", "Budget, spend, and fees reconciled live", "Replace a half-dozen disconnected tools"],
    foot: "ROI in one season of recovered gear and budget.",
    feature: true,
  };
  const district = {
    role: "For districts", title: "Readiness and reporting across every school",
    blurb: "Roll the whole region onto one platform. Compare readiness across schools, pull board-ready reports, and standardize accountability district-wide.",
    bullets: ["Cross-school readiness rollups", "District-level audit and reporting", "Standardized accountability everywhere", "Guided rollout and onboarding support"],
    foot: "Built for procurement and the board room.",
  };
  const Card = (a) => (
    <div className={"aud-card" + (a.feature ? " feature" : "")}>
      <div className="aud-role">{a.role}</div>
      <h3>{a.title}</h3>
      <p className="blurb">{a.blurb}</p>
      <ul className="aud-bul">
        {a.bullets.map((b) => <li key={b}><Ico.check className="ck" width="16" height="16" /> {b}</li>)}
      </ul>
      <div className="aud-foot">{a.foot}</div>
    </div>
  );
  return (
    <section className="section" id="audiences">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h-display h2">Coaches feel it. Directors and districts can prove it.</h2>
          <p className="lead">The same system serves the coach who buys on instinct and the administrator who buys on evidence.</p>
        </div>
        <div className="aud-grid reveal">
          {Card(coach)}
          {Card(ad)}
          {Card(district)}
        </div>
      </div>
    </section>
  );
}

function ContentStudio() {
  const points = [
    { ico: "bolt", t: "Pro-grade graphics in minutes", d: "Pick a template, drop in the matchup and your logos, and Content Studio renders a broadcast-quality post — no designer, no Canva afternoon." },
    { ico: "handshake", t: "Sell the spot to a local business", d: "Every graphic has a sponsor slot. Southwell's Hamburger Grill gets the whole town's game-day feed; you get a check." },
    { ico: "cash", t: "The suite pays for itself", d: "One local sponsor across a season typically covers the subscription — the rest is money back in the program's pocket." },
  ];
  return (
    <section className="section studio" id="content-studio">
      <div className="container">
        <div className="studio-grid">
          <div className="studio-copy">
            <div className="eyebrow"><span className="dot"></span>Content Studio · Full Suite</div>
            <h2 className="h-display h2">Turn game day into revenue.</h2>
            <p className="lead">The reason Full Suite pays for itself: generate the graphics a program would pay an agency for, then sell the sponsorship to local businesses who want in front of your community.</p>
            <ul className="studio-points">
              {points.map((p) => (
                <li key={p.t}>
                  <span className="pico">{Ico[p.ico]({})}</span>
                  <span>
                    <span className="pt-t">{p.t}</span>
                    <span className="pt-d" style={{ display: "block", marginTop: 2 }}>{p.d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a href="#pricing" className="btn btn-primary btn-lg">See Full Suite pricing <Ico.arrow /></a>
            <div className="studio-tag"><Ico.cash width="15" height="15" /> Also powers <b>fundraising</b> &amp; <b>public sponsor pages</b></div>
          </div>

          <div className="studio-visual">
            <div className="social-card">
              <div className="social-head">
                <span className="social-ava">M</span>
                <span className="social-meta">
                  <span className="n">memorialmustangs</span>
                  <span className="s">Sponsored · game day</span>
                </span>
                <span className="social-dots">•••</span>
              </div>
              <img className="social-img" src="assets/content-studio.png" alt="Game day social graphic — Memorial Mustangs vs Stratford Spartans, sponsored by Southwell's Hamburger Grill" />
              <div className="social-foot">
                <div className="social-acts">
                  <Ico.heart /><Ico.comment /><Ico.send />
                </div>
                <div className="social-cap">
                  <b>memorialmustangs</b> Thursday under the lights. 🏈 Proudly sponsored by <span className="by">@southwellsgrill</span> — go grab a burger before kickoff. #RideTogether
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Capabilities, Audiences, ContentStudio });

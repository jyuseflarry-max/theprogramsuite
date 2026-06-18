/* sections.jsx — Nav, Hero, Before/After, Founder, Product proof */

function Nav() {
  return (
    <nav className="nav" id="top">
      <div className="container nav-inner">
        <div className="nav-left">
          <Logo />
          <div className="nav-links">
            <a href="#story">Story</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#audiences">Who it's for</a>
            <a href="#pricing">Pricing</a>
          </div>
        </div>
        <div className="nav-cta">
          <a href="https://app.theprogramsuite.com" className="nav-login">Log in</a>
          <a href="#pricing" className="btn btn-primary" style={{ minHeight: 42, padding: "10px 18px", fontSize: 14.5 }}>Start one program</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-top reveal">
          <h1 className="h-display h1">
            Run your whole program<br className="dt" /> from <span className="accent">one place.</span>
          </h1>
          <p className="lead hero-lead">
            The Program Suite is the operating system for school sports — it replaces the group
            texts, spreadsheets, and half-dozen apps your program runs on today with one source of
            truth for staff, athletes, and families.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary btn-lg">Start one program <Ico.arrow /></a>
            <a href="#product" className="btn btn-ghost btn-lg"><Ico.play /> See it in action</a>
          </div>
        </div>

        <div className="hero-shot reveal">
          <Frame
            src="assets/screens/inventory-home.png"
            url="app.theprogramsuite.com/memorial-hs/inventory"
            alt="The Program Suite — inventory command center showing tasks, kit readiness, buying needs, and team clearance"
          />
        </div>

      </div>
    </header>
  );
}

function BeforeAfter() {
  return (
    <section className="section section--tight" id="why">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h-display h2">Most programs aren't run on a system. They're run on scraps.</h2>
          <p className="lead">When the information lives in five places, nothing is actually accountable. One source of truth changes that.</p>
        </div>

        <div className="ba-grid reveal">
          <div className="ba-card ba-before">
            <div className="ba-head">
              <span className="ba-kicker">Before — the scattered way</span>
            </div>
            <h3>A different tool for every job</h3>
            <p className="sub">…and none of them talk to each other.</p>
            <ul className="ba-list">
              <li><span className="mk">✕</span> Group texts that scroll away by Tuesday</li>
              <li><span className="mk">✕</span> A gear spreadsheet only one coach can find</li>
              <li><span className="mk">✕</span> Fees and missing uniforms chased from memory</li>
              <li><span className="mk">✕</span> Budget reconciled in a binder at season's end</li>
              <li><span className="mk">✕</span> Nothing follows the athlete to next year</li>
            </ul>
          </div>
          <div className="ba-card ba-after">
            <div className="ba-head">
              <span className="ba-kicker">After — one source of truth</span>
            </div>
            <h3>One system the whole program shares</h3>
            <p className="sub">Staff, athletes, and families, finally in sync.</p>
            <ul className="ba-list">
              <li><span className="mk"><Ico.check width="16" height="16" /></span> Every roster, schedule, and message in one place</li>
              <li><span className="mk"><Ico.check width="16" height="16" /></span> Gear, fees, and budget accounted for to the dollar</li>
              <li><span className="mk"><Ico.check width="16" height="16" /></span> Staff roles, access, and audit trails on every change</li>
              <li><span className="mk"><Ico.check width="16" height="16" /></span> Board-ready reports without the late-night export</li>
              <li><span className="mk"><Ico.check width="16" height="16" /></span> History that follows each athlete every season</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="section founder" id="story">
      <div className="container">
        <div className="founder-grid reveal">
          <div className="founder-portrait">
            <img src="assets/founder.png" alt="The founding coach in a huddle with the Memorial girls basketball team" />
          </div>
          <div className="founder-body">
            <p className="founder-quote serif-quote">
              "I built the system I wished I'd had when I began coaching <span className="accent">23 years ago</span>."
            </p>
            <div className="founder-text">
              <p>
                I'm a high school coach. For years my program ran on a phone full of group texts, a
                laptop full of spreadsheets, and a memory that kept dropping the things that mattered —
                who still had a jersey, which athlete owed a fee, what we could actually afford.
              </p>
              <p>
                Nothing on the market was built for the way a program actually works, so I built it.
                The Program Suite is the tool I needed 23 seasons ago — and it's now the
                operating system for the whole department.
              </p>
            </div>
            <div className="founder-sign">
              <div>
                <div className="name">Founder &amp; Head Coach</div>
                <div className="role">The Program Suite</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductProof() {
  const rows = [
    {
      kicker: "Inventory command center",
      title: "Walk in knowing exactly what's next.",
      body: "The home view ranks what needs attention today — orders to place, items to collect, shipments to receive — so nothing slips between a head coach and three assistants.",
      points: ["Today's tasks, ranked by urgency", "Live kit readiness by team", "Buying needs before you're short", "Per-team clearance at a glance"],
      src: "assets/screens/inventory-home.png",
      url: "app.theprogramsuite.com/inventory",
      alt: "Inventory command center",
      flip: false,
    },
    {
      kicker: "Receiving",
      title: "Check in a shipment without a clipboard.",
      body: "Open the box, count what's inside, flag what's short or damaged, and the system updates kits, labels, and budget in the same pass.",
      points: ["Counts and condition per item", "Backorder & shortage flags", "Photos and notes on the unit", "Auto-generated labels and IDs"],
      src: "assets/screens/receive-shipment.png",
      url: "app.theprogramsuite.com/inventory/receive",
      alt: "Receive shipment screen",
      flip: true,
    },
    {
      kicker: "Budget & purchasing",
      title: "From short list to purchase order in one pass.",
      body: "Buying needs pre-fill the order. Pick a vendor and budget code, see the running balance, and route it for approval — the paper trail builds itself.",
      points: ["Pre-filled from buying needs", "Vendor, ship-to, and budget code", "Live budget balance after the order", "Approval routing and audit trail"],
      src: "assets/screens/purchase-order.png",
      url: "app.theprogramsuite.com/inventory/purchase",
      alt: "Build a purchase order screen",
      flip: false,
    },
  ];

  const minis = [
    { real: true, src: "assets/screens/item-detail.png", title: "Athlete & item history", note: "every unit, condition, and hand-off tracked" },
    { real: true, src: "assets/screens/buying-needs.png", title: "Buying needs", note: "what to order before handout day" },
    { real: false, title: "Coach home", note: "the daily command center for staff" },
    { real: false, title: "Athlete profiles", note: "roster, family access, development notes" },
    { real: false, title: "Practice planner", note: "install goals, drill library, staff blocks" },
    { real: false, title: "Game day", note: "travel, attendance, staffing, readiness" },
  ];

  const [shot, setShot] = React.useState(null);

  return (
    <section className="section" id="product">
      <Lightbox shot={shot} onClose={() => setShot(null)} />
      <div className="container">
        <div className="section-head reveal">
          <h2 className="h-display h2">This is the actual app. Every pixel earns its keep.</h2>
          <p className="lead">Most software demos hide behind illustrations. We'd rather show you the depth — these are real screens from the running system.</p>
        </div>

        <div style={{ marginTop: 16 }}>
          {rows.map((r) => (
            <div className={"proof-row reveal" + (r.flip ? " flip" : "")} key={r.kicker}>
              <div className="proof-copy">
                <div className="kicker">{r.kicker}</div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
                <ul className="proof-points">
                  {r.points.map((p) => (
                    <li key={p}><Ico.check className="ck" width="16" height="16" /> {p}</li>
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
          <h2 className="h-display h3" style={{ fontWeight: 700 }}>Depth across the whole program — not just gear.</h2>
        </div>
        <div className="proof-grid">
          {minis.map((m) => (
            <div className="proof-mini reveal" key={m.title}>
              {m.real
                ? <button
                    type="button"
                    className="shot-zoom"
                    aria-label={"Enlarge — " + m.title}
                    onClick={() => setShot({ src: m.src, alt: m.title, cap: <><b>{m.title}</b> — {m.note}</> })}
                  >
                    <Frame src={m.src} alt={m.title} />
                  </button>
                : <ShotPlaceholder title={m.title} note={m.note} />}
              <div className="cap"><b>{m.title}</b> — {m.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, BeforeAfter, Founder, ProductProof });

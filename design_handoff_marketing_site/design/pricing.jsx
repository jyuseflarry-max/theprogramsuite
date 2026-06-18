/* pricing.jsx — Pricing model, founding spots, founder-access lead form */

function Pricing({ showSpots = true }) {
  const tiers = [
    {
      name: "Coach", popular: false,
      for: "For the coach running the program day to day.",
      price: "800", list: "1,200",
      everything: null,
      feats: ["Athletes, roster & family access", "Schedule, attendance & game prep", "Practice planning", "Strength & training", "Messaging + fair-use AI"],
      hook: null,
      cta: "Start as Coach", ctaCls: "btn-ink",
    },
    {
      name: "Director", popular: true,
      for: "For the head coach or director responsible for gear, budget, and staff.",
      price: "1,600", list: "2,400",
      everything: "Everything in Coach, plus",
      feats: ["Inventory & gear", "Budget & spend", "Media library for approved photos"],
      hook: null,
      cta: "Start as Director", ctaCls: "btn-primary",
    },
    {
      name: "Full Suite", popular: false,
      for: "For programs ready to generate revenue.",
      price: "2,400", list: "3,600",
      everything: "Everything in Director, plus",
      feats: ["Content Studio", "Sponsorship sales", "Fundraising tools", "Sponsor assets & public pages"],
      hook: <>Founding <b>Full Suite</b> costs what others pay for Director — the revenue tools only need to earn that much to pay for themselves.</>,
      cta: "Start Full Suite", ctaCls: "btn-ink",
    },
  ];

  const bands = [
    { band: "1–10 programs", price: "$9,600", list: "$14,400" },
    { band: "11–20 programs", price: "$19,200", list: "$28,800" },
    { band: "21–30 programs", price: "$28,800", list: "$43,200" },
    { band: "31+ or a district", price: "Let's talk", list: null, talk: true },
  ];

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head reveal" style={{ maxWidth: 820 }}>
          <h2 className="h-display h2">Start with one program. Grow into the whole department.</h2>
          <p className="lead">Every plan covers one full program — one sport, one gender, all levels — so an athlete's history follows them year over year. Boys' and girls' teams count as separate programs; a true coed sport is one.</p>
        </div>

        <div className="price-frame reveal" style={{ marginTop: 28 }}>
          <span className="founding-note">
            <Ico.check width="15" height="15" /> Founding members lock in <b>33% off for life</b> — first 40 programs, 15 schools
          </span>
        </div>

        <div className="plans reveal">
          {tiers.map((t) => (
            <div className={"plan" + (t.popular ? " popular" : "")} key={t.name}>
              {t.popular && <span className="plan-badge">Most popular</span>}
              <div className="plan-name">{t.name}</div>
              <div className="plan-for">{t.for}</div>
              <div className="plan-price">
                <span className="cur">$</span>
                <span className="amt">{t.price}</span>
                <span className="per">/year</span>
              </div>
              <div className="plan-list">Founding price · list <s>${t.list}/yr</s></div>
              <hr className="div" />
              <ul className="plan-feats">
                {t.everything && <li className="everything">{t.everything}</li>}
                {t.feats.map((f) => <li key={f}><Ico.check className="ck" width="15" height="15" /> {f}</li>)}
              </ul>
              {t.hook && <p className="plan-hook">{t.hook}</p>}
              <div className="plan-cta">
                <a href="#access" className={"btn btn-block " + t.ctaCls}>{t.cta} <Ico.arrow /></a>
              </div>
            </div>
          ))}
        </div>

        {/* Whole department */}
        <div className="dept reveal">
          <div className="dept-head">
            <div>
              <h3>Whole athletic department</h3>
              <p>Full Suite for every program, plus school-wide inventory, budget, and staff visibility. Each sport counts as one program — boys and girls teams count separately.</p>
            </div>
            <span className="founding-note" style={{ alignSelf: "center" }}>33% off for life · founding schools</span>
          </div>
          <div className="dept-rows">
            {bands.map((b) => (
              <div className={"dept-row" + (b.talk ? " talk" : "")} key={b.band}>
                <span className="band">{b.band}</span>
                <span className="price">{b.price}{!b.talk && <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500, color: "var(--muted)" }}>/yr</span>}</span>
                {b.list && <span className="list">list <s>{b.list}/yr</s></span>}
                {b.talk && <span className="list">districts &amp; large departments</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Founding spots */}
        {showSpots && <FoundingSpots />}

        <p className="price-foot">
          Founding pricing locks your rate for the life of the account and is capped at the first 40 programs and 15 schools.
          Department pricing is banded by program count. Custom pricing available for school districts with multiple schools.
        </p>
      </div>
    </section>
  );
}

function FoundingSpots() {
  const spots = [
    { num: 9, total: 40, label: "Program spots left", claimed: 31, sub: "31 of 40 founding programs claimed" },
    { num: 4, total: 15, label: "School spots left", claimed: 11, sub: "11 of 15 founding schools claimed" },
  ];
  return (
    <div className="spots reveal">
      {spots.map((s) => (
        <div className="spot" key={s.label}>
          <div className="spot-top">
            <div className="spot-num">{s.num}<span className="of"> / {s.total}</span></div>
            <div className="spot-label">{s.label}</div>
          </div>
          <div className="spot-bar"><i style={{ width: (s.claimed / s.total * 100) + "%" }}></i></div>
          <div className="spot-sub">{s.sub}</div>
        </div>
      ))}
    </div>
  );
}

function LeadForm() {
  const [sent, setSent] = React.useState(false);
  const formRef = React.useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Post to the real endpoint; show confirmation regardless so the prototype is usable offline.
    try {
      fetch("/api/founder-access", { method: "POST", body: data }).catch(() => {});
    } catch (_) {}
    setSent(true);
  };

  return (
    <section className="section lead-band" id="access">
      <div className="container">
        <div className="lead-grid">
          <div className="lead-intro reveal">
            <h2 className="h-display h2">Lock your founding rate.</h2>
            <p>Tell us about your program and we'll get you set up — and hold your 33%-off-for-life founding pricing while spots last.</p>
            <ul className="lead-assure">
              <li><Ico.check className="ck" width="16" height="16" /> A real person — often the founding coach — replies</li>
              <li><Ico.check className="ck" width="16" height="16" /> No card required to claim a founding spot</li>
              <li><Ico.check className="ck" width="16" height="16" /> Up and running in your sport within a week</li>
            </ul>
          </div>

          <form
            ref={formRef}
            className={"lead-form reveal" + (sent ? " sent" : "")}
            action="/api/founder-access"
            method="POST"
            onSubmit={onSubmit}
          >
            <div className="form-grid">
              <div className="form-ok">Thanks — your founding spot is reserved. We'll be in touch shortly.</div>

              <div className="field half">
                <label htmlFor="f-name">Name</label>
                <input id="f-name" name="name" type="text" required placeholder="Coach Larry" />
              </div>
              <div className="field half">
                <label htmlFor="f-email">Email</label>
                <input id="f-email" name="email" type="email" required placeholder="you@school.org" />
              </div>
              <div className="field half">
                <label htmlFor="f-school">School</label>
                <input id="f-school" name="school" type="text" required placeholder="Memorial HS" />
              </div>
              <div className="field half">
                <label htmlFor="f-role">Role</label>
                <input id="f-role" name="role" type="text" required placeholder="Head Coach / AD / District" />
              </div>
              <div className="field half">
                <label htmlFor="f-sports">Sport(s)</label>
                <input id="f-sports" name="sports" type="text" placeholder="Girls Basketball, Football…" />
              </div>
              <div className="field half">
                <label htmlFor="f-plan">Plan</label>
                <select id="f-plan" name="plan" defaultValue="Not sure yet">
                  <option>Coach (one program)</option>
                  <option>Director (one program)</option>
                  <option>Full Suite (one program)</option>
                  <option>Entire school</option>
                  <option>District coverage</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="f-message">Anything we should know <span className="opt">optional</span></label>
                <textarea id="f-message" name="message" placeholder="How many programs, what you're running today, timeline…"></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-lg">Claim a founding spot <Ico.arrow /></button>
                <span className="form-note">We reply personally — usually same day.</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing, FoundingSpots, LeadForm });

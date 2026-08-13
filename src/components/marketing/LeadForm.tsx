import { Ico } from "./icons";

/**
 * Access-request lead form.
 *
 * Plain server-rendered POST to /api/request-access — the route validates the
 * required fields (name, email, school, role, sports, plan) and 303-redirects
 * to /request-access/thanks on success or /request-access/error on failure, so
 * no client-side JavaScript is needed. `sports` is required to match the API.
 */
export function LeadForm() {
  return (
    <section className="section lead-band" id="access">
      <div className="container">
        <div className="lead-grid">
          <div className="lead-intro reveal">
            <h2 className="h-display h2">See it working for your program.</h2>
            <p>
              Tell us about your program and we&apos;ll get you set up — with the right
              plan for your school and sport.
            </p>
            <ul className="lead-assure">
              <li>
                <Ico.check className="ck" width="16" height="16" /> A real person replies — coaches,
                not a call center
              </li>
              <li>
                <Ico.check className="ck" width="16" height="16" /> No card required to get started
              </li>
              <li>
                <Ico.check className="ck" width="16" height="16" /> Up and running in your sport within a
                week
              </li>
            </ul>
          </div>

          <form className="lead-form reveal" action="/api/request-access" method="POST">
            <div className="form-grid">
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
                <input id="f-school" name="school" type="text" required placeholder="Summit Ridge HS" />
              </div>
              <div className="field half">
                <label htmlFor="f-role">Role</label>
                <input
                  id="f-role"
                  name="role"
                  type="text"
                  required
                  placeholder="Head Coach / AD / District"
                />
              </div>
              <div className="field half">
                <label htmlFor="f-sports">Sport(s)</label>
                <input
                  id="f-sports"
                  name="sports"
                  type="text"
                  required
                  placeholder="Girls Basketball, Football…"
                />
              </div>
              <div className="field half">
                <label htmlFor="f-plan">Plan</label>
                <select id="f-plan" name="plan" defaultValue="Not sure yet">
                  <option>Command (one program)</option>
                  <option>Showcase (one program)</option>
                  <option>Entire school</option>
                  <option>District coverage</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="f-message">
                  Anything we should know <span className="opt">optional</span>
                </label>
                <textarea
                  id="f-message"
                  name="message"
                  placeholder="How many programs, what you're running today, timeline…"
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-lg">
                  Request access <Ico.arrow />
                </button>
                <span className="form-note">We reply personally — usually same day.</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

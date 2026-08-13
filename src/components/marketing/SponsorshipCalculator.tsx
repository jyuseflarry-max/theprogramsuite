"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import { computeValuation } from "@/lib/sponsorship-valuation";
import { isLikelyUsZip } from "@/lib/regional-benchmarks";
import { lookupZipIncomeAction } from "@/components/marketing/sponsorship-actions";

/**
 * Public, minimal-input sponsorship floor calculator (lead magnet) for the
 * marketing site. Values social impressions on sponsor-carrying content a
 * program publishes; the quoted RANGE spans community amplification. The ZIP
 * drives a socioeconomic (median household income) market adjustment.
 *
 * Ties into the Showcase tier: the toolset that actually captures this value.
 * Plan: docs/sponsorship-valuation-plan.md (Phase 2)
 */

/** Starting annual price of the Showcase tier (the ROI anchor). */
const SHOWCASE_START_PRICE = 1_600;

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const compact = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });

function centsToUsd(cents: number): string {
  return usd.format(Math.round(cents) / 100);
}

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  value: number;
  min?: number;
  onChange: (value: number) => void;
};

function NumberField({ id, label, hint, value, min = 0, onChange }: FieldProps) {
  return (
    <label className="calc-field" htmlFor={id}>
      <span className="calc-field-label">{label}</span>
      {hint ? <span className="calc-field-hint">{hint}</span> : null}
      <input
        className="calc-input"
        id={id}
        inputMode="numeric"
        min={min}
        onChange={(event) => {
          const next = Number(event.target.value);
          onChange(Number.isFinite(next) && next >= min ? next : min);
        }}
        type="number"
        value={value === 0 ? "" : value}
      />
    </label>
  );
}

export function SponsorshipCalculator() {
  const [followers, setFollowers] = useState(2_000);
  const [postsPerMonth, setPostsPerMonth] = useState(12);
  const [seasonMonths, setSeasonMonths] = useState(4);
  const [zip, setZip] = useState("");
  const [incomeMultiplier, setIncomeMultiplier] = useState(1);
  const [zipStatus, setZipStatus] = useState<"idle" | "loading" | "applied" | "notfound">("idle");

  // Debounced ZIP → median household income → market multiplier; national avg on miss.
  useEffect(() => {
    if (!isLikelyUsZip(zip)) {
      setIncomeMultiplier(1);
      setZipStatus("idle");
      return;
    }
    let cancelled = false;
    setZipStatus("loading");
    const timer = setTimeout(() => {
      void lookupZipIncomeAction(zip).then((result) => {
        if (cancelled) {
          return;
        }
        if (result) {
          setIncomeMultiplier(result.multiplier);
          setZipStatus("applied");
        } else {
          setIncomeMultiplier(1);
          setZipStatus("notfound");
        }
      });
    }, 400);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [zip]);

  const result = useMemo(
    () =>
      computeValuation({
        content: [
          { channel: "social", followers, sponsoredPostsPerMonth: postsPerMonth, placement: "standard" },
        ],
        seasonMonths,
        incomeMultiplier,
      }),
    [followers, postsPerMonth, seasonMonths, incomeMultiplier]
  );

  const hasInput = followers > 0 && postsPerMonth > 0;

  const zipNote =
    zipStatus === "loading"
      ? "Looking up your area…"
      : zipStatus === "applied"
        ? incomeMultiplier > 1
          ? "Adjusted up for your area's income."
          : incomeMultiplier < 1
            ? "Adjusted for your area's income."
            : "Adjusted for your area."
        : zipStatus === "notfound"
          ? "Using the national average for now."
          : "Add a ZIP to adjust for your community's income.";

  // Showcase ROI tie-in: does the estimate clear the starting price of Showcase?
  const pointDollars = result.pointCents / 100;
  const clearsShowcase = pointDollars >= SHOWCASE_START_PRICE;
  const roiNote = clearsShowcase
    ? "Your estimate already clears it — the rest is money back in the program."
    : "A sponsor or two clears it — the rest is money back in the program.";

  return (
    <div className="calc">
      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <NumberField
          hint="On the account that posts game content"
          id="calc-followers"
          label="Social followers"
          onChange={setFollowers}
          value={followers}
        />
        <NumberField
          hint="Game-day posts, scores, spotlights, etc."
          id="calc-posts"
          label="Sponsored posts / month"
          onChange={setPostsPerMonth}
          value={postsPerMonth}
        />
        <NumberField
          hint="How long the season runs"
          id="calc-season"
          label="Season length (months)"
          min={1}
          onChange={setSeasonMonths}
          value={seasonMonths}
        />
        <label className="calc-field" htmlFor="calc-zip">
          <span className="calc-field-label">ZIP code</span>
          <span className="calc-field-hint">Adjusts for your community&apos;s income</span>
          <input
            className="calc-input"
            id="calc-zip"
            inputMode="numeric"
            maxLength={5}
            onChange={(event) => setZip(event.target.value.replace(/\D/g, "").slice(0, 5))}
            placeholder="e.g. 30301"
            type="text"
            value={zip}
          />
        </label>
      </form>

      <aside className="calc-result">
        <p className="mono-label">Estimated season value</p>
        <p className="calc-amount" aria-live="polite">
          {hasInput ? `${centsToUsd(result.floorCents)} – ${centsToUsd(result.ceilingCents)}` : "—"}
        </p>
        <p className="calc-sub">
          The range spans light to strong community resharing. We anchor on the low end — many
          programs land higher.
        </p>
        {hasInput ? (
          <p className="calc-imp">
            ≈ {compact.format(result.impressions.low)}–{compact.format(result.impressions.high)}{" "}
            sponsor impressions / season
          </p>
        ) : null}
        <p className="calc-zipnote">{zipNote}</p>

        {hasInput ? (
          <div className="calc-roi">
            <span className="calc-roi-eyebrow">Showcase pays for itself</span>
            <p>
              <b>Showcase</b> is the toolset that generates these graphics and sells the placement —{" "}
              <b>{usd.format(SHOWCASE_START_PRICE)}/yr</b> to start. {roiNote}
            </p>
          </div>
        ) : null}

        <div className="calc-info">
          <Info aria-hidden="true" className="calc-info-ico" />
          <p>
            Your posts don&apos;t stop at your own followers — the booster club, families, players,
            and school reshare them. That amplification is the range. Inside the app, your value is
            calculated from content you actually publish and the impressions you prove to sponsors.
          </p>
        </div>

        <a className="btn btn-primary btn-block calc-cta" href="#pricing">
          See Showcase pricing <ArrowRight aria-hidden="true" width="16" height="16" />
        </a>
      </aside>
    </div>
  );
}

/**
 * Sponsorship valuation core (public calculator) — ported from the app repo's
 * `src/lib/sponsorship-valuation.ts`. Pure functions only; no I/O.
 *
 * WHAT THIS VALUES: social impressions on sponsor-carrying content a program
 * publishes. The value driver is AMPLIFICATION — a game-day graphic is reshared
 * by the booster club, families, players, and the school account, reaching far
 * past the team's own follower count. Amplification is an estimate, so the
 * output is a RANGE: the low end assumes modest resharing (the floor we anchor
 * on), the high end assumes strong community spread.
 *
 * Conservative by design; money is in US cents.
 * Plan: docs/sponsorship-valuation-plan.md
 */

export type DigitalChannel = "social" | "email" | "website";

/** Seed CPM (cost per 1,000 impressions) in US cents, per channel. */
export const SEED_CPM_CENTS: Record<DigitalChannel, number> = {
  social: 600, // $6.00 / 1k
  email: 1500, // $15.00 / 1k
  website: 300, // $3.00 / 1k
};

export const CPM_TABLE_VERSION = "2026-06-21";

/** Logo prominence within the published content. */
export type DigitalPlacement = "hero" | "standard" | "mention";
export const PLACEMENT_WEIGHT: Record<DigitalPlacement, number> = {
  hero: 1.0,
  standard: 0.6,
  mention: 0.3,
};

/** Fraction of a team's own followers who organically see a post (conservative). */
export const ORGANIC_REACH_RATE = 0.3;

/** Community amplification range (reshares). low = floor, high = ceiling. */
export const AMPLIFICATION = { low: 1.5, typical: 3, high: 6 } as const;

/** Income-based market multiplier clamp. 1.0 = national average. */
export const MARKET_MULTIPLIER_RANGE = { min: 0.6, max: 1.8 } as const;

export type SponsoredContentInput = {
  channel: DigitalChannel;
  followers: number;
  sponsoredPostsPerMonth: number;
  placement: DigitalPlacement;
};

export type ValuationInput = {
  content: SponsoredContentInput[];
  seasonMonths: number;
  incomeMultiplier?: number;
  organicReachRate?: number;
  amplification?: { low: number; typical: number; high: number };
};

export type ValuationResult = {
  floorCents: number;
  pointCents: number;
  ceilingCents: number;
  impressions: { low: number; typical: number; high: number };
  appliedIncomeMultiplier: number;
  cpmTableVersion: string;
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Compute a conservative seasonal sponsorship valuation range. Spans community
 * amplification (low → strong resharing), scaled by the income multiplier.
 */
export function computeValuation(input: ValuationInput): ValuationResult {
  const reachRate = Math.max(0, input.organicReachRate ?? ORGANIC_REACH_RATE);
  const amp = input.amplification ?? AMPLIFICATION;
  const income = clamp(
    input.incomeMultiplier ?? 1,
    MARKET_MULTIPLIER_RANGE.min,
    MARKET_MULTIPLIER_RANGE.max
  );

  let impressionsLow = 0;
  let impressionsTypical = 0;
  let impressionsHigh = 0;
  let valueLowCents = 0;
  let valueTypicalCents = 0;
  let valueHighCents = 0;

  for (const line of input.content) {
    const postsSeason =
      Math.max(0, line.sponsoredPostsPerMonth) * Math.max(0, input.seasonMonths);
    const organicReachPerPost = Math.max(0, line.followers) * reachRate;
    const seasonOrganicReach = organicReachPerPost * postsSeason;
    if (seasonOrganicReach <= 0) {
      continue;
    }

    const valuePer1kCents = SEED_CPM_CENTS[line.channel] * PLACEMENT_WEIGHT[line.placement];

    const lineImpressionsLow = seasonOrganicReach * amp.low;
    const lineImpressionsTypical = seasonOrganicReach * amp.typical;
    const lineImpressionsHigh = seasonOrganicReach * amp.high;

    impressionsLow += lineImpressionsLow;
    impressionsTypical += lineImpressionsTypical;
    impressionsHigh += lineImpressionsHigh;

    valueLowCents += (lineImpressionsLow / 1000) * valuePer1kCents;
    valueTypicalCents += (lineImpressionsTypical / 1000) * valuePer1kCents;
    valueHighCents += (lineImpressionsHigh / 1000) * valuePer1kCents;
  }

  return {
    floorCents: Math.round(valueLowCents * income),
    pointCents: Math.round(valueTypicalCents * income),
    ceilingCents: Math.round(valueHighCents * income),
    impressions: {
      low: Math.round(impressionsLow * income),
      typical: Math.round(impressionsTypical * income),
      high: Math.round(impressionsHigh * income),
    },
    appliedIncomeMultiplier: income,
    cpmTableVersion: CPM_TABLE_VERSION,
  };
}

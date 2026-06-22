/**
 * Market adjustment for sponsorship valuation, driven by SOCIOECONOMICS. Ported
 * from the app repo. Pure income→multiplier math; the live Census lookup lives
 * in census-income.ts (network I/O).
 *
 * Plan: docs/sponsorship-valuation-plan.md §5
 */

import { MARKET_MULTIPLIER_RANGE } from "@/lib/sponsorship-valuation";

/** US median household income (≈ 2022 ACS), the multiplier's 1.0 anchor. */
export const NATIONAL_MEDIAN_INCOME = 75_000;

/** Square-root dampening: 2× national income → ~1.4×, not 2×. */
const INCOME_DAMPENING = 0.5;

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/** Map a ZIP's median household income to a clamped market multiplier. */
export function incomeToMarketMultiplier(medianHouseholdIncome: number | null | undefined): number {
  if (!medianHouseholdIncome || medianHouseholdIncome <= 0) {
    return 1;
  }
  const ratio = medianHouseholdIncome / NATIONAL_MEDIAN_INCOME;
  const multiplier = Math.pow(ratio, INCOME_DAMPENING);
  return clamp(multiplier, MARKET_MULTIPLIER_RANGE.min, MARKET_MULTIPLIER_RANGE.max);
}

/** True when the string looks like a US ZIP (5 digits, optional +4). */
export function isLikelyUsZip(zip: string): boolean {
  return /^\d{5}(-\d{4})?$/.test(zip.trim());
}

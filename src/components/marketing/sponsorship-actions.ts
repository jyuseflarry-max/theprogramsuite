"use server";

import { fetchZipMedianIncome } from "@/lib/census-income";
import { incomeToMarketMultiplier } from "@/lib/regional-benchmarks";

export type ZipIncomeResult = {
  /** Median household income for the ZIP, in whole US dollars. */
  income: number;
  /** Market multiplier derived from that income (1 = national average). */
  multiplier: number;
};

/**
 * Look up a ZIP's median household income (US Census ACS) and convert it to a
 * market multiplier. Returns null on any miss so the calculator falls back to
 * the national average.
 */
export async function lookupZipIncomeAction(zip: string): Promise<ZipIncomeResult | null> {
  const income = await fetchZipMedianIncome(zip);
  if (income == null) {
    return null;
  }
  return { income, multiplier: incomeToMarketMultiplier(income) };
}

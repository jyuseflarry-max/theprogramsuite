/**
 * US Census ACS median-household-income lookup (server-side; network I/O). Ported
 * from the app repo. Never throws — returns null on any failure so callers fall
 * back to the national average.
 *
 * Variable B19013_001E = median household income (ACS table B19013).
 * Free public endpoint; no key required at low volume.
 */

import { isLikelyUsZip } from "@/lib/regional-benchmarks";

/** Median household income (whole USD) for a ZIP, or null if unavailable. */
export async function fetchZipMedianIncome(zip: string): Promise<number | null> {
  if (!isLikelyUsZip(zip)) {
    return null;
  }
  const zcta = zip.trim().slice(0, 5);
  const url = `https://api.census.gov/data/2022/acs/acs5?get=B19013_001E&for=zip%20code%20tabulation%20area:${zcta}`;

  try {
    const res = await fetch(url, { next: { revalidate: 86_400 } });
    if (!res.ok) {
      return null;
    }
    // Shape: [["B19013_001E","zip code tabulation area"], ["<income>","<zcta>"]]
    const data = (await res.json()) as unknown;
    if (!Array.isArray(data) || data.length < 2 || !Array.isArray(data[1])) {
      return null;
    }
    const income = Number(data[1][0]);
    // Census uses negative sentinels (e.g. -666666666) for unavailable data.
    if (!Number.isFinite(income) || income <= 0) {
      return null;
    }
    return income;
  } catch {
    return null;
  }
}

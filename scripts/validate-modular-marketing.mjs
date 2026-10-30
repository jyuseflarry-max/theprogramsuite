import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  ALL_PRODUCTS_ANNUAL_PRICE, CORE_GROUPS, FILM_ALLOWANCE,
  PRODUCT_CATALOG, PRODUCT_IDS, annualTotal, estimateInquiryHref, productInquiryHref,
} from "../src/lib/product-catalog.js";

const read = (path) => readFileSync(resolve(process.cwd(), path), "utf8");
const expected = [
  ["practice", "Practice", "practice", 250],
  ["strength", "Performance", "performance", 500],
  ["scouting_film_analytics", "Strategy & Film", "strategy-film", 250],
  ["live_game_analytics", "Live Game & Analytics", "live-game-analytics", 250],
  ["inventory", "Inventory", "inventory", 400],
];
assert.deepEqual(PRODUCT_CATALOG.map(({id, name, slug, price}) => [id, name, slug, price]), expected);
assert.equal(ALL_PRODUCTS_ANNUAL_PRICE, 1650);
assert.equal(new Set(PRODUCT_IDS).size, 5);
assert.deepEqual(FILM_ALLOWANCE, { annualUploadMinutes: 600, retainedMinutes: 600, annualDeliveredMinutes: 10000, quality: "Basic 1080p" });
assert.equal(CORE_GROUPS.length, 6);
assert.match(CORE_GROUPS.map((group) => group.detail).join(" "), /invitations.*Messaging.*calendars.*absence.*academic.*injury.*Hosting.*itineraries.*meal orders/s);

// Exercise every purchasable combination. Shared Core never adds a fee, and
// repeating a package cannot accidentally double-charge the estimate.
for (let mask = 0; mask < 32; mask++) {
  const rows = expected.filter((_, index) => mask & (1 << index));
  const ids = rows.map(([id]) => id);
  const price = rows.reduce((sum, row) => sum + row[3], 0);
  assert.equal(annualTotal(ids), price);
  assert.equal(annualTotal([...ids, ...ids]), price);
  const url = new URL(estimateInquiryHref(ids), "https://www.theprogramsuite.com");
  assert.equal(url.hash, "#access");
  assert.equal(url.pathname, "/pricing");
  if (ids.length > 1) {
    assert.equal(url.searchParams.get("product"), "multiple_products");
    assert.deepEqual(url.searchParams.get("packages").split(","), ids, "Inquiries must preserve selected packages");
  } else if (ids.length === 1) {
    assert.equal(url.searchParams.get("product"), ids[0]);
  }
}
for (const retired of ["travel_meals", "studio", "recruiting", "tryouts", "finance_sponsors", "performance", "strategy_film"]) {
  assert.throws(() => annualTotal([retired]), /Unknown product identifier/);
  assert.throws(() => productInquiryHref(retired), /Unknown product identifier/);
}
assert.equal(annualTotal(["practice", "strength"]), 750);
assert.equal(annualTotal(["practice", "inventory"]), 650);

const pricing = read("src/components/marketing/AnnualPricing.tsx");
const home = read("src/components/marketing/ModularLandingPage.tsx");
const prefill = read("src/components/marketing/PlanPrefill.tsx");
const form = read("src/components/marketing/LeadForm.tsx");
const requestRoute = read("src/app/api/request-access/route.ts");
const schema = read("src/components/StructuredData.tsx");
const sitemap = read("src/app/sitemap.ts");
const config = read("next.config.ts");
const surfaces = [pricing, home, form, schema, read("src/components/marketing/HeroV3.tsx"), read("src/app/layout.tsx"), read("src/app/pricing/page.tsx")].join("\n");
assert.match(pricing, /Core is included with every package/);
assert.match(pricing, /<caption/);
assert.match(pricing, /scope="col"/);
assert.match(pricing, /scope="row"/);
assert.match(pricing, /aria-live="polite"/);
assert.match(pricing, /Compare package/);
assert.match(pricing, /data-mobile-visible/);
assert.match(home, /<AnnualPricing/);
assert.equal((home.match(/id="included"/g) || []).length, 0, "Homepage must not duplicate the pricing Core anchor");
assert.match(form, /PRODUCT_CATALOG.map/);
assert.match(prefill, /params.get\("packages"\)/);
assert.match(prefill, /message.value = `Package estimate:/);
assert.match(requestRoute, /new Set\(\[\.\.\.PRODUCT_IDS/);
assert.match(schema, /PRODUCT_CATALOG.map/);
for (const [, , slug] of expected) assert.ok(sitemap.includes(`page("/${slug}"`));
for (const oldPath of ["strength-conditioning", "scouting-film-analytics", "travel-meals"]) {
  assert.ok(config.includes(`source: "/${oldPath}"`));
  assert.ok(!sitemap.includes(`page("/${oldPath}"`));
}
assert.doesNotMatch(surfaces, /four products|all four|Every product is \$250|\$1,000\/year|\$1,250\/year|\$1,750\/year|Strategy & Film is \$350|Scouting, Film & Analytics|Strength & Conditioning/);
assert.doesNotMatch(surfaces, /public gamecast|AI narration|AI drill import|AI exercise import|AI menu import/i);
assert.doesNotMatch(surfaces, /sk_(?:live|test)_|checkout\.sessions\.create|stripe\.checkout/i);
assert.match(read("src/lib/product-catalog.js"), /App checkout still carries the previous prices/);
console.log("Annual pricing validation passed: five packages, 32 combinations, Core included, Film limits, and inquiry handoff.");

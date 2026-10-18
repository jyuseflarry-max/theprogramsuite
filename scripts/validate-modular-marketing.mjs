import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { PRODUCT_CATALOG, productLeadHref } from "../src/lib/product-catalog.js";

const root = process.cwd();
const read = (path) => readFileSync(resolve(root, path), "utf8");

const expected = [
  ["practice", "Practice", "practice", "tps_program_module_practice", "tps_program_module_practice_annual"],
  ["strength", "Strength & Conditioning", "strength-conditioning", "tps_program_module_strength", "tps_program_module_strength_annual"],
  ["inventory", "Inventory", "inventory", "tps_program_module_inventory", "tps_program_module_inventory_annual"],
  ["scouting_film_analytics", "Scouting, Film & Analytics", "scouting-film-analytics", "tps_program_module_scouting_film_analytics", "tps_program_module_scouting_film_analytics_annual"],
  ["travel_meals", "Travel & Meals", "travel-meals", "tps_program_module_travel_meals", "tps_program_module_travel_meals_annual"],
];

assert.equal(PRODUCT_CATALOG.length, 5, "The public catalog must contain exactly five paid products");
for (const [index, values] of expected.entries()) {
  const [id, name, slug, stripeProductId, annualPriceLookupKey] = values;
  const product = PRODUCT_CATALOG[index];
  assert.deepEqual(
    [product.id, product.name, product.slug, product.stripeProductId, product.annualPriceLookupKey],
    [id, name, slug, stripeProductId, annualPriceLookupKey],
    `Catalog product ${index + 1} does not match the stable contract`,
  );
  assert.equal(product.price, 250, `${name} must cost $250 per program, per year`);
  assert.equal(productLeadHref(id), `/?product=${id}#access`, `${name} lead CTA must preserve its stable identifier`);
}

const homepage = read("src/components/marketing/ModularLandingPage.tsx");
const hero = read("src/components/marketing/HeroV3.tsx");
const nav = read("src/components/SiteNav.tsx");
const footer = read("src/components/SiteFooter.tsx");
const leadForm = read("src/components/marketing/LeadForm.tsx");
const prefill = read("src/components/marketing/PlanPrefill.tsx");
const metadata = read("src/app/layout.tsx");
const schema = read("src/components/StructuredData.tsx");
const redirects = read("next.config.ts");
const sitemap = read("src/app/sitemap.ts");
const styles = read("src/app/globals.css");
const activeMarketing = [homepage, hero, nav, footer, leadForm, metadata, schema].join("\n");

for (const phrase of [
  "Choose the tools your program needs.",
  "Included With Every Product",
  "Game schedules, opponents, and results",
  "$250 per program, per year",
  "$1,250/year",
]) {
  assert.ok(activeMarketing.includes(phrase), `Missing required marketing phrase: ${phrase}`);
}

for (const retired of [/Games & Trips/i, /Equipment (?:Inventory|Management)/i, /Athlete Development/i, /\bCoach Review\b/i, /standalone Core/i]) {
  assert.doesNotMatch(activeMarketing, retired, `Retired customer-facing concept remains: ${retired}`);
}

assert.match(homepage, /data-product=\{product\.id\}/, "Pricing CTAs must carry the stable product identifier");
assert.match(prefill, /URLSearchParams\(window\.location\.search\).*get\("product"\)/s, "Direct product CTA links must prefill the lead form");
for (const [id] of expected) assert.ok(leadForm.includes(`value="${id}"`), `Lead form is missing product identifier ${id}`);

assert.ok(nav.includes('href: "/pricing"'), "Navigation must link to the pricing page");
assert.ok(footer.includes("PRODUCT_CATALOG.map"), "Footer product links must use the shared catalog");
for (const [, , slug] of expected) assert.ok(sitemap.includes(`page("/${slug}"`), `Sitemap is missing /${slug}`);

for (const source of ["/games-trips", "/games-and-trips"]) {
  assert.ok(redirects.includes(`source: "${source}"`), `Missing legacy redirect for ${source}`);
}
assert.ok(redirects.includes('destination: "/travel-meals"'), "Legacy Games & Trips routes must redirect to Travel & Meals");

assert.ok(schema.includes("PRODUCT_CATALOG.map"), "Structured data offers must use the shared catalog");
assert.ok(styles.includes(".plans--products, .pricing-example-grid, .connection-grid { grid-template-columns: 1fr; }"), "Mobile pricing must collapse to one column");

const sourceSurface = [homepage, hero, leadForm, prefill, schema, read("src/lib/product-catalog.js")].join("\n");
assert.doesNotMatch(sourceSurface, /sk_(?:live|test)_/i, "Stripe secret keys must never appear in marketing source");
assert.doesNotMatch(sourceSurface, /checkout\.sessions\.create|stripe\.checkout/i, "Marketing must not implement Stripe checkout");

console.log("Final five-product marketing contract validation passed.");

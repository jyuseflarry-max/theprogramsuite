import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  ALL_PRODUCTS_ANNUAL_PRICE,
  FOUNDATION_CAPABILITIES,
  PRODUCT_CATALOG,
  PRODUCT_IDS,
  productSignupHref,
} from "../src/lib/product-catalog.js";

const root = process.cwd();
const read = (path) => readFileSync(resolve(root, path), "utf8");

const expected = [
  ["practice", "Practice", "practice", "tps_program_module_practice", "tps_program_module_practice_annual"],
  ["strength", "Strength & Conditioning", "strength-conditioning", "tps_program_module_strength", "tps_program_module_strength_annual"],
  ["inventory", "Inventory", "inventory", "tps_program_module_inventory", "tps_program_module_inventory_annual"],
  ["scouting_film_analytics", "Scouting, Film & Analytics", "scouting-film-analytics", "tps_program_module_scouting_film_analytics", "tps_program_module_scouting_film_analytics_annual"],
];

assert.equal(PRODUCT_CATALOG.length, 4, "The public catalog must contain exactly four paid products");
assert.deepEqual(PRODUCT_IDS, expected.map(([id]) => id), "Only the four approved product identifiers may be purchased");
assert.equal(ALL_PRODUCTS_ANNUAL_PRICE, 1000, "All four products must total $1,000 per year");
for (const [index, values] of expected.entries()) {
  const [id, name, slug, stripeProductId, annualPriceLookupKey] = values;
  const product = PRODUCT_CATALOG[index];
  assert.deepEqual(
    [product.id, product.name, product.slug, product.stripeProductId, product.annualPriceLookupKey],
    [id, name, slug, stripeProductId, annualPriceLookupKey],
    `Catalog product ${index + 1} does not match the stable contract`,
  );
  assert.equal(product.price, 250, `${name} must cost $250 per program, per year`);
  assert.equal(
    productSignupHref(id),
    `https://app.theprogramsuite.com/get-started/create-school?scope=team&product=${id}`,
    `${name} signup CTA must preserve its stable identifier`,
  );
}
assert.throws(() => productSignupHref("travel_meals"), /Unknown product identifier/, "The retired Travel & Meals key must be rejected");

for (const capability of ["Trips and meals", "Forms and acknowledgments", "Academics and team standards", "Messaging", "Family access"]) {
  assert.ok(FOUNDATION_CAPABILITIES.includes(capability), `Core foundation is missing ${capability}`);
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
const pricingMetadata = read("src/app/pricing/page.tsx");
const foundationPage = read("src/app/team-athlete-operations/page.tsx");
const requestAccessRoute = read("src/app/api/request-access/route.ts");
const activeMarketing = [homepage, hero, nav, footer, leadForm, metadata, schema].join("\n");

for (const phrase of [
  "Choose the tools your program needs.",
  "Included With Every Product",
  "Trips and meals",
  "$250 per program, per year",
  "$1,000/year",
]) {
  assert.ok([activeMarketing, foundationPage, pricingMetadata].join("\n").includes(phrase), `Missing required marketing phrase: ${phrase}`);
}

for (const retired of [/Games & Trips/i, /Equipment (?:Inventory|Management)/i, /Athlete Development/i, /\bCoach Review\b/i, /standalone Core/i, /Travel & Meals/i, /five products/i, /all five/i, /\$1,250/i]) {
  assert.doesNotMatch(activeMarketing, retired, `Retired customer-facing concept remains: ${retired}`);
}

assert.match(homepage, /data-product=\{product\.id\}/, "Pricing CTAs must carry the stable product identifier");
assert.doesNotMatch(homepage, /app\.theprogramsuite\.com\/login/, "Product CTAs must not send new customers to login");
assert.match(prefill, /URLSearchParams\(window\.location\.search\).*get\("product"\)/s, "Direct product CTA links must prefill the lead form");
assert.ok(leadForm.includes("PRODUCT_CATALOG.map"), "Lead form product options must use the shared catalog");
assert.match(requestAccessRoute, /new Set\(\[\.\.\.PRODUCT_IDS/, "Access requests must validate against the shared product identifiers");

assert.ok(nav.includes('href: "/pricing"'), "Navigation must link to the pricing page");
assert.ok(footer.includes("PRODUCT_CATALOG.map"), "Footer product links must use the shared catalog");
for (const [, , slug] of expected) assert.ok(sitemap.includes(`page("/${slug}"`), `Sitemap is missing /${slug}`);
assert.ok(!sitemap.includes("travel-meals"), "The retired Travel & Meals page must not appear in the sitemap");

for (const source of ["/games-trips", "/games-and-trips"]) {
  assert.ok(redirects.includes(`source: "${source}"`), `Missing legacy redirect for ${source}`);
}
assert.ok(redirects.includes('source: "/travel-meals"'), "The retired product URL must redirect to the included foundation");
assert.ok(redirects.includes('destination: "/team-athlete-operations#trips-meals"'), "Legacy trip routes must redirect to the included foundation");

assert.ok(schema.includes("PRODUCT_CATALOG.map"), "Structured data offers must use the shared catalog");
assert.ok(styles.includes(".plans--products, .pricing-example-grid, .connection-grid { grid-template-columns: 1fr; }"), "Mobile pricing must collapse to one column");

const sourceSurface = [homepage, hero, leadForm, prefill, schema, read("src/lib/product-catalog.js")].join("\n");
assert.doesNotMatch(sourceSurface, /travel_meals|travel-meals|Travel & Meals/, "Retired Travel & Meals purchase references must not remain");
assert.doesNotMatch(sourceSurface, /eligibility|clearance|game confirmations/i, "Retired operational claims must not be advertised as features");
assert.doesNotMatch(sourceSurface, /sk_(?:live|test)_/i, "Stripe secret keys must never appear in marketing source");
assert.doesNotMatch(sourceSurface, /checkout\.sessions\.create|stripe\.checkout/i, "Marketing must not implement Stripe checkout");

console.log("Final four-product marketing contract validation passed.");

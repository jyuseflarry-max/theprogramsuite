/**
 * The public product and pricing contract for the marketing site.
 *
 * Checkout and entitlement fulfillment live in the production application.
 * The marketing site only carries stable identifiers into the production app;
 * it does not create Stripe sessions or expose Stripe credentials.
 */
export const PRODUCT_CATALOG = Object.freeze([
  {
    id: "practice",
    slug: "practice",
    name: "Practice",
    price: 250,
    stripeProductId: "tps_program_module_practice",
    annualPriceLookupKey: "tps_program_module_practice_annual",
    description: "Plan the work, run it live, and learn from every session.",
    features: ["Practice plans", "Drills and templates", "Live practice execution", "Boards and reports"],
  },
  {
    id: "strength",
    slug: "strength-conditioning",
    name: "Strength & Conditioning",
    price: 250,
    stripeProductId: "tps_program_module_strength",
    annualPriceLookupKey: "tps_program_module_strength_annual",
    description: "Build programs, run sessions, test athletes, and understand training load.",
    features: ["Training programs and workouts", "Exercise library", "Testing", "Training sessions and workload management"],
  },
  {
    id: "inventory",
    slug: "inventory",
    name: "Inventory",
    price: 250,
    stripeProductId: "tps_program_module_inventory",
    annualPriceLookupKey: "tps_program_module_inventory_annual",
    description: "Know what you own, where it is, who has it, and what comes next.",
    features: ["Equipment catalog and sizing", "Issue and collect", "Storage and physical counts", "Purchasing and inventory fees"],
  },
  {
    id: "scouting_film_analytics",
    slug: "scouting-film-analytics",
    name: "Scouting, Film & Analytics",
    price: 250,
    stripeProductId: "tps_program_module_scouting_film_analytics",
    annualPriceLookupKey: "tps_program_module_scouting_film_analytics_annual",
    description: "Bring opponent preparation, film, and performance analysis into one focused product.",
    features: ["Opponent scouting", "Hosted film", "Sport strategy and tendencies", "Performance analytics"],
  },
]);

export const PRODUCT_IDS = Object.freeze(PRODUCT_CATALOG.map((product) => product.id));
export const ALL_PRODUCTS_ANNUAL_PRICE = PRODUCT_CATALOG.reduce((total, product) => total + product.price, 0);

export const FOUNDATION_CAPABILITIES = Object.freeze([
  "Athlete and staff rosters",
  "Team schedules",
  "Games, opponents, scores, and results",
  "Trips and meals",
  "Attendance and availability",
  "Health, readiness, and return-to-play coordination",
  "Forms and acknowledgments",
  "Academics and team standards",
  "Messaging",
  "Family access",
]);

export function getProduct(productId) {
  return PRODUCT_CATALOG.find((product) => product.id === productId);
}

export function productSignupHref(productId) {
  if (!PRODUCT_IDS.includes(productId)) throw new Error(`Unknown product identifier: ${productId}`);
  const params = new URLSearchParams({ product: productId });
  return `https://app.theprogramsuite.com/start?${params.toString()}`;
}

export function formatAnnualPrice(price) {
  return `$${price.toLocaleString("en-US")}/year`;
}

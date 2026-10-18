/**
 * The public product and pricing contract for the marketing site.
 *
 * Checkout and entitlement fulfillment live in the production application.
 * The marketing site only carries stable identifiers into its existing lead
 * form; it does not create Stripe sessions or expose Stripe credentials.
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
    features: ["Practice plans", "Drill library", "Reusable templates", "Live practice execution", "Boards and reports"],
  },
  {
    id: "strength",
    slug: "strength-conditioning",
    name: "Strength & Conditioning",
    price: 250,
    stripeProductId: "tps_program_module_strength",
    annualPriceLookupKey: "tps_program_module_strength_annual",
    description: "Build programs, run sessions, test athletes, and understand training load.",
    features: ["Training programs", "Workouts and exercises", "Session execution", "Athlete testing", "Training load"],
  },
  {
    id: "inventory",
    slug: "inventory",
    name: "Inventory",
    price: 250,
    stripeProductId: "tps_program_module_inventory",
    annualPriceLookupKey: "tps_program_module_inventory_annual",
    description: "Know what you own, where it is, who has it, and what comes next.",
    features: ["Athlete sizing", "Catalog and storage", "Issue and collection", "Custody and physical counts", "Maintenance and purchasing"],
  },
  {
    id: "scouting_film_analytics",
    slug: "scouting-film-analytics",
    name: "Scouting, Film & Analytics",
    price: 250,
    stripeProductId: "tps_program_module_scouting_film_analytics",
    annualPriceLookupKey: "tps_program_module_scouting_film_analytics_annual",
    description: "Bring opponent preparation, film, and performance analysis into one focused product.",
    features: ["Opponent scouting", "Scouting reports", "Film review", "Performance analysis", "Shared staff workflow"],
  },
  {
    id: "travel_meals",
    slug: "travel-meals",
    name: "Travel & Meals",
    price: 250,
    stripeProductId: "tps_program_module_travel_meals",
    annualPriceLookupKey: "tps_program_module_travel_meals_annual",
    description: "Coordinate trips, itineraries, and team meals without a separate planning system.",
    features: ["Trip planning", "Itineraries", "Travel coordination", "Team meals", "Meal ordering"],
  },
]);

export const PRODUCT_IDS = Object.freeze(PRODUCT_CATALOG.map((product) => product.id));

export function getProduct(productId) {
  return PRODUCT_CATALOG.find((product) => product.id === productId);
}

export function productLeadHref(productId) {
  if (!PRODUCT_IDS.includes(productId)) throw new Error(`Unknown product identifier: ${productId}`);
  return `/?product=${encodeURIComponent(productId)}#access`;
}

export function formatAnnualPrice(price) {
  return `$${price.toLocaleString("en-US")}/year`;
}

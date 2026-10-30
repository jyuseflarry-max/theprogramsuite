/** Public annual pricing. Machine IDs match the app; billing is owned there. */
export const FILM_ALLOWANCE = Object.freeze({
  annualUploadMinutes: 600,
  retainedMinutes: 600,
  annualDeliveredMinutes: 10000,
  quality: "Basic 1080p",
});

export const PRODUCT_CATALOG = Object.freeze([
  {
    id: "practice", slug: "practice", name: "Practice", price: 250,
    description: "Plan the session. Keep the staff together. Run it live.",
    features: ["Drill library and reusable templates", "Practice plans, stations, and groups", "Live Run and full-screen Board", "Staff preparation and practice reports"],
    note: "YouTube and Vimeo drill links included. Uploaded drill videos require Strategy & Film.",
    comparisonLabel: "Practice planning & execution",
    comparisonDetail: "Drills, plans, stations, live Run, Board, and reports",
  },
  {
    id: "strength", slug: "performance", name: "Performance", price: 500,
    description: "Build stronger athletes. See the work behind their progress.",
    features: ["Exercise library and training programs", "Workouts, set logging, and live displays", "Testing, one-rep maxes, and personal records", "Training load, progress, and development goals"],
    note: "Training data and one-rep max tools belong to Performance.",
    comparisonLabel: "Strength, testing & development",
    comparisonDetail: "Programs, workouts, sets, one-rep maxes, and progress",
  },
  {
    id: "scouting_film_analytics", slug: "strategy-film", name: "Strategy & Film", price: 250,
    description: "Teach the system. Prepare for opponents. Make film actionable.",
    features: ["Playbooks, diagrams, installs, and quizzes", "Opponent scouting and game plans", "Film review, clips, notes, and assignments", "Hosted video shared across Film, Playbook, and Practice"],
    note: "10 hours uploaded per year · 10 hours stored at once · 10,000 delivered minutes per year · Basic 1080p. Unlimited YouTube and Vimeo links.",
    comparisonLabel: "Strategy, scouting & hosted film",
    comparisonDetail: "Playbooks, opponent prep, film review, and video assignments",
  },
  {
    id: "live_game_analytics", slug: "live-game-analytics", name: "Live Game & Analytics", price: 250,
    description: "Capture basketball as it happens. Turn possessions into insight.",
    features: ["Live basketball event and possession capture", "Player and team stats with shot charts", "Lineup and possession analysis", "Live dashboards and game/season reports"],
    note: "Basketball only. Core already includes schedules, scores, and basic results.",
    comparisonLabel: "Live basketball capture & analytics",
    comparisonDetail: "Possessions, stats, shot charts, lineup analysis, and live dashboards",
  },
  {
    id: "inventory", slug: "inventory", name: "Inventory", price: 400,
    description: "Know what you own, who has it, and what needs attention.",
    features: ["Equipment catalog, sizing, and storage locations", "Issue, collect, custody, loans, and reservations", "Physical counts, maintenance, and warranties", "Purchasing, receiving, reorder needs, and equipment fees"],
    note: "Equipment purchasing and fees stay connected to the inventory record.",
    comparisonLabel: "Equipment & inventory operations",
    comparisonDetail: "Catalog, issue/collect, storage, counts, maintenance, and purchasing",
  },
]);

export const PRODUCT_IDS = Object.freeze(PRODUCT_CATALOG.map((product) => product.id));
export const ALL_PRODUCTS_ANNUAL_PRICE = PRODUCT_CATALOG.reduce((total, product) => total + product.price, 0);

export const CORE_GROUPS = Object.freeze([
  { name: "People & access", detail: "Athlete rosters, teams, accounts, permissions, family access, and invitations" },
  { name: "Communication", detail: "Messaging, announcements, and notifications" },
  { name: "Scheduling & attendance", detail: "Practices, games, calendars, basic results, absence reporting, and availability" },
  { name: "Athlete Care", detail: "Manual academic and wellness check-ins, injury reporting, participation restrictions, and forms" },
  { name: "Game Operations", detail: "Hosting, workers and volunteers, facilities, standings, and season close" },
  { name: "Travel, Meals & presence", detail: "Manual trips, itineraries, menus, meal orders, vendor sheets, and Public Presence" },
]);

export const FOUNDATION_CAPABILITIES = Object.freeze(CORE_GROUPS.map((group) => group.detail));

export function getProduct(productId) {
  return PRODUCT_CATALOG.find((product) => product.id === productId);
}

export function annualTotal(productIds) {
  return [...new Set(productIds)].reduce((total, id) => {
    const product = getProduct(id);
    if (!product) throw new Error(`Unknown product identifier: ${id}`);
    return total + product.price;
  }, 0);
}

/**
 * App checkout still carries the previous prices. Keep inquiries on marketing
 * until app billing and live Stripe prices match this catalog. Never quote a
 * new price while handing a customer to an incompatible checkout.
 */
export function productInquiryHref(productId) {
  if (!PRODUCT_IDS.includes(productId)) throw new Error(`Unknown product identifier: ${productId}`);
  return `/pricing?product=${encodeURIComponent(productId)}#access`;
}

export function estimateInquiryHref(productIds) {
  const ids = [...new Set(productIds)];
  annualTotal(ids); // Validate IDs before carrying an estimate into the lead form.
  if (!ids.length) return "/pricing#access";
  if (ids.length === 1) return productInquiryHref(ids[0]);
  const params = new URLSearchParams({ product: "multiple_products", packages: ids.join(",") });
  return `/pricing?${params.toString()}#access`;
}

export function formatAnnualPrice(price) {
  return `$${price.toLocaleString("en-US")}/year`;
}

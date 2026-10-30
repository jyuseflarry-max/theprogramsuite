/** Actual application captures from the fictional Riverside demo program. */
export type MarketingScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const DEMO_SCREENSHOT_CAPTION = "Riverside demo program · fictional data";

const screenshot = (file: string, alt: string, width = 1309, height = 818): MarketingScreenshot => ({
  src: `/marketing/screens/current/${file}.jpg`,
  alt,
  width,
  height,
});

export const PRODUCT_SCREENSHOTS: Readonly<Record<string, MarketingScreenshot>> = Object.freeze({
  practice: screenshot("practice-plan", "Riverside demo practice plan in The Program Suite"),
  strength: screenshot("performance-exercises", "Riverside demo exercise library in Performance"),
  scouting_film_analytics: screenshot("strategy-playbook", "Riverside demo 5-Out Give & Go playbook editor in Strategy & Film", 1440, 900),
  live_game_analytics: screenshot("basketball-capture", "Riverside demo basketball capture in Live Game & Analytics"),
  inventory: screenshot("inventory-stock", "Riverside demo equipment stock in Inventory"),
});

/** The report uses the same fictional events shown in the capture workspace. */
export const LIVE_GAME_SCREENSHOTS = Object.freeze({
  capture: PRODUCT_SCREENSHOTS.live_game_analytics,
  analytics: screenshot("basketball-analytics", "Analytics from the same Riverside Demo vs Lakeside basketball events, showing a 6–2 demo score"),
});

export const CORE_SCREENSHOTS = Object.freeze({
  roster: screenshot("core-roster", "Riverside demo athlete roster in included Core"),
  schedule: screenshot("core-schedule", "Riverside demo team schedule in included Core"),
});

"use client";

import { useEffect } from "react";

/**
 * Plan pre-fill for the lead form.
 *
 * Mount once. Any CTA carrying a `data-plan` attribute (e.g. the pricing
 * cards' "Start with Command" / "Start Showcase" buttons) will, on click,
 * set the lead form's Plan dropdown (#f-plan) to the matching option before
 * the in-page anchor scrolls the visitor down to the form. This lets us tell
 * which tier a lead was looking at when they clicked — no page reload, and the
 * server-rendered POST form keeps working if JS is off (it just defaults).
 */
export function PlanPrefill() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-plan]");
      if (!trigger) return;

      const plan = trigger.getAttribute("data-plan");
      const select = document.getElementById("f-plan") as HTMLSelectElement | null;
      if (!plan || !select) return;

      const match = Array.from(select.options).find(
        (option) => option.value === plan || option.text === plan,
      );
      if (match) select.value = match.value;
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

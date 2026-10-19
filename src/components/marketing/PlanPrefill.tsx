"use client";

import { useEffect } from "react";

/**
 * Plan pre-fill for the lead form.
 *
 * Mount once. Product CTAs use the stable public product identifier in either
 * `data-product` or the `product` query parameter. The identifier is copied to
 * the existing lead form; signup, checkout, and entitlements remain owned by
 * the app.
 */
export function PlanPrefill() {
  useEffect(() => {
    const selectProduct = (productId: string | null) => {
      const select = document.getElementById("f-plan") as HTMLSelectElement | null;
      if (!productId || !select) return;
      const match = Array.from(select.options).find((option) => option.value === productId);
      if (match) select.value = match.value;
    };

    selectProduct(new URLSearchParams(window.location.search).get("product"));

    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-product]");
      if (!trigger) return;
      selectProduct(trigger.getAttribute("data-product"));
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

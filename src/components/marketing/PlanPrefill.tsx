"use client";

import { useEffect } from "react";
import { PRODUCT_CATALOG, annualTotal, formatAnnualPrice } from "@/lib/product-catalog";

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

    const params = new URLSearchParams(window.location.search);
    selectProduct(params.get("product"));

    // Compute from our catalog, never from a price supplied in the URL. Keep the
    // chosen combination in the existing CRM message field through the POST.
    const requested = new Set((params.get("packages") || "").split(","));
    const products = PRODUCT_CATALOG.filter((product) => requested.has(product.id));
    if (products.length > 1) {
      selectProduct("multiple_products");
      const message = document.getElementById("f-message") as HTMLTextAreaElement | null;
      if (message && !message.value.trim()) {
        message.value = `Package estimate: ${products.map((product) => product.name).join(" + ")} — ${formatAnnualPrice(annualTotal(products.map((product) => product.id)))} per program, billed annually. Core included.\n\n`;
      }
    }

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

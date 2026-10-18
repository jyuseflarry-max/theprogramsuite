import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowBtn, Eyebrow } from "@/components/primitives";
import { formatAnnualPrice, getProduct, productPurchaseHref } from "@/lib/product-catalog";

const PRODUCT_IMAGES: Record<string, { src: string; alt: string }> = {
  practice: { src: "/marketing/screens/practice-planner.png", alt: "The Practice planning workspace" },
  strength: { src: "/marketing/screens/training-planner.png", alt: "The Strength and Conditioning planning workspace" },
  scouting_film_analytics: { src: "/marketing/screens/strategy-playbook.png", alt: "The scouting and strategy workspace" },
  travel_meals: { src: "/marketing/screens/game-day.png", alt: "The connected team planning workspace" },
};

export function ProductLandingPage({ productId }: { productId: string }) {
  const product = getProduct(productId);
  if (!product) throw new Error(`Unknown product: ${productId}`);
  const image = PRODUCT_IMAGES[productId];

  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <SiteNav />
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>{product.name}</Eyebrow></div>
          <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 96px)" }}>{product.description}</h1>
          <p className="mt-6 max-w-[720px] text-[18px] leading-[1.65] text-[color:var(--color-muted)]">
            Choose {product.name} for {formatAnnualPrice(product.price)} per program. Team &amp; Athlete Operations is included with the purchase.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ArrowBtn href={productPurchaseHref(product.id)} large>Choose {product.name}</ArrowBtn>
            <ArrowBtn href="/pricing" variant="ghost" large>Compare Products</ArrowBtn>
          </div>
        </div>
      </section>
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-[18px]"><Eyebrow>What&apos;s included</Eyebrow></div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 54px)" }}>The focused tools for this job.</h2>
            <ul className="mt-8 grid gap-4">
              {product.features.map((feature, index) => (
                <li className="flex items-baseline gap-3" key={feature}>
                  <span className="text-[13px] font-semibold tabular-nums" style={{ color: "var(--color-accent)" }}>{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[17px] font-semibold">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {image ? <div className="overflow-hidden rounded-[18px] border bg-white shadow-xl" style={{ borderColor: "var(--color-line)" }}><Image src={image.src} alt={image.alt} width={1440} height={900} sizes="(max-width: 1024px) 92vw, 650px" style={{ width: "100%", height: "auto" }} /></div> : null}
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[860px] px-5 py-16 text-center md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Included With Every Product</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 54px)" }}>Team &amp; Athlete Operations connects the work.</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.65] text-[color:var(--color-muted)]">The shared foundation includes athlete and roster management, teams and staff, athlete profiles, health and availability, return-to-play coordination, game schedules, opponents and results, and communication tools.</p>
          <div className="mt-8 flex justify-center"><ArrowBtn href="/team-athlete-operations">Explore the Included Foundation</ArrowBtn></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

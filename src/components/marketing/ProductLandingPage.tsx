import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowBtn, Eyebrow } from "@/components/primitives";
import { FOUNDATION_CAPABILITIES, formatAnnualPrice, getProduct, productInquiryHref } from "@/lib/product-catalog";
import { DEMO_SCREENSHOT_CAPTION, LIVE_GAME_SCREENSHOTS, PRODUCT_SCREENSHOTS } from "@/lib/marketing-screenshots";

export function ProductLandingPage({ productId }: { productId: string }) {
  const product = getProduct(productId);
  if (!product) throw new Error(`Unknown product: ${productId}`);
  const image = PRODUCT_SCREENSHOTS[productId];
  const showsAnalytics = productId === "live_game_analytics";
  const images = showsAnalytics ? [LIVE_GAME_SCREENSHOTS.capture, LIVE_GAME_SCREENSHOTS.analytics] : image ? [image] : [];

  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <SiteNav />
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>{product.name}</Eyebrow></div>
          <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 96px)" }}>{product.description}</h1>
          <p className="mt-6 max-w-[720px] text-[18px] leading-[1.65] text-[color:var(--color-muted)]">
            Choose {product.name} for {formatAnnualPrice(product.price)} per program, including every team in that program. Core is included with any paid product.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ArrowBtn href={productInquiryHref(product.id)} large>Request a Demo</ArrowBtn>
            <ArrowBtn href="/pricing" variant="ghost" large>Compare Products</ArrowBtn>
          </div>
        </div>
      </section>
      {productId === "scouting_film_analytics" ? (
        <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
          <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
            <div className="mb-[18px]"><Eyebrow>Included hosted video</Eyebrow></div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 54px)" }}>Room to teach. Clear annual limits.</h2>
            <ul className="mt-8 grid gap-4 text-[17px] font-semibold md:grid-cols-2">
              <li>10 hours of new uploads per year</li>
              <li>10 hours retained at any time</li>
              <li>10,000 video delivery minutes per year</li>
              <li>Basic 1080p hosted video</li>
            </ul>
            <p className="mt-6 max-w-[800px] text-[16px] leading-[1.65] text-[color:var(--color-muted)]">Hosted video shares one program allowance across Practice, Playbook, and Film. Reusing the same uploaded clip counts once toward upload and retained-video limits; viewing counts toward delivery. Add unlimited external YouTube and Vimeo links without using hosted-video storage.</p>
          </div>
        </section>
      ) : null}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className={`mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:px-8 md:py-20 ${image ? "lg:grid-cols-[.85fr_1.15fr] lg:items-center" : ""}`}>
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
          {image ? (
            <div className="marketing-product-shots">
              {images.map((shot, index) => (
                <figure className="marketing-product-shot" key={shot.src}>
                  <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes="(max-width: 1024px) 92vw, 650px" />
                  <figcaption className="marketing-demo-caption">{showsAnalytics ? index === 0 ? "Live capture · " : "Analytics from the same demo events · " : ""}{DEMO_SCREENSHOT_CAPTION}</figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[860px] px-5 py-16 text-center md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Included With Every Paid Product</Eyebrow></div>
          <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 54px)" }}>Core connects the work.</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-[1.65] text-[color:var(--color-muted)]">The shared foundation includes {FOUNDATION_CAPABILITIES.join(", ").toLowerCase()}.</p>
          <div className="mt-8 flex justify-center"><ArrowBtn href="/team-athlete-operations">Explore the Included Foundation</ArrowBtn></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

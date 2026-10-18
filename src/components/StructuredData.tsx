/**
 * Site-wide JSON-LD structured data (schema.org).
 *
 * Emitted once in the root layout so every page carries Organization + WebSite +
 * SoftwareApplication context. Page-specific graphs (FAQPage on the homepage,
 * BreadcrumbList on sub-pages) are emitted by those pages via <JsonLd data={…} />.
 *
 * Server component — renders a plain <script type="application/ld+json">. We use
 * a @graph so multiple top-level entities share one script and can @id-reference
 * each other (the SoftwareApplication is published by the Organization).
 */

import { PRODUCT_CATALOG } from "@/lib/product-catalog";

const SITE = "https://www.theprogramsuite.com";
const ORG_ID = `${SITE}/#organization`;
const SITE_ID = `${SITE}/#website`;
const APP_ID = `${SITE}/#software`;

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "The Program Suite",
      legalName: "CJ3 Legacy Holdings, LLC",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/marketing/logo-mark.png`,
      },
      description:
        "A connected platform for school and college athletic programs, sold through five $250 annual products with Team & Athlete Operations included with every purchase.",
      email: "coach@theprogramsuite.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5900 Balcones Drive, Suite 29102",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78731",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "coach@theprogramsuite.com",
        areaServed: "US",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.instagram.com/theprogramsuite/",
        "https://www.facebook.com/profile.php?id=61591450102636",
      ],
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE,
      name: "The Program Suite",
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": APP_ID,
      name: "The Program Suite",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Athletic Program Management Software",
      operatingSystem: "Web, iOS, Android",
      url: SITE,
      publisher: { "@id": ORG_ID },
      description:
        "Choose Practice, Strength & Conditioning, Inventory, Scouting, Film & Analytics, or Travel & Meals. Every product is $250 per program, per year and includes the same Team & Athlete Operations foundation.",
      offers: PRODUCT_CATALOG.map((product) => ({
        "@type": "Offer",
        name: product.name,
        price: String(product.price),
        priceCurrency: "USD",
        unitText: "per program per year",
        sku: product.stripeProductId,
      })),
    },
  ],
};

/** Site-wide graph — include once in the root layout. */
export function SiteStructuredData() {
  return <JsonLd data={GRAPH} />;
}

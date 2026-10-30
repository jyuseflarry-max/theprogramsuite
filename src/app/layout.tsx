import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Caveat } from "next/font/google";
import { SiteStructuredData } from "@/components/StructuredData";
import "./globals.css";

/* Geist — body + UI */
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

/* Geist Mono — mono labels / eyebrows */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* Oswald — condensed athletic display headlines */
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Caveat — handwritten script accent ("Changing Lives", "Live better.") */
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // Canonical host is www — the apex (theprogramsuite.com) 307-redirects to www,
  // so og:url / canonical must match to avoid a redirect mismatch.
  metadataBase: new URL("https://www.theprogramsuite.com"),
  verification: {
    google: "3vVDjQhxDPXt7z_0Q4-wEkNLo0aGE4mj6YoXH4jiTD8",
  },
  title: {
    default: "Athletic Program Management Software | The Program Suite",
    template: "%s | The Program Suite",
  },
  description:
    "Choose from five annual products priced $250–$500 per program, covering every team. Athlete Operations/Core is included with any paid product.",
  keywords: [
    "athletic program management software",
    "athletic department software",
    "sports team management software",
    "high school athletics software",
    "coaching software",
    "team scheduling software",
    "athletic inventory software",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Athletic Program Management Software | The Program Suite",
    description:
      "Five annual products priced $250–$500 per program, covering every team, with Athlete Operations/Core included with any paid product.",
    type: "website",
    url: "https://www.theprogramsuite.com",
    siteName: "The Program Suite",
    images: [
      {
        url: "/images/og-coach.jpg",
        width: 1200,
        height: 675,
        alt: "The Program Suite — the system for coaches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athletic Program Management Software | The Program Suite",
    description:
      "Choose the tools your program needs. Five annual products from $250 per program cover every team and include Athlete Operations/Core.",
    images: ["/images/og-coach.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${oswald.variable} ${caveat.variable}`}
    >
      <body>
        <SiteStructuredData />
        {children}
      </body>
    </html>
  );
}

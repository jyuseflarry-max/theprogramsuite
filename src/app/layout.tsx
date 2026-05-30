import type { Metadata } from "next";
import { Big_Shoulders, Instrument_Serif } from "next/font/google";
import "./globals.css";

/* Big Shoulders - editorial sports-magazine headlines */
const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

/* Instrument Serif - italic editorial accent */
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

/* Geist - modern SaaS body (loaded from Google Fonts via next/font/google
   would require Geist on Google Fonts; we use a CSS @import fallback in globals
   for simplicity). Replace with @vercel/geist if you'd rather host. */

export const metadata: Metadata = {
  metadataBase: new URL("https://theprogramsuite.com"),
  title: "The Program Suite - Operating System for School Sports",
  description:
    "The operating system for school sports: athletes, practice, training, schedule, inventory, budget, messages, and district oversight.",
  openGraph: {
    title: "The Program Suite",
    description:
      "Run athletes, practice, training, schedule, inventory, budget, messages, and district oversight from one school sports operating system.",
    type: "website",
    images: [{ url: "/images/the-program-suite-og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Program Suite",
    description: "The operating system for school sports.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bigShoulders.variable} ${instrumentSerif.variable}`}>
      <head>
        {/* Geist body font - Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

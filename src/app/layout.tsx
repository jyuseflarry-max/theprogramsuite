import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Caveat } from "next/font/google";
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
  title: "The Program Suite — The System for Coaches",
  description:
    "You coach. We'll handle the rest. The all-in-one operating system for athletic programs — one platform that replaces the busywork so you can spend more time coaching.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Program Suite — The System for Coaches",
    description:
      "You coach. We'll handle the rest. One platform for your entire program — more coaching, less administration.",
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
    title: "The Program Suite — The System for Coaches",
    description:
      "You coach. We'll handle the rest. One platform for your entire program — more coaching, less administration.",
    images: ["/images/og-coach.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${oswald.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

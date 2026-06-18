import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* Geist — the only typeface for the site (body + display) */
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

export const metadata: Metadata = {
  metadataBase: new URL("https://theprogramsuite.com"),
  title: "The Program Suite - Operating System for School Sports",
  description:
    "The operating system for school sports: athletes, practice, training, inventory, budget, sponsorships, content creation, and district oversight.",
  openGraph: {
    title: "The Program Suite",
    description:
      "Run the program, protect inventory dollars, and create sponsor-ready content from one school sports operating system.",
    type: "website",
    images: [{ url: "/images/the-program-suite-og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Program Suite",
    description: "Run the program, protect the budget, and create sponsor-ready content.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

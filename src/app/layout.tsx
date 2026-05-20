import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theprogramsuite.com"),
  title: "The Program Suite - Inventory Accountability for Every Sport",
  description:
    "Inventory accountability for school sports, plus the coaching operating system that keeps Athletes, Teams, coaches, and schedules connected.",
  openGraph: {
    title: "The Program Suite",
    description:
      "Track what your program owns, who has it, what is missing, and what needs to be collected.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Program Suite",
    description: "Inventory accountability for every sport.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

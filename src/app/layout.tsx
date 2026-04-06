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
  title: "The Program Suite — The Operating System for Winning Programs",
  description:
    "Replace your spreadsheet stack with a professional-grade platform. Practice planning, strength programs, scheduling, and team comms — all in one real-time hub. Built by a coach, for coaches.",
  openGraph: {
    title: "The Program Suite",
    description: "One platform. Every drill, every lift, every player.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Program Suite",
    description: "Stop coaching data. Start coaching athletes.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

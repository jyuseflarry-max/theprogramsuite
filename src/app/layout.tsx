import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://theprogramsuite.com"),
  title: "The Program Suite - Run Your Program Like You Have a Full Staff",
  description:
    "Coach Tools, practice planning, game week, gear, schedule, attendance, Athlete development, family communication, and AD oversight for school sports.",
  openGraph: {
    title: "The Program Suite",
    description: "Run your program like you have a full staff. Founder pricing is open for early programs.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Program Suite",
    description: "The operating system for school sports."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

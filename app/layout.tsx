import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Energy & Market Intelligence | Argus-Aligned Portfolio",
  description:
    "Consulting-grade portfolio: analytics, forecasting, commodities intelligence, and business impact — aligned with Argus Media Consulting Services.",
  openGraph: {
    title: "Energy & Market Intelligence Portfolio",
    description: "Analytical rigor, structured problem solving, and executive-ready market insight.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>{children}</body>
    </html>
  );
}

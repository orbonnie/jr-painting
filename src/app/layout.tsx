import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jacob Reitz Painting",
  description: "Professional commercial and residential painting services.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <SanityLive />
      </body>
    </html>
  );
}

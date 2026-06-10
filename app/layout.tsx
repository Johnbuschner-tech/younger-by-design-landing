import type { Metadata } from "next";
import { Playfair_Display, Lora, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway", weight: ["300","400","500","600","700"], display: "swap" });

export const metadata: Metadata = {
  title: "Younger By Design — The Science-Backed Longevity Playbook",
  description: "Discover the cutting-edge science behind biological age reversal. 14 chapters, 90-day action plan, and a proven playbook for reclaiming your vitality at any age. By John Buschner, MA, CPRS, CRSP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${raleway.variable}`}>
      <body className="bg-[#0a1628] text-[#f0ebe0] antialiased">{children}</body>
    </html>
  );
}

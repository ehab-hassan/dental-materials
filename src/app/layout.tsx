import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Acrostone | Dental & Medical Supplies | Trusted Since 1986",
  description:
    "Leading dental and medical supplies distributor in Egypt. Over 35 years of excellence. Sole distributor of international brands. Partner with Acrostone.",
  keywords: ["dental supplies", "medical supplies", "Egypt", "Acrostone", "dental distributor"],
  openGraph: {
    title: "Acrostone | Dental & Medical Supplies | Trusted Since 1986",
    description: "Leading dental and medical supplies distributor in Egypt.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="antialiased">
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

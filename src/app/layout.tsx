import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://infinitylooptrade.com'),
  title: "PT INFINITY LOOP TRADE INC - Professional Trading Solutions",
  description: "PT INFINITY LOOP TRADE INC adalah perusahaan perdagangan profesional yang menyediakan solusi import, export, dan supply chain management terpercaya di Bali, Indonesia.",
  keywords: [
    "PT INFINITY LOOP TRADE INC", 
    "Trading Company", 
    "Import Export", 
    "Supply Chain", 
    "Bali Trading", 
    "Indonesia Trading",
    "Professional Trading Solutions"
  ],
  authors: [{ name: "PT INFINITY LOOP TRADE INC" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "PT INFINITY LOOP TRADE INC - Professional Trading Solutions",
    description: "Solusi perdagangan profesional dengan standar tertinggi. Kami menghubungkan peluang bisnis dengan keunggulan operasional.",
    url: "https://infinitylooptrade.com",
    siteName: "PT INFINITY LOOP TRADE INC",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "PT INFINITY LOOP TRADE INC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT INFINITY LOOP TRADE INC - Professional Trading Solutions",
    description: "Solusi perdagangan profesional dengan standar tertinggi.",
    images: ["/logo.png"],
  },
  other: {
    "facebook-domain-verification": "a0pvj1axrzm82n6bcgvc9k1xb5ql20",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
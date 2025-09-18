import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SlideShow from "@/components/SlideShow";

// ----- FONT CONFIG -----
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ----- SITE URL & OG IMAGE -----
const siteUrl = "https://fashdu.vercel.app";
const ogImageUrl = `${siteUrl}/images/og/og-image.jpg`;

// ----- METADATA -----
export const metadata: Metadata = {
  title: "FASHDU - Sehatkan Tubuhmu!",
  description:
    "FASHDU adalah metode kesehatan tradisional untuk memperbarui darah dan menjaga tubuh tetap sehat. Temukan informasi lengkap hanya di Klinik Fashdu Jogja.",
  openGraph: {
    title: "FASHDU - Sehatkan Tubuhmu!",
    description:
      "FASHDU adalah metode kesehatan tradisional untuk memperbarui darah dan menjaga tubuh tetap sehat.",
    url: siteUrl,
    siteName: "Fashdu Jogja",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Logo Klinik Fashdu Jogja",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FASHDU - Sehatkan Tubuhmu!",
    description:
      "FASHDU adalah metode kesehatan tradisional untuk memperbarui darah dan menjaga tubuh tetap sehat.",
    images: [ogImageUrl],
    creator: "@fashdu",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

// ----- ROOT LAYOUT -----
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        <SlideShow />
        {children}
      </body>
    </html>
  );
}

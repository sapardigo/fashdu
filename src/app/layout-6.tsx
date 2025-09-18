import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SlideShow from "@/components/SlideShow";

// FONT
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// SITE URL
const siteUrl = "https://fashdu.vercel.app";

// OG IMAGE
const ogImage = {
  url: `${siteUrl}/images/og/og-image.png`,
  width: 1200,
  height: 630,
  alt: "Logo Klinik Fashdu Jogja",
};

// METADATA
export const metadata: Metadata = {
  title: "FASHDU - Perbarui Darahmu, Sehatkan Tubuhmu!",
  description:
    "FASHDU adalah metode kesehatan tradisional untuk memperbarui darah dan menjaga tubuh tetap sehat. Temukan informasi lengkap hanya di Klinik Fashdu Jogja.",
  openGraph: {
    title: "FASHDU - Perbarui Darahmu, Sehatkan Tubuhmu!",
    description:
      "FASHDU adalah metode kesehatan tradisional untuk memperbarui darah dan menjaga tubuh tetap sehat.",
    url: siteUrl,
    siteName: "Fashdu Jogja",
    images: [ogImage],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FASHDU - Perbarui Darahmu, Sehatkan Tubuhmu!",
    description:
      "FASHDU adalah metode kesehatan tradisional untuk memperbarui darah dan menjaga tubuh tetap sehat.",
    images: [ogImage.url],
    creator: "@fashdu",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

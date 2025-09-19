// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


// ===== FONT CONFIG =====
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ===== SITE URL & OG IMAGE =====
const siteUrl = "https://fashdu.vercel.app"; // Ganti sesuai domainmu
const ogImagePath = "/images/og/og-image.jpg"; // HARUS di folder public
const ogImageUrl = `${siteUrl}${ogImagePath}`;

// ===== METADATA =====
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
    images: [
      {
        url: ogImageUrl, // ABSOLUTE URL
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
    title: "FASHDU - Perbarui Darahmu, Sehatkan Tubuhmu!",
    description:
      "FASHDU adalah metode kesehatan tradisional untuk memperbarui darah dan menjaga tubuh tetap sehat.",
    images: [ogImageUrl], // HARUS array string
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

// ===== ROOT LAYOUT =====
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
       <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

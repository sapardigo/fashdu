import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SlideShow from "@/components/SlideShow";
import Head from "next/head";

// ----- FONT CONFIG -----
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ----- SITE URL -----
const siteUrl = "https://fashdu.vercel.app"; // Domain publik penuh

// ----- HARD-CODED OG IMAGES -----
// 🔹 Versi final aman untuk Next.js 15, pasti muncul di sosial media
const ogImages = [
  {
    url: `${siteUrl}/images/og/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "Logo Klinik Fashdu Jogja",
  },
  {
    url: `${siteUrl}/images/og/og-fallback.jpg`,
    width: 1200,
    height: 630,
    alt: "Fallback Logo Klinik Fashdu Jogja",
  },
];

// ----- METADATA FINAL -----
export const metadata: Metadata = {
  title: "FASHDU - Perbarui Darahmu, Sehatkan Tubuhmu!",
  description:
    "FASHDU adalah metode kesehatan tradisional untuk memperbarui darah dan menjaga tubuh tetap sehat. Temukan informasi lengkap hanya di Klinik Fashdu Jogja.",
  keywords: ["Fashdu", "Klinik Fashdu Jogja", "Terapi darah", "Kesehatan"],
  authors: [{ name: "Klinik Fashdu Jogja" }],
  openGraph: {
    title: "FASHDU - Perbarui Darahmu, Sehatkan Tubuhmu!",
    description:
      "FASHDU adalah metode kesehatan tradisional untuk memperbarui darah dan menjaga tubuh tetap sehat. Temukan informasi lengkap hanya di Klinik Fashdu Jogja.",
    url: siteUrl,
    siteName: "Fashdu Jogja",
    images: ogImages, // Gunakan array hardcode
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FASHDU - Perbarui Darahmu, Sehatkan Tubuhmu!",
    description:
      "FASHDU adalah metode kesehatan tradisional untuk memperbarui darah dan menjaga tubuh tetap sehat.",
    images: ogImages.map((img) => img.url), // Hanya URL
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
        <meta property="fb:app_id" content="1234567890" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        <SlideShow />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import fs from "fs";
import path from "path";
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

// ----- SITE URL -----
const siteUrl = "https://fashdu.vercel.app"; // 🔹 Domain publik penuh (sama seperti versi sebelumnya)

// ----- OTOMATIS GENERATE IMAGE URL -----
// 🔹 Perubahan baru: membaca semua file di folder public/images/og untuk digunakan sebagai OG/Twitter images
const ogImagesDir = path.join(process.cwd(), "public/images/og"); // folder khusus untuk OG images
let ogImages: { url: string; width: number; height: number; alt: string }[] = [];

// Pastikan folder ada
if (fs.existsSync(ogImagesDir)) {
  const files = fs.readdirSync(ogImagesDir).filter((file) => /\.(jpg|jpeg|png)$/.test(file));
  ogImages = files.map((file) => ({
    url: `${siteUrl}/images/og/${file}`,
    width: 1200,
    height: 630,
    alt: `Klinik Fashdu - ${file}`, // otomatis ambil nama file sebagai alt
  }));
}

// 🔹 Jika folder kosong atau tidak ada, gunakan fallback image
if (ogImages.length === 0) {
  ogImages.push({
    url: `${siteUrl}/images/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "Logo Klinik Fashdu Jogja",
  });
}

// ----- METADATA OTOMATIS -----
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
    images: ogImages, // 🔹 Perubahan: pakai semua image yang otomatis didapat dari folder
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FASHDU - Perbarui Darahmu, Sehatkan Tubuhmu!",
    description:
      "FASHDU adalah metode kesehatan tradisional untuk memperbarui darah dan menjaga tubuh tetap sehat.",
    images: ogImages.map((img) => img.url), // 🔹 Hanya URL untuk Twitter
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        <SlideShow />
        {children}
      </body>
    </html>
  );
}

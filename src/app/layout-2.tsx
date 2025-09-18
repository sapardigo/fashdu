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

// ----- SITE URL -----
const siteUrl = "https://fashdu.vercel.app"; // 🔹 Perubahan: pakai domain publik penuh agar image muncul di media sosial

// ----- METADATA -----
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
    url: siteUrl, // 🔹 Perubahan: gunakan siteUrl yang sudah full domain
    siteName: "Fashdu Jogja",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`, // 🔹 Perubahan: path absolut ke public folder
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
    images: [`${siteUrl}/images/og-image.jpg`], // 🔹 Perubahan: path absolut agar Twitter bisa menampilkan image
    creator: "@fashdu",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl, // 🔹 Perubahan: gunakan siteUrl agar canonical konsisten
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

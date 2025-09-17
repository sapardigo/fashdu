const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

import type { Metadata } from "next";
import "./globals.css";

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
    url: "https://fashdu.com", // ganti dengan domain kamu
    siteName: "Fashdu Jogja",
    images: [
      {
        // url: "https://fashdu.com/images/og-image.jpg", // ganti dengan gambar OG kamu
        url: `${siteUrl}/images/og-image.jpg`, // otomatis ikut domain dari env
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
    // images: ["https://fashdujogja.com/images/og-image.jpg"],
    images: [`${siteUrl}/images/og-image.jpg`],
    creator: "@fashdu", // ganti kalau punya akun Twitter/X
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://fashdu.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
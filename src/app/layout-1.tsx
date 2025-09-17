import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl } from "../../lib/config";
import NavBar from "@/components/NavBar";
import SlideShow from "@/components/SlideShow";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// file metadata start
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
    url: "https://fashdu.vercel.app", // ganti dengan domain kamu
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
    canonical: "https://fashdu.vercel.app",
  },
};
// file metadata ends 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        <SlideShow/>
        {children}
      </body>
    </html>
  );
}

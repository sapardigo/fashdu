// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

/* ===== FONT CONFIG ===== */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ===== SITE URL ===== */
const siteUrl = "https://fashdu.vercel.app";

/* ===== METADATA (SEO SAFE) ===== */
export const metadata: Metadata = {
  title: {
    default: "Fashdu Sapardi",
    template: "%s | Fashdu Sapardi",
  },
  description:
    "Fashdu Sapardi adalah layanan terapi fashdu dengan pendekatan profesional untuk membantu proses pemulihan tubuh secara terarah.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Fashdu Sapardi",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fashdu",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
        {/* Global Navigation */}
        <NavBar />

        {/* 
          IMPORTANT:
          Layout TIDAK memberi padding / max-width.
          Semua diatur di page / component.
        */}
        {children}

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}

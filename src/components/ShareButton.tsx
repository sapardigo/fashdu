"use client";

import { useState } from "react";
import Image from "next/image";

// 🔹 Taruh icon di public/icons/
const icons: Record<string, string> = {
  WhatsApp: "/icons/whatsapp.svg",
  Facebook: "/icons/facebook.svg",
  Twitter: "/icons/twitter.svg",
};

export default function ShareButton() {
  const [open, setOpen] = useState(false);

  const text = encodeURIComponent(
    "FASHDU - Perbarui Darahmu, Sehatkan Tubuhmu!\n"
  );
  const pageUrl = encodeURIComponent("https://fashdu.vercel.app");

  const links = [
    { name: "WhatsApp", url: `https://wa.me/?text=${text}${pageUrl}`, color: "#25D366" },
    { name: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`, color: "#3b5998" },
    { name: "Twitter", url: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${text}`, color: "#1da1f2" },
  ];

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Tombol utama */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          padding: "8px 12px",
          borderRadius: "5px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Share
      </button>

      {/* Dropdown icon */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 100,
            display: "flex",
            padding: "4px",
          }}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "4px",
                borderRadius: "5px",
                backgroundColor: link.color,
                width: "36px",
                height: "36px",
                transition: "transform 0.2s",
              }}
              onClick={() => setOpen(false)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Image
                src={icons[link.name]}
                alt={link.name}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

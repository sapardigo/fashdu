"use client";

import { useState } from "react";

// 🔹 Bisa ganti dengan ikon SVG kecil atau image dari public folder
const icons: Record<string, string> = {
  WhatsApp: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  Facebook: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  Twitter: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg",
};

export default function ShareButton() {
  const [open, setOpen] = useState(false);

  const text = encodeURIComponent(
    "FASHDU - Perbarui Darahmu, Sehatkan Tubuhmu!\n"
  );
  const pageUrl = encodeURIComponent("https://fashdu.vercel.app");

  const links = [
    {
      name: "WhatsApp",
      url: `https://wa.me/?text=${text}${pageUrl}`,
      color: "#25D366",
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
      color: "#3b5998",
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${text}`,
      color: "#1da1f2",
    },
  ];

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
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
                padding: "6px",
                margin: "4px",
                borderRadius: "5px",
                backgroundColor: link.color,
                width: "36px",
                height: "36px",
              }}
              onClick={() => setOpen(false)}
            >
              <img
                src={icons[link.name]}
                alt={link.name}
                style={{ width: "20px", height: "20px" }}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

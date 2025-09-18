"use client"
import { useState } from "react";

export default function ShareButton() {
  const [open, setOpen] = useState(false);

  const pageUrl = encodeURIComponent("https://fashdu.vercel.app");
  const text = encodeURIComponent("FASHDU - Perbarui Darahmu, Sehatkan Tubuhmu!\n");
  const links = [
    { name: "WhatsApp", url: `https://wa.me/?text=${text}%20${pageUrl}`, color: "#25D366" },
    { name: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`, color: "#3b5998" },
    { name: "Twitter", url: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${text}`, color: "#1da1f2" },
  ];

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          padding: "10px 20px",
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
          }}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "8px 12px",
                textDecoration: "none",
                color: "#fff",
                backgroundColor: link.color,
                borderBottom: "1px solid #eee",
              }}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ShareWhatsApp() {
  // Teks yang ingin dibagikan
  const text = encodeURIComponent(
    "FASHDU - Perbarui Darahmu, Sehatkan Tubuhmu! "
  );

  // URL halaman
  const url = encodeURIComponent("https://fashdu.vercel.app");

  // Link WhatsApp
  const waLink = `https://wa.me/?text=${text}%20${url}`;

  return (
    <div style={{ marginTop: "20px" }}>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#25D366",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Share ke WhatsApp
      </a>
    </div>
  );
}

import Image from "next/image";

export default function HeroRapat() {
  return (
<section className="m-0">
  <div className="relative overflow-hidden rounded-xl bg-black">
    {/* IMAGE WRAPPER (INI YANG MENGATUR JARAK IMAGE) */}
        
    <Image
      src="/images/hero-terapi.webp"
      alt="Pendekatan terapi profesional dengan suasana layanan yang tenang"
      width={1600}
      height={900}
      priority
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1600px"
    //   style={{ width: "100%", height: "auto" }}
      style={{ width: "98%", height: "auto", margin:"1% 1%"}}
    />


    <div className="absolute inset-0 bg-black/40 z-10" />

    <div className="absolute inset-0 z-20 flex items-center">
      <div className="px-3 py-4 max-w-xl">
        <h1 className="text-white font-semibold" style={{ fontSize: "clamp(20px, 2.2vw, 32px)" }}>
          Fashdu Sapardi
        </h1>
        <h2 className="mt-1 text-white/90 text-sm">
          Perbarui Darahmu – Sehatkan Tubuhmu
        </h2>
      </div>
    </div>
  </div>
</section>

);
}
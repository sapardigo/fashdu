import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-4 my-6 sm:mx-6 sm:my-8">
      <div className="relative overflow-hidden rounded-2xl bg-black">
        
        {/* IMAGE WRAPPER (INI YANG MENGATUR JARAK IMAGE) */}
        <div className="p-4 sm:p-6">
        <Image
          src="/images/hero-terapi.webp"
          alt="Pendekatan terapi profesional dengan suasana layanan yang tenang"
          width={1600}
          height={900}
          priority
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 95vw,
            1400px
          "
        style={{ width: "98%", height: "auto", margin:"1% 1%"}}
        />
        </div>

      </div>
    </section>
  );
}

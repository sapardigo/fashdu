import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-4 my-6 overflow-hidden rounded-2xl">
      {/* Image */}
      <div className="relative h-[70vh] md:h-[80vh] lg:h-[85vh]">
        <Image
          src="/images/hero-terapi.webp"
          alt="Layanan terapi fashdu profesional oleh Fashdu Sapardi"
          fill
          priority
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 95vw,
            1400px
          "
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-6 py-8 md:px-12 md:py-12">
          <h1 className="max-w-3xl text-white text-3xl font-semibold leading-tight md:text-5xl">
            Fashdu Sapardi
          </h1>

          <h2 className="mt-4 max-w-2xl text-white/90 text-base md:text-xl">
            Pendekatan Terapi Profesional untuk Proses Pemulihan yang Terarah
          </h2>
        </div>
      </div>
    </section>
  );
}

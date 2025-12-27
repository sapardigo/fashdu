// components/home/HeroSection.tsx
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Image Hero */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-terapi.webp"
          alt="Layanan terapi profesional dengan pendekatan terstruktur"
          width={1600}
          height={900}
          priority
          className="h-full w-full object-cover"
        />
        {/* Overlay agar teks terbaca */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Konten */}
      <div className="mx-auto max-w-6xl px-6 py-28 text-white">
        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl"
        >
          Pendekatan Terapi Profesional untuk Proses Pemulihan yang Terarah
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/90">
          FASHDU menyediakan layanan terapi dengan pendekatan profesional dan
          terstruktur. Setiap sesi dilakukan secara terjadwal di tempat layanan
          FASHDU, dengan perhatian pada kenyamanan, keamanan, dan kebutuhan
          individu.
        </p>

        {/* CTA Edukatif */}
        <div className="mt-10">
          <Link
            href="/proses"
            className="inline-block rounded-xl bg-white px-8 py-4 text-base font-medium text-black transition hover:bg-white/90"
          >
            Lihat Proses Terapi
          </Link>
        </div>
      </div>
    </section>
  )
}

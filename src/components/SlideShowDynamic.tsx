"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "@/components/SlideShow.css";

export default function SlideShowDynamic() {
  const slides = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // auto-slide setiap 5 detik
  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  // set tinggi container sesuai gambar aktif
  const adjustHeight = (img: HTMLImageElement) => {
    if (!sliderRef.current) return;
    const ratio = sliderRef.current.clientWidth / img.naturalWidth;
    const h = Math.ceil(img.naturalHeight * ratio);
    sliderRef.current.style.height = `${h}px`;
  };

  return (
    <div className="ssd-container">
      <div className="ssd-slider" ref={sliderRef}>
        <div
          className="ssd-slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((src, i) => (
            <div className="ssd-slide" key={i}>
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                width={1200}
                height={800}
                className="ssd-img"
                draggable={false}
                priority={i === 0}
                onLoadingComplete={(img) => {
                  if (i === current) adjustHeight(img);
                }}
              />
            </div>
          ))}
        </div>

        {/* arrows */}
        <button
          className="ssd-arrow ssd-prev"
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          className="ssd-arrow ssd-next"
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* dots */}
      <div className="ssd-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`ssd-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

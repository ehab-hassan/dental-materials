"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

import hero1 from "@/images/hero1.jpg";
import hero2 from "@/images/hero2.png";
import hero3 from "@/images/hero3.png";
import waterpikLogo from "@/images/waterpik_logo.png";
import medisporexLogo from "@/images/medisporex.png";

const slides = [
  {
    title: "Waterpik",
    titleLogo: waterpikLogo,
    subtitle: "Advanced water-flossing technology designed to deliver deep interdental cleaning, improve gum health, and enhance patient oral hygiene with clinically proven performance..",
    cta: "Shop Now",
    href: "#about",
    image: hero1,
  },
  {
    title: "Acrostone Dental Materials",
    subtitle: "Advanced acrylic solutions engineered for precision, durability, and laboratory excellence.",
    cta: "Shop Now",
    href: "/products",
    image: hero2,
    bg: "linear-gradient(135deg, #082f49 0%, #0c4a6e 50%, #0e7490 100%)",
    topGradient: "linear-gradient(to bottom, rgba(8, 47, 73, 0.85) 0%, rgba(12, 74, 110, 0.4) 55%, transparent 80%)",
  },
  {
    title: "Your Partner in Dental & Medical Care",
    titleLogo: medisporexLogo,
    subtitle: "Advanced Surgical & Dental Solutions",
    cta: "Shop Now",
    href: "#contact",
    image: hero3,
    bg: "linear-gradient(135deg, #0e7490 0%, #0c4a6e 50%, #082f49 100%)",
    topGradient: "linear-gradient(to bottom, rgba(14, 116, 144, 0.85) 0%, rgba(12, 74, 110, 0.4) 55%, transparent 80%)",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden" aria-label="Hero slider">
      <div className="relative h-[min(95vh,48rem)] min-h-[36rem] w-full sm:min-h-[40rem]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out"
            style={{
              background: slide.bg,
              opacity: i === active ? 1 : 0,
              pointerEvents: i === active ? "auto" : "none",
              zIndex: i === active ? 1 : 0,
            }}
          >
            {"image" in slide && slide.image && (
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
                aria-hidden
              />
            )}
            {"image" in slide && slide.image && !("topGradient" in slide && slide.topGradient) && (
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, rgba(14, 116, 144, 0.75) 0%, rgba(14, 116, 144, 0.35) 50%, rgba(14, 116, 144, 0.06) 100%)",
                }}
                aria-hidden
              />
            )}
            {"topGradient" in slide && slide.topGradient && (
              <div
                className="absolute inset-0"
                style={{ background: slide.topGradient }}
                aria-hidden
              />
            )}
            <div
              // className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"
              aria-hidden
            />
            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
              <div className={`max-w-4xl text-white ${i === 0 ? "text-left" : "mx-auto text-center"}`}>
              {"titleLogo" in slide && slide.titleLogo ? (
                <div className={`relative w-full max-w-xs animate-fade-in sm:max-w-sm ${i === 0 ? "" : "mx-auto"}`}>
                  <Image
                    src={slide.titleLogo}
                    alt={slide.title}
                    width={200}
                    height={50}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ) : (
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
                  {slide.title}
                </h1>
              )}
              <p className={`mt-4 max-w-2xl text-lg text-white/90 sm:text-xl animate-fade-in ${i >= 1 ? "mx-auto text-center" : ""}`}>
                {slide.subtitle}
              </p>
              {i !== 1 && (
                <div className="mt-8 animate-fade-in">
                  <Link
                    href={slide.href}
                    className="inline-flex items-center rounded-lg bg-[#0ea5e9] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-[#0284c7]"
                  >
                    {slide.cta}
                  </Link>
                </div>
              )}
            </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={prev}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-slate-800/90 p-3 text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-slate-800/90 p-3 text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

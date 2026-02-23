import Link from "next/link";
import Image from "next/image";

import waterpikImg from "@/images/waterpik.jpg";
import acrostoneDentalImg from "@/images/Acrostone Dental.jpg";
import glovesImg from "@/images/gloves.png";
import septodontImg from "@/images/Septodont.jpeg";

const products = [
  {
    tag: "Waterpik",
    name: "Waterpik Cordless Advanced",
    description: "Portable water flosser for on the go oral care.",
    image: waterpikImg,
  },
  {
    tag: "Acrostone Dental",
    name: "Professional Composite Kit",
    description: "Complete composite restoration system.",
    image: acrostoneDentalImg,
  },
  {
    tag: "Gloves",
    name: "Nitrile Examination Gloves",
    description: "Premium powder free nitrile gloves.",
    image: glovesImg,
  },
  {
    tag: "Septodont",
    name: "Septanest Anesthetic",
    description: "Fast acting dental anesthesia solution.",
    image: septodontImg,
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="border-t border-slate-200 bg-slate-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Discover our most popular dental and oral care products.
            </p>
          </div>
          <Link
            href="#products"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#0c4a6e] hover:text-[#0e7490] transition-colors whitespace-nowrap"
          >
            View All Products
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <article
              key={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white hover-lift"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-block w-fit rounded bg-[#0ea5e9]/10 px-2.5 py-0.5 text-xs font-semibold text-[#0c4a6e]">
                  {product.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

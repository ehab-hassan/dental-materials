import Link from "next/link";

const products = [
  {
    tag: "Waterpik",
    name: "Waterpik Cordless Advanced",
    description: "Portable water flosser for on the go oral care.",
    bg: "from-slate-100 to-slate-200",
  },
  {
    tag: "Acrostone Dental",
    name: "Professional Composite Kit",
    description: "Complete composite restoration system.",
    bg: "from-sky-50 to-slate-100",
  },
  {
    tag: "Gloves",
    name: "Nitrile Examination Gloves",
    description: "Premium powder free nitrile gloves.",
    bg: "from-emerald-50 to-slate-100",
  },
  {
    tag: "Septodont",
    name: "Septanest Anesthetic",
    description: "Fast acting dental anesthesia solution.",
    bg: "from-rose-50 to-slate-100",
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
              <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${product.bg}`}>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 text-[#0c4a6e] shadow-sm">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
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

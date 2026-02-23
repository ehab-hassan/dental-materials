import Image from "next/image";
import type { Product } from "@/lib/productsData";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

const starPath =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

function StarRating({ rating, showValue = false, size = "sm" }: { rating: number; showValue?: boolean; size?: "sm" | "md" }) {
  const clamped = Math.min(5, Math.max(0, rating));
  const sizeClass = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.min(1, Math.max(0, clamped - i));
          return (
            <span key={i} className="relative inline-block">
              <svg className={`${sizeClass} w-auto text-slate-200`} fill="currentColor" viewBox="0 0 20 20">
                <path d={starPath} />
              </svg>
              <span
                className="absolute left-0 top-0 overflow-hidden text-amber-400"
                style={{ width: `${fill * 100}%` }}
              >
                <svg className={sizeClass} fill="currentColor" viewBox="0 0 20 20">
                  <path d={starPath} />
                </svg>
              </span>
            </span>
          );
        })}
      </div>
      {showValue && (
        <span className="ml-1 text-sm font-medium text-slate-600">{clamped.toFixed(1)}</span>
      )}
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  viewMode: "grid" | "list";
}

const categoryTagColors: Record<string, string> = {
  Waterpik: "bg-blue-100 text-blue-800",
  "Acrostone Dental": "bg-emerald-100 text-emerald-800",
  "Acrostone Laboratory": "bg-violet-100 text-violet-800",
  Dharma: "bg-orange-100 text-orange-800",
  Gloves: "bg-green-100 text-green-800",
  Medisporex: "bg-sky-100 text-sky-800",
  Septodont: "bg-rose-100 text-rose-800",
  TrentDent: "bg-amber-100 text-amber-800",
  "Elegant Dent": "bg-teal-100 text-teal-800",
};

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const tagClass = categoryTagColors[product.category] ?? "bg-slate-100 text-slate-800";

  if (viewMode === "list") {
    return (
      <article className="flex gap-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover-lift">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-2">
            <span className={`rounded px-2 py-0.5 text-xs font-medium ${tagClass}`}>
              {product.category}
            </span>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
              {product.type}
            </span>
          </div>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">{product.name}</h3>
          {product.rating != null && (
            <StarRating rating={product.rating} showValue size="sm" />
          )}
          <p className="mt-1 text-sm text-slate-600 line-clamp-2">{product.description}</p>
          {product.price != null ? (
            <p className="mt-2 text-base font-semibold text-[#0c4a6e]">{formatPrice(product.price)}</p>
          ) : (
            <p className="mt-2 text-sm text-slate-500">Contact for price</p>
          )}
        </div>
        <div className="shrink-0 self-center">
          <a
            href={`mailto:info@acrostone.com?subject=Inquiry: ${encodeURIComponent(product.name)}`}
            className="inline-flex rounded-lg bg-[#0ea5e9] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0284c7]"
          >
            Inquire Now
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover-lift">
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute left-2 top-2 flex flex-wrap gap-1.5">
          <span className={`rounded px-2 py-0.5 text-xs font-medium ${tagClass}`}>
            {product.category}
          </span>
          <span className="rounded bg-white/90 px-2 py-0.5 text-xs font-medium text-slate-600 backdrop-blur-sm">
            {product.type}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        {product.rating != null && (
          <div className="mt-1.5">
            <StarRating rating={product.rating} showValue size="sm" />
          </div>
        )}
        <p className="mt-1 flex-1 text-sm text-slate-600 line-clamp-2">{product.description}</p>
        {product.price != null ? (
          <p className="mt-2 text-lg font-semibold text-[#0c4a6e]">{formatPrice(product.price)}</p>
        ) : (
          <p className="mt-2 text-sm text-slate-500">Contact for price</p>
        )}
        <a
          href={`mailto:info@acrostone.com?subject=Inquiry: ${encodeURIComponent(product.name)}`}
          className="mt-4 inline-flex justify-center rounded-lg bg-[#0ea5e9] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0284c7]"
        >
          Inquire Now
        </a>
      </div>
    </article>
  );
}

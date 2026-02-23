import Link from "next/link";
import Image from "next/image";

import waterpikImg from "@/images/waterpik.jpg";
import medisporexToolsImg from "@/images/medisporex_tools.jpg";
import acrostoneDentalImg from "@/images/Acrostone Dental.jpg";
import acrostoneLabImg from "@/images/Acrostone Laboratory.jpeg";
import dharmaImg from "@/images/dharma.jpeg";
import septodontImg from "@/images/Septodont.jpeg";
import trentDentImg from "@/images/trentDent.jpeg";
import glovesImg from "@/images/gloves.png";

const categories = [
  { name: "Waterpik", overlay: "bg-blue-600/70", bg: "from-blue-400 to-blue-600", image: waterpikImg },
  { name: "Acrostone Dental", overlay: "bg-emerald-600/70", bg: "from-emerald-400 to-emerald-700", image: acrostoneDentalImg },
  { name: "Acrostone Laboratory", overlay: "bg-violet-600/70", bg: "from-violet-400 to-violet-700", image: acrostoneLabImg },
  { name: "Dharma", overlay: "bg-orange-600/70", bg: "from-orange-500 to-red-600", image: dharmaImg },
  { name: "Gloves", overlay: "bg-green-600/70", bg: "from-green-400 to-green-700", image: glovesImg },
  { name: "Medisporex", overlay: "bg-sky-500/70", bg: "from-sky-400 to-sky-600", image: medisporexToolsImg },
  { name: "Septodont", overlay: "bg-rose-500/70", bg: "from-rose-400 to-rose-600", image: septodontImg },
  { name: "TrentDent", overlay: "bg-amber-500/70", bg: "from-amber-400 to-orange-500", image: trentDentImg },
];

export default function ProductCategories() {
  return (
    <section id="categories" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Product Categories
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Explore our comprehensive range of dental and medical supplies from world renowned brands.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href="/products"
              className="group relative aspect-square overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0c4a6e] focus:ring-offset-2"
            >
              {"image" in cat && cat.image ? (
                <Image src={cat.image} alt={cat.name} fill className="object-cover transition-transform duration-300 ease-out group-hover:scale-110" sizes="(max-width: 640px) 50vw, 25vw" />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.bg} transition-transform duration-300 ease-out group-hover:scale-110`} />
              )}
              <div className={`absolute inset-0 ${cat.overlay} transition group-hover:opacity-90`} />
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-lg font-semibold text-white drop-shadow-md">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

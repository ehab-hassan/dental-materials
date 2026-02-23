import Image from "next/image";

import waterpikLogo from "@/images/waterpik.png";
import septodontLogo from "@/images/septodont.png";
import dharmaLogo from "@/images/dharma.png";
import medisporexLogo from "@/images/medisporex.png";
import trentDentLogo from "@/images/trentDent.png";
import ElegantLogo from "@/images/Elegant-Dent-Logo.png";
import supercareLogo from "@/images/supercare.png";

const partners: { name: string; image?: typeof waterpikLogo }[] = [
  { name: "Waterpik", image: waterpikLogo },
  { name: "Septodont", image: septodontLogo },
  { name: "Dharma", image: dharmaLogo },
  { name: "Medisporex", image: medisporexLogo },
  { name: "TrentDent", image: trentDentLogo },
  { name: "Elegant Dent", image: ElegantLogo },
  { name: "supercare", image: supercareLogo },
];

export default function OurPartners() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Partners
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Acrostone is the sole distributor of many international brands in Egypt.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {partners.slice(0, 4).map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-8 px-4 text-center shadow-sm hover-lift"
              >
                {partner.image ? (
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-12 w-auto object-contain"
                    width={120}
                    height={48}
                  />
                ) : (
                  <span className="text-base font-semibold text-slate-700">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {partners.slice(4).map((partner, i) => (
              <div
                key={i + 4}
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-8 px-4 text-center shadow-sm hover-lift"
              >
                {partner.image ? (
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-12 w-auto object-contain"
                    width={120}
                    height={48}
                  />
                ) : (
                  <span className="text-base font-semibold text-slate-700">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

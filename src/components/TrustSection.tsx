const stats = [
  { value: "35+", label: "Years of Experience" },
  { value: "500+", label: "Dental & Medical Products" },
  { value: "9+", label: "International Brands" },
  { value: "10,000+", label: "Doctors Served" },
];

export default function TrustSection() {
  return (
    <section className="bg-[#0e7490] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center text-white">
              <p className="text-3xl font-bold sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-white/95">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#0c4a6e] px-6 py-16 text-center shadow-xl sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#082f49]/90 to-[#0e7490]/80" aria-hidden />
          <div className="relative z-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#0ea5e9]/20 text-white">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Looking for a Trusted Partner to Access the Egyptian Market?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
              Acrostone is the leading dental and medical supplies distributor in Egypt. Partner with us to expand your reach in one of the largest markets in the Middle East.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0ea5e9] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#0284c7]"
              >
                Contact Us Now
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="mailto:info@acrostone.com"
                className="inline-flex items-center rounded-lg border-2 border-white/80 bg-transparent px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Send an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

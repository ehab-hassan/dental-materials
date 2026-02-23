"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import acrostoneLogo from "@/images/acrostone_logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "center" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 z-50 top-10 bg-white/98 shadow-md backdrop-blur-sm transition-nav">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src={acrostoneLogo}
            alt="Acrostone - Dental & Medical Supplies"
            className="h-10 w-auto object-contain sm:h-12"
            width={180}
            height={48}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href === "#about" ? (
                <a
                  href="#about"
                  onClick={handleAboutClick}
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0c4a6e]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0c4a6e]"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#contact"
            className="rounded-lg bg-[#0ea5e9] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0284c7]"
          >
            Shop Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href === "#about" ? (
                  <a
                    href="#about"
                    onClick={handleAboutClick}
                    className="block font-medium text-slate-700 hover:text-[#0c4a6e]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-medium text-slate-700 hover:text-[#0c4a6e]"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg bg-[#0ea5e9] px-4 py-2 text-center font-semibold text-white"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

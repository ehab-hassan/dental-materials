"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * When navigating to the home page with a hash (e.g. /#about, /#contact),
 * scrolls to that section after the page is ready.
 */
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/" || typeof window === "undefined") return;
    const hash = window.location.hash?.slice(1);
    if (!hash) return;
    const scroll = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const t = setTimeout(scroll, 100);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}

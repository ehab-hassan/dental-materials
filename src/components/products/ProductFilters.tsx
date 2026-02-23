"use client";

import type { ProductCategory, ProductType } from "@/lib/productsData";

interface ProductFiltersProps {
  search: string;
  onSearchChange: (v: string) => void;
  category: string;
  onCategoryChange: (v: string) => void;
  type: string;
  onTypeChange: (v: string) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (v: "grid" | "list") => void;
  categories: ProductCategory[];
  types: ProductType[];
  productCount: number;
}

export default function ProductFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  type,
  onTypeChange,
  viewMode,
  onViewModeChange,
  categories,
  types,
  productCount,
}: ProductFiltersProps) {
  return (
    <div className="border-b border-slate-200 bg-slate-50/80 py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="search"
                placeholder="Search products..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0ea5e9] focus:outline-none focus:ring-1 focus:ring-[#0ea5e9]"
              />
            </div>
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-[#0ea5e9] focus:outline-none focus:ring-1 focus:ring-[#0ea5e9]"
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <select
              value={type}
              onChange={(e) => onTypeChange(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 focus:border-[#0ea5e9] focus:outline-none focus:ring-1 focus:ring-[#0ea5e9]"
            >
              <option value="">All Types</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">Showing {productCount} products</span>
            <div className="flex rounded-lg border border-slate-200 bg-white p-0.5">
              <button
                type="button"
                onClick={() => onViewModeChange("grid")}
                className={`rounded-md p-2 transition ${viewMode === "grid" ? "bg-[#0ea5e9] text-white" : "text-slate-500 hover:text-slate-700"}`}
                aria-label="Grid view"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => onViewModeChange("list")}
                className={`rounded-md p-2 transition ${viewMode === "list" ? "bg-[#0ea5e9] text-white" : "text-slate-500 hover:text-slate-700"}`}
                aria-label="List view"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { products, categories, productTypes, type Product } from "@/lib/productsData";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";

export default function ProductsPageContent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search.trim() ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      const matchCategory = !category || p.category === category;
      const matchType = !type || p.type === type;
      return matchSearch && matchCategory && matchType;
    });
  }, [search, category, type]);

  return (
    <>
      <ProductFilters
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        type={type}
        onTypeChange={setType}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        categories={categories}
        types={productTypes}
        productCount={filteredProducts.length}
      />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {filteredProducts.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} viewMode="grid" />
              ))}
            </div>
          ) : (
            <ul className="space-y-4">
              {filteredProducts.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} viewMode="list" />
                </li>
              ))}
            </ul>
          )
        ) : (
          <p className="py-12 text-center text-slate-600">No products match your filters. Try adjusting your search or filters.</p>
        )}
      </div>
    </>
  );
}

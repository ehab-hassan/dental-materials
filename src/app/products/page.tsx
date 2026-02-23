import ProductsHero from "@/components/products/ProductsHero";
import ProductsPageContent from "@/components/products/ProductsPageContent";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Products | Acrostone Dental & Medical Supplies",
  description:
    "Explore our comprehensive range of dental and medical supplies. Waterpik, Acrostone Dental, Septodont, and more.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24">
      <ProductsHero />
      <ProductsPageContent />
      <Footer />
    </main>
  );
}

import HeroSlider from "@/components/HeroSlider";
import TrustSection from "@/components/TrustSection";
import ProductCategories from "@/components/ProductCategories";
import AboutSection from "@/components/AboutSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import OurPartners from "@/components/OurPartners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToHash from "@/components/ScrollToHash";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollToHash />
      <HeroSlider />
      <TrustSection />
      <ProductCategories />
      <AboutSection />
      <FeaturedProducts />
      <OurPartners />
      <CTASection />
      <Footer />
    </main>
  );
}

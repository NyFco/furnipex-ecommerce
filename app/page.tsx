import HeroSection from "./components/heroSection";
import ProductsSection from "./components/productsSection";
import RangeSection from "./components/rangeSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RangeSection />
      <ProductsSection />
    </main>
  );
}

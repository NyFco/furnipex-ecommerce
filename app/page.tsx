import Header from "./components/header";
import HeroSection from "./components/heroSection";
import ProductsSection from "./components/productsSection";
import RangeSection from "./components/rangeSection";
import "./styles/globals.scss";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <RangeSection />
      <ProductsSection />
    </main>
  );
}

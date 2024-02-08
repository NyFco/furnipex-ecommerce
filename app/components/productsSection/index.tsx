import "@/app/styles/productsSection.scss";
import Title from "../sectionTitle";
import { FunctionComponent } from "react";
import ProductsList from "./ProductsList";
import Link from "next/link";

const ProductsSection: FunctionComponent = () => {
  return (
    <section className="products">
      <Title>Our Products</Title>
      <ProductsList />
      <Link href="/products" className="more-btn">Show More</Link>
    </section>
  );
};
export default ProductsSection;

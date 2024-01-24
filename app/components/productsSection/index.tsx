import "@/app/styles/productsSection.scss";
import Title from "../sectionTitle";
import { FunctionComponent } from "react";
import ProductsList from "./ProductsList";

const ProductsSection: FunctionComponent = () => {
  return (
    <section className="products">
      <Title>Our Products</Title>
      <ProductsList />
      <button className="more-btn">Show More</button>
    </section>
  );
};
export default ProductsSection;

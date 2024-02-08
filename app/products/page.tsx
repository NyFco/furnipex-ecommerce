import "@/app/styles/productsPage.scss";
import { FunctionComponent } from "react";
import Breadcrumb from "../components/breadcrumb";
import ProductsList from "../components/productsSection/ProductsList";

const ProductsPage: FunctionComponent = () => {
  return (
    <main className="products-page">
      <Breadcrumb path="Products" />
      <section className="list">
        <ProductsList />
      </section>
    </main>
  );
};
export default ProductsPage;

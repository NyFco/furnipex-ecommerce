import "@/app/styles/productsList.scss";
import useProducts from "@/app/hooks/useProducts";
import { FunctionComponent } from "react";
import ProductItem from "./ProductItem";

const ProductsList: FunctionComponent = async () => {
  const { getProducts } = useProducts();

  const products = await getProducts();

  return (
    <ul className="products-list">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
};
export default ProductsList;

import useProducts from "@/app/hooks/useProducts";
import { FunctionComponent } from "react";

const ProductsList: FunctionComponent = async () => {
  const { getProducts } = useProducts();

  const products = await getProducts();

  console.log(products);

  return <ul className="list"></ul>;
};
export default ProductsList;

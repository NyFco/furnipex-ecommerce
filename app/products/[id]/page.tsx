import "@/app/styles/productPage.scss";
import type { Metadata } from "next";
import useProducts, { ProductType } from "@/app/hooks/useProducts";
import { FunctionComponent } from "react";
import axios from "axios";
import Action from "./Action";

type ParamsType = {
  id: number;
};

interface ProductPageProps {
  params: ParamsType;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = params;

  const product: ProductType = await axios(
    `http://localhost:3000/api/products/${id}`
  ).then(({ data }) => data);

  return {
    title: `${product.title} | ${product.short_description}`,
  };
}

const ProductPage: FunctionComponent<ProductPageProps> = async ({
  params: { id },
}) => {
  const { getProduct } = useProducts();

  const product = await getProduct(id);

  return (
    <main className="product-page">
      <section className="review-section">
        <div className="image-container">Images</div>
        <div className="details-container">
          <h1 className="product-title">{product.title}</h1>
          <div className="price-container">
            <h3 className="price">${product.price}</h3>
            <h3 className="prev-price">
              ${product.prev_price && product.prev_price}
            </h3>
          </div>
          <p className="description">{product.description}</p>
          <Action />
        </div>
      </section>
    </main>
  );
};
export default ProductPage;

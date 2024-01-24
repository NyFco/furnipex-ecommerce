import { ProductType } from "@/app/hooks/useProducts";
import Image from "next/image";
import { FunctionComponent } from "react";

interface ProductProps {
  product: ProductType;
}

const ProductItem: FunctionComponent<ProductProps> = ({
  product: { title, images, price, prev_price, short_description, discount },
}) => {
  return (
    <li className="item">
      <Image src={images[0]} alt={title} height={375} width={350} />
      <div className="details">
        <h4 className="item-title">{title}</h4>
        <h6 className="desc">{short_description}</h6>
        <div className="price-container">
          <p className="price">${price}</p>
          {prev_price && <p className="prev-price">${prev_price}</p>}
        </div>
      </div>
    </li>
  );
};
export default ProductItem;

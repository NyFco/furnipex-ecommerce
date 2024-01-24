import { ProductType } from "@/app/hooks/useProducts";
import Image from "next/image";
import { FunctionComponent } from "react";
import Label from "./Label";
import HoverOverlay from "./HoverOverlay";

interface ProductProps {
  product: ProductType;
}

const ProductItem: FunctionComponent<ProductProps> = ({
  product: {
    id,
    title,
    images,
    price,
    prev_price,
    short_description,
    discount,
    isNew,
  },
}) => {
  return (
    <li className="item">
      <HoverOverlay href={`products/${id}`} />
      {isNew ? (
        <Label type="new" />
      ) : (
        discount && <Label type="discount" discount={discount} />
      )}
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

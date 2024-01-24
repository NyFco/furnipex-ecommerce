import axios from "axios";

export interface ProductType {
  id: number;
  title: string;
  images: string[];
  price: number;
  prev_price?: number;
  discount?: number;
  isNew?: boolean;
  short_description: string;
  description: string;
}

const useProducts = () => {
  const getProducts = async (): Promise<ProductType[]> =>
    new Promise<ProductType[]>((resolve, reject) => {
      axios("http://localhost:3000/api/products")
        .then(({ data }) => resolve(data))
        .catch((err) => reject(err));
    });

  return {
    getProducts,
  };
};

export default useProducts;

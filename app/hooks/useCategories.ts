import axios from "axios";

export interface CategoryType {
  title: string;
  image: string;
  route: string;
}

const useCategories = () => {
  const getCategories = async (): Promise<CategoryType[]> =>
    new Promise<CategoryType[]>((resolve, reject) => {
      axios("http://localhost:3000/api/categories")
        .then(({ data }) => resolve(data))
        .catch((err) => reject(err));
    });

  return {
    getCategories,
  };
};

export default useCategories;

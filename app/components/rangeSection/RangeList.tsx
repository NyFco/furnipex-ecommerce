import useCategories from "@/app/hooks/useCategories";
import Card from "./Card";

const RangeList = async () => {
  const { getCategories } = useCategories();

  const categories = await getCategories();
  return (
    <ul className="list">
      {categories.map((cat, idx) => (
        <Card
          href={cat.route}
          imgSrc={cat.image}
          alt={cat.title}
          title={cat.title}
          key={idx}
        />
      ))}
    </ul>
  );
};
export default RangeList;

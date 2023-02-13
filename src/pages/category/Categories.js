import { useLoaderData } from "react-router-dom";
import Category from "../../components/category/Category";
export default function Categories() {
  const categories = useLoaderData().categories;
  return (
    <section className=" ">
      <p className="text-3xl text-gray-800 text-center py-8">
        Browse meal <span className="font-bold text-blue-700">Categories</span>{" "}
        and find for yourself.
      </p>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-4">
        {categories.map((category) => (
          <Category category={category} key={category.idCategory} />
        ))}
      </div>
    </section>
  );
}

export const categoryLoader = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  if (res.ok) {
    return res.json();
  } else {
    alert("Failed to load categories !! 😓");
  }
};

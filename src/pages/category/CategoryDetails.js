import { Link, useLoaderData, useParams } from "react-router-dom";

export default function CategoryDetails() {
  const { categoryName } = useParams();
  const meals = useLoaderData().meals;
  return (
    <>
      <h3 className="text-3xl text-center py-6 xl:py-14">
        Let's explore{" "}
        <span className="text-blue-700 font-bold"> {categoryName}</span>{" "}
        category !
      </h3>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
        {meals.map((meal) => (
          <Link
            to={`/meals/${meal.strMeal}`}
            key={meal.idMeal}
            className="bg-slate-50 border  hover:scale-[1.02] ease-in-out duration-300 border-gray-200 rounded-lg shadow-lg "
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className=" rounded-t-lg"
            />
            <h2 className="p-4 text-lg font-bold">
              {meal.strMeal.length > 20
                ? `${meal.strMeal.substring(0, 20)} ...`
                : meal.strMeal}
            </h2>
          </Link>
        ))}
      </div>
    </>
  );
}

export const categoryDetailsLoader = async ({ params }) => {
  const { categoryName } = params;
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );
  if (res.ok) {
    return res.json();
  } else {
    alert("Couldn't find that category !! 😓");
  }
};

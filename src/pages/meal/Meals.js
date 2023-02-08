import { useLoaderData, Link } from "react-router-dom";
import Meal from "../../components/meal/Meal";

export default function Meals() {
  const meals = useLoaderData().meals;
  return (
    <>
      <div className="my-4  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals?.map((meal) => (
          <Meal meal={meal} key={meal.idMeal} />
        ))}
      </div>
    </>
  );
}

// ** Generate random alphabet for random meal
function randomAlphabet() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// ** Loader function
export const mealsLoader = async () => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${randomAlphabet()}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw Error("Couldn't find that Meal !!!!!! 😓");
  }
  return res.json();
};

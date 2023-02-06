import { useLoaderData, Link } from "react-router-dom";
import Meal from "../../components/Meal";

export default function Meals() {
  const meals = useLoaderData().meals;
  return (
    <div className="my-4  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {meals.map((meal) => (
        // console.log(meal)
        <Meal meal={meal} key={meal.idMeal} />
      ))}
    </div>
  );
}

// ** Generate random alphabet for random meal
function randomAlphabet() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// ** Loader function
const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
export const mealsLoader = async () => {
  const res = await fetch(url);
  return res.json();
};

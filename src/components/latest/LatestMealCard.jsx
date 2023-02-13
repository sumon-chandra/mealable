import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LatestMealCard() {
  const [meal, setMeal] = useState({});
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);
  const truncate = (t) => (t?.length > 25 ? `${t.substring(0, 25)} ...` : t);
  return (
    <Link
      to={`/meals/${meal.strMeal}`}
      className=" block sm:mt-7 xl:mt-0 w-full shadow-xl rounded-t-xl border hover:scale-[1.02] transition duration-300"
    >
      <img src={meal.strMealThumb} className="w-full rounded-t-xl" alt="" />
      <p className="pt-7 bg-white pb-4 text-center  text-lg font-bold text-ellipsis overflow-hidden ">
        {truncate(meal.strMeal)}
      </p>
    </Link>
  );
}

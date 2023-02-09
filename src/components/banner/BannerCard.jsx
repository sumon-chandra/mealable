import { useEffect, useState } from "react";

export default function BannerCard() {
  const [meal, setMeal] = useState({});
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, []);
  return (
    <img
      src={meal.strMealThumb}
      className="rounded-md shadow-xl origin-bottom -rotate-12 w-full block"
      alt="Banner Image"
    />
  );
}

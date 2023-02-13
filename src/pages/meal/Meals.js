import { useEffect, useState } from "react";
import Meal from "../../components/meal/Meal";
export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [alphabet, setAlphabet] = useState("b");
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabet}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [alphabet]);

  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <>
      <header className="py-6">
        <h3 className="text-lg xl:text-3xl text-center">
          Browse & Explore{" "}
          <span className="font-bold text-blue-700">Meals</span> to find for
          yourself !!
        </h3>
        <div className="flex xl:w-1/2 mx-auto gap-4 flex-wrap justify-center py-4">
          {alphabets.map((a) => (
            <p
              key={a}
              onClick={(e) => setAlphabet(e?.target.textContent.toLowerCase())}
              className="text-2xl text-blue-700 hover:text-blue-800 font-bold cursor-pointer"
            >
              {a}
            </p>
          ))}
        </div>
      </header>
      {meals ? (
        <div className="my-4  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {meals?.map((meal) => (
            <Meal meal={meal} key={meal.idMeal} />
          ))}
        </div>
      ) : (
        <p className="text-3xl text-red-500 font-bold text-center mt-16 ">
          Can't find meal, Click the other alphabet.
        </p>
      )}
    </>
  );
}

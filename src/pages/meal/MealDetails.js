import { Link, useLoaderData, useParams } from "react-router-dom";
import MealTable from "../../components/meal/MealTable";

export default function MealDetails() {
  // ** Get Youtube ID from URL **
  function youtubeVideoId(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  const meal = useLoaderData().meals[0];
  return (
    <div>
      <h4 className="text-2xl  xl:text-6xl text-center pb-4 xl:pb-8 font-bold">
        {meal.strMeal}
      </h4>
      <div className="xl:flex gap-8">
        <img src={meal.strMealThumb} alt="Meal thumb" />
        <div className=" h-[40em] py-4 xl:py-0 overflow-auto  w-full">
          <MealTable meal={meal} />
        </div>
      </div>
      <div className="py-4">
        <h3 className="text-3xl font-bold py-8">Instructions</h3>
        <p className="xl:text-xl">{meal.strInstructions}</p>
      </div>

      <div className="meal-video py-4">
        <iframe
          className="w-full h-72 sm:h-96 md:h-[30em] lg:h-[45em]"
          src={`https://www.youtube.com/embed/${youtubeVideoId(
            meal.strYoutube
          )}`}
          frameBorder="0"
        ></iframe>
      </div>
      <footer>
        <p className="text-sm font-bold">
          Category:{" "}
          <Link className="underline underline-offset-2" to="/">
            {meal.strCategory}
          </Link>
        </p>
        <p className="text-sm font-bold">
          Area:{" "}
          <Link className="underline underline-offset-2" to="/">
            {meal.strArea}
          </Link>
        </p>
        {meal.strSource ? (
          <p className="text-md font-bold">
            Get more details about{" "}
            <Link
              to={meal.strSource}
              className="underline underline-offset-4"
              target="_blank"
            >
              {meal.strMeal}.
            </Link>
          </p>
        ) : (
          <p className="text-red-500 text-md font-bold">
            Can't find any source !! 😓
          </p>
        )}

        <p className="font-bold">
          Tags:{" "}
          {meal.strTags ? (
            <Link className="text-blue-400" to="/">
              {meal.strTags}
            </Link>
          ) : (
            <span className="text-red-500">Can't find any tag !! 😓</span>
          )}
        </p>
      </footer>
    </div>
  );
}

// ** Meals Details loader function
export const mealDetailsLoader = async ({ params }) => {
  const { mealName } = params;
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  );
  return res.json();
};

import React from "react";
import { Link } from "react-router-dom";

export default function Meal(props) {
  const meal = props.meal;
  return (
    <Link
      to={meal.strMeal}
      className=" bg-slate-50 border  hover:scale-[1.02] ease-in-out duration-300 border-gray-200 rounded-lg shadow-lg hover:shadow-xl relativ "
    >
      <img className="rounded-t-lg" src={meal.strMealThumb} alt="" />

      <div className="py-12 px-5 ">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
          {meal.strMeal}
        </h5>

        <p className="mb-3 font-normal text-gray-700 ">
          {meal.strInstructions?.substring(0, 100)}...
        </p>
        <Link
          to={meal.strMeal}
          className="absolute inline-flex bottom-4 left-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          View details
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </Link>
  );
}

import React from "react";

export default function MealTable({ meal }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 xl:text-2xl py-3">
              Ingredients
            </th>
            <th scope="col" className="px-6 xl:text-2xl py-3">
              Measure
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {meal.strIngredient1}
            </th>
            <td className="px-6 py-4">{meal.strMeasure1}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {meal.strIngredient2}
            </th>
            <td className="px-6 py-4">{meal.strMeasure2}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {meal.strIngredient3}
            </th>
            <td className="px-6 py-4">{meal.strMeasure3}</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {meal.strIngredient4}
            </th>
            <td className="px-6 py-4">{meal.strMeasure4}</td>
          </tr>
          {meal.strIngredient5 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient5}
              </th>
              <td className="px-6 py-4">{meal.strMeasure5}</td>
            </tr>
          )}
          {meal.strIngredient6 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient6}
              </th>
              <td className="px-6 py-4">{meal.strMeasure6}</td>
            </tr>
          )}
          {meal.strIngredient7 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient7}
              </th>
              <td className="px-6 py-4">{meal.strMeasure7}</td>
            </tr>
          )}
          {meal.strIngredient8 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient8}
              </th>
              <td className="px-6 py-4">{meal.strMeasure8}</td>
            </tr>
          )}
          {meal.strIngredient9 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient9}
              </th>
              <td className="px-6 py-4">{meal.strMeasure9}</td>
            </tr>
          )}
          {meal.strIngredient10 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient10}
              </th>
              <td className="px-6 py-4">{meal.strMeasure10}</td>
            </tr>
          )}
          {meal.strIngredient11 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient11}
              </th>
              <td className="px-6 py-4">{meal.strMeasure11}</td>
            </tr>
          )}
          {meal.strIngredient12 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient12}
              </th>
              <td className="px-6 py-4">{meal.strMeasure12}</td>
            </tr>
          )}
          {meal.strIngredient13 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient13}
              </th>
              <td className="px-6 py-4">{meal.strMeasure13}</td>
            </tr>
          )}
          {meal.strIngredient14 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient14}
              </th>
              <td className="px-6 py-4">{meal.strMeasure14}</td>
            </tr>
          )}
          {meal.strIngredient15 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient15}
              </th>
              <td className="px-6 py-4">{meal.strMeasure15}</td>
            </tr>
          )}
          {meal.strIngredient16 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient16}
              </th>
              <td className="px-6 py-4">{meal.strMeasure16}</td>
            </tr>
          )}
          {meal.strIngredient17 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient17}
              </th>
              <td className="px-6 py-4">{meal.strMeasure17}</td>
            </tr>
          )}
          {meal.strIngredient18 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient18}
              </th>
              <td className="px-6 py-4">{meal.strMeasure18}</td>
            </tr>
          )}
          {meal.strIngredient19 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient19}
              </th>
              <td className="px-6 py-4">{meal.strMeasure19}</td>
            </tr>
          )}
          {meal.strIngredient20 && (
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {meal.strIngredient20}
              </th>
              <td className="px-6 py-4">{meal.strMeasure20}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

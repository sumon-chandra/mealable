import React from "react";
import LatestMealCard from "./LatestMealCard";

export default function LatestMeal() {
  return (
    <section className=" border-t-4 border-gray-800 mt-24">
      <p className="text-3xl font-bold text-gray-800 text-center py-8">
        Latest Meals
      </p>
      <div className="grid xl:grid-cols-4 sm:gap-y-4 xl:gap-4">
        <LatestMealCard />
        <LatestMealCard />
        <LatestMealCard />
        <LatestMealCard />
        <LatestMealCard />
        <LatestMealCard />
        <LatestMealCard />
        <LatestMealCard />
      </div>
    </section>
  );
}

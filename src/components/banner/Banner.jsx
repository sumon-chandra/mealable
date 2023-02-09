import React from "react";
import BannerCard from "./BannerCard";

export default function Banner() {
  return (
    <section className="xl:flex justify-between items-center">
      <h3 className="xl:text-6xl text-3xl font-bold text-gray-800 xl:w-1/2 mx-auto text-center">
        Explore Meals and make your own{" "}
        <span className="text-blue-700 font-black">recipes</span>!🤩
      </h3>
      <div className="grid grid-cols-2 xl:w-2/5 gap-6 py-10 pl-4 xl:py-0 ">
        <BannerCard />
        <BannerCard />
        <BannerCard />
        <BannerCard />
      </div>
    </section>
  );
}

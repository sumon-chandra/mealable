import React from "react";
import { Outlet } from "react-router-dom";

export default function MealsLayout() {
  return (
    <div className="pt-4">
      <h1 className="text-center text-2xl ">
        Find & Explore best meal for you !!
      </h1>
      <div className="my-12">
        <Outlet />
      </div>
    </div>
  );
}

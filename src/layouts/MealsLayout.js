import React from "react";
import { Outlet } from "react-router-dom";

export default function MealsLayout() {
  return (
    <div className="my-12">
      <Outlet />
    </div>
  );
}

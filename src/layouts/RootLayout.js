import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="bg-gray-300">
      <header>
        <Navbar />
      </header>
      <main className="md:w-10/12 w-full p-2 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

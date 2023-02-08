import React from "react";
import ToggleBtn from "./ToggleBtn";
import logo from "../../img/logo.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-slate-50 border-gray-600 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container md:w-10/12 flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" href="#" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Mealable Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Mealable
          </span>
        </Link>
        <ToggleBtn />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink
              to="/"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About
            </NavLink>
            <NavLink
              to="category"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Category
            </NavLink>
            <NavLink
              to="meals"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Meals
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

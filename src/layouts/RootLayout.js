import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

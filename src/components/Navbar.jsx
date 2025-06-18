import React from "react";
import CurrencySelector from "./CurrencySelector";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Crypto Tracker</h1>

      <div className="flex items-center space-x-4">
        <CurrencySelector />
      </div>
    </nav>
  );
};

export default Navbar;

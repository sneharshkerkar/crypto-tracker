import React, { useContext } from "react";
import { CryptoContext } from "./context/CryptoContext";

import Navbar from "./components/Navbar";
import CoinCard from "./components/CoinCard";
import SearchBar from "./components/SearchBar";
import SortDropdown from "./components/SortDropdown";

const App = () => {
  const { coins, loading, searchTerm, sortBy } = useContext(CryptoContext);

  // 1. Filter based on search
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Sort based on dropdown selection
  const sortedCoins = [...filteredCoins];

  if (sortBy === "price_asc") {
    sortedCoins.sort((a, b) => a.current_price - b.current_price);
  } else if (sortBy === "price_desc") {
    sortedCoins.sort((a, b) => b.current_price - a.current_price);
  } else if (sortBy === "percent_change_asc") {
    sortedCoins.sort(
      (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
    );
  } else if (sortBy === "percent_change_desc") {
    sortedCoins.sort(
      (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="px-4">
        <SearchBar />
        <SortDropdown />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedCoins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

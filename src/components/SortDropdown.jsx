import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";

const SortDropdown = () => {
  const { sortBy, setSortBy } = useContext(CryptoContext);

  return (
    <div className="mb-6">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="p-2 rounded border border-gray-300 focus:outline-none"
      >
        <option value="market_cap_desc">Market Cap ↓</option>
        <option value="price_asc">Price ↑</option>
        <option value="price_desc">Price ↓</option>
        <option value="percent_change_asc">24h % Change ↑</option>
        <option value="percent_change_desc">24h % Change ↓</option>
      </select>
    </div>
  );
};

export default SortDropdown;

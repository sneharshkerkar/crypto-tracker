import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";

const CurrencySelector = () => {
  const { currency, setCurrency } = useContext(CryptoContext);

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="border border-gray-300 rounded px-2 py-1"
    >
      <option value="usd">USD</option>
      <option value="inr">INR</option>
      <option value="eur">EUR</option>
    </select>
  );
};

export default CurrencySelector;

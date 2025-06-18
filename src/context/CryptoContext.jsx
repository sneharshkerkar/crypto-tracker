import React from "react";
import { createContext, useState, useEffect } from "react";


export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState("usd");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc"); // default sort option

  

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false`
      );
      const data = await res.json();
      setCoins(data);
    } catch (err) {
      console.error("Error fetching coins", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  return (
    <CryptoContext.Provider value={{
        coins,
        currency,
        setCurrency,
        loading,
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
      }}>
      {children}
    </CryptoContext.Provider>
  );
};

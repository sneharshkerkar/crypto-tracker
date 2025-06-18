import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";
import CoinCard from "./CoinCard";

const CoinList = () => {
  const { coins, loading } = useContext(CryptoContext);

  if (loading) {
    return <p className="text-center mt-10 text-lg">Loading...</p>;
  }

  return (
    <div className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default CoinList;

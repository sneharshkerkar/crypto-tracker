import React, { useContext, useEffect, useState } from "react";
import { CryptoContext } from "../context/CryptoContext";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const CoinCard = ({ coin }) => {
  const { currency } = useContext(CryptoContext);
  const [chartData, setChartData] = useState([]);

  const currencySymbol = (currency) => {
    switch (currency) {
      case "usd":
        return "$";
      case "inr":
        return "₹";
      case "eur":
        return "€";
      default:
        return "";
    }
  };

  useEffect(() => {
    const fetchChart = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=${currency}&days=7`
        );
        const data = await res.json();

        const prices = data.prices.map(([timestamp, price]) => ({
          time: new Date(timestamp).toLocaleDateString(),
          price: Number(price.toFixed(2)),
        }));

        setChartData(prices);
      } catch (err) {
        console.error("Chart fetch error:", err);
      }
    };

    fetchChart();
  }, [coin.id, currency]);

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
      <img src={coin.image} alt={coin.name} className="w-16 h-16 mb-2" />
      <h2 className="text-lg font-bold text-gray-900">{coin.name}</h2>
      <p className="text-sm text-gray-500">{coin.symbol.toUpperCase()}</p>
      <p className="text-blue-600 font-semibold mt-1">
        {currencySymbol(currency)}
        {coin.current_price.toLocaleString()}
      </p>
      <p
        className={`mt-1 text-sm font-medium ${
          coin.price_change_percentage_24h >= 0
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>

      <div className="w-full mt-3 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="price"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                borderRadius: "6px",
                color: "#fff",
              }}
              formatter={(value) => [
                `${currencySymbol(currency)}${value}`,
                "Price",
              ]}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CoinCard;

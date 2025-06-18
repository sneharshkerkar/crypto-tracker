import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(CryptoContext);

  return (
    <input
      type="text"
      placeholder="Search by coin or symbol..."
      className="w-full max-w-md p-3 border border-gray-300 rounded-md mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;

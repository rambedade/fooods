import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <div className="flex bg-none items-center space-x-2 bg-gray-100 p-4 rounded-lg shadow-md w-full">
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import { searchRecipes } from "../api/api";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const handleSearch = async (query) => {
    try {
      const recipes = await searchRecipes(query);
      setRecipes(recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div 
      className="min-h-screen  bg-gradient-to-r from-[#290137] via-[#071922] to-[#130e31] flex flex-col items-center justify-center p-6 " 
      // style={{ backgroundImage: "url('https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148695092.jpg?semt=ais_hybrid')" }}
    >
      <div className="bg-none bg-opacity-90 shadow-lg rounded-lg p-8 w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Discover and Save Your Favorite Recipes!
        </h1>
        <div className="flex bg-none justify-center mb-10">
          <SearchBar onSearch={handleSearch} />
        </div>
        <RecipeList className="bg-none" recipes={recipes} />
        <div className="mt-6 text-center">
          <a href="#" className="text-white hover:underline text-lg font-semibold">View More Recipes</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

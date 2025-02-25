import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import { searchRecipes } from "../api/api";

const results = [
  {
    id: 715415,
    title: "Red Lentil Soup with Chicken and Turnips",
    image: "https://img.spoonacular.com/recipes/715415-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 716406,
    title: "Asparagus and Pea Soup: Real Convenience Food",
    image: "https://img.spoonacular.com/recipes/716406-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 644387,
    title: "Garlicky Kale",
    image: "https://img.spoonacular.com/recipes/644387-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 715446,
    title: "Slow Cooker Beef Stew",
    image: "https://img.spoonacular.com/recipes/715446-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 782601,
    title: "Red Kidney Bean Jambalaya",
    image: "https://img.spoonacular.com/recipes/782601-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 716426,
    title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
    image: "https://img.spoonacular.com/recipes/716426-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 716004,
    title:
      "Quinoa and Chickpea Salad with Sun-Dried Tomatoes and Dried Cherries",
    image: "https://img.spoonacular.com/recipes/716004-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 716627,
    title: "Easy Homemade Rice and Beans",
    image: "https://img.spoonacular.com/recipes/716627-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 664147,
    title: "Tuscan White Bean Soup with Olive Oil and Rosemary",
    image: "https://img.spoonacular.com/recipes/664147-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 640941,
    title: "Crunchy Brussels Sprouts Side Dish",
    image: "https://img.spoonacular.com/recipes/640941-312x231.jpg",
    imageType: "jpg",
  },
];

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

  //   const [recipes, setRecipes] = useState([]);
  // const [error, setError] = useState("");

  // const handleSearch = async (query) => {
  //   try {
  //     setError("");
  //     const results = await searchRecipes(query);
  //     setRecipes(results);
  //     if (results.length === 0) {
  //       setError("No recipes found. Try a different search.");
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  return (
    <div className="bg-img">
      <div className="search-bar">
        <h1 className="red">
          Please Search Your Favourite Recipes and Then Save in Your Profile
        </h1>
        <SearchBar onSearch={handleSearch} />
        <RecipeList recipes={recipes} />
      </div>

      {/* <div className="home-recipe">
        {results.map((el, key) => (
          <div className="home-recipe-item"key={el.id}>
            <img src={el.image} alt={el.image} />
            
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default Home;

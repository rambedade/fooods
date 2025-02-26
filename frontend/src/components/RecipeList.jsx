import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes = [] }) => {
  return (
    <div className="grid  bg-none text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 w-full max-w-7xl mx-auto">
      {recipes.length === 0 ? (
        <p className="text-center ml-8 text-white text-lg font-semibold">Please Search Your Favourite Recipes.</p>
      ) : (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      )}
    </div>
  );
};

export default RecipeList;

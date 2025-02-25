import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes = [] }) => {
  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p className="re">Please Search Your Favourite Recipes.</p>
      ) : (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      )}
    </div>
  );
};

export default RecipeList;

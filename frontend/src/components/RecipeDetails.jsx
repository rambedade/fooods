
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeDetails } from "../api/api";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await getRecipeDetails(id);
        if (!res) throw new Error("Recipe not found");
        setRecipe(res);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchRecipe();
  }, [id]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe_details">
      <h1>{recipe.title}</h1>
      <div className="recipe_details-flex">
        <div>
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <div className="info-price-details">
          <p dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          <h3 className="price">Price : {recipe.pricePerServing}</h3>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

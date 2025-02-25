import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { saveRecipe } from "../api/api";

const RecipeCard = ({ recipe }) => {
  const { user } = useContext(AuthContext);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    console.log("User Data:", user); 
    if (!user || !user.token) {
      setError("You must be logged in to save recipes.");
      return;
    }
    console.log("User Token:", user.token); 
    try {
      await saveRecipe(recipe, user.token);
      setSaved(true);
      alert("Recipe Saved Successfully")
    } catch (err) {
      setError(err.message || "Failed to save recipe.");
    }
  };
  
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <Link to={`/recipe/${recipe.id}`}>View Details</Link>
      <button onClick={handleSave} disabled={saved} style={{ marginLeft: "10px" }}>
        {saved ? "Saved!" : "Save Recipe"}
      </button>
      {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
    </div>
  );
};

export default RecipeCard;

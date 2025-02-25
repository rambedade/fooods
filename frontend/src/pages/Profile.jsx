import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getSavedRecipes } from "../api/api";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user?.token) {
      getSavedRecipes(user.token)
        .then((recipes) => {
          if (Array.isArray(recipes)) {
            setSavedRecipes(recipes);
          } else {
            setError("Failed to load saved recipes.");
          }
        })
        .catch(() => setError("Error fetching saved recipes."));
    } else {
      setError("You must be logged in to view saved recipes.");
    }
  }, [user]);

  return (
    <div className="saved-recipe">
      <h1>My Saved Recipes</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="saved-recipe-list">
        {savedRecipes.length > 0
          ? savedRecipes.map((recipe) => (
              <div className="saved-item" key={recipe._id}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt={recipe.title} />
              </div>
            ))
          : !error && <p>No saved recipes yet.</p>}
      </div>
    </div>
  );
};

export default Profile;
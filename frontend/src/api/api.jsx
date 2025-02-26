// import axios from "axios";
// const API_KEY = "5e1a2f018b5241c4b2720c979cc53718";
// const API_URL = "https://api.spoonacular.com/recipes";
// const BACKEND_URL1 = "http://localhost:1010/api";
// const BACKEND_URL = "https://recipe-app-cqx4.onrender.com/api";

// // Register
// export const registerUser = async (formData) => {
//   try {
//     const response = await axios.post(`${BACKEND_URL}/auth/register`, formData);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Registration failed");
//   }
// };
// // Login

// export const loginUser = async (userData) => {
//   try {
//     const response = await axios.post(`${BACKEND_URL}/auth/login`, userData);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || "Login failed");
//   }
// };
// // Search recipes
// export const searchRecipes = async (query) => {
//   try {
//     const response = await axios.get(`${API_URL}/complexSearch`, {
//       params: { apiKey: API_KEY, query, number: 10 },
//     });
//     return response.data.results || [];
//   } catch (error) {
//     return [];
//   }
// };

// export const getRecipeDetails = async (id) => {
//   try {
//     const response = await axios.get(`${API_URL}/${id}/information`, {
//       params: { apiKey: API_KEY },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching recipe details:", error);
//     return null;
//   }
// };

// export const saveRecipe = async (recipe, token) => {
//   try {
//     console.log("Sending token:", token);
//     const response = await axios.post(
//       `${BACKEND_URL}/user/save`,
//       {
//         title: recipe.title,
//         image: recipe.image,
//         summary: recipe.summary || "No summary available",
//         ingredients: recipe.ingredients || [],
//         instructions: recipe.instructions || "No instructions available",
//       },
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );
//     console.log("Save recipe response:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error saving recipe:", error.response?.data || error);
//     throw new Error(error.response?.data?.error || "Failed to save recipe");
//   }
// };

// export const getSavedRecipes = async (token) => {
//   try {
//     const response = await axios.get(`${BACKEND_URL}/user/saved`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log("Fetched saved recipes:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error fetching saved recipes:",
//       error.response?.data || error
//     );
//     return [];
//   }
// };

// export const reorderSavedRecipes = async (newOrder, token) => {
//   try {
//     const response = await axios.put(
//       `${BACKEND_URL}/user/saved/reorder`,
//       { newOrder },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error reordering saved recipes:",
//       error.response?.data || error
//     );
//     throw new Error("Failed to reorder saved recipes.");
//   }
// };


import axios from "axios";

const API_KEY = "e78549c05c14499084eb97e87151b660";
const API_URL = "https://api.spoonacular.com/recipes";
const BACKEND_URL = "https://fooods-1.onrender.com/api"; // Updated everywhere

// Register
export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/register`, formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Registration failed");
  }
};

// Login
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Login failed");
  }
};

// Search recipes
// export const searchRecipes = async (query) => {
//   try {
//     const response = await axios.get(`${API_URL}/complexSearch`, {
//       params: { apiKey: API_KEY, query, number: 10 },
//     });
//     return response.data.results || [];
//   } catch (error) {
//     return [];
//   }
// };
export const searchRecipes = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/complexSearch`, {
      params: { apiKey: API_KEY, query, number: 10 },
    });
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching recipes:", error.response?.data || error);
    throw new Error(error.response?.data?.message || "Failed to fetch recipes.");
  }
};
  

// Get recipe details
export const getRecipeDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}/information`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};

// Save recipe
export const saveRecipe = async (recipe, token) => {
  try {
    console.log("Sending token:", token);
    const response = await axios.post(
      `${BACKEND_URL}/user/save`,
      {
        title: recipe.title,
        image: recipe.image,
        summary: recipe.summary || "No summary available",
        ingredients: recipe.ingredients || [],
        instructions: recipe.instructions || "No instructions available",
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("Save recipe response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving recipe:", error.response?.data || error);
    throw new Error(error.response?.data?.error || "Failed to save recipe");
  }
};

// Get saved recipes
export const getSavedRecipes = async (token) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/user/saved`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Fetched saved recipes:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching saved recipes:",
      error.response?.data || error
    );
    return [];
  }
};

// Reorder saved recipes
export const reorderSavedRecipes = async (newOrder, token) => {
  try {
    const response = await axios.put(
      `${BACKEND_URL}/user/saved/reorder`,
      { newOrder },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error reordering saved recipes:",
      error.response?.data || error
    );
    throw new Error("Failed to reorder saved recipes.");
  }
};

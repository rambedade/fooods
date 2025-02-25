const express = require("express");
const {
  searchRecipes,
  getRecipeDetails,
} = require("../controllers/recipeController");
const router = express.Router();
router.get("/search", searchRecipes);
router.get("/:id", getRecipeDetails);
module.exports = router;
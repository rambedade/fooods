const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  saveRecipe,
  getSavedRecipes,
  removeSavedRecipe,
  reorderSavedRecipes,
} = require("../controllers/userController");
const router = express.Router();
router.post("/save", authMiddleware, saveRecipe);
router.get("/saved", authMiddleware, getSavedRecipes);
router.delete("/saved/:id", authMiddleware, removeSavedRecipe);
router.put("/saved/reorder", authMiddleware, reorderSavedRecipes);
module.exports = router;
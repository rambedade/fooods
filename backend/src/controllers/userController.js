const User = require("../models/User");
const Recipe = require("../models/Recipe");

exports.saveRecipe = async (req, res) => {
  try {
    const { title, image, summary, ingredients, instructions } = req.body;
    if (!title || !image || !summary || !ingredients || !instructions) {
      return res.status(400).json({ error: "All fields are required" });
    }
    let recipe = await Recipe.findOne({ title });
    if (!recipe) {
      recipe = new Recipe({ title, image, summary, ingredients, instructions });
      await recipe.save();
    }
    const user = await User.findById(req.user.userId);
    if (!user.savedRecipes.includes(recipe._id)) {
      user.savedRecipes.push(recipe._id);
      await user.save();
    }
    res.json({ message: "Recipe saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
exports.getSavedRecipes = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).populate("savedRecipes");
    res.json(user.savedRecipes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.removeSavedRecipe = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    user.savedRecipes = user.savedRecipes.filter(
      (id) => id.toString() !== req.params.id
    );
    await user.save();
    res.json({ message: "Recipe removed successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.reorderSavedRecipes = async (req, res) => {
  try {
    const { newOrder } = req.body;
    if (!Array.isArray(newOrder)) {
      return res.status(400).json({ error: "Invalid order format" });
    }
    const user = await User.findById(req.user.userId);
    user.savedRecipes = newOrder;
    await user.save();
    res.json({ message: "Saved recipes reordered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
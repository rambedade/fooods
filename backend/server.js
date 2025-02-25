const express = require("express");
const connectDB = require("./src/config/db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/recipes", require("./src/routes/recipeRoutes"));
app.use("/api/user", require("./src/routes/userRoutes"));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});
const PORT = process.env.PORT || 1010;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
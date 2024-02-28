const express = require("express");
const app = express();

const cors = require("cors");
const userRouter = require("./Routes/users.js");
const recipesRouter = require("./Routes/recipes.js");
const SERVER_PORT = process.env.SERVER_PORT || 3000;

const corsConfig = {
  origin: "http://localhost:5173",
};

// Middlewares
app.use(cors(corsConfig));
app.use(express.json());
app.use("/auth", userRouter); // userRouter endpoints will now start with /auth
app.use("/recipes", recipesRouter); // recipesRouter endpoints will now start with /recipes

// 404 for all other routes:
app.get("*", (req, res) => {
  res.status(404).send("Sorry, not found...");
});

app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(`Sorry, something went wrong... ${err}`);
  } else {
    console.log(`Server is listening on port ${SERVER_PORT}`);
  }
});

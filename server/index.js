const express = require("express");
const app = express();

const cors = require("cors");
const router = require("./Routes/router");
const SERVER_PORT = 3000;

const corsConfig = {
  origin: "http://localhost:5173",
};

// Middleware setup:
app.use(cors(corsConfig));
app.use(express.json());

// Routes setup:
app.use(router);

// Route for handling 404 errors:
app.get("*", (req, res) => {
  res.status(404).send("Sorry, not found...");
});

// Start the server:
app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(`Sorry, something went wrong... ${err}`);
  } else {
    console.log(`Server is listening on http://localhost:${SERVER_PORT}/`);
  }
});

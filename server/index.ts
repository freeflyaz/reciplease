import express, { Express, Request, Response } from "express";
import { Error } from "mongoose";
import cors from "cors";
import router from "./Routes/router";

const app: Express = express();
const SERVER_PORT: number = 3000;

const corsConfig: cors.CorsOptions = {
  origin: "http://localhost:5173",
};

// Middleware setup:
app.use(cors(corsConfig));
app.use(express.json());

// Routes setup:
app.use(router);

// Start the server:
app.listen(SERVER_PORT, (err?: Error) => {
  if (err) {
    console.log(`Sorry, something went wrong... ${err}`);
  } else {
    console.log(`Server is listening on http://localhost:${SERVER_PORT}/`);
  }
});

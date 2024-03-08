import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

//Other people have answered that you should add a null-check, but Typescript also has a non-null assertion that you can use when you are sure that the value is never null by adding the ! operator to the end of your statement:
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

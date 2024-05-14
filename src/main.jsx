import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/@mdi/font/css/materialdesignicons.min.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
// import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./styles/styles.scss";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

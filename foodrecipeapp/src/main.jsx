import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import GlobalState from "./RecipeContext/RecipeContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <GlobalState>
        <App />
      </GlobalState>
    </StrictMode>
  </BrowserRouter>
);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProviderWrapper } from "./js/bootstrap/contexts/AuthContext.jsx";


createRoot(document.getElementById("root")).render(
  <AuthProviderWrapper>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </AuthProviderWrapper>
);

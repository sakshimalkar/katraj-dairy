import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./index.css";

import AOS from "aos";
import App from "./App.jsx";

AOS.init({
  duration: 650,
  once: true,
  offset: 60,
  easing: "ease-out-cubic",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

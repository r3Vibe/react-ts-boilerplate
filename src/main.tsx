import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { HelmetProvider } from "react-helmet-async";
import ProjectSEO from "./components/Helmet/Project.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ProjectSEO />
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

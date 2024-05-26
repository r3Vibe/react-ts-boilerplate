import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Providers from "./Providers";
import Route from "./routes";

import "./internalization";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <Route />
    </Providers>
  </React.StrictMode>
);

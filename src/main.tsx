import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Providers from "./helpers/Providers.tsx";

// css files
import "./global.css";
import 'react-toastify/dist/ReactToastify.css';

/**
 * @author Arnab Gupta
 * @description Main App
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>
);

import { installWydr } from "lib/wydrConfig";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// First load
installWydr(React);

// Second load
const documentRoot = document.getElementById("root");

if (documentRoot) {
  const root = ReactDOM.createRoot(documentRoot);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

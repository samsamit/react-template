import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

if (process.env.NODE_ENV !== "production") {
  const { default: axe } = await import("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

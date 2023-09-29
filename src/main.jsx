import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AnimationContextProvider from "./context/AnimationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AnimationContextProvider>
    <App />
  </AnimationContextProvider>
);

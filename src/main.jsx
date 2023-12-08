import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import AppContextProvider from "./context/context.jsx";
import Routes from "./Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  </React.StrictMode>
);

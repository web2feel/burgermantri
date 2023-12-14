import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
// import AppContextProvider from "./context/context.jsx";
import Routes from "./Routes.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AppContextProvider> */}
    <Provider store={store}>
      <Routes />
    </Provider>
    {/* </AppContextProvider> */}
  </React.StrictMode>
);

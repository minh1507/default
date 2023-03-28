import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "routers/routers";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Global.scss";
import store from "store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

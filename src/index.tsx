import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "routers/routers"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Global.scss"


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

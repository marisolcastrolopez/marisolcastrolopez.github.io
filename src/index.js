import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <AppRouter />
  </HashRouter>,
  document.getElementById("root")
);

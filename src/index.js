import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import createApi from "./api";

const ENV = "dev1";

const storedAuthToken =
  localStorage.getItem("authToken") ?? sessionStorage.getItem("authToken");

ReactDOM.render(
  <BrowserRouter>
    <App
      api={storedAuthToken ? createApi(ENV, storedAuthToken) : null}
      env={ENV}
    />
  </BrowserRouter>,
  document.getElementById("root")
);

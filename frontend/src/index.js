import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* import { Provider } from "react-redux";
import store from "./redux/store";
import { rootCertificates } from "tls"; */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /*  < Provider
    store={}
  > */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

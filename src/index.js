import React from "react";
import ReactDom from "react-dom";
import App from "./sampleApp";
import Counter from "./Counter1";
import Example from "./Post";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDom.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);

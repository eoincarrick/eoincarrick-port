import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const divRoot = document.querySelector("#root");
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </Router>,
  divRoot
);

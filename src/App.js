import React from "react";
import { Route, Routes } from "react-router-dom";

import "./style/App.css";

import Home from "./page/Home";
import Projects from "./page/Projects";
import About from "./page/About";
import Contact from "./page/Contact";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects-overview" exact element={<Projects />} />
        <Route path="/about-me" exact element={<About />} />
        <Route path="/contact-me" exact element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

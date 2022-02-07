import React from "react";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "./style/Nav.css";

export const Nav = () => {
  // const cancel = document.querySelector(".cancel");
  // const nav = document.querySelector(".nav");
  const btn = document.querySelector("#btn");
  const menu = document.getElementsByClassName(".nav");

  const remove = () => {
    if (menu.style.display === "none") {
      return (menu.style.display = "block");
    } else {
      return (menu.style.display = "none");
    }
  };

  return (
    <div className="navContainer">
      <div className="btn logo">
        <p className="logoName">eoincarrick</p>
        <button onClick={this.remove} id="btn">
          <FaBars className="navIcon" />
        </button>
      </div>
      <nav className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about-me">
          About
        </Link>
        <Link className="link" to="/projects-overview">
          Projects
        </Link>
        <Link className="link" to="/contact-me">
          Contact
        </Link>
        <span className="cancel">&#x2717;</span>
      </nav>
    </div>
  );
};

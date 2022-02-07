import React from "react";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "./style/Nav.css";

export const Nav = () => {
  return (
    <div className="navContainer">
      <div className="btn logo">
        <p>eoincarrick</p>
        <FaBars className="navIcon" />
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
      </nav>
    </div>
  );
};

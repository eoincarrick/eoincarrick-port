import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navContainer">
      <nav className="nav">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/About">
          About
        </Link>
        <Link className="links" to="/Marketplace">
          Projects
        </Link>
        <Link className="links" to="/FAQ">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Nav;

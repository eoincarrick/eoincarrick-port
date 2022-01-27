import "../style/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarContainer">
      <ul className="navbarListAndLink">
        <Link className="links" to="/">
          <li>Home</li>
        </Link>
        <Link className="links" to="/About">
          <li>Projects</li>
        </Link>
        <Link className="links" to="/Marketplace">
          <li>Marketplace</li>
        </Link>

        <Link className="links" to="/FAQ">
          <li>FAQ</li>
        </Link>

        <Link className="links" to="/contact">
          <li>Contact Us</li>
        </Link>

        <Link className="link" to="/blog">
          <li>Blog</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;

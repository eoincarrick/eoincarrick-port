import "./style/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarContainer">
      <ul className="navbarListAndLink">
        <div className="logoContainer">
          <div className="e">E</div>

          <div className="c">C</div>
        </div>

        <div className="linksContainer">
          <Link to="/" className="links">
            Home
          </Link>

          <Link to="/projects" className="links">
            Projects
          </Link>

          <Link to="/photoshop_projects" className="links">
            PhotoShop Projects
          </Link>

          <Link to="/contact_me" className="links">
            Contact
          </Link>

          <Link to="/blog" className="links">
            Blog
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;

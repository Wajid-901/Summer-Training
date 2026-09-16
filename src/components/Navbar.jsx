import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">E-Commerce</NavLink>
      </div>

      <nav className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Cart
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
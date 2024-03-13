import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };
  return (
    <nav className="navbar-container">
      <div>
        <div>
          <h1>Capstone</h1>
        </div>
        <div className="links">
          <Link className="nav-link" to="/">
            AllProducts
          </Link>

          {token ? (
            <>
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

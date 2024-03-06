import React from "react"
import {Link} from "react-router-dom"
import "./NavBar.css"
const NavBar = () => {
    return (
        <nav className="navbar-container">
            <ul className="nav-links">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="login">Login</Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar
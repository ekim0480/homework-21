import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Books App
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/saved">
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav
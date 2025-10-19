import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar({ onLoginClick }) {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <nav className={`navbar ${!isLanding ? "navbar-secondary" : ""}`}>
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="Calm Logo" className="logo" />
        </Link>
        <Link to="/sleep">Sleep</Link>
        <Link to="/stress">Stress & Anxiety</Link>
        <Link to="/mindfulness">Mindfulness</Link>
      </div>
      <div className="nav-right">
        <button className="nav-btn" onClick={onLoginClick}>Log In</button>
        <button className="primary-btn" onClick={onLoginClick}>Try Calm for Free</button>
      </div>
    </nav>
  );
}

export default NavBar;

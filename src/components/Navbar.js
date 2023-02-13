import { Link } from "react-router-dom";
import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-img-div">
          <img src={logo} alt="fintrk." />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

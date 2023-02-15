import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../assets/home.png";
import "../../src/styles/Home.css";

function Home() {
  const { user } = useAuthContext;

  return (
    <div className="home">
      <div className="home-left">
        <h2>
          Welcome to <span>fintrk.</span>
        </h2>
        <h3>The only expense tracker you need!</h3>
        <button className="btn">
          <Link to={user ? "/expenses" : "/signup"}>Get Started</Link>
        </button>
      </div>
      <div className="home-right">
        <img src={logo} alt="Expenses" />
      </div>
    </div>
  );
}

export default Home;

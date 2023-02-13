import React, { useState } from "react";
import useSignup from "../hooks/useSignup";
// import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [cpw, setCpw] = useState("");
  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, pw, cpw);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Signup</h2>
      <label>
        <span>Name:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
      </label>
      <label>
        <span>Confirm Password:</span>
        <input
          type="password"
          value={cpw}
          onChange={(e) => setCpw(e.target.value)}
        />
      </label>
      {/* {!isPending && <button className="btn">Signup</button>}
      {isPending && <button className="btn" disabled>Loading</button>} */}
      <button className="btn" disabled={isPending}>
        {isPending ? "Loading" : "Signup"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
export default Login;

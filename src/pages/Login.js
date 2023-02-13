import React, { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState(null);
  const [pw, setPw] = useState(null);

  const handleSubmit = (e) => {
    console.log(pw, email);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
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
      <button className="btn">Login</button>
    </form>
  );
}
export default Login;

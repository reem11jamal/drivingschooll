import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login  d-flex align-items-center justify-content-center w-100  ">
      <div style={{ width: "400px" }}>
        <form
          className=" m-2"
          style={{ position: "relative", zIndex: "4" }}
        >
          <h2 className="text-center text-light ">Login</h2>
          <label className=" px-2 mt-5 mb-1 text-white">Email</label>
          <input
            type="email"
            className="form-control  "
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className=" px-2 mt-4 mb-1 text-white">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button
            className="btn btn-primary mt-3"
            type="submit"
          >
            Login
          </button>
          <div className="mt-2 text-center text-white">
          Don't have an account?{" "}
            <Link to="/register" className="text-info fw-bold">
            Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

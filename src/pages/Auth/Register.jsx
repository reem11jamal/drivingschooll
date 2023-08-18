import  { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="login  d-flex align-items-center justify-content-center w-100  ">
      <div style={{ width: "800px" }}>
        <form
          className="  mx-auto my-5 w-100"
          style={{ position: "relative", zIndex: "4" }}
        >
          <div className=" d-flex gap-4 align-items-center justify-content-center w-100 flex-wrap">
            <div className="col-12 col-md-5 p-2">
              <label className="text-white  px-2 mt-3 mb-1">Name</label>
              <input
                type="text"
                className="form-control  "
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

         <label className="text-white px-2 mt-3 mb-1">
                Email
              </label>
              <input
                type="email"
                className="form-control "
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label className="text-white px-2 mt-3 mb-1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Your Passwors"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
               <label className="text-white px-2 mt-3 mb-1">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Passwors"
                onChange={(e) => setPasswordconfirm(e.target.value)}
                value={passwordconfirm}
              />
               <label className="text-white px-2 mt-3 mb-1">City</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your City"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
               <label className="text-white px-2 mt-3 mb-1">Age</label>
              <input
                type="number"
                min={"0"}
                className="form-control"
                placeholder="Your Age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <button
              className="btn btn-primary mt-3"
              type="submit"
            >
              Register
            </button>
            <div className="mt-2 text-center text-white">
            You already have an account?
              <Link to="/login" className="text-info fw-bold">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

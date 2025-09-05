import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
//import logo from "/"; // 👈 apna logo yahan rakhna (src/assets/logo.png)
//import Ly from "../../assets/";

function Header({ isAuth }) {
  return (
    <header>
      <div className="logo">
        <img src="/Ly.png" alt="Learnify Logo" />
        <span>Learnify</span>
      </div>
      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/courses"}>Courses</Link>
        <Link to={"/about"}>About</Link>
        {isAuth ? (
          <Link to={"/account"}>Account</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
}

export default Header;

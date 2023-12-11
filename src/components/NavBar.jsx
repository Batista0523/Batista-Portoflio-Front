import React, { useState } from "react";
import "./NavBar.scss";
import { images } from "../constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`app__navbar ${toggle ? "active" : ""}`}>
      <Link to="/">
        <div className="app__navbar-logo">
          <img src={images.logo11} alt="logo" />
        </div>
      </Link>
      <div className={`app__navbar-links ${toggle ? "active" : ""}`}>
        <Link to="project" onClick={() => setToggle(false)}>
          <h3>Projects</h3>
        </Link>
        <Link to="contact" onClick={() => setToggle(false)}>
          <h3>Contact me</h3>
        </Link>
      </div>
      <div className={`app__navbar-burger ${toggle ? "active" : ""}`} onClick={() => setToggle(!toggle)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default NavBar;

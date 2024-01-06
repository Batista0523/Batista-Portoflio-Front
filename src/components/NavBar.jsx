import React, { useState } from "react";
import "./NavBar.scss";
import { images } from "../constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`app__navbar ${toggle ? "active" : ""}`}>
      <Link to="/">
        <div className="app__navbar-logo">
          <img src={images.logo11} alt="logo" />
        </div>
      </Link>
      <div className="app__navbar-links">
        <Link to="project" className="navbar-link">
          Projects
        </Link>
        <Link to="create" className="navbar-link">
          Share it!!
        </Link>
        <Link to="contact" className="navbar-link">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

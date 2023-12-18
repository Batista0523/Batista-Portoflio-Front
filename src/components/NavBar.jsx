import React, { useState } from "react";
import "./NavBar.scss";
import { images } from "../constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="app__navbar" >
      <Link to="/">
        <div className="app__navbar-logo">
          <img src={images.logo11} alt="logo" />
        </div>
      </Link>
      <div className="app__navbar-links">
        <Link to="project" >
          <h2>Projects</h2>
        </Link>
        <Link to="contact" >
          <h3>Contact me</h3>
        </Link>
        <Link to="create">
          <h2>Add Your Project</h2>
        </Link>
      </div>
    
    </div>
  );
};

export default NavBar;

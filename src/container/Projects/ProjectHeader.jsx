import React from "react";
import { Link } from "react-router-dom";

import { images } from "../../constants";
import "./ProjectHeader.scss";

const Navbar = () => {
  return (
    <nav className="app__projectHeader">
      <div className="app__projectHeader-logo">
        <Link to="/">
          <img src={images.Blogo} alt="logo" />
        </Link>
      </div>
      <ul className="app__projectHeader-links">
        <li className="app__flex p-text">
          <div />
          <Link to="/"> ↼ Back to Homepage </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

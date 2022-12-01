import React from "react";
import "./Styles.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
// import iconClose from "../../assets/icon-close-menu.svg";
// import Logout from "../logout/Logout";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink activeclassname={"active"} to="/">
        <div className="logo-wrapper">
          <FontAwesomeIcon icon={faDumbbell} />
          <span className="app-title"> The Fitness Advisor</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;

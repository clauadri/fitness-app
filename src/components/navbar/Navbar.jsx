import React from "react";
import "./Styles.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faUser } from "@fortawesome/free-solid-svg-icons";
// import iconClose from "../../assets/icon-close-menu.svg";
// import Logout from "../logout/Logout";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);

  return (
    <div className="navbar-container">
      <NavLink activeclassname={"active"} to="/">
        <div className="logo-wrapper">
          <FontAwesomeIcon icon={faDumbbell} />
          <span className="app-title"> The Fitness Advisor</span>
        </div>
      </NavLink>
      {user && (
        <div className="userName-wrapper">
          <NavLink activeclassname={"active"} to="/user">
            Welcome {user.user} <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Styles.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faUser } from "@fortawesome/free-solid-svg-icons";
import iconMenu from "../../assets/icon-menu.svg";
import iconClose from "../../assets/icon-close-menu.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUser } from "../../redux/auth/auth.actions";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logoutUser(navigate));
  };

  const menuToggle = () => {};
  return (
    <div className="navbar-container">
      <NavLink activeclassname={"active"} to="/">
        <div className="logo-wrapper">
          <FontAwesomeIcon icon={faDumbbell} />
          <span className="app-title"> The Fitness Advisor</span>
        </div>
      </NavLink>
      <div className="navbar-menu-wrapper">
        {user && (
          <div className="user-menu-wrapper">
            <div className="userName-wrapper">
              <NavLink activeclassname={"active"} to="/user">
                {user.user} <FontAwesomeIcon icon={faUser} />
              </NavLink>
            </div>
            <div onClick={menuToggle}>
              <img className="menu-btn" src={iconMenu} alt="menu button" />
            </div>
          </div>
        )}
        <div>
          {user && (
            <>
              <div onClick={menuToggle}>
                <img className="menu-btn" src={iconClose} alt="close" />
              </div>
              {user?.rol === "admin" && (
                <div className="userName-wrapper">
                  <NavLink activeclassname={"active"} to="/edit-rutines">
                    Editar rutinas
                  </NavLink>
                </div>
              )}

              <div className="userName-wrapper">
                <NavLink activeclassname={"active"} onClick={logOut}>
                  Cerrar sesión
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

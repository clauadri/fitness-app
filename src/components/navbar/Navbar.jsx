import React, { useState } from "react";
import "./Styles.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faUser } from "@fortawesome/free-solid-svg-icons";
import iconMenu from "../../assets/icon-menu.svg";
import iconClose from "../../assets/icon-close-menu.svg";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);

  const isWide = useMediaQuery({
    query: "(min-width: 599px)",
  });
  const [menuIcon, setMenuIconToggle] = useState(true);
  const handleMenuIcon = () => {
    setMenuIconToggle(!menuIcon);
  };

  return (
    <>
      <div className="navbar-container">
        <NavLink activeclassname={"active"} to="/">
          <div className="logo-wrapper">
            <FontAwesomeIcon icon={faDumbbell} />
            <span className="app-title"> The Fitness Advisor</span>
          </div>
        </NavLink>

        <div className="navbar-menu-wrapper">
          {user && menuIcon && !isWide ? (
            <div className="user-menu-wrapper">
              <div onClick={handleMenuIcon}>
                <img className="menu-btn" src={iconMenu} alt="menu button" />
              </div>
            </div>
          ) : (
            <div>
              {user && (
                <>
                  {!isWide && (
                    <div onClick={handleMenuIcon}>
                      <img
                        className="menu-btn menu-close"
                        src={iconClose}
                        alt="close"
                      />
                    </div>
                  )}
                  <div className={isWide ? "flex-row" : ""}>
                    <div className="userName-wrapper">
                      <NavLink activeclassname={"active"} to="/user">
                        {user.user} <FontAwesomeIcon icon={faUser} />
                      </NavLink>
                    </div>
                    {user?.rol === "admin" && (
                      <>
                        <div className="userName-wrapper">
                          <NavLink
                            activeclassname={"active"}
                            to="/create-exercise"
                          >
                            Crear rutinas
                          </NavLink>
                        </div>
                        <div className="userName-wrapper">
                          <NavLink
                            activeclassname={"active"}
                            to="/edit-rutines"
                          >
                            Editar rutinas
                          </NavLink>
                        </div>
                        <div className="userName-wrapper">
                          <NavLink activeclassname={"active"} to="/charts">
                            Estadisticas
                          </NavLink>
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

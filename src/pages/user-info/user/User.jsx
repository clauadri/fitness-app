import React from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/auth/auth.actions";
import { useSelector } from "react-redux";
import iconClose from "../../../assets/icon-close-menu.svg";

const User = () => {
  const { user, token } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logoutUser(navigate));
  };

  console.log("info", user);
  return (
    <div>
      <div className="user-wrapper">
        <button className="close-icon" onClick={() => navigate(-1)}>
          <img src={iconClose} alt="close" />
        </button>
        <div>
          <p>Nombre: {user?.name}</p>
          <p>Usuario: {user?.user}</p>
          <p>Email: {user?.email}</p>
          <p>Edad: {user?.age}</p>
        </div>
        <div className="btn-wrapper">
          <button className="user-btn" onClick={logOut}>
            Cerrar sesion
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;

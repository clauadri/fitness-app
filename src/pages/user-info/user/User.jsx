import React from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/auth/auth.actions";
import { useSelector } from "react-redux";

const User = () => {
  const { user, token } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logoutUser(navigate));
  };

  const Edit = () => {};

  console.log("info", user);
  return (
    <div>
      <div className="user-wrapper">
        <div>
          <p>Nombre: {user?.name}</p>
          <p>Usuario: {user?.user}</p>
          <p>Email: {user?.email}</p>
          <p>Edad: {user?.age}</p>
        </div>
        <div className="btn-wrapper">
          <button className="user-btn" onClick={Edit}>
            Editar
          </button>
          <button className="user-btn" onClick={logOut}>
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;

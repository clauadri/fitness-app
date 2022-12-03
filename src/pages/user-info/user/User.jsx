import React from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/auth/auth.actions";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logoutUser(navigate));
  };
  return (
    <div>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default User;

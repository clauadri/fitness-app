import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

const Login = () => {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <p>You don´t have an account yet?</p>
      <button onClick={goToRegister}>Register</button>
    </div>
  );
};

export default Login;

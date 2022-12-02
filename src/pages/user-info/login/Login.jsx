import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Styles.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const send = async (formData) => {
    console.log(formData);
  };
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <form onSubmit={handleSubmit(send)} className="login">
          <h2>Login</h2>
          <div>
            <input
              placeholder="User"
              type="text"
              name="user"
              {...register("user", {
                required: "Introduce tu nombre de usuario, por favor",
                minLength: {
                  value: 2,
                  message: "el usuario tiene que ser mas largo",
                },
              })}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              name="password"
              {...register("password", {
                required: "El password tiene que existir",
                // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
              })}
            />
          </div>
          <button>Login</button>
        </form>
        <div>
          <p>You don´t have an account yet?</p>
          <button onClick={goToRegister}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

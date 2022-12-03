import React from "react";
import { useForm } from "react-hook-form";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newUser } from "../../../redux/auth/auth.actions";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const send = async (formData) => {
    console.log(formData);
    dispatch(newUser(formData, navigate));
    navigate("/login");
  };

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="register-wrapper">
      <form onSubmit={handleSubmit(send)} className="register">
        <h2>Register</h2>
        <div>
          <input
            placeholder="Name"
            type="text"
            name="name"
            {...register("name", {
              required: "Introduce tu email, por favor",
              minLength: {
                value: 2,
                message: "el email tiene que ser mas largo",
              },
            })}
          />
          <input
            placeholder="User name"
            type="text"
            name="user"
            {...register("user", {
              required: "Introduce tu email, por favor",
              minLength: {
                value: 2,
                message: "el email tiene que ser mas largo",
              },
            })}
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            {...register("email", {
              required: "Introduce tu email, por favor",
              minLength: {
                value: 2,
                message: "el email tiene que ser mas largo",
              },
            })}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            {...register("password", {
              required: "El password tiene que existir",
              // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
            })}
          />
          <input
            placeholder="Age"
            type="text"
            name="age"
            {...register("age", {
              required: "Introduce tu email, por favor",
              minLength: {
                value: 2,
                message: "el email tiene que ser mas largo",
              },
            })}
          />
        </div>
        <button>Register</button>
      </form>
      <div>
        <p>already have an account?</p>
        <button onClick={goToLogin}>Login</button>
      </div>
    </div>
  );
};

export default Register;

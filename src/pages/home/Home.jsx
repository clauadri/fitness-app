import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/auth.actions";
import "./Styles.css";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToLogin = () => {
    navigate("/login");
  };

  const chooseProgram = () => {
    navigate("/step-goal");
  };
  const logOut = () => {
    dispatch(logoutUser(navigate));
  };

  return (
    <div>
      {!user ? (
        <div>
          <button onClick={goToLogin}>Start</button>
        </div>
      ) : (
        <div>
          <button onClick={chooseProgram}>Select your program</button>
          <button onClick={logOut}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Home;

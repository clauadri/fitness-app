import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const chooseProgram = () => {
    navigate("/step-goal");
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
        </div>
      )}
    </div>
  );
};

export default Home;

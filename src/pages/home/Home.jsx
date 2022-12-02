import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

const Home = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const chooseProgram = () => {
    navigate("/step-goal");
  };
  return (
    <div>
      <button onClick={goToLogin}>Start</button>
      <button onClick={chooseProgram}>Select your program</button>
    </div>
  );
};

export default Home;

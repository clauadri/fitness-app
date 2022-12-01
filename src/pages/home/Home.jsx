import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

const Home = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <button onClick={goToLogin}>Start</button>
    </div>
  );
};

export default Home;

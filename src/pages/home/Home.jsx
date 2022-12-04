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
    <div className="main-wrapper">
      <div>
        <h1>
          <div class="animation">
            <span class="first">Don't sit </span>
            <span class="oh">
              <span class="second">get fit</span>
            </span>
          </div>
        </h1>
      </div>
      <div className="home-buttons">
        {!user ? (
          <div>
            <button onClick={goToLogin}>Empieza ahora</button>
          </div>
        ) : (
          <div>
            <button onClick={chooseProgram}>Selecciona tu programa</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

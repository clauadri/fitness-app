import React from "react";
import { useNavigate } from "react-router-dom";
import "./CheckboxStyle.css";

const StepWorkouts = () => {
  const navigate = useNavigate();
  return (
    <div className="steps-container">
      <h1>¿Qué deportes te interesan?</h1>
      <div className="checkbox-container">
        <label className="checkbox-label">
            <input type="checkbox" name="workouts" />  
            <p className="mark"></p>
        </label>
        <p className="checkbox-label">Entrenamiento en gimnasio</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workouts" />
          <span className="mark"></span>
        </label>
        <p className="checkbox-label">Entrenamiento en casa</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workouts" />
          <span className="mark"></span>
        </label>
        <p className="checkbox-label">Boxeo</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workouts" />
          <span className="mark"></span>
        </label>
        <p className="checkbox-label">Correr</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workouts" />

          <span className="mark"></span>
        </label>
        <p className="checkbox-label">Artes marciales</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workouts" />
          <span className="mark"></span>
        </label>
        <p className="checkbox-label">Ningún otro</p>
      </div>
      <button
        className="button-next"
        onClick={(ev) => navigate("/step-workouts-issues")}
      >
        Continuar
      </button>
    </div>
  );
};

export default StepWorkouts;

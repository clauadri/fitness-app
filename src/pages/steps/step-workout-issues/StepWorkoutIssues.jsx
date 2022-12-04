import React from "react";
import { useNavigate } from "react-router-dom";
import "../step-workouts/CheckboxStyle.css";
const StepWorkoutIssues = () => {
  const navigate = useNavigate();
  return (
    <div className="steps-container-issues">
      <h1>
        ¿Has tenido estos problemas en tus intentos previos de preparación
        física?
      </h1>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workoutsIssues" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Falta de motivación</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workoutsIssues" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Falta de motivación</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workoutsIssues" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">No tenia un plan claro</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workoutsIssues" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Mis ejercicios fueron muy duros</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workoutsIssues" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Mal entrenador</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workoutsIssues" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Ningún otro</p>
      </div>
      <button className="button-next" onClick={(ev) => navigate("/step-additional-goals")}>
        Continuar
      </button>
    </div>
  );
};

export default StepWorkoutIssues;

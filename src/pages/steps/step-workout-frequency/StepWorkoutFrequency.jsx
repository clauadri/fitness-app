import React from "react";
import { useNavigate } from "react-router-dom";
import "../step-workouts/CheckboxStyle.css";
const StepWorkoutFrequency = () => {
  const navigate = useNavigate();
  return (
    <div className="steps-container">
      <h1>¿Cuántas veces a la semana has entrenado en los últimos 3 meses?</h1>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workoutFrequency" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Absolutamente nada 😔</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workoutFrequency" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">1-2 veces por semana 💪</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workoutFrequency" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">3 veces por semana 💪⚡️</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workoutFrequency" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Más de 3 veces por semana 🏆</p>
      </div>
      <button className="button-next" onClick={(ev) => navigate("/step-final")}>
        Continuar
      </button>
    </div>
  );
};

export default StepWorkoutFrequency;

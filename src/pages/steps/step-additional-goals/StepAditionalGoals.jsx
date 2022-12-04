import React from "react";
import { useNavigate } from "react-router-dom";
import "../step-workouts/CheckboxStyle.css";

const StepAditionalGoals = () => {
  const navigate = useNavigate();
  return (
    <div className="steps-container">
      <p>
        Sabemos que no solo deseas un mejor cuerpo, sino también mejorar tu
        estilo de vida.
      </p>
      <h1>Marca tus objetivos extras aquí:</h1>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="additionalGoals" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Mejorar sueño</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="additionalGoals" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Formar hábito físico</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="additionalGoals" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Autodisciplina</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="additionalGoals" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Sentirse más sano</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="additionalGoals" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Restar estrés</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="additionalGoals" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Ningún otro</p>
      </div>
      <button className="button-next" onClick={(ev) => navigate("/step-workout-frequency")}>
        Continuar
      </button>
    </div>
  );
};

export default StepAditionalGoals;

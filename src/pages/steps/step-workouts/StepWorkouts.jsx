import React from "react";
import { useNavigate } from "react-router-dom";
import "./CheckboxStyle.css";

const StepWorkouts = () => {
  const navigate = useNavigate();
  return (
    <div className="steps-container">
      <h1>¿Qué deportes te interesan?</h1>
      <div class="checkbox-container">
        <label class="checkbox-label">
            <input type="checkbox" name="workouts" />
            <p class="mark">Entrenamiento en gimnasio</p>
        </label>
      </div>
      <div class="checkbox-container">
        <label class="checkbox-label">
          <input type="checkbox" name="workouts" />
          <span class="mark">Entrenamiento en casa</span>
        </label>
      </div>
      <div class="checkbox-container">
        <label class="checkbox-label">
          <input type="checkbox" name="workouts" />
          <span class="mark">Boxeo</span>
        </label>
      </div>
      <div class="checkbox-container">
        <label class="checkbox-label">
          <input type="checkbox" name="workouts" />

          <span class="mark">Artes marciales</span>
        </label>
      </div>
      <div class="checkbox-container">
        <label class="checkbox-label">
          <input type="checkbox" name="workouts" />

          <span class="mark">Correr</span>
        </label>
      </div>
      <div class="checkbox-container">
        <label class="checkbox-label">
          <input type="checkbox" name="workouts" />
          <span class="mark">Ningún otro</span>
        </label>
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

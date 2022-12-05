import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../step-workouts/CheckboxStyle.css";

const StepAditionalGoals = () => {
  const navigate = useNavigate();
  const value1 = useRef(null);
  const value2 = useRef(null);
  const value3 = useRef(null);
  const value4 = useRef(null);
  const value5 = useRef(null);
  const value6 = useRef(null);
  const nextPage = () => {
    if (
      value1.current.checked ||
      value2.current.checked ||
      value3.current.checked ||
      value4.current.checked ||
      value5.current.checked ||
      value6.current.checked
    ) {
      console.log(value1.current.checked);
      navigate("/step-workout-frequency");
    }
  };
  return (
    <div className="steps-container">
      <p className="steps-text">
        Sabemos que no solo deseas un mejor cuerpo, sino también mejorar tu
        estilo de vida.
      </p>
      <h1>Marca tus objetivos extras aquí:</h1>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value1} type="checkbox" name="additionalGoals" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Mejorar sueño</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value2} type="checkbox" name="additionalGoals" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Formar hábito físico</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value3} type="checkbox" name="additionalGoals" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Autodisciplina</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value4} type="checkbox" name="additionalGoals" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Sentirse más sano</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value5} type="checkbox" name="additionalGoals" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Restar estrés</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value6} type="checkbox" name="additionalGoals" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Ningún otro</p>
      </div>
      <button className="button-next" onClick={(ev) => nextPage()}>
        Continuar
      </button>
    </div>
  );
};

export default StepAditionalGoals;

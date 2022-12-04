import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../step-workouts/CheckboxStyle.css";

const StepWorkoutFrequency = () => {

    const value1 = useRef(null)
    const value2 = useRef(null)
    const value3 = useRef(null)
    const value4 = useRef(null)
    const nextPage = ()=>{
        if(value1.current.checked || value2.current.checked || value3.current.checked ||value4.current.checked ){
            console.log(value1.current.checked);
            navigate("/step-final")
        }
    }
  const navigate = useNavigate();
  return (
    <div className="steps-container">
      <h1>¿Cuántas veces a la semana has entrenado en los últimos 3 meses?</h1>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value1} type="checkbox" name="workoutFrequency" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Absolutamente nada 😔</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value2} type="checkbox" name="workoutFrequency" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">1-2 veces por semana 💪</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value3} type="checkbox" name="workoutFrequency" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">3 veces por semana 💪⚡️</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value4} type="checkbox" name="workoutFrequency" />
          <p className="mark"></p>
        </label>
        <p className="checkbox-label">Más de 3 veces por semana 🏆</p>
      </div>
      <button className="button-next" onClick={(ev) => nextPage()}>
        Continuar
      </button>
    </div>
  );
};

export default StepWorkoutFrequency;

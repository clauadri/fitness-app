import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckboxStyle.css";

const StepWorkouts = () => {
  const navigate = useNavigate();
  const value1 = useRef(null)
  const value2 = useRef(null)
  const value3 = useRef(null)
  const value4 = useRef(null)
  const value5 = useRef(null)
  const value6 = useRef(null)
  const nextPage = ()=>{
      if(value1.current.checked || value2.current.checked || value3.current.checked ||value4.current.checked ||value5.current.checked ||value6.current.checked){
          console.log(value1.current.checked);
          navigate("/step-workouts-issues")
      }
  }
  return (
    <div className="steps-container">
      <h1>¿Qué deportes te interesan?</h1>
      <div className="checkbox-container">
        <label className="checkbox-label">
            <input ref={value1} type="checkbox" name="workouts" />  
            <p className="mark"></p>
        </label>
        <p className="checkbox-label">Entrenamiento en gimnasio</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value2} type="checkbox" name="workouts" />
          <span className="mark"></span>
        </label>
        <p className="checkbox-label">Entrenamiento en casa</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value3} type="checkbox" name="workouts" />
          <span className="mark"></span>
        </label>
        <p className="checkbox-label">Boxeo</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value4} type="checkbox" name="workouts" />
          <span className="mark"></span>
        </label>
        <p className="checkbox-label">Correr</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value5} type="checkbox" name="workouts" />

          <span className="mark"></span>
        </label>
        <p className="checkbox-label">Artes marciales</p>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input ref={value6} type="checkbox" name="workouts" />
          <span className="mark"></span>
        </label>
        <p className="checkbox-label">Ningún otro</p>
      </div>
      <button
        className="button-next"
        onClick={(ev) => nextPage()}
      >
        Continuar
      </button>
    </div>
  );
};

export default StepWorkouts;

import React from 'react'
import { useNavigate } from "react-router-dom";

const StepWorkoutFrequency = () => {

const navigate = useNavigate();
  return (
    <div>
        <h1>¿Cuántas veces a la semana has entrenado en los últimos 3 meses?</h1>
        <div>
        <label>
            <span><input type="checkbox" name="workoutFrequency"/></span>
            <span>Absolutamente nada 😔</span>
            <p>No he entrenado, ¡pero lo haré cuando tenga mi programa de ejercicios!</p>
        </label>
        <label>
            <span><input type="checkbox" name="workoutFrequency"/></span>
            <span>1-2 veces por semana 💪</span>
        </label>
        <label>
            <span><input type="checkbox" name="workoutFrequency"/></span>
            <span>3 veces por semana 💪⚡️</span>
        </label>
        <label>
            <span><input type="checkbox" name="workoutFrequency"/></span>
            <span>Más de 3 veces por semana 🏆</span>
        </label>
    </div>
    <button onClick={(ev) =>  navigate ('/step-final')}>Continuar</button>
    </div>
  )
}

export default StepWorkoutFrequency
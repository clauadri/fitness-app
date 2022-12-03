import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";
const StepAditionalGoals = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
  return (
    <div>
        <p>Sabemos que no solo deseas un mejor cuerpo, sino también mejorar tu estilo de vida.</p>
        <h1>Marca tus objetivos extras aquí:</h1>
    <div>
        <label>
            <span><input type="checkbox" name="additionalGoals"/></span>
            <span>Mejorar sueño</span>
        </label>
        <label>
            <span><input type="checkbox" name="additionalGoals"/></span>
            <span>Formar hábito físico</span>
        </label>
        <label>
            <span><input type="checkbox" name="additionalGoals"/></span>
            <span>Autodisciplina</span>
        </label>
        <label>
            <span><input type="checkbox" name="additionalGoals"/></span>
            <span>Sentirse más sano</span>
        </label>
        <label>
            <span><input type="checkbox" name="additionalGoals"/></span>
            <span>Restar estrés</span>
        </label>
        <label>
            <span><input type="checkbox" name="additionalGoals"/></span>
            <span>Ningún otro</span>
        </label>
    </div>
    <button onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-workout-frequency')}>Continuar</button>
    </div>
  )
}

export default StepAditionalGoals
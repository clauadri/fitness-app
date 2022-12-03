import React from 'react'
import { useNavigate } from "react-router-dom";

const StepWorkoutIssues = () => {

const navigate = useNavigate();
  return (
    <div>
    <h1>¿Has tenido estos problemas en tus intentos previos de preparación física?</h1>
    <div>
        <label>
            <span><input type="checkbox" name='workoutsIssues'/></span>
            <span>Falta de motivación</span>
        </label>
        <label>
            <span><input type="checkbox" name='workoutsIssues'/></span>
            <span>No tenia un plan claro</span>
        </label>
        <label>
            <span><input type="checkbox" name='workoutsIssues'/></span>
            <span>Mis ejercicios fueron muy duros</span>
        </label>
        <label>
            <span><input type="checkbox" name='workoutsIssues'/></span>
            <span>Mal entrenador</span>
        </label>
        <label>
            <span><input type="checkbox" name='workoutsIssues'/></span>
            <span>Ningún otro</span>
        </label>
    </div>
    <button onClick={(ev) =>  navigate ('/step-additional-goals')}>Continuar</button>
    </div>
  )
}

export default StepWorkoutIssues
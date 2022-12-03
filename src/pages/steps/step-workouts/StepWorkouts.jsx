import React from 'react'
import { useNavigate } from "react-router-dom";


const StepWorkouts = () => {

const navigate = useNavigate();
  return (
    <div>
    <h1>¿Qué deportes te interesan?</h1>
    <div>
        <label>
            <span><input type="checkbox" name='workouts'/></span>
            <span>Entrenamiento en gimnasio</span>
        </label>
        <label>
            <span><input type="checkbox" name='workouts'/></span>
            <span>Entrenamiento en casa</span>
        </label>
        <label>
            <span><input type="checkbox" name='workouts'/></span>
            <span>Boxeo</span>
        </label>
        <label>
            <span><input type="checkbox" name='workouts'/></span>
            <span>Artes marciales</span>
        </label>
        <label>
            <span><input type="checkbox" name='workouts'/></span>
            <span>Correr</span>
        </label>
        <label>
            <span><input type="checkbox" name='workouts'/></span>
            <span>Ningún otro</span>
        </label>
    </div>
    <button onClick={(ev) => navigate ('/step-workouts-issues')}>Continuar</button>
    </div>
  )
}

export default StepWorkouts
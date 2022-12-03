import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepLevelFitness = () => {

const dispatch = useDispatch();
const navigate = useNavigate();

  return (
    <div>
        <h1>¿En qué nivel fitness estás?</h1>
        <p>Elige tu nivel fitness actual para alinearlo con el plan de ejercicios.</p>
        <input type="range" min="0" max="10" step='1'/>
        <button onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-level-of-fat')}>Continuar</button>
    </div>
  )
}

export default StepLevelFitness
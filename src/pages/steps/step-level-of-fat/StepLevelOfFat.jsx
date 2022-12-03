import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepLevelOfFat = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
        <div>
            <span><img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_5_TO_9.png&w=256&q=75" alt="5-9%" />5-9%</span>
        </div>
        <div>
            <h1>Elige tu nivel de grasa corporal</h1>
            <input type="range" name="levelfat"/>
            <button onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-workouts")}>Continuar</button>
        </div>
    </div>
  )
}

export default StepLevelOfFat
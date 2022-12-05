import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";
import dePlaya from "../../../assets/deplaya.png"
import ejercitado from "../../../assets/ejercitado.png"
import crossfit from "../../../assets/crossfit.png"
const StepTargetBody = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  
  return (
    <div className="steps-container">
    <div>
    <p>Tu ojbetivo es Define tu cuerpo</p>
      <h2>Elige tu cuerpo deseado</h2>
    </div>
      <div className="step-label">
      <label>
        <input className="none" name="de-playa" type="radio" value="Playa" onClick={(ev) => navigate('/step-bodytype')}/>
        <div className="step-options">
          <h2>De playa</h2>
        </div>
        <div className="cont-img">
        <img src={dePlaya} alt="playa" />
        </div>
      </label>
      <label>
        <input className="none" name="ejercitado" type="radio" value="Ejercitado" onClick={(ev) =>  navigate ('/step-bodytype')}/>
        <div className="step-options">
          <h2>Ejercitado</h2>
        </div>
        <div className="cont-img">
        <img src={ejercitado} alt="ejercitado" />
        </div>
      </label>
      <label>
        <input className="none" name="crossfit" type="radio" value="Crossfit" onClick={(ev) => navigate('/step-bodytype')}/>
        <div className="step-options">
          <h2>De crossfit</h2>
        </div>
        <div className="cont-img">
        <img src={crossfit} alt="crossfit" />
        </div>
      </label>
      </div>
      
      
    </div>
    )
};

export default StepTargetBody;
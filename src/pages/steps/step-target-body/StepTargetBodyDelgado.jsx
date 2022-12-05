import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";
import "../Steps.css";
import delgado from "../../../assets/delgado.png"
import delgadoTonificado from "../../../assets/delgadoytonificado.png"
const StepTargetBody = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  
  return (
    <div className="steps-container">
      <div className="lose-weight">
      <p>Tu ojbetivo es perder peso</p>
      <h2>Elige tu cuerpo deseado</h2>
      </div>
      <div className="step-label">
      <label>
        <input className="none" name="delgado" type="radio" value="Delgado" onClick={(ev) => navigate ('/step-bodytype')}/>
        <div className="step-options">
          <h2>Delgado</h2>
        </div>
        <div className="cont-img">
        <img src={delgado} alt="delgado" />
        </div>
      </label>
      <label>
        <input className="none" name="delgado-tonificado" type="radio" value="Delgado y tonificado" onClick={(ev) => navigate( '/step-bodytype')}/>
        <div className="step-options">
          <h2>Delgado y tonificado</h2>
        </div>
        <div className="cont-img">
        <img src={delgadoTonificado} alt="delgado-tonificado" />
        </div>
      </label>
      </div>
      
      
    </div>
    )
};

export default StepTargetBody;

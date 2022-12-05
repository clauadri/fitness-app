import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";
import atleta from "../../../assets/atleta.png"
import heroe from "../../../assets/heroe.png"
import culturista from "../../../assets/culturista.png"
const StepTargetBody = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  
  return (
    <div className="steps-container">
      <div>
      <p>Tu ojbetivo es Crecer músculo</p>
      <h2>Elige tu cuerpo deseado</h2>
      </div>
     <div className="step-label">
     <label>
        <input className="none" name="atleta" type="radio" value="Atleta" onClick={(ev) =>  navigate ('/step-bodytype')}/>
        <div className="step-options">
          <h2>Atleta</h2>
        </div>
        <div className="cont-img">
        <img src={atleta} alt="atleta" />
        </div>
      </label>
      <label>
        <input className="none" name="heroe" type="radio" value="Heroe" onClick={(ev) =>  navigate ('/step-bodytype')}/>
        <div className="step-options">
          <h2>Héroe</h2>
        </div>
        <div className="cont-img">
        <img src={heroe} alt="heroe" />
        </div>
      </label>
      <label>
        <input className="none" name="culturista" type="radio" value="Culturista" onClick={(ev) =>  navigate ('/step-bodytype')}/>
        <div className="step-options">
          <h2>Culturista</h2>
        </div>
        <div className="cont-img">
        <img src={culturista} alt="culturista" />
        </div>
      </label>
     </div>
    </div>
    )
};

export default StepTargetBody;
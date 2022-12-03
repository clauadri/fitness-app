import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepTargetBody = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  
  return (
    <div>
    
      <p>Tu ojbetivo es Crecer músculo</p>
      <h2>Elige tu cuerpo deseado</h2>
      <div>
      <button onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')} value='Atleta'>Atleta</button>
      <img src="" alt="" />
      </div>
      <div>
      <button onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')} value='Heroe'>Héroe</button>
      <img src="" alt="" />
      </div>
      <div>
      <button onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')} value='Culturista'>Culturista</button>
      <img src="" alt="" />
      </div>
      
    </div>
    )
};

export default StepTargetBody;
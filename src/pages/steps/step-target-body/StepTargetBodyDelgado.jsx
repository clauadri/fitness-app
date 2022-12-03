import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepTargetBody = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  
  return (
    <div>
    
      <p>Tu ojbetivo es perder peso</p>
      <h2>Elige tu cuerpo deseado</h2>
      <div>
      <button onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')} value='Delgado'>Delgado</button>
      <img src="" alt="" />
      </div>
      <div>
      <button onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')} value='Delgado y tonificado'>Delgado y tonificado</button>
      <img src="" alt="" />
      </div>
      
    </div>
    )
};

export default StepTargetBody;

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepTargetBody = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  return (
    <div>
      <button onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-final')} value='Atleta'>Delgado</button>
    </div>
    )
};

export default StepTargetBody;

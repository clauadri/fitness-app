import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepGoal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div>
      <button onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-target-body')} value='Crecer musculo'>Losing weight</button>
    </div>
  );
};

export default StepGoal;

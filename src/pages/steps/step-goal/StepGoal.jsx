import React from "react";
import { useNavigate } from "react-router-dom";

const StepGoal = () => {
  const navigate = useNavigate();
  const goToTargetBody = () => {
    navigate("/step-target-body");
  };

  return (
    <div>
      <button onClick={goToTargetBody}>Losing weight</button>
    </div>
  );
};

export default StepGoal;

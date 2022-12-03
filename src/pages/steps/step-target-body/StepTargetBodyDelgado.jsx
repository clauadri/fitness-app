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
      <label>
        <input name="delgado" type="radio" value="Delgado" onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')}/>
        <span>
          <h2>Delgado</h2>
        </span>
        <span>
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FSLIM_BODY.png&w=128&q=75" alt="delgado" />
        </span>
      </label>
      <label>
        <input name="delgado-tonificado" type="radio" value="Delgado y tonificado" onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')}/>
        <span>
          <h2>Delgado y tonificado</h2>
        </span>
        <span>
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FSLIM_SHREDDED_BODY.png&w=128&q=75" alt="delgado-tonificado" />
        </span>
      </label>
      
    </div>
    )
};

export default StepTargetBody;

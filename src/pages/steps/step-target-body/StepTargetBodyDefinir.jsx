import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepTargetBody = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  
  return (
    <div>
      <p>Tu ojbetivo es Define tu cuerpo</p>
      <h2>Elige tu cuerpo deseado</h2>
      <label>
        <input name="de-playa" type="radio" value="Playa" onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')}/>
        <span>
          <h2>De playa</h2>
        </span>
        <span>
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FBEACH_BODY.png&w=128&q=75" alt="playa" />
        </span>
      </label>
      <label>
        <input name="ejercitado" type="radio" value="Ejercitado" onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')}/>
        <span>
          <h2>Ejercitado</h2>
        </span>
        <span>
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FWORKOUT_BODY.png&w=128&q=75" alt="ejercitado" />
        </span>
      </label>
      <label>
        <input name="crossfit" type="radio" value="Crossfit" onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')}/>
        <span>
          <h2>De crossfit</h2>
        </span>
        <span>
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FCROSS_FIT_BODY.png&w=128&q=75" alt="crossfit" />
        </span>
      </label>
      
    </div>
    )
};

export default StepTargetBody;
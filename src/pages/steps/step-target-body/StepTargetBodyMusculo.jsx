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
      <label>
        <input name="atleta" type="radio" value="Atleta" onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')}/>
        <span>
          <h2>Atleta</h2>
        </span>
        <span>
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FATHLETE.png&w=128&q=75" alt="atleta" />
        </span>
      </label>
      <label>
        <input name="heroe" type="radio" value="Heroe" onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')}/>
        <span>
          <h2>Héroe</h2>
        </span>
        <span>
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FHERO.png&w=128&q=75" alt="heroe" />
        </span>
      </label>
      <label>
        <input name="culturista" type="radio" value="Culturista" onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-bodytype')}/>
        <span>
          <h2>Culturista</h2>
        </span>
        <span>
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FBODYBUILDER.png&w=128&q=75" alt="culturista" />
        </span>
      </label>
      
    </div>
    )
};

export default StepTargetBody;
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepGoal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div>
      <h1>CREA TU CUERPO PERFECTO</h1>
      <p>Obtén un plan de ejercicios personal</p>
      <h2>Elije tu meta</h2>
      <div>
      <button onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-target-body-perder-peso')} value='Perder peso'>Perder peso</button>
      <img src="" alt="" />
      </div>
      <div>
      <button onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-target-body-crecer-musculo')} value='Crecer musculo'>Creacer músculo</button>
      <img src="" alt="" />
      </div>
      <div>
      <button onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-target-body-definir')} value='Define tu cuerpo'>Define tu cuerpo</button>
      <img src="" alt="" />
      </div>
    </div>
  );
};

export default StepGoal;

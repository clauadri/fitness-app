import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";
import "../Steps.css";
import perderPeso from "../../../assets/SLIM_SHREDDED_BODY.png";
import crecerMusculo from "../../../assets/HERO.png";
import definir from "../../../assets/definetucuerpo.png";
const StepGoal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="steps-container">
      <div className="options-text-goal">
        <h1>CREA TU CUERPO PERFECTO</h1>
        <p>Obtén un plan de ejercicios personal</p>
        <h2>Elije tu meta</h2>
      </div>
      <div className="step-label">
        <label>
          <input
            className="none"
            name="bodytype"
            type="radio"
            value="Perder peso"
            onClick={(ev) =>
              nextStep(ev, dispatch, navigate, "/step-target-body-perder-peso")
            }
          />
          <div className="step-options">
            <h2>Perder peso</h2>
          </div>
          <div className="cont-img">
            <img src={perderPeso} alt="perder-peso" />
          </div>
        </label>
        <label>
          <input
            className="none"
            name="bodytype"
            type="radio"
            value="Crecer musculo"
            onClick={(ev) =>
              nextStep(
                ev,
                dispatch,
                navigate,
                "/step-target-body-crecer-musculo"
              )
            }
          />
          <div className="step-options">
            <h2>Crecer músculo</h2>
          </div>
          <div className="cont-img">
            <img src={crecerMusculo} alt="crecer-musculo" />
          </div>
        </label>
        <label>
          <input
            className="none"
            name="bodytype"
            type="radio"
            value="Definir"
            onClick={(ev) =>
              nextStep(ev, dispatch, navigate, "/step-target-body-definir")
            }
          />
          <div className="step-options">
            <h2>Definir tu cuerpo</h2>
          </div>
          <div className="cont-img">
            <img src={definir} alt="definir" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default StepGoal;

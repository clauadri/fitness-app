import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";
import pecho from "../../../assets/pecho.png";
import brazos from "../../../assets/brazos.png";
import abdomen from "../../../assets/abdomen.png";
import piernas from "../../../assets/piernas.png";
const StepProblemArea = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="steps-container">
      <div>
        <h1>Elige áreas difíciles</h1>
      </div>
      <div className="step-label">
        <label>
          <input
            className="none"
            name="problemarea"
            type="radio"
            value="Parte superior"
            onClick={(ev) =>
              nextStep(ev, dispatch, navigate, "/step-level-of-fitness")
            }
          />
          <div className="step-options">
            <h2>Pecho débil</h2>
          </div>
          <div className="problem-area-img">
            <img src={pecho} alt="pecho" />
          </div>
        </label>
        <label>
          <input
            className="none"
            name="problemarea"
            type="radio"
            value="Parte superior"
            onClick={(ev) =>
              nextStep(ev, dispatch, navigate, "/step-level-of-fitness")
            }
          />
          <div className="step-options">
            <h2>Brazos flacos</h2>
          </div>
          <div className="problem-area-img">
            <img src={brazos} alt="brazos" />
          </div>
        </label>
        <label>
          <input
            className="none"
            name="problemarea"
            type="radio"
            value="Parte central"
            onClick={(ev) =>
              nextStep(ev, dispatch, navigate, "/step-level-of-fitness")
            }
          />
          <div className="step-options">
            <h2>Abdomen</h2>
          </div>
          <div className="problem-area-img">
            <img src={abdomen} alt="abdomen" />
          </div>
        </label>
        <label>
          <input
            className="none"
            name="problemarea"
            type="radio"
            value="Parte inferior"
            onClick={(ev) =>
              nextStep(ev, dispatch, navigate, "/step-level-of-fitness")
            }
          />
          <div className="step-options">
            <h2>Piernas flacas</h2>
          </div>
          <div className="problem-area-img">
            <img src={piernas} alt="piernas" />
          </div>
        </label>
      </div>
    </div>
  );
};
export default StepProblemArea;

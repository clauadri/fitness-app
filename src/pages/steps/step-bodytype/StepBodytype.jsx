import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";
import ectomorfo from "../../../assets/ectomorfo.png";
import mesomorfo from "../../../assets/mesomorfo.png";
import endomorfo from "../../../assets/endomorfo.png";
import determine from "../../../assets/determine-body-type.svg";
const StepBodytype = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="steps-container">
      <div className="options-text-bodytype">
        <h1>Elige tu tipo de cuerpo</h1>
        <p>
          Elige el tipo de cuerpo más similar al tuyo. Puedes guiarte por las
          imágenes.
        </p>
      </div>

      <div className="step-label">
        <label>
          <input
            className="none"
            name="bodytype"
            type="radio"
            value="Ectomorfo"
            onClick={(ev) => navigate("/step-size")}
          />
          <div className="step-options-bodytype">
            <h2>Ectomorfo</h2>
            <p>Poca grasa corporal y poco músculo.</p>
            <p>Le cuesta ganar peso.</p>
          </div>
          <div className="cont-img">
            <img src={ectomorfo} alt="ectomorfo" />
          </div>
        </label>
        <label>
          <input
            className="none"
            name="bodytype"
            type="radio"
            value="Mesomorfo"
            onClick={(ev) => navigate("/step-size")}
          />
          <div className="step-options-bodytype">
            <h2>Mesomorfo</h2>
            <p>Pierde grasa corporal fácilmente y gana músculo rápidamente</p>
          </div>
          <div className="cont-img">
            <img src={mesomorfo} alt="mesomorfo" />
          </div>
        </label>
        <label>
          <input
            className="none"
            name="bodytype"
            type="radio"
            value="Endomorfo"
            onClick={(ev) => navigate("/step-size")}
          />
          <div className="step-options-bodytype">
            <h2>Endomorfo</h2>
            <p>
              Gana peso fácilmente en comparación con otros tipos de cuerpo.
            </p>
          </div>
          <div className="cont-img">
            <img src={endomorfo} alt="endomorfo" />
          </div>
        </label>
      </div>

      <div className="test-body-type">
        <div className="bodytype-title">
          <p>Test para determinar tu tipo de cuerpo</p>
        </div>
        <div className="bodytype-info">
          <p>
            Sujeta la muñeca con el pulgar y el dedo índice. Si eres diestro,
            usa tu mano derecha para agarrar tu muñeca izquierda.
          </p>
          <p> Pulgar e índice:</p>
          <div className="body-type-list-img">
            <ul>
              <li>
                {" "}
                <b>Ectomorfo</b> — los dedos se tocan con facilidad.
              </li>
              <li>
                {" "}
                <b>Mesomorfo</b> — apenas se tocan.
              </li>
              <li>
                {" "}
                <b>Endomorfo</b> — no se tocan.
              </li>
            </ul>
            <div className="bodytype-icon">
              <img src={determine} alt="bodytype" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepBodytype;

import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepBodytype = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Elige tu tipo de cuerpo</h1>
        <p>
          Elige el tipo de cuerpo más similar al tuyo. Puedes guiarte por las
          imágenes.
        </p>
        <label>
          <input
            name="bodytype"
            type="radio"
            value="Ectomorfo"
            onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-problem-areas")}
          />
          <span>
            <h2>Ectomorfo</h2>
            <p>Poca grasa corporal y poco músculo.</p>
            <p>Le cuesta ganar peso.</p>
          </span>
          <img
            src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FSLIM_BODY.png&w=128&q=75"
            alt="ectomorfo"
          />
        </label>
        <label>
          <input
            name="bodytype"
            type="radio"
            value="Mesomorfo"
            onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-problem-areas")}
          />
          <span>
            <h2>Mesomorfo</h2>
            <p>Pierde grasa corporal fácilmente y gana músculo rápidamente</p>
          </span>
          <img
            src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_15_TO_19.png&w=256&q=75"
            alt="mesomorfo"
          />
        </label>
        <label>
          <input
            name="bodytype"
            type="radio"
            value="Endomorfo"
            onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-problem-areas")}
          />
          <span>
            <h2>Endomorfo</h2>
            <p>
              Gana peso fácilmente en comparación con otros tipos de cuerpo.
            </p>
          </span>
          <img
            src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_25_TO_29.png&w=256&q=75"
            alt="endomorfo"
          />
        </label>
        <label>
          <span>Test para determinar tu tipo de cuerpo</span>
          <span>
            <img
              src="https://madmuscles.com/_next/static/assets/gqzsql1QkLs6XYCpGhvxJ/images/determine-body-type.svg"
              alt="bodytype"
            />
          </span>
          <div>
            <p>
              Sujeta la muñeca con el pulgar y el dedo índice. Si eres diestro,
              usa tu mano derecha para agarrar tu muñeca izquierda.
            </p>
            <p>Pulgar e índice:</p>
            <ul>
              <li> Ectomorfo — los dedos se tocan con facilidad.</li>
              <li> Mesomorfo — apenas se tocan.</li>
              <li> Endomorfo — no se tocan.</li>
            </ul>
          </div>
        </label>
      </div>
    </div>
  );
};

export default StepBodytype;

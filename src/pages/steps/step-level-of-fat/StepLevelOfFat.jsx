import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./InputRange.css";
import fase1 from "../../../assets/FROM_5_TO_9.png";
import fase2 from "../../../assets/FROM_10_TO_14.png";
import fase3 from "../../../assets/FROM_15_TO_19.png";
import fase4 from "../../../assets/FROM_20_TO_24.png";
import fase5 from "../../../assets/FROM_25_TO_29.png";
import fase6 from "../../../assets/FROM_30_TO_34.png";
import fase7 from "../../../assets/FROM_35_TO_39.png";
const StepLevelOfFat = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(1);
  const [imagen, setImagen] = useState("");
  const [percent, setPercent] = useState("");
  useEffect(() => {
    if (value == 1) {
      setImagen(fase1);
      setPercent("5-9%");
    } else if (value == 2) {
      setImagen(fase2);
      setPercent("10-14%");
    } else if (value == 3) {
      setImagen(fase3);
      setPercent("15-19%");
    } else if (value == 4) {
      setImagen(fase4);
      setPercent("20-24%");
    } else if (value == 5) {
      setImagen(fase5);
      setPercent("25-29%");
    } else if (value == 6) {
      setImagen(fase6);
      setPercent("30-34%");
    } else if (value == 7) {
      setImagen(fase7);
      setPercent("35-39%");
    }
  }, [value]);
  return (
    <div className="steps-container">
      <div className="step-level-wrapper">
        <div className="img-fat">
          <img src={imagen} alt="img" />
        </div>
        <h1>Elige tu nivel de grasa corporal</h1>
        <div className="fat-input">
          <input
            type="range"
            name="levelfat"
            value={value}
            min={1}
            max={7}
            onChange={(ev) => setValue(ev.target.value)}
          />
        </div>
        <p className="percent-fat">{percent}</p>
      </div>
      <button
        className="button-next"
        onClick={(ev) => navigate("/step-workouts")}
      >
        Continuar
      </button>
    </div>
  );
};

export default StepLevelOfFat;

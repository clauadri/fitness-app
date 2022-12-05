import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../../shared/services/api";
import "./StepSize.css";
const StepSize = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    //Recoge peso y altura
    console.log(data);
    if(data.height > 1 && data.weight > 1){
      API.post("/stats/create", data);
      navigate("/step-problem-areas");
    }
  };

  return (
    <div className="steps-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="step-options">
            <h2>Introduce tu altura</h2>
          </div>
          <label>
            {" "}
            <input min={130} max={260}
              className="form-field"
              type="number"
              {...register("height")}
              placeholder="Altura(cm)"
            />
          </label>
        </div>
        <div>
          <div className="step-options">
            <h2>Introduce tu peso</h2>
          </div>
          <label>
            {" "}
            <input min={40} max={300}
              className="form-field"
              type="number"
              {...register("weight")}
              placeholder="Peso(kg)"
            />
          </label>
        </div>

        <button className="button-next">Enviar</button>
      </form>
      <div className="info-sobre-peso">
        <h3>Cómo evaluar su peso</h3>
        <p>
          Mucha grasa corporal puede provocar enfermedades relacionadas con el
          peso y otros problemas de salud. 
          
          Tener bajo peso también es un riesgo
          para la salud. 
          </p>
          <p>
          El índice de masa corporal (IMC) y la circunferencia de
          la cintura son herramientas de detección para estimar el estado de
          peso en relación con el riesgo potencial de enfermedad. Sin embargo,
          estas no son herramientas de diagnóstico para los riesgos de
          enfermedad.
          </p>
           <p>
           Un proveedor de atención médica capacitado debe realizar
          otras evaluaciones de salud para evaluar el riesgo de enfermedad y
          diagnosticar el estado de la enfermedad.
           </p>
          
          
       
      </div>
    </div>
  );
};

export default StepSize;

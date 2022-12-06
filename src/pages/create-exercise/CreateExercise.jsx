import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/services/api";
import "./CreateExercise.css";

const CreateExercise = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const createExercise = (data, navigateTo) => async (dispatch) => {
    try {
      console.log(data);
      const result = await API.post("/exercises/create", data);
      console.log(result);
      dispatch({ type: "createExercise" });
      localStorage.setItem("id", result.data._id);
      console.log(result.data._id);
      navigateTo("/");
    } catch (error) {
      dispatch({ type: "errorCreatingExercise" });
    }
  };
  const newExercise = async (datos) => {
    const formData = new FormData();
    formData.append("tipo", datos.tipo);
    formData.append("color", datos.color);
    formData.append("precio", datos.precio);
    formData.append("imagen", datos.img[0]);
    formData.append("talla", datos.talla);
    dispatch(createExercise(formData, navigateTo));
  };

  return (
    <div>
      <form
        className="create-exercise-form"
        onSubmit={handleSubmit(newExercise)}
      >
        <label>
          <p>Nombre del ejercicio</p>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
          />
        </label>
        <label>
          <p>Descripción del ejercicio</p>
          <input
            type="text"
            name="description"
            {...register("description", { required: true })}
          />
        </label>
        <label>
          <p>Tiempo de descanso</p>
          <input
            type="number"
            name="rest"
            {...register("rest", { required: true })}
          />
        </label>
        <label>
          <p>Imagen</p>
          <input
            type="file"
            name="img"
            {...register("img", { required: true })}
          />
        </label>
        <button className="button-next">Crear ejercicio</button>
      </form>
    </div>
  );
};

export default CreateExercise;

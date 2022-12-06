import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "./CreateExercise.css";
import { API2 } from "../../shared/services/api";

const CreateExercise = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const createExercise = (data, navigateTo) => async (dispatch) => {
    try {
      console.log(data);
      const result = await API2.post("/exercises/create", data);
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
    formData.append("name", datos.name);
    formData.append("description", datos.description);
    formData.append("rest", datos.rest);
    formData.append("img", datos.img[0]);
    console.log("datos.img[0]", datos.img[0]);
    dispatch(createExercise(formData, navigateTo));
    console.log("form", datos);
  };

  return (
    <div className="create-form-wrapper">
      <form
        className="create-exercise-form"
        onSubmit={handleSubmit(newExercise)}
      >
        <h1>Crear ejercicio</h1>
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
            type="string"
            name="rest"
            {...register("rest", { required: true })}
          />
        </label>
        {selectedImage && (
          <img
            className="workout-image"
            src={URL.createObjectURL(selectedImage)}
            alt=""
          />
        )}
        <label>
          <div className="add-image-btn">
            <p>
              Agregar imagen{" "}
              <span>
                {" "}
                <FontAwesomeIcon icon={faImage} />
              </span>
            </p>
          </div>
          <input
            type="file"
            name="img"
            style={{ display: "none" }}
            {...register("img", { required: true })}
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
        </label>
        <button className="button-next">Crear ejercicio</button>
      </form>
    </div>
  );
};

export default CreateExercise;

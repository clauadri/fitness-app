import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkouts } from "../../../redux/workouts/workouts.functions";

const StepFinal = () => {
  const [rutina, setRutina] = useState();
  const dispatch = useDispatch();

  const { workouts, userData, isLoading, error } = useSelector(
    (state) => state.workouts
  );

  useEffect(() => {
    dispatch(getWorkouts());
  }, []);

  useEffect(() => {
    setRutina(
      workouts.find((workout) => {
        return (
          JSON.stringify(workout.requirements) === JSON.stringify(userData)
        );
      })
    );
  }, [workouts, userData]);

  return (
    <div>
      <div>
        {console.log("rutina", rutina)}
        {console.log(userData)}
        <div className="rutine-wrapper">
          <h1>Rutina</h1>
          <p>{rutina?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default StepFinal;

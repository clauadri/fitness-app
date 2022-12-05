import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/loading/Loading";
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
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div>
              <h1 className="rutine-day-title">Dia 1</h1>
              <div className="rutine-wrapper">
                {rutina?.day1.map((item) => {
                  return (
                    <div className="rutine-wrapper-day" key={item?.id}>
                      <p>{item?.name}</p>
                      <p> Series: {item?.description}</p>
                      <img src={item?.img} alt="" />
                      {item?.rest != 0 ? <p>Descanso: {item?.rest}</p> : ""}
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className="rutine-day-title">Dia 2</h1>
              <div className="rutine-wrapper">
                {rutina?.day2.map((item) => {
                  return (
                    <div className="rutine-wrapper-day" key={item?.id}>
                      <p>{item?.name}</p>
                      <p> Series: {item?.description}</p>
                      <img src={item?.img} alt="" />
                      {item?.rest != 0 ? <p>Descanso: {item?.rest}</p> : ""}
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className="rutine-day-title">Dia 3</h1>
              <div className="rutine-wrapper">
                {rutina?.day3.map((item) => {
                  return (
                    <div className="rutine-wrapper-day" key={item?.id}>
                      <p>{item?.name}</p>
                      <p> Series: {item?.description}</p>
                      <img src={item?.img} alt="" />
                      {item?.rest != 0 ? <p>Descanso: {item?.rest}</p> : ""}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StepFinal;

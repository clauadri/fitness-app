import React from "react";

const Workout = ({ workouts }) => {
  const requirements = ["Perder peso", "Delgado"];
  const exercises = workouts.map((workout) => workout);
  // console.log(exercises);
  const prueba = workouts.find((item) => item.requirements);
  return (
    <div>
      {/* {exercises.map((exercise) => {
        return <div>{exercise.name}</div>;
      })} */}
    </div>
  );
};

export default Workout;

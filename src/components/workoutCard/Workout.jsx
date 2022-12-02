import React from "react";

const Workout = ({ workouts }) => {
  const requirements = ["Perder peso", "Delgado"];
  const filterWorkout = workouts.filter(
    (item) => item.requirements.join() === requirements.join()
  );
  console.log("filterWorkout", filterWorkout);
  return (
    <div>
      {filterWorkout.map((exercise) => {
        return <div>{exercise.name}</div>;
      })}
    </div>
  );
};

export default Workout;

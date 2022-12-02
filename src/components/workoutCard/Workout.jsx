import React from "react";

const Workout = ({workouts}) => {

const exercise = workouts.map((workout) => {
  return (
    workout.exercise
  )
})

  return (
  <div>
    <h1>{workouts[0]?.name}</h1>

    {workouts[0].exercise.map((item) => {
      return (
        <div>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>

      )
    })}





    {/* <div className="dia1">
      <p>Ejercicio 1</p>
      <p>{workouts[0]?.exercise[0].description}</p>
      <p>Ejercicio 2</p>
      <p>{workouts[0]?.exercise[1].description}</p>
    </div>
    <div className="dia2">

    </div>
    <div className="dia3">

    </div> */}
        
  </div>
  )
};

export default Workout;

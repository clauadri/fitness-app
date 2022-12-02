import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Workout from '../../../components/workoutCard/Workout'
import { getWorkouts } from '../../../redux/workouts/workouts.functions';

const StepFinal = () => {

const dispatch = useDispatch();

const {workouts, isLoading, error} = useSelector(state => state.workouts);

useEffect(() => {
    dispatch(getWorkouts());
},[])

  return (
    <div>
        <Workout workouts={workouts} />
    </div>
  )
}

export default StepFinal
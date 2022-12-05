import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BarChart from '../../components/Charts/BarChart'
import { getStats } from '../../redux/workouts/workouts.functions'

const Charts = () => {
    const dispatch = useDispatch();

    const { usersStats } = useSelector(
        (state) => state.workouts
      );

    const [weightData, setWeightData] = useState({
        labels: usersStats.map((data) => data._id),
        datasets: [{
            label: 'Pesos',
            data: usersStats.map((data) => data.weight),
            backgroundColor: ['orange']
        }]
    });

    const [heightData, setHeightData] = useState({
        labels: usersStats.map((data) => data._id),
        datasets: [{
            label: 'Alturas',
            data: usersStats.map((data) => data.height),
            backgroundColor: ['blue']
        }]
    });

    useEffect(() => {
        dispatch(getStats());
    },[]);

  return (
    <div>
        <BarChart chartData={weightData} />
        <BarChart chartData={heightData} />
    </div>
  )
}

export default Charts
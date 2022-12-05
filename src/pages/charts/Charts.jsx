import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BarChart from '../../components/Charts/BarChart'
import { getStats } from '../../redux/workouts/workouts.functions'
import './Charts.css'

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
    <div className='charts-container'>
        <div className='charts-box'>
            <div className='charts'>
                <BarChart chartData={heightData} />
            </div>
            <div>
                <p>Pesos de los usuarios en kilogramos.</p>
            </div>
        </div>
        <div className='charts-box'>
            <div className='charts'>
                <BarChart chartData={weightData} />
            </div>
            <div>
                <p>Esta es una gráfica de los pesos de los usuarios almacenados.</p>
            </div>
        </div>
    </div>
  )
}

export default Charts
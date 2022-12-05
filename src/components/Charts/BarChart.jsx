import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart = ({chartData}) => {
  return (
    <Bar 

        data={chartData} 
        options={{
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: false
                    }
                }
            },
        }}
    />
  )
}

export default BarChart
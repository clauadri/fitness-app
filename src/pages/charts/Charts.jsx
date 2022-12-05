import React from 'react'
import { useState } from 'react'
import BarChart from '../../components/Charts/BarChart'
import { UserData } from '../../Data'

const Charts = () => {

    const [userInfo, setUserInfo] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: 'Users gained',
            data: UserData.map((data) => data.userGain),

        }]
    });

  return (
    <div>
        <BarChart chartData={userInfo}/>
    </div>
  )
}

export default Charts
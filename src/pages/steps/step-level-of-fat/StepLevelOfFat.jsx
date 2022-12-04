import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './InputRange.css'

const StepLevelOfFat = () => {
  
  const navigate = useNavigate();

  const [value, setValue] = useState(1);
  const [imagen,setImagen] = useState('');
  const [percent, setPercent] = useState('');
  useEffect(()=>{
    if(value == 1){
    setImagen('https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_5_TO_9.png&w=256&q=75')
    setPercent('5-9%')
  }else if (value == 2){
    setImagen('https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_10_TO_14.png&w=256&q=75')
    setPercent('10-14%')
  }
  else if (value == 3){
    setImagen('https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_15_TO_19.png&w=256&q=75')
    setPercent('15-19%')
  }
  else if (value == 4){
    setImagen('https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_20_TO_24.png&w=256&q=75')
    setPercent('20-24%')
  }
  else if (value == 5){
    setImagen('https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_25_TO_29.png&w=256&q=75')
    setPercent('25-29%')
  }
  else if (value == 6){
    setImagen('https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_30_TO_34.png&w=256&q=75')
    setPercent('30-34%')
  }
  else if (value == 7){
    setImagen('https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_35_TO_39.png&w=256&q=75')
    setPercent('35-39%')
  }
  },[value])
  return (
    <div className="steps-container">
        <div>
        <div ><img src={imagen} alt="img" /></div>
            <h1>Elige tu nivel de grasa corporal</h1>
            <div className="fitness-input">
            <input type="range" name="levelfat" value={value} min={1} max={7} onChange={(ev) => setValue(ev.target.value)}/>
            </div>
            <p className='percent-fat'>{percent}</p>
            <button className="button-next" onClick={(ev) => navigate("/step-workouts")}>Continuar</button>
        </div>
    </div>
  )
}

export default StepLevelOfFat
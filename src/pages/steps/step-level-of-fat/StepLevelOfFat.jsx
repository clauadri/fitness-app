import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepLevelOfFat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState(0);
  
  return (
    <div>
        <div>
            <span className='fatlevel1'><img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_5_TO_9.png&w=256&q=75" alt="5-9%" />5-9%</span>
            <span className='fatlevel2'><img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_10_TO_14.png&w=256&q=75" alt="10-14%" />10-14%</span>
            <span className='fatlevel3'><img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_15_TO_19.png&w=256&q=75" alt="15-19%" />15-19%</span>
            <span className='fatlevel4'><img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_20_TO_24.png&w=256&q=75" alt="20-24%" />20-24%</span>
            <span className='fatlevel5'><img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_25_TO_29.png&w=256&q=75" alt="25-29%" />25-29%</span>
            <span className='fatlevel6'><img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_30_TO_34.png&w=256&q=75" alt="30-34%" />30-34%</span>
            <span className='fatlevel7'><img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_35_TO_39.png&w=256&q=75" alt="35-39%" />35-39%</span>
        </div>
        <div>
            <h1>Elige tu nivel de grasa corporal</h1>
            <input type="range" name="levelfat" value={value} min={1} max={7} onChange={(ev) => setValue(ev.target.valueAsNumber)}/>
            <button onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-workouts")}>Continuar</button>
        </div>
    </div>
  )
}

export default StepLevelOfFat
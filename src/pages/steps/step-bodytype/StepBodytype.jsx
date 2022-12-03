import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import nextStep from '../../../shared/nextStep'

const StepBodytype = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <div>
        <div>
            <h1>Elige tu tipo de cuerpo</h1>
            <p>Elige el tipo de cuerpo más similar al tuyo. Puedes guiarte por las imágenes.</p>
            <label  >
                <input name="bodytype" type="radio" value="Endomorfo" onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-final')}/>
                <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_15_TO_19.png&w=256&q=75" alt="endomorfo" />
            </label>
        </div>
    </div>
  )
}

export default StepBodytype
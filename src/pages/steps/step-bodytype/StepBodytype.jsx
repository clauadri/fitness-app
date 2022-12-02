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
            <div 
                onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-final')} 
                value='Ectomorfo'>
                <div>
                    <h2>Ectomorfo</h2>
                    <p>Poca grasa corporal y poco músculo. Le cuesta ganar peso.</p>
                </div>
                <div>
                    <img src='https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FSLIM_BODY.png&w=128&q=75' alt='ectomorfo' />
                </div>
            </div>
            <div 
                onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-final')} 
                value='Mesomorfo'>
                <div>
                    <h2>Mesomorfo</h2>
                    <p>Pierde grasa corporal fácilmente y gana músculo rápidamente.</p>
                </div>
                <div>
                    <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_15_TO_19.png&w=128&q=75" alt="mesomorfo" /> </div>
            </div>
            <div 
                onClick={(ev) => nextStep(ev, dispatch, navigate, '/step-final')} 
                value='Endomorfo'>
                <div>
                    <h2>Endomorfo</h2>
                    <p>Gana peso fácilmente en comparación con otros tipos de cuerpo.</p>
                </div>
                <div>
                    <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_25_TO_29.png&w=128&q=75" alt="mesomorfo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default StepBodytype
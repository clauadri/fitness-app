import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { API } from '../../../shared/services/api'

const StepSize = () => {

const navigate = useNavigate();

const { register, handleSubmit } = useForm();

const onSubmit = (data) => { //Recoge peso y altura 
    console.log(data);
    API.post('/stats/create', data)
    navigate('/step-problem-areas')

}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label> Altura
            <input type='number' {...register("height")}/>
        </label>
        <label> Peso
            <input type='number' {...register("weight")}/>
        </label>
        <button>Enviar</button>
    </form>
  )
}

export default StepSize
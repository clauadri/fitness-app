import { API } from '../../shared/services/api';

export const getWorkouts = () => async (dispatch) => {
    dispatch({type: 'gettingWorkouts'})

    try {
        const result = await API.get('/workouts')
        dispatch({type: 'getWorkouts', payload: result.data})
    } catch (error) {
        dispatch({type: 'errorWorkouts', payload: error.message})
    }
}

export const getStats = () => async (dispatch) => {

    try {
        const result = await API.get('/stats')
        dispatch({type: 'getStats', payload: result.data})
        console.log(result.data);
    } catch (error) {
        dispatch({type: 'errorStats', payload: error.message})
    }
}
const nextStep = (ev, dispatch, navigate, nextRoute) => {
    
    console.log(ev.target.value);
    dispatch({type: 'addUserData', payload: ev.target.value})
    navigate(nextRoute);
};

export default nextStep ;
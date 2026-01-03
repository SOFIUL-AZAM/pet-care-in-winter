import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() =>{
        if(!loading && !user){
            navigate("/auth/login", {state:{from: location}});
        }
    })

    if(loading)
        return <div className='text-center mt-10 text-xl'>Loading...</div>
    return user ? children : null;

};

export default PrivateRoute;
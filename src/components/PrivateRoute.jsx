import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading)
        return <div className='text-center mt-10 text-xl'>Loading...</div>

    if(!user) return <Navigate to="/auth/login" state={location.pathname}></Navigate>
    return children;

};

export default PrivateRoute;
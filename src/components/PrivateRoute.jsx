import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // const navigate = useNavigate();


    if(loading)
        return <div className='text-center mt-10 text-xl'>Loading...</div>

    if(!user){
        return <Navigate to="/auth/login" state={{from: location}} replace={true}/>
    }
    return children;
};

export default PrivateRoute;
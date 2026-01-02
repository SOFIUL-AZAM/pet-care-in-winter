import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='w-96 mx-auto mt-20'>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
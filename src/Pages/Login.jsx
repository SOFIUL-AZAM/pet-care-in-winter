import React, { useContext, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const {loginUser, googleLogin} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) =>{
        e.preventDefault();
        setError("");


        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then(() => {
            toast.success("Login successful");
            navigate(from, {replace:true});
        })
        .catch((err) => {
            setError("Invalid email or password");
            toast.error(err.message);
        })
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(() =>{
            toast.success("Logged in with Google");
            navigate(from, {replace:true});
        })
        .catch((err) => 
            toast.error(err.message));
    }
    return (
        <div className='border rounded-lg p-6 shadow-md bg-white'>
           <h2 className='text-2xl ;font-bold text-center mb-6'>Login</h2>

           <form onSubmit={handleLogin} className='space-y-4'>

            <div>
                <label className='block mb-1 font-medium'>Email</label>
                <input type="email"
                name='email'
                required
                className='input input-bordered w-ful' />
            </div>

            <div >
                <label className='block mb-1 font-medium'>Password</label>
                <div className='relative'>
                    <input type={showPassword ? "text" : "password"}
                    name='password'
                    required
                    className='input input-bordered w-full pr-10' />
                    <span className='absolute right-3 top-3 cursor-pointer text-gray-600'
                    onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </span>
                </div>
            </div>


            {error && <p className='text-red-500 text-sm'>{error}</p>}


            <button
            type='submit' className='btn btn-primary w-full'>Login</button>
           </form>

           <div className='mt-4'>
            <button 
            onClick={handleGoogleLogin}
            className='btn btn-outline w-full'>
              <FcGoogle/>  Continue with Google
            </button>
           </div>


           <p className='text-center mt-3 text-sm'>
            <Link to='/forget-password'
            className='text-blue-600 font-semibold'>
            Forgot Password?</Link>
           </p>


           <p className='text-center mt-2 text-sm'>New to WarmPaws ? {" "}
            <Link to="/auth/register"
            className='text-blue-600 font-semibold'>
            Register
            </Link>
           </p>
        </div>
    );
};

export default Login;
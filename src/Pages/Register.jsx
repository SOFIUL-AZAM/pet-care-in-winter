import React, { useContext, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Link, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const {createUser, googleLogin, updateProfile, auth} = useContext(AuthContext);

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError]= useState("");

    const validatePassword = (password) =>{
        if(!/[A-Z]/.test(password)){
            return "Password must contain at least one uppercase letter";
        }
        if(!/[a-z]/.test(password)){
            return "Password must contain at least one lowercase letter";
        }
        if(password.length<6){
            return "Password must be at least 6 characters long"
        }
        return "";
    };

    const handleRegister = (e) =>{
        e.preventDefault();
        setPasswordError("");
    

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;


    const error = validatePassword(password);
    if(error){
        setPasswordError(error);
        return;
    }

    createUser (email,password)
    .then(() => {
        updateUserProfile(name,photo)
        .then(() =>{
            // toast.success("")
            alert("Registration successful");
            navigate("/");
        });
    })
    .catch((err) => 
    // toast.error(err.message)
    alert(err));
};

const handleGoogleRegister = () =>{
    googleLogin()
    .then (() => {
        // toast.success("Singed up with Google");
        alert("Singed up with Google");
        navigate("/");
    })
    .catch((err) => 
        // toast.error(err.message)
        alert(err));
};
    

    return (
        <div className='border rounded-lg p-6 shadow-md bg-white'>
            <h2 className='text-2xl font-bold text-center mb-6'>Register</h2>

            <form onSubmit={handleRegister} className='space-y-4'>

                <div>
                    <label className='block mb-1 font-medium'>Name</label>
                    <input type="text"
                    name='name'
                    required
                    className='input input-bordered w-full' />
                </div>

                <div>
                    <label className='block mb-1 font-medium'>Photo URL</label>
                    <input type="text"
                    name='photo'
                    required
                    className='input input-bordered w-full' />
                </div>

                <div>
                    <label className='block mb-1 font-medium'>Email</label>
                    <input type="email"
                    name='email'
                    required
                    className='input input-bordered w-full' />
                </div>

                <div>
                    <label className='block mb-1 font-medium'>Password</label>
                    <div>
                        <input type={showPassword ? "text" : "password"}
                        name='password'
                        required
                        className='input input-bordered w-full pr-10' />

                        <span
                        className='absolute right-3 top-3 cursor-pointer text-gray-600'
                        onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}
                        </span>
                    </div>
                </div>

                {passwordError && (
                    <p className='text-red-500 text-sm'>{passwordError}</p>
                )}


                <button type='submit' className='btn btn-primary w-full'>
                    Register
                </button>
            </form>

            <div className='mt-4'>
                <button
                onClick={handleGoogleRegister} className='btn btn-outline w-ful'>
                    Continue with Google
                </button>
            </div>

            <p className='text-center mt-4 text-sm'>
                Already have an account?{" "}
                <Link to="/auth/login" className='text-blue-600 font-semibold'>
                Login</Link>
            </p>
            
        </div>
    );
};

export default Register;
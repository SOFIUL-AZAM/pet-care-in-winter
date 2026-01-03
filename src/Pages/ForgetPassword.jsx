import React, { useContext, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import toast from 'react-hot-toast';

const ForgetPassword = () => {

        const {resetPassword } = useContext(AuthContext);
        const [email, setEmail] = useState("");

        const handleReset = (e) =>{
            e.preventDefault();
        

        if(!email) {
            toast.error("Please enter your email");
        }

        resetPassword(email)
        .then(() =>{
            toast.success("Password reset email sent!");
            // window.location.href = "https://mail.google.com"
        })
        .catch((err) =>{
            toast.error(err.message);
        });
    }
    return (
        <div className='flex justify-center items-center min-h-[70vh]'>
            <div className='border rounded-lg p-6 shadow-md w-full max-w-md bg-white'>
                <h2 className='text-2xl font-bold text-center mb-4'>Reset Password</h2>


                <form onSubmit={handleReset} className='space-y-4'>
                    <div>
                        <label className='block mb-1 font-semibold'> Email</label>
                        <input type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='input input-bordered w-full' />

                        <button type='submit' className='btn btn-primary w-full mt-3'>
                            Send Reset Email
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
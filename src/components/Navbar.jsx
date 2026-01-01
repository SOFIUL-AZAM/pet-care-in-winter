import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const {user, logoutUser} = useContext(AuthContext);

    const handleLogout = () =>{
        logoutUser() 
        .then(() =>alert("Logged out successfully"))
        .catch((err) => alert(err.message));
    };

    const navLinkStyle = ({isActive}) =>
        isActive? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500"
    return (
        <div className='navbar bg-base-100 shadow-md px-6 flex justify-between items-center'>
            <Link to="/" className=' text-2xl font-bold text-blue-600'>WarmPaws</Link>

            <ul className='hidden lg:flex gap-6'>
                <li>
                    <NavLink to="/" className={navLinkStyle}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Service" className={navLinkStyle}>Service</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={navLinkStyle}>My Profile</NavLink>
                </li>
            </ul>

            <div className='flex items-center gap-3'>
                {
                    user?(
                        <>
                        <div className='tooltip tooltip-bottom' data-tip={user.displayName || "User"}>
                            <img src={user.photoURL || "https://i.postimg.cc/default-avatar.png"} alt="user" className='w-10 h-10 rounded-full border' />
                        </div>

                        <button onClick={handleLogout} className='btn btn-sm btn-outline btn-error'>
                            Logout
                        </button>
                        </>
                    ):(
                        <>
                        <Link to="/auth/login" className='btn btn-sm btn-outline'>
                        Login</Link>
                        <Link to="/auth/register" className='btn btn-sm btn-primary'>
                        Register</Link>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;
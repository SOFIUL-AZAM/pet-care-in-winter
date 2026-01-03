import React, { useContext, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import toast from 'react-hot-toast';

const MyProfile = () => {
    const {user, updateUserProfile} = useContext(AuthContext);


    const[editing, setEditing] = useState(false);
    const[name, setName] = useState(user?.displayName || "");
    const[photoURL , setPhotoURL] = useState(user?.photoURL || "");

    const handleUpdate = (e) =>{
        e.preventDefault();

        updateUserProfile(name,photoURL)
        .then(() =>{
            toast.success("Profile updated successfully");
            setEditing(false);
        })
        .catch((err) => toast.error(err.message));
    }
    return (
        <div className='max-w-md mx-auto mt-10 border rounded-lg p-6 shadow-md bg-white'>
            <h2 className='text-2xl font-bold mb-6 text-center'>My Profile</h2>

            <div className='flex flex-col items-center space-y-4'>
                <img src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt={user?.displayName || "User"}
                className='w-32 h-32 rounded-full border' />
                <h3 className='text-xl font-semibold'>{user?.displayName}</h3>
                <p className='text-gray-600'>{user?.email}</p>

                <button onClick={() => setEditing(!editing)} className='btn btn-outline btn-sm'>
                    {editing ? "Cancel" : "Update Profile"}
                </button>
            </div>


            {editing && (
                <form onSubmit={handleUpdate}
                className='mt-6 space-y-4'>
                    <div>
                        <label className='block mb-1 font-medium'>Name</label>
                        <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='input input-bordered w-full'
                        required />
                    </div>

                    <div>
                        <label className='block mb-1 font-medium'> Photo URL</label>
                        <input type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className='input input-bordered w-full'
                        required />
                    </div>


                     <button type='submit' className='btn btn-primary w-full'>Save Changes</button>
                </form>
            )}
        </div>
    );
};

export default MyProfile;
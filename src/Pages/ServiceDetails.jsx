import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import toast from 'react-hot-toast';

const ServiceDetails = () => {
    const services = useLoaderData();
    const {id} = useParams();
    const {user} = useContext(AuthContext);

    const [booked, setBooked] =useState(false);

    const service = services.find((item) => item.serviceId === parseInt(id));

    const handleBookService = (e) =>{
        e.preventDefault();
        toast.success("Service booked successfully")
        e.target.reset();
        setBooked(true);
    };

    if(!service) {
        return(
            <div className='text-center text-xl mt-10'>
                Service not found
            </div>
        );
    }

    
    return (
        <div className='max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
            
            <div className='space-y-4'>
                <img src={service.image} alt={service.serviceName}
                className='w-full h-64 object-cover rounded-lg' />

                <h2 className='text-2xl font-bold'>{service.serviceName}</h2>
                <p className='text-gray-700'>{service.description}</p>

                <p><strong>Category: </strong>{service.category}</p>
                <p><strong>Provider: </strong>{service.providerName}</p>
                <p><strong>Email: </strong>{service.providerEmail}</p>
                <p><strong>Price: </strong>{service.price}</p>
                <p><strong>Rating: </strong>{service.rating}</p>
                <p><strong>Available Slots: </strong>{service.slotsAvailable}</p>

            </div>

            <div className='border rounded-lg p-6 shadow-md'>
                <h3 className='text-xl font-semibold mb-4'>Book This Service</h3>

                <form onSubmit={handleBookService} className='space-y-4'>
                    <div>
                        <label className='block mb-1 font-medium'>Name</label>
                        <input type="text"
                        defaultValue={user?.displayName || ""}
                        required
                        className='input input-bordered w-full' />
                    </div>

                    <div>
                        <label className='block mb-1 font-medium'>Email</label>
                        <input type="email"
                        defaultValue={user?.email || ""}
                        required
                        className='input input-bordered w-full' />
                    </div>

                    <button
                    type='submit'
                    disabled={booked} className={`btn w-full ${booked? "btn-success cursor-not-allowed" : "btn-primary"}`}> {booked ? "Booked" : "Book Now"}</button>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;
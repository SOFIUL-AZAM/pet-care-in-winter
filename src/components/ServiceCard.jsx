import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({service}) => {
    return (
        <div className=''>
            <div className='border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 mt-5 bg-white'>
            <img src={service.image}
             alt={service.serviceName}
             className='w-full h-48 object-cover' />

             <div className='p-4'>
                <h3 className='font-bold text-lg'>{service.serviceName}</h3>
                <p className='text-gray-600'>Rating: { service.rating}</p>
                <p className='text-gray-600'>Price: { service.price}</p>
                <Link 
                to={`/service/${service.serviceId}`}
                className='mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>View Details</Link>
             </div>
        </div>
        </div>
    );
};

export default ServiceCard;
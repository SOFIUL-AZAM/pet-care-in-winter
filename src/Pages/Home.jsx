import React from 'react';
import { useLoaderData } from 'react-router';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    const services = useLoaderData();


    return (
        <div className='space-y-16 max-w-7xl mx-auto px-4'>
           <section className='w-full h-96 rounded-lg overflow-hidden shadow-lg'>
            <Swiper 
                modules={[Autoplay]}
                autoplay = {{delay: 3000, disableOnInteraction:false}}
                loop={true}
                >
                <SwiperSlide>
                    <img src="https://i.ibb.co.com/6JvLrMDV/images3333.jpg" alt="winter pet" 
                    className="h-full w-full object-cover"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co.com/bfmDrHq/H19ab425fd2d147e3bd4069e0f1d30fd5-N.avif" alt="dog sweater" className="h-full w-full object-cover"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co.com/gn4R4C8/adorable-kitten-with-red-scarf-wooden-fence-351987-3378.jpg" alt="cat winter" className="h-full w-full object-cover"/>
                </SwiperSlide>
            </Swiper>
            </section> 

            <section>
                <h2 className='text-3xl font-bold mb-8 text-center'>Popular Winter Care Service</h2>
                <div>
                    {services.map((service) =>(
                        <ServiceCard key={service.serviceId} service={service}></ServiceCard>
                    ))}
                </div>
            </section>

            <section>
                <h2 className='text-2xl font-bold mb-5'>Winter Care Tips for Pets</h2>
                <ul >
                    "Keep your pets warm with winter coats.",
                    <br />
                    "Moisturize paws to prevent cracking.",
                    <br />
                    "Provide cozy bedding near heaters.",
                    <br />
                    "Limit outdoor exposure in extreme cold."
                </ul>
            </section>
            
            
            <section>
                <h2 className='text-2xl font-bold mb-5'>Meet Our Expert Vets</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <div className='border rounded-lg p-4 flex flex-col items-center shadow-md'>
                        <img src="https://i.ibb.co.com/3Y40RBC2/Alpha-Flo-Blog-Edit-1080x675.webp" alt="Dr. Michael Carter"
                        className='w-32 h-32 object-cover rounded-full mb-3' />
                        <h3 className='text-lg font-semibold'>Dr. Michael Carter</h3>
                        <p className='text-gray-600'>Canine Health</p>
                    </div>

                    <div className='border rounded-lg p-4 flex flex-col items-center shadow-md'>
                        <img src="https://i.ibb.co.com/hx8k5Jz6/images.jpg" alt="Dr. John Smith"
                        className='w-32 h-32 object-cover rounded-full mb-3' />
                        <h3 className='text-lg font-semibold'>Dr. John Smith</h3>
                        <p className='text-gray-600'>Pet Nutrition</p>
                    </div>

                    <div className='border rounded-lg p-4 flex flex-col items-center shadow-md'>
                        <img src="https://i.ibb.co.com/mrH7TXrp/images222.jpg" alt="Dr. Robert Wilson"
                        className='w-32 h-32 object-cover rounded-full mb-3' />
                        <h3 className='text-lg font-semibold'>Dr. Robert Wilson</h3>
                        <p className='text-gray-600'>Feline Health</p>
                    </div>
                </div>
            </section>


            <section>
                <h2 className=' text-2xl font-bold mb-5'>Why Winter Care Matters</h2>
                <p className='text-gray-700'>Winter can be harsh on pets. Proper warmth, nutrition, grooming,
                and care help ensure your furry friends stay healthy, safe,
                 and comfortable throughout the cold season.</p>
            </section>
        </div>
    );
};

export default Home;
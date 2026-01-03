import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <Toaster position='top-center'/>
            <main className='flex-grow w-11/12 mx-auto my-5'>
                <ScrollToTop/>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
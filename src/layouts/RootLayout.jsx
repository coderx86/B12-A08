
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';


const RootLayout = () => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;

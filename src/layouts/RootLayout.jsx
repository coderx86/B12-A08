import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';


const RootLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <ToastContainer position="top-right" autoClose={3000} />
      
      {isLoading && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/50 backdrop-blur-sm">
             <span className="loading loading-spinner loading-lg text-[#6B50F6]"></span>
        </div>
      )}
        <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;

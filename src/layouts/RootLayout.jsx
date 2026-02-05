
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';


const RootLayout = () => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Navbar />
    </div>
  );
};

export default RootLayout;

import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import errorImg from '../assets/error-404.png';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <img src={errorImg} alt="404 Error" className="max-w-md w-full mb-8 drop-shadow-lg" />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Oops, page not found!</h1>
      <p className="text-gray-500 mb-8">The page you are looking for is not available.</p>
      
      <Link to="/" className="btn bg-[#6B50F6] text-white hover:bg-[#6B50F6]/90 border-none px-8 h-auto py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1">
        Go Back!
      </Link>
    </div>
    </>
  );
};

export default ErrorPage;

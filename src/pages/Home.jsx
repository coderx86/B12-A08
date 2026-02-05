
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlay, FaApple, FaDownload, FaStar } from 'react-icons/fa';
import { TbAppsFilled } from "react-icons/tb";
import heroImg from '../assets/hero.png';
import apps from '../data/apps';
import AppCard from '../components/AppCard';

const Home = () => {
  const topApps = apps.slice(0, 8);

  return (
    <div>
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-gray-50 to-purple-50 pt-20 px-4">
        <div className="container mx-auto flex flex-col items-center text-center">
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                We Build <br/>
                <span className="font-extrabold text-[#6B50F6]">Productive</span> Apps
            </h1>
            
            <p className="text-gray-500 max-w-2xl mb-10 text-lg">
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a href="https://play.google.com/store/games?device=windows" target='_blank'>
                 <button className="btn bg-white text-gray-800 border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 normal-case font-normal h-auto min-h-0 py-3 px-6 gap-3 rounded-xl">
                    <FaGooglePlay className="text-green-500 text-3xl" />
                    <div className="text-left leading-tight">
                        <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">Get it on</div>
                        <div className="font-bold text-xl">Google Play</div>
                    </div>
                 </button>
                </a>
                <a href="https://www.apple.com/app-store/" target='_blank'>
                 <button className="btn bg-white text-gray-800 border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 normal-case font-normal h-auto min-h-0 py-3 px-6 gap-3 rounded-xl">
                    <FaApple className="text-gray-900 text-3xl" />
                    <div className="text-left leading-tight">
                        <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">Download on the</div>
                        <div className="font-bold text-xl">App Store</div>
                    </div>
                 </button>
                </a>
            </div>
            
            <div className="relative w-full max-w-lg md:max-w-2xl">
                {/* Hero Image */}
                <img src={heroImg} alt="App Showcase" className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
        </div>
      </section>

      {/* States Section */}
      <section className="bg-[#6B50F6] py-16 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-4 text-center relative z-10">
             <h2 className="text-3xl font-bold mb-12">Trusted By Millions, Built For You</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                <div className="p-4">
                    <p className="text-xs uppercase tracking-wider opacity-80 mb-2">Total Downloads</p>
                    <h3 className="text-5xl flex items-center justify-center gap-5 font-extrabold mb-1">29.6M<FaDownload /></h3>
                    <p className="text-sm opacity-70">20% More Than Last Month</p>
                </div>
                <div className="p-4">
                    <p className="text-xs uppercase tracking-wider opacity-80 mb-2">Total Reviews</p>
                    <h3 className="text-5xl flex items-center justify-center gap-5 font-extrabold mb-1">906K<FaStar /></h3>
                    <p className="text-sm opacity-70">45% More Than Last Month</p>
                </div>
                <div className="p-4">
                    <p className="text-xs uppercase tracking-wider opacity-80 mb-2">Active Apps</p>
                    <h3 className="text-5xl flex items-center justify-center gap-5 font-extrabold mb-1">132+<TbAppsFilled /></h3>
                     <p className="text-sm opacity-70">3 New Apps This Month</p>
                </div>
             </div>
         </div>
      </section>

      {/* Top Apps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trending Apps</h2>
               <p className="text-gray-500 max-w-xl mx-auto">Explore All Trending Apps on the Market developed by us.</p>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {topApps.map(app => (
                 <AppCard key={app.id} app={app} />
              ))}
           </div>
           
           <div className="text-center">
              <Link to="/apps" className="btn bg-[#6B50F6] text-white hover:bg-[#6B50F6]/90 border-none px-8 h-auto py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Show All
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

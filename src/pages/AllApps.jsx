
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import apps from '../data/apps';
import AppCard from '../components/AppCard';
import AppErrorImage from '../assets/app-error.png';

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('default'); // default, high-low, low-high
  const [isLoading, setIsLoading] = useState(false);
  const [filteredApps, setFilteredApps] = useState(apps);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let result = apps.filter(app => 
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Sort
      if (sortOrder === 'high-low') {
        result.sort((a, b) => b.downloads - a.downloads);
      } else if (sortOrder === 'low-high') {
         result.sort((a, b) => a.downloads - b.downloads);
      }

      setFilteredApps(result);
      setIsLoading(false);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [searchTerm, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
       <div className="container mx-auto px-4">
           
           <div className="text-center mb-10">
               <h1 className="text-3xl font-bold text-gray-900">Our All Applications</h1>
               <p className="text-gray-500 mt-2">Explore All Apps on the Market developed by us. We code for Millions</p>
           </div>
            
           <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
               <h2 className="text-lg font-bold text-gray-800">
                   ({filteredApps.length}) Apps Found
               </h2>
               
               <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    {/* Sort Dropdown */}
                    <select 
                        className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#6B50F6] focus:border-[#6B50F6] block p-2.5 outline-none"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="default">Sort By Default</option>
                        <option value="high-low">Downloads: High to Low</option>
                        <option value="low-high">Downloads: Low to High</option>
                    </select>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-64">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaSearch className="text-gray-400" />
                        </div>
                        <input 
                            type="text" 
                            className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#6B50F6] focus:border-[#6B50F6] block w-full pl-10 p-2.5 outline-none transition-all focus:shadow-sm" 
                            placeholder="Search Apps..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
               </div>
           </div>
           
           {isLoading ? (
               <div className="flex justify-center items-center h-64">
                   <span className="loading loading-spinner loading-lg text-[#6B50F6]"></span>
               </div>
           ) : filteredApps.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredApps.map(app => (
                     <AppCard key={app.id} app={app} />
                  ))}
               </div>
           ) : (
               <div className="flex flex-col items-center justify-center py-16 text-center">
                   <img 
                       src={AppErrorImage} 
                       alt="No App Found" 
                       className="w-80 h-auto mb-6 object-contain"
                   />
                   <h3 className="text-3xl font-bold text-[#1A1A1A] mb-3">
                       OPPS!! APP NOT FOUND
                   </h3>
                   <p className="text-gray-500 mb-8 text-base max-w-lg mx-auto">
                       The App you are requesting is not found on our system. please try another apps
                   </p>
                   <button 
                       onClick={() => setSearchTerm('')}
                       className="bg-[#6B50F6] hover:bg-[#593ccf] text-white px-10 py-3 rounded-lg font-medium transition-all duration-300 shadow-[#6B50F6]/30 shadow-lg"
                   >
                       Go Back!
                   </button>
               </div>
           )}
       </div>
    </div>
  );
};

export default AllApps;

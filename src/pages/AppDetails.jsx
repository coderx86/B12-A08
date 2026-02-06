import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaDownload, FaCheckCircle, FaStarHalfAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import apps from '../data/apps';
import { formatNumber } from '../components/AppCard';

const AppDetails = () => {
  const { id } = useParams();
  const app = apps.find(a => a.id === parseInt(id));
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check installation status
    const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    if (app && installedApps.some(a => a.id === app.id)) {
      setIsInstalled(true);
    }
  }, [app]);

  const handleInstall = () => {
    if (!app) return;

    const previousApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    
    if (previousApps.some(a => a.id === app.id)) {
        setIsInstalled(true);
        return; // Already installed
    }

    const newApps = [...previousApps, app];
    localStorage.setItem('installedApps', JSON.stringify(newApps));
    setIsInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  if (!app) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">App Not Found</h2>
        <p className="text-gray-500 mb-8">The app you are looking for does not exist or has been removed.</p>
        <Link to="/apps" className="btn bg-[#6B50F6] text-white hover:bg-[#6B50F6]/90 border-none px-6 rounded-lg">
            Browse Apps
        </Link>
      </div>
    );
  }

  const chartData = [...app.ratings].reverse();

  return (
    <div className="min-h-screen bg-white py-12">
       <div className="container mx-auto px-4">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{app.title}</h1>
                  <p className="text-xl text-[#6B50F6] font-medium mb-4">{app.companyName}</p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-6">
                      <div className="flex flex-col items-center">
                          <span className="font-bold text-gray-900 text-lg">{app.ratingAvg} <FaStar className="inline text-amber-500 text-sm mb-1"/></span>
                          <span>{formatNumber(app.reviews)} Reviews</span>
                      </div>
                      <div className="w-px h-8 bg-gray-300"></div>
                      <div className="flex flex-col items-center">
                          <span className="font-bold text-gray-900 text-lg">{app.size} MB</span>
                          <span>Size</span>
                      </div>
                      <div className="w-px h-8 bg-gray-300"></div>
                       <div className="flex flex-col items-center">
                          <span className="flex items-center gap-1 font-bold text-gray-900 text-lg">{formatNumber(app.downloads)}+<FaDownload /></span>
                          <span>Downloads</span>
                      </div>
                  </div>

                  <button 
                    onClick={handleInstall}
                    disabled={isInstalled}
                    className={`btn h-auto py-3 px-8 rounded-xl font-bold text-white shadow-md transition-all flex items-center gap-2 border-none
                        ${isInstalled 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-emerald-500 hover:bg-emerald-600 hover:shadow-lg hover:-translate-y-1'}`}
                  >
                    {isInstalled ? (
                        <>
                            <FaCheckCircle /> Installed
                        </>
                    ) : (
                        <>
                           Install Now ({app.size} MB)
                        </>
                    )}
                  </button>
              </div>
          </div>
          
          <hr className="border-gray-100 mb-12" />
          
          {/* Details & Chart Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             
             {/* Ratings Chart */}
             <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ratings</h2>
                <div className="h-64 w-full max-w-3xl">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={chartData}
                            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                            <XAxis type="number" tick={{fill: '#6b7280', fontSize: 12}} axisLine={false} tickLine={false} />
                            <YAxis dataKey="name" type="category" width={50} tick={{fill: '#6b7280', fontSize: 14}} tickLine={false} axisLine={false} />
                            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="count" barSize={20} radius={[0, 4, 4, 0]}>
                                 {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill="#ff9f00" />
                                  ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
             </div>

             {/* Description */}
             <div className="lg:col-span-2">
                 <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                 <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                     {app.description}
                 </p>
             </div>

          </div>

       </div>
    </div>
  );
};

export default AppDetails;

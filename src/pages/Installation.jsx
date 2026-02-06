import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaDownload, FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { formatNumber } from '../components/AppCard';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter(app => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    toast.info('App uninstalled successfully.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900">Your Installed Apps</h1>
                <p className="text-gray-500 mt-2">Manage your collection of productivity tools.</p>
            </div>

            {installedApps.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {installedApps.map(app => (
                        <div key={app.id} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col">
                            <div className="flex items-start gap-4 mb-4">
                                <Link to={`/apps/${app.id}`} className="flex-shrink-0">
                                   <img src={app.image} alt={app.title} className="w-20 h-20 rounded-xl object-cover hover:opacity-90" />
                                </Link>
                                <div>
                                    <Link to={`/apps/${app.id}`}>
                                        <h3 className="font-bold text-gray-900 line-clamp-2 hover:text-[#6B50F6] transition-colors">{app.title}</h3>
                                    </Link>
                                    <p className="text-xs text-gray-500 mt-1">{app.companyName}</p>
                                    <div className="flex items-center gap-3 mt-2 text-xs font-medium">
                                        <div className="flex items-center text-emerald-500 gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                                            <FaDownload /> {formatNumber(app.downloads)}
                                        </div>
                                         <div className="flex items-center text-amber-500 gap-1 bg-amber-50 px-2 py-0.5 rounded">
                                            <FaStar /> {app.ratingAvg}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => handleUninstall(app.id)}
                                className="mt-auto w-full btn btn-outline btn-error rounded-lg transition-all flex items-center justify-center gap-2"
                            >
                                <FaTrash className="text-sm" /> Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                        <FaDownload className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">No Apps Installed Yet</h3>
                    <p className="text-gray-500 mb-6 max-w-sm mx-auto">Explore our marketplace and find the perfect tools to boost your productivity.</p>
                    <Link to="/apps" className="btn bg-[#6B50F6] text-white hover:bg-[#6B50F6]/90 border-none px-8 h-auto py-3 rounded-lg font-semibold shadow-lg">
                        Browse Apps
                    </Link>
                </div>
            )}
        </div>
    </div>
  );
};

export default Installation;

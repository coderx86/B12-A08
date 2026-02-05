
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaDownload } from 'react-icons/fa';

export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
};

const AppCard = ({ app }) => {
  return (
    <div className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer h-full flex flex-col items-center text-center hover:-translate-y-1">
      <Link to={`/apps/${app.id}`} className="w-full flex flex-col items-center pt-2">
      <div className="w-24 h-24 mb-4 rounded-2xl overflow-hidden shadow-sm group-hover:scale-110 transition-transform duration-300">
        <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
      </div>
      
      <h3 className="text-gray-900 font-bold text-lg mb-1 line-clamp-1 w-full px-2" title={app.title}>
        {app.title}
      </h3>
      
      <p className="text-gray-500 text-sm mb-3 line-clamp-1">{app.companyName}</p>
      
      <div className="mt-auto flex items-center gap-4 text-sm font-medium">
         <div className="flex items-center text-emerald-500 gap-1 bg-emerald-50 px-2 py-1 rounded-md">
            <FaDownload />
            <span>{formatNumber(app.downloads)}</span>
         </div>
         <div className="flex items-center text-amber-500 gap-1 bg-amber-50 px-2 py-1 rounded-md">
            <FaStar />
            <span>{app.ratingAvg}</span>
         </div>
      </div>
      </Link>
    </div>
  );
};

export default AppCard;

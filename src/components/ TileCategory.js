import React from 'react';

const TileCategory = ({ title, imageUrl, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default TileCategory;

import React from 'react';
import { useLocation } from 'react-router-dom';

const PackageDetails = () => {
  const location = useLocation();
  const { name, imgSrc, review, price, duration } = location.state || {};

  return (
    <div className="package-details-page container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">{name}</h1>
      <img src={imgSrc} alt={name} className="w-full h-full object-cover rounded-lg mb-8" />
      <p className="text-lg mb-4">{review}</p>
      <p className="text-lg text-blue-600 font-semibold">{price}</p>
      <p className="text-sm text-gray-500">{duration}</p>
    </div>
  );
};

export default PackageDetails;

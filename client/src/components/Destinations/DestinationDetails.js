import React from 'react';
import { useParams } from 'react-router-dom';
import destinations from './destinationData';

const DestinationDetails = () => {
  const { name } = useParams();
  const destination = destinations.find(dest => dest.name === name);

  if (!destination) {
    return <h2 className="text-center text-2xl font-semibold mt-8 text-gray-600">Destination not found</h2>;
  }

  return (
    <div className="destination-details-page bg-lightGray">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center text-primaryColor mb-8">{destination.name}</h1>
        
        <div className="w-full max-w-4xl mx-auto mb-8">
          <img
            src={destination.imgSrc}
            alt={destination.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Description */}
        <p className="text-xl text-gray-800 mb-8 leading-relaxed">{destination.description}</p>

        {/* Weather Section */}
        <div className="weather-info mb-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-primaryColor mb-4">Weather</h2>
          <div className="flex flex-col gap-4">
            <p className="text-lg text-gray-700"><strong>Summer:</strong> {destination.weather.summer}</p>
            <p className="text-lg text-gray-700"><strong>Monsoon:</strong> {destination.weather.monsoon}</p>
            <p className="text-lg text-gray-700"><strong>Winter:</strong> {destination.weather.winter}</p>
          </div>
        </div>

        {/* Best Time to Visit */}
        <div className="best-time-to-visit mb-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-primaryColor mb-4">Best Time to Visit</h2>
          <p className="text-lg text-gray-700">{destination.bestTimeToVisit}</p>
        </div>

        {/* Top Attractions */}
        <div className="top-attractions mb-8">
          <h2 className="text-3xl font-semibold text-primaryColor mb-4">Top Attractions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.topAttractions.map((attraction, index) => (
              <div
                key={index}
                className="attraction-card p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <p className="text-lg text-gray-800">{attraction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Local Culture */}
        <div className="local-culture mb-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-primaryColor mb-4">Local Culture</h2>
          <p className="text-lg text-gray-700">{destination.localCulture}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;

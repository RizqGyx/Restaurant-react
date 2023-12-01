import React from 'react';

const Detail = ({ restaurant }) => {
  return (
    <div className="max-w-2xl p-5 mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-auto object-cover object-center" />

        <div className="p-4">
          <h2 className="text-3xl font-semibold mb-2 text-black">{restaurant.name}</h2>
          <p className="text-gray-600 mb-4">{restaurant.location}</p>

          <div className="flex items-center mb-4">
            <span className="text-gray-900 mr-2">{restaurant.averagePrice}</span>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">&#9733;</span>
              <span>{restaurant.averageRating}</span>
            </div>
            <span className="text-gray-600 ml-2">({restaurant.totalReviews} reviews)</span>
          </div>

          <p className="text-gray-700 mb-4">Food Category: {restaurant.foodCategory.join(', ')}</p>

          <p className="text-gray-700 mb-4">Phone Number: {restaurant.phoneNumber}</p>

          <div className="flex justify-between items-center">
            <a
              href={`https://maps.google.com/?q=${restaurant.mapLocation.latitude},${restaurant.mapLocation.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on Map
            </a>
            <span className="text-gray-600">
              Latitude: {restaurant.mapLocation.latitude}, Longitude: {restaurant.mapLocation.longitude}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
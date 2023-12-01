import React, { useState } from 'react';
import Card from './Card';
import { restaurantData } from '../utils/hardData';
import { FaSearch } from "react-icons/fa";

const Restaurant = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLoadMore = () => {
    setShowAll(true);
    setDisplayCount(restaurantData.length);
  };

  const filteredRestaurants = restaurantData.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='w-full md:w-11/12 mx-auto py-5 flex items-center flex-col' id='restaurant'>
      <h2 className='text-orange-600 font-bold text-4xl pb-5'>Discover Our Restaurant</h2>
      <div className="relative">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 border-gray-300 bg-white w-96 rounded-md pl-10 py-2 mb-4"
          />
          <div className="absolute left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className='mb-3 text-2xl'/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRestaurants.slice(0, displayCount).map((restaurant, index) => (
          <Card
            id={restaurant.id}
            key={index}
            imgUrl={restaurant.image}
            restName={restaurant.name}
            price={restaurant.averagePrice}
            avgReview={restaurant.averageRating}
            location={restaurant.location}
            foodCategory={restaurant.foodCategory}
          />
        ))}
      </div>
      {!showAll && (
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-10 rounded-full mt-4"
          onClick={handleLoadMore}>
          See More
        </button>
      )}
    </div>
  );
}

export default Restaurant;
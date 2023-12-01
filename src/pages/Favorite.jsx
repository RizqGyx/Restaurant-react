import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { restaurantData } from '../utils/hardData';
import Card from '../components/Card';
import Hero from '../components/Hero';

function Favorite() {
    const favoriteRestaurantIds = Object.keys(localStorage).filter(key => key.includes('favorite_') && localStorage.getItem(key) === 'true');

    const favoriteRestaurants = restaurantData.filter(restaurant =>
        favoriteRestaurantIds.includes(`favorite_${restaurant.id}`)
    );

    return (
        <>
            <Navbar />
            <Hero />
            <div className="w-full md:w-11/12 mx-auto py-5 flex items-center flex-col" id="favorite-restaurants">
                <h2 className="text-orange-600 font-bold text-4xl pb-5">Favorite Restaurants</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {favoriteRestaurants.map(restaurant => (
                        <Card
                            key={restaurant.id}
                            imgUrl={restaurant.image}
                            restName={restaurant.name}
                            price={restaurant.averagePrice}
                            avgReview={restaurant.averageRating}
                            location={restaurant.location}
                            foodCategory={restaurant.foodCategory}
                            id={restaurant.id}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Favorite;
import React, { useState, useEffect } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Card({ imgUrl, restName, price, avgReview, location, foodCategory, id }) {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const isRestFavorited = localStorage.getItem(`favorite_${id}`);
        setIsFavorite(isRestFavorited === 'true');
    }, [id]);

    const handleFavoriteClick = (event) => {
        const updatedFavorite = !isFavorite;
        setIsFavorite(updatedFavorite);

        localStorage.setItem(`favorite_${id}`, updatedFavorite.toString());

        event.stopPropagation();
    };

    return (
        <div className="card h-96 max-w-[384px] overflow-hidden bg-white shadow-2xl cursor-pointer relative" onClick={() => {navigate(`/restaurant/${id}`)}}> 
            <div className="absolute top-2 right-2">
                <button className="focus:outline-none" onClick={handleFavoriteClick}>
                    {isFavorite ? (
                        <FaHeart className="text-red-500 text-3xl" />
                    ) : (
                        <FaHeart className="text-white text-3xl" />
                    )}
                </button>
            </div>
            <img src={imgUrl} alt={restName} className="aspect-[17/9] w-full rounded object-cover" />
            <div className="card-body font-bold">
            <h2 className="card-title text-black">
                    {restName}
                    <div className="badge bg-orange-600 text-white border-none p-3">
                        <FaStar className="text-yellow-400 text-lg mr-1" />
                        {avgReview}
                    </div>
                    <div className="badge bg-white border-lime-400 text-lime-800 border-2 p-3">
                        {price}
                    </div>
                </h2>
                <p className="text-black/50">{location}</p>
                <div className="card-actions justify-end">
                    {foodCategory.map((category, index) => (
                        <div key={index} className="badge badge-ghost text-white">
                            {category}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
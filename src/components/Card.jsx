import React from "react";
import { FaStar } from "react-icons/fa6";

function Card({ imgUrl, restName, price, avgReview, location, foodCategory }) {
    return (
        <div className="card w-96 bg-white shadow-2xl">
            <figure style={{ width: '100%', height: '200px' }}>
                <img src={imgUrl} alt={restName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </figure>
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
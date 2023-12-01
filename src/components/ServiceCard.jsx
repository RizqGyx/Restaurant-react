import React from 'react';

function ServiceCard(props) {
    const { icon, service } = props;

    return (
        <div className="shadow-xl text-5xl flex flex-col items-center bg-orange-600 text-white gap-2 p-4 rounded-xl">
            {icon}
            <div>
                <h2 className="card-title text-center">{service}</h2>
            </div>
        </div>
    )
}

export default ServiceCard;
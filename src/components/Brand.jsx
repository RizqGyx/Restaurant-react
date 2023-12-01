import React from 'react';

function Brand() {
  const brandImages = [
    '/brand/brand1.png',
    '/brand/brand2.png',
    '/brand/brand3.png',
    '/brand/brand4.png',
    '/brand/brand5.png',
    '/brand/brand6.png',
  ];

  return (
    <div className="bg-gray-200 w-11/12 mx-auto">
      <div className="container mx-auto text-center flex items-center justify-center flex-wrap overflow-hidden">
        {brandImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Brand ${index + 1}`}
            className="h-20 w-1/4 lg:w-auto object-contain lg:mx-10 mx-5 my-4"
          />
        ))}
      </div>
    </div>
  );
}

export default Brand;
import React from 'react'

function Hero() {
  return (
    <div className='wrap-Hero'>
      <div className="hero h-[75vh] w-11/12 mx-auto">
        <div className="hero-content">
          <div className='text-center'>
            <h1 className="text-6xl font-bold text-white">Enjoy Delicious <span className='text-orange-600'>Food</span> With Us</h1>
            <p className="py-6 text-lg text-yellow-100">Get the best quality and most delicious western food in the world, you can get them all at our website.</p>
            <div className='flex gap-8 justify-center'>
              <button className="btn bg-orange-600 rounded-full hover:bg-orange-700 sm:w-40 text-white font-bold border-none">Add to Cart</button>
              <button className="btn bg-white rounded-full sm:w-40 text-orange-600 hover:text-orange-700 hover:bg-white hover:border-orange-700 font-bold border-2 border-orange-600">Book For Event</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
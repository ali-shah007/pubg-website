import React from 'react';
import carlo from '../assets/carlo.jpg'; 


function Hero() {
  return (
    <div className='relative w-full h-screen flex justify-center items-center'>
      <img className='sm:hidden absolute w-full h-full object-cover' src={carlo} alt='Background' />
      <div className='relative z-10 text-center p-4'>
        <div className='inline-block bg-black bg-opacity-50 p-4 rounded'>
          <h1 className='text-white text-4xl font-bold'>
            Join our tournament and win exciting prizes
          </h1>
        </div>
        <button className='bg-yellow-500 px-12 py-5 mt-6 rounded-2xl text-white text-4xl font-semibold hover:scale-105 hover:bg-black smooth duration-200 '>
            Press me!
        </button>
      </div>
    </div>
  );
}

export default Hero;

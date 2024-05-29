import React from 'react';
import carlo from '../assets/carlo.jpg'; 
import hero from '../assets/peakpx (3).jpg'; 
import { Link } from 'react-scroll';

function Hero() {
  return (
    <div name='home' className='wrapper relative w-full h-screen flex justify-center items-center'>
      <img className='absolute w-full h-full object-cover' src={carlo} alt='Background' />
      <img className='hidden md:flex absolute w-full h-full object-cover' src={hero} alt='Background' />
      
      {/* Gradient Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75'></div>

      <div className='max-w-5xl w-full relative z-10 p-4 flex md:grid-cols-2 gap-4'>
        <div className='text-center md:px-10 lg:px-20'>
          <div className='inline-block bg-black bg-opacity-50 p-4 rounded '>
            <h1 className='text-white text-4xl md:text-5xl lg:text-7xl font-bold'>
              Join our Tournaments to Win Exciting Prizes up to 25k and much more...
            </h1>
          </div>
          <div className='bg-yellow-500 cursor-pointer px-6 py-4 mt-10 rounded-2xl text-white text-2xl font-semibold hover:scale-105 hover:bg-black transition duration-200'>
            <Link to='register' smooth duration={500}>
              Register Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

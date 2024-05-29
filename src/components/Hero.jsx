import React from 'react';
import carlo from '../assets/carlo.jpg'; 
import { Link } from 'react-scroll'


function Hero() {
  return (
    <div id='section1' name='home' className='relative w-full h-screen flex justify-center items-center '>
      <img className='sm:hidden absolute w-full h-full object-cover' src={carlo} alt='Background' />
      <div className='relative z-10 text-center p-4'>
        <div className='inline-block bg-black bg-opacity-50 p-4 rounded'>
          <h1 className='text-white text-4xl font-bold'>
            Join our tournaments to win exciting prizes and much more...
          </h1>
        </div>
        <div className='bg-yellow-500 cursor-pointer px-2 py-7 mt-10 rounded-2xl text-white text-4xl font-semibold hover:scale-105 hover:bg-black smooth duration-200 '>
        <Link to='register' smooth duration={500} >
            Register Now!
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from 'react';
import carlo from '../assets/carlo.jpg'; 
import hero from '../assets/peakpx (3).jpg'; 
import { Link } from 'react-scroll';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={[0.5, 0.5, 0.5]} />;
}

function Hero() {
  return (
    <div name='home' className='wrapper relative w-full h-screen flex justify-center items-center'>
      <img className='absolute w-full h-full object-cover' src={carlo} alt='Background' />
      <img className='hidden md:flex absolute w-full h-full object-cover' src={hero} alt='Background' />
      
      <div className='max-w-7xl w-full relative z-10 p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='text-center md:text-left'>
          <div className='inline-block bg-black bg-opacity-50 p-4 rounded'>
            <h1 className='text-white text-4xl font-bold'>
              Join our tournaments to win exciting prizes up to 25k and much more...
            </h1>
          </div>
          <div className='bg-yellow-500 cursor-pointer px-2 py-7 mt-10 rounded-2xl text-white text-4xl font-semibold hover:scale-105 hover:bg-black transition duration-200'>
            <Link to='register' smooth duration={500}>
              Register Now!
            </Link>
          </div>
        </div>
        
       
      </div>
      <Canvas className='w-full h-full flex-col'>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 5, 5]} intensity={10} />
              <Model path='/uaz/scene.gltf' />
              <OrbitControls enableZoom={false} />
            </Canvas>
    </div>
  );
}

export default Hero;

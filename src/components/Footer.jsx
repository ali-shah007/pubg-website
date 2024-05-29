import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={[0.5, 0.5, 0.5]} />;
}

const Footer = () => {
  return (
    <footer style={footerStyle} className='flex flex-col md:flex-row justify-between items-center'>
      <div style={containerStyle} className='text-white p-4 md:w-1/2'>
        <h2>Contact Us</h2>
        <p>Email: infiniteexportsolutions@gmail.com</p>
        <p>Phone: +92 3316926656</p>
        <p>Address: Gopalput Bhagowal Road, Sialkot</p>
      </div>
      <div className='w-full h-64 md:w-1/2 md:h-full'>
        <Canvas className='bg-black w-full h-full'>
          <ambientLight intensity={10} />
          <directionalLight position={[5, 5, 5]} intensity={10} />
          <Model path='/uaz/scene.gltf' />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#010101',
  padding: '0px 0px',
  textAlign: 'center',
  height: 'auto',
};

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
};

export default Footer;

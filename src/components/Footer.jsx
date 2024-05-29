import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ path }) {
  const { scene } = useGLTF(path);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Adjust the speed of rotation as needed
    }
  });

  return <primitive object={scene} ref={ref} scale={[0.7, 0.7, 0.7]} />;
}

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-4">
      <div className="col-span-1 bg-black ">
        <Canvas>
          <ambientLight intensity={10} />
          <directionalLight position={[5, 5, 5]} intensity={10} />
          <Model path="/pubgmodel/scene.gltf" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <footer className="col-span-3 flex flex-col justify-center items-center text-white" style={footerStyle}>
        <div className="p-4 w-full md:w-1/2" style={containerStyle}>
          <h2>Contact Us</h2>
          <p>Email: infiniteexportsolutions@gmail.com</p>
          <p>Phone: +92 3316926656</p>
          <p>Address: Gopalput Bhagowal Road, Sialkot</p>
        </div>
      </footer>
    </div>
  );
};

const footerStyle = {
  backgroundColor: '#010101',
  padding: '0px 0px',
  textAlign: 'center',
  height: '100%',
};

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
};

export default Footer;

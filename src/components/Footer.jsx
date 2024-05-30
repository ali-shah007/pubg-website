import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,  faInstagram } from '@fortawesome/free-brands-svg-icons';

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
    <div className="w-full grid grid-cols-4 py-20 bg-black">
      <div className="col-span-1">
        <Canvas>
          <ambientLight intensity={10} />
          <directionalLight position={[5, 5, 5]} intensity={10} />
          <Model path="/pubgmodel/scene.gltf" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <footer className="col-span-3 flex flex-col justify-center items-center text-white" style={footerStyle}>
        <div className="p-4 w-full md:w-1/2" style={containerStyle}>
          <h2 className='text-4xl pb-5'>Get in Touch</h2>
          <p>infiniteexportsolutions@gmail.com</p>
          <p>Phone: +92 3316926656</p>
          <p>Address: Gopalput Bhagowal Road, Sialkot</p>
          <div className="flex justify-center mt-5 space-x-4">
            <a href="https://wa.me/923316926656" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            {/* <a href="https://www.youtube.com/channel/UCXXXXX" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a> */}
            <a href="https://www.instagram.com/syed_ali_70/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
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

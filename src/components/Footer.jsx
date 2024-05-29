import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle} className='text-white'>
        
        <h2>Contact Us</h2>
        <p>Email: infiniteexportsolutions@gmail.com</p>
        <p>Phone: +92 3316926656</p>
        <p>Address: Gopalput Bhagowal Road, Sialkot</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#010101',
  padding: '20px 0',
  textAlign: 'center',
};

const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
};

export default Footer;

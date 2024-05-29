import React, { useState } from 'react';
import background from '../assets/register.jpg';
import emailjs from 'emailjs-com';

function Register() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true); // Set loading state while sending email

    emailjs.sendForm('service_1nktqrk', 'template_hkvsrcu', e.target, 'FdSRX__UgVs90SMPn')
      .then((result) => {
        console.log(result.text);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false); // Hide popup after 5 seconds
          setIsLoading(false); // Clear loading state
        }, 5000);
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email. Please try again later.');
        setIsLoading(false); // Clear loading state
      });
  }

  return (
    <div name='register' className='relative w-full h-screen flex justify-center items-center'>
      <img className='sm:hidden absolute w-full h-full object-cover' src={background} alt='Background' />
      <div className='relative z-10 text-center p-4'>
        <div className='inline-block bg-black bg-opacity-50 p-8 rounded'>
          <h1 className='text-white text-4xl font-bold mb-6'>
            Register for our tournament
          </h1>
          <div className="bg-white bg-opacity-90 rounded-md p-8">
            <form onSubmit={sendEmail} >
              <input type="text" name="name" placeholder="Enter your Name" className='bg-transparent px-4 py-2 rounded-md mb-4 block w-full' required />
              <input type="email" name="email" placeholder="Enter your email" className='bg-transparent px-4 py-2 rounded-md mb-4 block w-full' required />
              <select name="tournament" className='bg-transparent px-4 py-2 rounded-md mb-4 block w-full' required>
                <option value="Select Tournament">Select Tournament</option>
                <option value="tournament1">Duo Tournament starting 1st June</option>
              </select>
              <input type="text" name="gameID" placeholder="Enter your Game ID" className='bg-transparent px-4 py-2 rounded-md mb-4 block w-full' required />
              <input type="text" name="teammateID" placeholder="Enter your Teammate's ID" className='bg-transparent px-4 py-2 rounded-md mb-4 block w-full' required />
              <input type="tel" name="phone" placeholder="Enter your phone number" className='bg-transparent px-4 py-2 rounded-md mb-4 block w-full' required />
              <input type="transaction" name="transaction" placeholder="Enter Entry Fee Transaction id" className='bg-transparent px-4 py-2 rounded-md mb-4 block w-full' required />
              <button type="submit" className='bg-yellow-500 px-8 py-5 rounded-2xl text-white text-4xl font-semibold hover:scale-105 hover:bg-black smooth duration-200'>
                {isLoading ? 'Sending...' : 'Register'}
              </button>
            </form>
           
          </div>
          <h1 className='text-white text-xl font-bold mt-2'>
                Easypaisa/Jazzcash number is 03316926656. Send your tournament entry here and add the transaction id number to register.
            </h1>
        </div>
        
      </div>
      {showPopup && (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center h-16 bg-green-500 text-white">
          <span className="mr-2">&#10003;</span> Registration successful!
        </div>
      )}
    </div>
  );
}

export default Register;

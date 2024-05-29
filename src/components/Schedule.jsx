import React from 'react';
import sniper from '../assets/Sniper.jpg';
import background from '../assets/background2.jpg';

function Schedule() {
  const tournamentSchedule = [
    { date: '2024-06-01',mapName: 'Livik', event: 'Round 1', location: 'Online' },
    { date: '2024-06-02',mapName: 'Sanhok', event: 'Round 2', location: 'Online' },
    { date: '2024-06-03',mapName: 'Erangel', event: 'Round 3', location: 'Online' },
    
  ];

  return (
    <div name='schedule' className='md:h-screen wrapper relative w-full flex justify-center items-center ' >
      <img className='absolute w-full h-full object-cover' src={sniper} alt='Background' />
      <img className='absolute w-full h-full object-cover hidden md:flex ' src={background} alt='Background' />
      <div className='relative z-10 text-center p-4'>
        <div className='inline-block bg-black bg-opacity-50 p-8 rounded'>
            
          <h1 className='text-white text-4xl font-bold mb-6'>
            Squad Tournament 20k Schedule
          </h1>
          <table className='table-auto w-full text-white'>
            <thead>
              <tr>
                <th className='px-4 py-2'>Date</th>
                <th className='px-4 py-2'>Event</th>
                <th className='px-4 py-2'>Map</th>
                <th className='px-4 py-2'>Location</th>
              </tr>
            </thead>
            <tbody>
              {tournamentSchedule.map((schedule, index) => (
                <tr key={index} className='hover:bg-gray-700'>
                  <td className='border px-4 py-2'>{schedule.date}</td>
                  <td className='border px-4 py-2'>{schedule.event}</td>
                  <td className='border px-4 py-2'>{schedule.mapName}</td>
                  <td className='border px-4 py-2'>{schedule.location}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className='text-yellow-500 text-xl font-bold mb-6 mt-6'>
                Entry fee is 1000 rupees/team
            </h2>
            <h2 className='text-yellow-500 text-xl font-bold mb-6 mt-6'>
                Prizes will be decided once the registration is completed
            </h2>
            <h1 className='text-white text-xl font-bold mt-2'>
                Easypaisa/Jazzcash number is 03316926656. Send your tournament entry here and add the transaction id number to register.
            </h1>
        </div>
      </div>
    </div>
  );
}

export default Schedule;

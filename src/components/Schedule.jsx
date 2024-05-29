import React from 'react';
import sniper from '../assets/Sniper.jpg';

function Schedule() {
  const tournamentSchedule = [
    { date: '2024-06-01',mapName: 'Livik', event: 'Qualifiers Round 1', location: 'Online' },
    { date: '2024-06-02',mapName: 'Livik', event: 'Qualifiers Round 2', location: 'Online' },
    { date: '2024-06-03',mapName: 'Livik', event: 'Semi-Finals', location: 'Online' },
    { date: '2024-06-04',mapName: 'Erangel', event: 'Finals', location: 'Online' },
  ];

  return (
    <div id='section2' name='schedule' className='relative w-full h-screen flex justify-center items-center ' >
      <img className='absolute w-full h-full object-cover sm:hidden' src={sniper} alt='Background' />
      <div className='relative z-10 text-center p-4'>
        <div className='inline-block bg-black bg-opacity-50 p-8 rounded'>
            
          <h1 className='text-white text-4xl font-bold mb-6'>
            Tournament Schedule
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
                Entry fee is 500 rupees/team
            </h2>
            <h2 className='text-yellow-500 text-xl font-bold mb-6 mt-6'>
                Prizes will be decided once the registration is completed
            </h2>
        </div>
      </div>
    </div>
  );
}

export default Schedule;

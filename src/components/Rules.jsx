import React from 'react'
import bgrules from '../assets/longbg.jpg'


function Rules() {
    const tournamentRules = [
        { description: 'Point System', rule:'Tournament Style'},
        {description: 'Players coming late wil not be able to join the round.', rule:'On Time'},
        {description: 'Players using any third party softwares or using any glitches will be disqualified', rule:'No Hacks'},
        {description: 'MVP Prize will be given to the player with the most tournament kills', rule:'MVP Prize'}, 
        {description: 'In case of tie with points, squad with more kilss will be the winner.' , rule:'Tie Breaker'},
        {description: 'No Emulator devices can participate.' , rule:'PUBG Mobile'},
        {description: 'Only those who paid the entry can participate in tournament.' , rule:'No Freebies'},

        
      ];
  return (
    <div name='schedule' className='sm:h-screen wrapper relative w-full flex justify-center items-center ' >
    <img className='absolute w-full h-full object-cover' src={bgrules} alt='Background' />
    <img className='absolute w-full h-full object-cover hidden md:flex ' src={bgrules} alt='Background' />
    <div className='relative z-10 text-center p-4'>
      <div className='inline-block bg-black bg-opacity-80 p-8 rounded'>
          
        <h1 className='text-white text-4xl font-bold mb-6'>
        PlayerUnknown's Battlegrounds
Mobile Rules
        </h1>
        <table className='table-auto w-full text-white'>
          <thead>
            <tr>
              <th className='px-4 py-2'>Rule</th>
              <th className='px-4 py-2'>Description</th>

            </tr>
          </thead>
          <tbody>
            {tournamentRules.map((rule, index) => (
              <tr key={index} className='hover:bg-gray-800'>
                <td className='border px-4 py-2'>{rule.rule}</td>
                <td className='border px-4 py-2'>{rule.description}</td>

                
              </tr>
            ))}
          </tbody>
        </table>
       
        <h2 className='text-white text-xl font-bold mb-6 mt-6'>
              Entry fee is 1000 rupees/team
          </h2>
          <h2 className='text-white text-xl font-bold mb-6 mt-6'>
              Prizes will be decided once the registration is completed
          </h2>
          <h1 className='text-white text-xl font-bold mt-2'>
              Easypaisa/Jazzcash number is 03316926656. Send your tournament entry here and add the transaction id number to register.
          </h1>
      </div>
    </div>
  </div>
  )
}

export default Rules
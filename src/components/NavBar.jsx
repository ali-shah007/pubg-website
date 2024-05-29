import React from 'react'
import PakPubg from '../assets/Logo-no-bg.png'; 

function NavBar() {
    const Links = [
        {
            id:1,
            title: 'home',
            
        },
        {
            id:1,
            title: 'about',
            
        },
        {
            id:1,
            title: 'schedule',
            
        },
        {
            id:1,
            title: 'register',
            
            
        }
    ]
  return (
    <div className='flex justify-between items-center bg-transparent text-white w-full fixed z-10'>
        <div>
            <img className='w-24 h-auto' src={PakPubg} alt='logo' />
        </div>
        
        <ul className='flex'>
           {Links.map(({id,title})=>(
            <li key={id} className=' px-4 capitalize flex-col text-white hover:text-gray-400 cursor-pointer duration-200 hover:scale-105'>
                {title}
            </li>
           ))}
        </ul>
        

    </div>
  )
}

export default NavBar
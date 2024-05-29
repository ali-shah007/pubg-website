import React from 'react'
import PakPubg from '../assets/Logo-no-bg.png'; 
import { Link } from 'react-scroll'

function NavBar() {
    const Links = [
        {
            id:1,
            title: 'home',
            
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
    <div className='wrapper flex justify-between items-center bg-transparent text-white w-full fixed z-20'>
        <div>
            <img className='w-24 h-auto' src={PakPubg} alt='logo' />
        </div>
        
        <ul className='flex'>
           {Links.map(({id,title})=>(
            <li key={id} className=' px-4 capitalize flex-col text-white hover:text-gray-400 cursor-pointer duration-200 hover:scale-105'>
                <Link to={title} smooth duration={500}>{title}</Link>
            </li>
           ))}
        </ul>
        

    </div>
  )
}

export default NavBar
import React from 'react'
import {close, logo, menu} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo}  alt="Hoobank" className='w-[124px] h-[32px]'/>
        <ul className='list-none sm:flex hidden text-gray-50 justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
                 <li key={nav.id} className={`font-poppins font-normal cursor-pointer`}>
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                 </li>
            ))}
        </ul>
    </nav>
 
  )
}

export default Navbar
import React from 'react'
import { navLink } from "../constant";

const Navbar = () => {
    return (
        <nav className='fixed top-5 left-0 right-0'>
            <div className='flex justify-center items-center gap-1 font-poppins text-xs glassy bg-[#ebebeb62] navbar mx-auto w-[11rem] p-2 rounded-full'>
                <div>
                    <img src='/images/logo.png' alt='logo' className='w-4 text' />
                </div>
                <ul className='flex gap-2 text-[#0000005e] font-light'>
                    {navLink.map(({name, link}) => (
                        <li key={name} >
                            <a href={link} className='text'>
                                <span>{name}</span>
                                <span className="underline" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

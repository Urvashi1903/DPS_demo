import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    const [menu, setMenu] = useState(false)
    function openNCloseMenu() {
        setMenu(!menu)
    }

    return (
        <div className='h-[50px] md:min-h-[80px] mt-[10px] fixed z-30 right-10 pt-[40px]'>
            <ul className='flex gap-5 justify-end'>
                <li className='hidden md:block hover:text-white'><Link to='/portfolio'>Home</Link></li>
                <li className='hidden md:block hover:text-white'><Link to='/about_me'>About Me</Link></li>
                <li className='hidden md:block hover:text-white'><Link>Projects</Link></li>
                <li className='hidden md:block hover:text-white'><Link to='/contact_me'>Contact Me</Link></li>

                <li className='md:hidden fixed! transition-all duration-500 delay-150' onClick={openNCloseMenu}>
                    <i className={`text-3xl ${menu ? "ri-close-line" : "ri-menu-3-line"}`}></i>
                </li>
                {menu && <div className='absolute top-10 text-black/70 bg-white/70'>
                    <ul className='flex flex-col gap-4 px-4 py-2 h-55'>
                        <li className='hover:text-black'><Link to='/portfolio'>Home</Link></li>
                        <li className='hover:text-black'><Link to='/about_me'>About Me</Link></li>
                        <li className='hover:text-black'><Link>Projects</Link></li>
                        <li className='hover:text-black'><Link to='/contact_me'>Contact Me</Link></li>
                    </ul>
                </div>}
            </ul>
        </div>
    )
}

export default Nav

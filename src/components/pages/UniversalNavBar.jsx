import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UniversalNavBar = () => {

    const [menu, setMenu] = useState(false)
    function openNCloseMenu() {
        setMenu(!menu)
    }

    return (
        <div className='flex items-center justify-between bg-[#3b3a3a] px-6 md:px-12 md:py-2 overflow-hidden'>

            <div className='text-[15px] text-white'>Projects</div>
            <div className='text-[#ffffffcc]'>
                <ul className='flex gap-5 text-sm'>
                    <li className='hidden md:block hover:text-white cursor-pointer'><Link to='/contact'>ContactPage</Link></li>
                    <li className='hidden md:block hover:text-white cursor-pointer'><Link to='/freelance'>Freelance</Link></li>
                    <li className='hidden md:block hover:text-white cursor-pointer'><Link to='/designing'>DesigningSpaces</Link></li>
                    <li className='hidden md:block hover:text-white cursor-pointer'><Link to='/flipcards'>FlipCard2</Link></li>
                    <li className='hidden md:block hover:text-white cursor-pointer'><Link to='/portfolio'>Portfolio</Link></li>
                    <li className='md:hidden fixed! top-0 transition-all  duration-500 delay-150' onClick={openNCloseMenu}>
                        <i className={`text-lg  ${menu ? "ri-close-line" : "ri-menu-3-line"}`}></i>
                    </li>
                    {menu && <div className='absolute top-15 right-0 px-4 py-2 text-white bg-black'>
                        <ul className='flex flex-col gap-4 py-2'>
                            <li className=''><Link to='/contact'>ContactPage</Link></li>
                            <li className=''><Link to='/freelance'>Freelance</Link></li>
                            <li className=''><Link to='/designing'>DesigningSpaces</Link></li>
                            <li className=''><Link to='/flipcards'>FlipCard2</Link></li>
                            <li className=''><Link to='/portfolio'>Portfolio</Link></li>
                        </ul>
                    </div>}
                </ul>
            </div>

        </div>
    )
}

export default UniversalNavBar

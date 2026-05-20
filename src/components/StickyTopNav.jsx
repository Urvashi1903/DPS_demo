import React, { useState } from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'

const StickyTopNav = () => {

    const [menu, setMenu] = useState(false)

    return (
        <div className='flex justify-between items-center gap-2 sticky top-0 z-50 bg-white/80 py-7 px-5 lg:px-10'>
            {/* logo1 */}
            <div className='w-55 md:w-100'>
                <a href='/'><img src={logo1}></img></a>
            </div>

            {/* navbar */}
            {/* mobile-view */}
            <div className='flex items-center justify-center gap-5 md:hidden'>
                < div className='w-10' >
                    <img src={logo2}></img>
                </div >
                < div className='text-lg' >
                    <i className="ri-menu-line text-white bg-[#1E7B3C] p-2 rounded-lg shadow-2xl"></i>
                </div >
            </div>

            {/* laptop-view */}
            <div className='hidden md:flex lg:hidden items-center justify-center gap-20'>
                < div className='w-18' >
                    <img src={logo2}></img>
                </div >
                < div className='text-2xl' >
                    <i className="ri-menu-line text-white bg-[#1E7B3C] p-2 rounded-lg shadow-2xl"></i>
                </div >
            </div>

            {/* destop-view */}
            <div className='hidden lg:flex items-center justify-center gap-10'>
                <div className='flex justify-center items-center ' >
                    <ul className='flex gap-7 font-semibold'>
                        <li><button className='cursor-pointer'>Home</button></li>
                        <li>
                            <button className='cursor-pointer relative active:text-[#0c411d]' onMouseEnter={()=>{
                                setMenu(true)
                            }} onMouseLeave={()=>{
                                setMenu(false)
                            }}
                            >
                                DPS Society
                                {menu && <div className='transition-all duration-500 font-light absolute text-white top-12 -translate-x-15 w-50 bg-gray-900 border-t-5 border-[#0c411d]'>
                                    <ul className=''>
                                        <li className='px-8 py-2 hover:bg-gray-700 w-full'>Vision & Mission</li>
                                        <li className='px-8 py-2 hover:bg-gray-700 w-full'>Vision & Mission</li>
                                        <li className='px-8 py-2 hover:bg-gray-700 w-full'>Vision & Mission</li>
                                    </ul>
                                    </div>}
                            </button>
                        </li>
                        
                        <li><a href=''>Members of DPS Society</a></li>
                        <li><a href=''>DPS Schools</a></li>
                        <li><a href=''>Hall Of Fame</a></li>
                        <li><a href=''>Gallery</a></li>
                        <li><a href=''>Events</a></li>
                    </ul>
                </div >
                < div className='w-20' >
                    <img src={logo2}></img>
                </div >
            </div>
        </div>
    )
}

export default StickyTopNav
// relative after:content-[""] after:absolute after:w-0 after:h-[4px] after:bg-[#0c411d] after:left-0 after:top-0 hover:after:w-full
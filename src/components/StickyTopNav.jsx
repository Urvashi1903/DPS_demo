import React, { useState } from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'

const StickyTopNav = () => {

    const [menu, setMenu] = useState(null)
    const [menuBar, setMenuBar] = useState(false)
    function openNcloseNavbar() {
        setMenuBar(!menuBar)
    }

    return (
        <div className='flex justify-between items-center gap-2 sticky top-0 z-50 bg-white/80 py-2 px-5 lg:px-20'>
            {/* logo1 */}
            <div className='w-55 md:w-80'>
                <a href='/'><img src={logo1}></img></a>
            </div>

            {/* navbar */}
            {/* mobile-view */}
            <div className='flex items-center justify-center gap-5 md:gap-30 lg:hidden'>
                < div className='w-10 md:w-18' >
                    <img src={logo2}></img>
                </div >
                <div className=''>
                    <button className='lg:hidden text-3xl' onClick={() => {
                        openNcloseNavbar()
                    }}>
                        <i className="ri-menu-line text-white bg-[#1E7B3C] text-sm md:text-3xl p-1 rounded-lg"></i>
                        {menuBar &&
                            <div className='bg-[#0e2a46] fixed top-0 right-0 text-[#333931] p-[50px]'>
                                {/* logo and close button */}
                                <div className='flex items-center gap-20'>
                                    <a className='flex items-center justify-center'>
                                        <img src={logo3} className='w-[47px] h-[60px]'></img>
                                        <span className='text-[14px] font-bold pl-[5px] text-white'> THE DELHI PUBLIC SCHOOL SOCIETY </span>
                                    </a>
                                    <button onClick={!menuBar}><i className="ri-close-line"></i></button>
                                </div>
                            </div>}
                    </button>
                </div >
            </div>

            {/* destop-view */}
            <div className='hidden lg:flex items-center justify-center gap-5'>
                <div className='flex justify-center items-center ' >
                    <ul className='flex gap-2 text-sm'>
                        <li><button className='font-medium pt-1.5 pr-2 cursor-pointer hover:text-green-900'>Home</button></li>
                        <li>
                            <button className='font-medium cursor-pointer flex items-center justify-center relative active:text-[#0c411d] hover:text-green-900' onMouseEnter={() => {
                                setMenu("dpsSociety")
                            }} onMouseLeave={() => {
                                setMenu(null)
                            }}
                            >
                                DPS Society
                                <span>
                                    {menu === "dpsSociety" ? <i className="ri-arrow-drop-up-line text-3xl font-light"></i> : <i className="ri-arrow-drop-down-line text-3xl font-light"></i>}
                                </span>

                                {menu === "dpsSociety" && (<div className='transition-all duration-500 font-light absolute text-white top-7 -translate-x-4 w-50 bg-gray-950 border-t-6 border-[#114e24]'>
                                    <ul className=''>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Vision & Mission</li>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Chairman's Message</li>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Vice Chairman's Message</li>
                                    </ul>
                                </div>)}
                            </button>
                        </li>

                        <li>
                            <button className='font-medium cursor-pointer flex items-center justify-center relative active:text-[#0c411d] hover:text-green-900' onMouseEnter={() => {
                                setMenu("memOfDpsSociety")
                            }} onMouseLeave={() => {
                                setMenu(null)
                            }}
                            >
                                Members Of DPS Society
                                <span>
                                    {menu === "memOfDpsSociety" ? <i className="ri-arrow-drop-up-line text-3xl font-light"></i> : <i className="ri-arrow-drop-down-line text-3xl font-light"></i>}
                                </span>

                                {menu === "memOfDpsSociety" && (<div className='transition-all duration-500 font-light absolute text-white top-7 -translate-x-4 w-50 bg-gray-950 border-t-6 border-[#114e24]'>
                                    <ul className=''>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>The Governing Body Members</li>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>The Working Committee Members</li>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Remembered Respectfully</li>
                                    </ul>
                                </div>)}
                            </button>
                        </li>

                        <li>
                            <button className='font-medium cursor-pointer flex items-center justify-center relative active:text-[#0c411d] hover:text-green-900' onMouseEnter={() => {
                                setMenu("dpsSchools")
                            }} onMouseLeave={() => {
                                setMenu(null)
                            }}
                            >
                                DPS Schools
                                <span>
                                    {menu === "dpsSchools" ? <i className="ri-arrow-drop-up-line text-3xl font-light"></i> : <i className="ri-arrow-drop-down-line text-3xl font-light"></i>}
                                </span>

                                {menu === "dpsSchools" && (<div className='transition-all duration-500 font-light absolute text-white top-7 -translate-x-4 w-50 bg-gray-950 border-t-6 border-[#114e24]'>
                                    <ul className=''>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>The Core Schools</li>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Schools in India</li>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Abroad Schools</li>
                                    </ul>
                                </div>)}
                            </button>
                        </li>

                        <li>
                            <button className='font-medium cursor-pointer flex items-center justify-center relative active:text-[#0c411d] hover:text-green-900' onMouseEnter={() => {
                                setMenu("hallOfFame")
                            }} onMouseLeave={() => {
                                setMenu(null)
                            }}
                            >
                                Hall Of Fame
                                <span>
                                    {menu === "hallOfFame" ? <i className="ri-arrow-drop-up-line text-3xl font-light"></i> : <i className="ri-arrow-drop-down-line text-3xl font-light"></i>}
                                </span>

                                {menu === "hallOfFame" && (<div className='transition-all duration-500 font-light absolute text-white top-7 -translate-x-4 w-50 bg-gray-950 border-t-6 border-[#114e24]'>
                                    <ul className=''>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Core Schools</li>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Affiliated Schools</li>
                                    </ul>
                                </div>)}
                            </button>
                        </li>

                        <li>
                            <button className='font-medium cursor-pointer flex items-center justify-center relative active:text-[#0c411d] hover:text-green-900' onMouseEnter={() => {
                                setMenu("gallery")
                            }} onMouseLeave={() => {
                                setMenu(null)
                            }}
                            >
                                Gallery
                                <span>
                                    {menu === "gallery" ? <i className="ri-arrow-drop-up-line text-3xl font-light"></i> : <i className="ri-arrow-drop-down-line text-3xl font-light"></i>}
                                </span>

                                {menu === "gallery" && (<div className='transition-all duration-500 font-light absolute text-white top-7 -translate-x-4 w-50 bg-gray-950 border-t-6 border-[#114e24]'>
                                    <ul className=''>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Cultural</li>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Sports</li>
                                    </ul>
                                </div>)}
                            </button>
                        </li>

                        <li>
                            <button className='font-medium cursor-pointer flex items-center justify-center relative active:text-[#0c411d] hover:text-green-900' onMouseEnter={() => {
                                setMenu("events")
                            }} onMouseLeave={() => {
                                setMenu(null)
                            }}
                            >
                                Events
                                <span>
                                    {menu === "events" ? <i className="ri-arrow-drop-up-line text-3xl font-light"></i> : <i className="ri-arrow-drop-down-line text-3xl font-light"></i>}
                                </span>

                                {menu === "events" && (<div className='transition-all duration-500 font-light absolute text-white top-7 -translate-x-4 w-50 bg-gray-950 border-t-6 border-[#114e24]'>
                                    <ul className=''>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Sports</li>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Cultural</li>
                                        <li className='relative hover:pl-12 hover:pr-2 duration-300 group py-4 hover:bg-gray-700 w-full border-[#114e24] border-b border-dashed'><span className='absolute left-5 top-1/2 w-0 h-px group-hover:w-[30px] bg-[#209244] transition-all duration-300'></span>Language Festivals</li>
                                    </ul>
                                </div>)}
                            </button>
                        </li>

                    </ul>
                </div >
                < div className='w-17' >
                    <img src={logo2}></img>
                </div >
            </div>
        </div>
    )
}

export default StickyTopNav

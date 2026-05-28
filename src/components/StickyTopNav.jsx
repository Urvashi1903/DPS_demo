import React, { useState } from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'

const StickyTopNav = () => {

    const [menu, setMenu] = useState(null)
    const [menuBar, setMenuBar] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)

    function openNcloseNavbar() {
        setMenuBar(!menuBar)
    }
    function toggleDropdown(name) {
        setOpenDropdown(openDropdown === name ? null : name)
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
                <div>
                    <button className='lg:hidden text-3xl' onClick={() => {
                        openNcloseNavbar()
                    }}>
                        <i className="ri-menu-line text-white bg-[#1E7B3C] text-sm md:text-3xl p-1 rounded-lg"></i>
                    </button>
                    {menuBar &&
                        <div className='bg-[#0e2a46] !overflow-y-scroll overflow-x-hidden h-screen max-w-[65%] fixed top-0 right-0 text-[#575e55] p-[20px] md:p-[50px] transition-all duration-500'>
                            {/* logo and close button */}
                            <div className='flex items-center justify-between gap-5 md:gap-20 mb-[70px] '>
                                <a className='flex items-center justify-center'>
                                    <img src={logo3} className='w-[47px] h-[60px]'></img>
                                    <span className='text-[10px] md:text-[14px] font-bold pl-[5px] text-white'> THE DELHI PUBLIC SCHOOL SOCIETY </span>
                                </a>
                                <button onClick={() => setMenuBar(false)}><i className="ri-close-line text-4xl"></i></button>
                            </div>
                            {/* links-menu */}
                            <div className='mb-[70px]'>
                                <ul className='text-[#fff] text-[16px]'>
                                    <li className='py-[15px] pr-[20px] pl-0 text-start border-b border-b-white/20'>Home</li>




                                    <li className='border-b border-b-white/20'>
                                        <div onClick={() => {
                                            toggleDropdown("dps")
                                        }}
                                            className='group py-[15px] pr-[20px] pl-0 text-start flex justify-between items-center'>
                                            <a className={`group-active:text-green-900 group-hover:text-green-900 group-focus:text-green-900 ${openDropdown === "dps" ? "text-green-900 font-bold" : "text-white"}`}>DPS Society</a>
                                            <i className={`${openDropdown === "dps" ? "ri-arrow-drop-down-line bg-green-900" : "ri-arrow-drop-right-line"} border group-active:bg-green-900 group-focus:bg-green-900 text-white border-white/20 sm:text-xl font-[100]`}></i>
                                        </div>

                                        <div className={`transition-all duration-500 delay-100 overflow-hidden ${openDropdown === "dps" ? "max-h-auto" : "max-h-0"}`}>
                                            <ul className='pl-7 group'>

                                                <li className='py-2 hover:text-green-900 active:text-green-900 group-focus-within:text-green-900' >Vision & Mission</li>
                                                <li className='py-2 hover:text-green-900 active:text-green-900 group-focus-within:text-green-900' >Chairman's Message</li>
                                                <li className='py-2 hover:text-green-900 active:text-green-900 group-focus-within:text-green-900' >Vice Chairman's Message</li>

                                            </ul>
                                        </div>
                                    </li>




                                    <li className='border-b border-b-white/20'>
                                        <div onClick={() => {
                                            toggleDropdown("memOfDpsSociety")
                                        }}
                                            className='group py-[15px] pr-[20px] pl-0 text-start flex justify-between items-center'>
                                            <a className={`group-active:text-green-900 group-hover:text-green-900 group-focus:text-green-900 ${openDropdown === "memOfDpsSociety" ? "text-green-900 font-bold" : "text-white"}`}>Members Of DPS Society</a>
                                            <i className={`${openDropdown === "memOfDpsSociety" ? "ri-arrow-drop-down-line bg-green-900" : "ri-arrow-drop-right-line"} border group-active:bg-green-900 group-focus:bg-green-900 group-active:text-white border-white/20 sm:text-xl font-[100]`}></i>
                                        </div>

                                        <div className={`transition-all duration-500 delay-100 overflow-hidden ${openDropdown === "memOfDpsSociety" ? "max-h-auto" : "max-h-0"}`}>
                                            <ul className='pl-7 group'>

                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >The Governing Body Members</li>
                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >The Working Committee Members</li>
                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >Remembered Respectfully</li>

                                            </ul>
                                        </div>
                                    </li>

                                    <li className='border-b border-b-white/20'>
                                        <div onClick={() => {
                                            toggleDropdown("dpsSchools")
                                        }}
                                            className='group py-[15px] pr-[20px] pl-0 text-start flex justify-between items-center'>
                                            <a className={`group-active:text-green-900 group-hover:text-green-900 group-focus:text-green-900 ${openDropdown === "dpsSchools" ? "text-green-900 font-bold" : "text-white"}`}>DPS Schools</a>
                                            <i className={`${openDropdown === "dpsSchools" ? "ri-arrow-drop-down-line bg-green-900" : "ri-arrow-drop-right-line"} border active:bg-green-900 focus:bg-green-900 active:text-white border-white/20 sm:text-xl font-[100]`}></i>
                                        </div>

                                        <div className={`transition-all duration-500 delay-100 overflow-hidden ${openDropdown === "dpsSchools" ? "max-h-auto" : "max-h-0"}`}>
                                            <ul className='pl-7 group'>

                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >The Core Schools</li>
                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >Schools in India</li>
                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >Abroad Schools</li>

                                            </ul>
                                        </div>
                                    </li>

                                    <li className='border-b border-b-white/20'>
                                        <div onClick={() => {
                                            toggleDropdown("hallOfFame")
                                        }}
                                            className=' group py-[15px] pr-[20px] pl-0 text-start flex justify-between items-center'>
                                            <a className={`group-active:text-green-900 group-hover:text-green-900 group-focus:text-green-900 ${openDropdown === "hallOfFame" ? "text-green-900 font-bold" : "text-white"}`}>Hall Of Fame</a>
                                            <i className={`${openDropdown === "hallOfFame" ? "ri-arrow-drop-down-line bg-green-900" : "ri-arrow-drop-right-line"} border active:bg-green-900 focus:bg-green-900 active:text-white border-white/20 sm:text-xl font-[100]`}></i>
                                        </div>

                                        <div className={`transition-all duration-500 delay-100 overflow-hidden ${openDropdown === "hallOfFame" ? "max-h-auto" : "max-h-0"}`}>
                                            <ul className='pl-7 group'>

                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >Core Schools</li>
                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >Affiliated Schools</li>

                                            </ul>
                                        </div>
                                    </li>

                                    <li className='border-b border-b-white/20'>
                                        <div onClick={() => {
                                            toggleDropdown("gallery")
                                        }}
                                            className='group py-[15px] pr-[20px] pl-0 text-start flex justify-between items-center'>
                                            <a className={`group-active:text-green-900 group-hover:text-green-900 group-focus:text-green-900 ${openDropdown === "gallery" ? "text-green-900 font-bold" : "text-white"}`}>Gallery</a>
                                            <i className={`${openDropdown === "gallery" ? "ri-arrow-drop-down-line bg-green-900" : "ri-arrow-drop-right-line"} border group-active:bg-green-900 group-focus:bg-green-900 group-active:text-white border-white/20 sm:text-xl font-[100]`}></i>
                                        </div>

                                        <div className={`transition-all duration-500 delay-100 overflow-hidden ${openDropdown === "gallery" ? "max-h-auto" : "max-h-0"}`}>
                                            <ul className='pl-7 group'>

                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >Cultural</li>
                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >Sports</li>

                                            </ul>
                                        </div>
                                    </li>

                                    <li className='border-b border-b-white/20'>
                                        <div onClick={() => {
                                            toggleDropdown("events")
                                        }}
                                            className='group py-[15px] pr-[20px] pl-0 text-start flex justify-between items-center'>
                                            <a className={`group-active:text-green-900 group-hover:text-green-900 group-focus:text-green-900 ${openDropdown === "events" ? "text-green-900 font-bold" : "text-white"}`}>Events</a>
                                            <i className={`${openDropdown === "events" ? "ri-arrow-drop-down-line bg-green-900" : "ri-arrow-drop-right-line"} border group-active:bg-green-900 group-focus:bg-green-900 group-active:text-white border-white/20 sm:text-xl font-[100]`}></i>
                                        </div>

                                        <div className={`transition-all duration-500 delay-100 overflow-hidden ${openDropdown === "events" ? "max-h-auto" : "max-h-0"}`}>
                                            <ul className='pl-7 group'>

                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >Cultural</li>
                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >Sports</li>
                                                <li className='py-2 group-hover:text-green-900 group-active:text-green-900 group-focus:text-green-900' >Language Festivals</li>

                                            </ul>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            {/* contact-part */}
                            <div className='pb-[30px] mb-[20px] border-b'>
                                <h3 className='capitalize mt-[30px] mb-[40px] text-[20px] font-[600] text-[#fff] text-start'>get in touch</h3>
                                {/* 1 */}
                                <div className='mb-[40px] md:flex items-center'>
                                    <div className='w-[50px] h-[50px] rounded-full bg-[#1e7b3c] flex items-center justify-center mr-[20px]'>
                                        <a className=' text-white'>
                                            <i class="ri-mail-fill text-[22px] font-[400]"></i>
                                        </a>
                                    </div>
                                    <div className='flex flex-col gap-2 items-start'>
                                        <span className='text-[16px] font-[400] text-white/30'>Email</span>
                                        <a className='text-[12px] md:text-[18px] font-[600] text-white'>secretary@dpsfamily.org</a>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className='mb-[40px] md:flex items-center'>
                                    <div className='w-[50px] h-[50px] rounded-full bg-[#1e7b3c] flex items-center justify-center mr-[20px] '>
                                        <a className=' text-white'>
                                            <i className="ri-phone-fill text-[22px] font-[400]"></i>
                                        </a>
                                    </div>
                                    <div className='flex flex-col gap-2 items-start'>
                                        <span className='text-[16px] font-[400] text-white/30'>Contact Us</span>
                                        <a className='text-[12px] md:text-[18px] font-[600] text-white'>+91-11-43126700</a>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className='mb-[40px] md:flex items-center'>
                                    <div className='w-[50px] h-[50px] rounded-full bg-[#1e7b3c] flex items-center justify-center mr-[20px] shrink-0'>
                                        <a className=' text-white'>
                                            <i className="ri-map-pin-fill text-[22px] font-[400]"></i>
                                        </a>
                                    </div>
                                    <div className='flex flex-col gap-2 items-start'>
                                        <span className='text-[16px] font-[400] text-white/30'>Location</span>
                                        <a className='text-[12px] md:text-[18px] font-[600] text-white text-start'>The Delhi Public School Society, F-Block, East of Kailash, New Delhi 110065, India</a>
                                    </div>
                                </div>
                            </div>
                        </div>}
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

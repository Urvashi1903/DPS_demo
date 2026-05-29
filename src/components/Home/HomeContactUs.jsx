import React from 'react'
import logo1 from '../../assets/logo1.png'
import { Link } from 'react-router-dom'

const HomeContactUs = () => {
    return (
        <div className='bg-gray-900 text-white'>
            {/* main footer */}
            <div className='w-full h-full md:flex text-center md:text-left p-3 md:p-10'>
                <div className='md:w-[60%] px-10'>
                    <div className='w-[170px] sm:w-[220px] md:w-[350px] lg:w-[520px] pb-5 bg-center mx-auto md:bg-left md:mx-0'>
                        <a href='/'><img src={logo1} className='w-full h-auto object-contain'></img></a>
                    </div>
                    <div className='pb-5'>
                        <p className='leading-10'>The DPS Society is a non-profit, non-proprietary, private educational organization. Its global network of 222 English-medium, co-educational schools, founded on secular values, provides education from Pre-Nursery and Nursery up to Class XII.</p>
                    </div>
                </div>
                <div className='md:w-[40%]'>
                    <ul className='flex flex-col items-center justify-center border-t-2 md:border-none pt-5 md:pt-0 gap-2 md:gap-10 md:text-xl'>
                        <li className='relative after:content-[""] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:bg-white after:transition-all after:duration-500'><a href=''>Job Opportunities</a></li>
                        <li className='relative after:content-[""] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:bg-white after:transition-all after:duration-500'><a href=''>HRDC, DPSS</a></li>
                        <li className='relative after:content-[""] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:bg-white after:transition-all after:duration-500'><Link to='/contact'>Contact Us</Link></li>
                        <li className='relative after:content-[""] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 hover:after:w-full after:bg-white after:transition-all after:duration-500'><a href=''>Web Mail</a></li>
                    </ul>
                </div>
            </div>

            {/* copyright footer */}
            <div className='bg-gray-700 py-5 text-center text-sm md:text-xl'>
                <p>Copyright © 2025 <a href='' className='text-[#1E7B3C] tracking-wider font-bold'>xsinfosol </a> || All Rights Reserved</p>
            <Link to='/freelance' className='text-sm bg-[#e685aa] p-1 text-black'>Freelance</Link>
            </div>

        </div>
    )
}

export default HomeContactUs

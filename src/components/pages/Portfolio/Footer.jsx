import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#000]  px-4 md:px-10 py-5 mt-[50px] md:mt-[100px] shadow-2xl'>
            {/* first-part */}
            <div className='flex flex-col md:flex-row items-between'>
                {/* left */}
                <div className='w-full md:w-1/3 mb-[20px] md:mb-0'>
                    <p className='text-[20px] uppercase tracking-widest text-center md:text-start'>urvashi prajapat</p>
                    <div className='text-[14px] text-[#53576e] tracking-wider pt-[20px] '>
                        <p>Frontend Developer.</p>
                        <p className='mt-1'>Crafting responsive and
                            interactive web experiences.
                        </p>
                    </div>
                </div>
                {/* center + right */}
                <div className='flex items-start justify-center md:justify-evenly gap-3 md:gap-10  w-full md:w-2/3'>
                    {/* center */}
                    <div>
                        <div className='text-[20px] uppercase tracking-widest text-center '><p><u>quick links</u></p></div>
                        <div className='pt-[20px]'>
                            <ul className='flex flex-col items-center gap-2 tracking-wider text-[#ffffff83] text-[14px]'>
                                <li className='hover:text-white cursor-pointer'><Link to='/portfolio'>Home</Link></li>
                                <li className='hover:text-white cursor-pointer'><Link to='/about_me'>About Me</Link></li>
                                <li className='hover:text-white cursor-pointer'><Link>Projects</Link></li>
                                <li className='hover:text-white cursor-pointer'><Link to='/contact_me'>Contact Me</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* right */}
                    <div>
                        <div className='text-[20px] uppercase tracking-widest text-center'><p><u>Connect Me</u></p></div>
                        <div className='pt-[20px]'>
                            <ul className='flex flex-col items-center gap-2 tracking-wider text-[#ffffff83] text-[14px]'>
                                <li className='hover:text-white cursor-pointer'><Link><i className="ri-linkedin-box-fill text-3xl text-center"></i></Link></li>
                                <li className='hover:text-white cursor-pointer'><Link><i className="ri-github-fill text-3xl text-center"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* last-line */}
            <div className='text-center mt-10 text-sm text-[#ffffff94]'>
                <p>Designed & Developed by
                    Urvashi Prajapat ❤️</p>
            </div>
        </div>
    )
}

export default Footer

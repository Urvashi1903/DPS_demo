import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='min-h-[300px] flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-evenly mt-[50px] lg:mt-[230px]'>
                    {/* intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-col gap-5 md:gap-10'>
                        <div className='flex flex-col gap-5'>
                            <p className='text-[20px] tracking-wider'>Hello, I'm Urvashi Prajapat</p>
                            <p className='text-[54px] text-[#F5F5F5] font-medium leading-11'>MERN Stack <br />Developer</p>
                            <p className='text-[20px] tracking-wider'>based in Jaipur</p>
                        </div>
                        <div className='text-sm flex gap-7'>
                            <button className='  text-[#e7e0e0] bg-[#4f9bf99c] px-5 py-1 hover:shadow-2xl cursor-pointer'><a href='/resume.pdf' download='Uravshi_Prajapat_Resume.pdf'>Download <br />Resume</a></button>
                            <button className='text-[#000] bg-[#e7e0e0] px-9 py-1.5 hover:shadow-2xl cursor-pointer'><Link to='/about_me'>Learn<br /> More</Link></button>
                        </div>
                    </motion.div>
                    {/* profile-pic */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='relative w-[250px] h-[250px] md:w-[380px] md:h-[380px]'>
                        <div className='opacity-60'>
                            <img className='w-[250px] h-[250px] md:w-[380px] md:h-[380px] rounded-full' src='https://plus.unsplash.com/premium_photo-1671829480432-9b0f10d869ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D' alt=''></img>
                        </div>
                        {/* <div className='absolute inset-0 left-[13%] top-[15%] w-full h-full rounded-full'>
                        <img className='w-[300px] h-[300px] rounded-full' src='https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGUlMjBpY29ufGVufDB8fDB8fHww'></img>
                    </div> */}
                    </motion.div>
                </div>
  )
}

export default Hero

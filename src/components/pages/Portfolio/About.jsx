import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='flex flex-col gap-10 mt-[50px] md:mt-[150px]'>
                    {/* about-text */}
                    <motion.div
                        whileHover
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='flex flex-col items-center justify-center gap-5'>
                        <p className='text-[40px] text-[#fff]'>About</p>
                        <p className='text-[14px] text-justify lg:text-center tracking-wider px-[5px] md:px-[150px]'>I'm on the way to be a MERN satck developer and passionate about building responsive and user-friendly web applications using React, JavaScript and Tailwind CSS and learnig about more MERN concepts. I enjoy turning ideas into interactive digital experiences and continuously learning modern web technologies. Frontend focused MERN Developer passionate about clean UI.</p>
                    </motion.div>
                    {/* ids-container */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='flex flex-col items-center md:flex-row md:justify-evenly gap-10'>
                        {/* mail */}
                        <div className=' md:rounded-full p-[10px] bg-[#252525] shadow-2xl'>
                            <a href='' className='w-[200px] md:w-[120px] md:h-[120px] flex flex-col items-center justify-center'>
                                <div className='text-4xl text-[#4F9CF9]'><p><i className="ri-mail-fill"></i></p></div>
                                <div className='w-full h-[40%] wrap-break-word overflow-hidden mt-[10px] text-center'><p className='text-sm'>URVASHIUMAPRAJAPAT@GMAIL.COM</p></div>
                            </a>
                        </div>
                        {/* github */}
                        <div className=' md:rounded-full p-[10px] bg-[#252525] shadow-2xl'>
                            <a href='https://github.com/Urvashi1903' target='_blank' className='w-[200px] md:w-[120px] md:h-[120px] flex flex-col items-center justify-center'>
                                <div className='text-4xl text-[#4F9CF9]'><p><i className="ri-github-fill"></i></p></div>
                                <div className='w-full h-[40%] wrap-break-word overflow-hidden mt-[10px] text-center'><p className='text-sm'>URVASHI1903</p></div>
                            </a>
                        </div>
                        {/* linkedin */}
                        <div className=' md:rounded-full p-[10px] bg-[#252525] shadow-2xl'>
                            <a href='https://linkedin.com/in/urvashiprajapat/' target='_blank' className='w-[200px] md:w-[120px] md:h-[120px] flex flex-col items-center justify-center'>
                                <div className='text-4xl text-[#4F9CF9]'><p><i className="ri-linkedin-box-fill"></i></p></div>
                                <div className='w-full h-[40%] wrap-break-word overflow-hidden mt-[10px] text-center'><p className='text-sm'>URVASHIUMAPRAJAPAT</p></div>
                            </a>
                        </div>
                    
                    </motion.div>
                </div>
  )
}

export default About

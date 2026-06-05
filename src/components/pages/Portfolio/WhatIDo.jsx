import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const WhatIDo = () => {
  return (
    <div className='mt-[50px] md:mt-[120px]'>
                    {/* text */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <p className='text-[#fff] text-[40px] text-center'>What I do </p>
                    </motion.div>
                    {/* tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='flex flex-col gap-7 md:flex-row md:gap-10 w-full items-center justify-center mt-[35px] px-[20px] md:px-0 '>
                        {/* tag-1 */}
                        <div className='bg-[#363434] text-[#eee3e3] w-full md:w-[30%] lg:w-[20%] flex flex-col gap-2 items-center justify-center border-b-7 border-b-[#111111dc] shadow-2xl px-5 py-2'>
                            <div className='text-4xl text-[#4F9CF9]'><i className="ri-code-box-line"></i></div>
                            <div className='text-[25px] text-center'>Web <br />Development</div>
                        </div>
                        {/* tag-2 */}
                        <div className='bg-[#363434] text-[#eee3e3] w-full md:w-[30%] lg:w-[20%] flex flex-col gap-2 items-center justify-center border-b-7 border-b-[#111111dc] shadow-2xl px-5 py-2'>
                            <div className='text-4xl text-[#4F9CF9]'><i className="ri-quill-pen-fill"></i></div>
                            <div className='text-[25px] text-center'>Web <br />Design</div>
                        </div>
                    </motion.div>
                </div>
  )
}

export default WhatIDo

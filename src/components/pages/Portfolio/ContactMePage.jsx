import React from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'
import Nav from './Nav'

const ContactMe = () => {
    return (
        <div className='bg-[#1f1e1e] text-[#e7e0e0] ubuntu-font overflow-hidden'>
            {/* header-full-part */}
            <div className=' p-[10px] md:p-[25px]'>
                <Nav />

                <div className='my-[50px] md:my-[120px]'>
                    {/* text */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <p className='text-[#fff] text-[40px] text-center capitalize'>Get in touch</p>
                    </motion.div>
                    {/* form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='flex flex-col gap-10 mt-[20px] md:mt-[40px] px-[20px] md:px-0'>
                        {/* 1st */}
                        <div className='flex flex-col gap-7 md:flex-row md:gap-0 items-center justify-evenly'>
                            <input className='px-2 py-1 border-b w-full md:w-[35%]' type='text' placeholder='First Name'></input>
                            <input className='px-2 py-1 border-b w-full md:w-[35%]' type='text' placeholder='Last Name'></input>
                        </div>
                        {/* 2nd */}
                        <div className='flex flex-col gap-7 md:flex-row md:gap-0 items-center justify-evenly'>
                            <input className='px-2 py-1 border-b w-full md:w-[35%]' type='email' placeholder='E-mail'></input>
                            <input className='px-2 py-1 border-b w-full md:w-[35%]' type='tel' placeholder='Phone Number'></input>
                        </div>
                        {/* 3rd */}
                        <div className='flex flex-col gap-7 md:flex-row md:gap-0 items-center justify-evenly'>
                            <textarea className='px-2 py-1 border w-full md:w-[80%] h-[150px]' placeholder='Message'></textarea>
                        </div>
                        {/* button */}
                        <div className='flex flex-col gap-7 md:flex-row md:gap-0 items-center justify-evenly'>
                            <button className='text-[#e7e0e0] bg-[#4f9bf99c] px-4 py-2 shadow-2xl cursor-pointer hover:shadow-2xl'>Submit Now</button>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default ContactMe

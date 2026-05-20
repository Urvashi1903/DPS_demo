import React from 'react'
import { motion } from "framer-motion";

const HomeContent = () => {
    return (
        <div className='lg:w-[40%] absolute bottom-10 left-10 z-10 text-white mx-2 lg:mr-20'>
            <div className='w-full flex flex-col'>
                <motion.h2
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className='text-[30px] md:text-[45px] text-left font-bold'>DPS School, xyz
                </motion.h2>
                <motion.p
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className='text-[15px] md:text-[17px] pt-5 leading-loose'>Delhi Public School, founded in 1982, takes great pride in its rich 42 year legacy of educational excellence reflected through comprehensive holistic programmes...
                </motion.p>
            </div>
            <div className='flex'>
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }} className='mt-10 lg:mb-10 bg-[#1E7B3C] p-4 w-45 rounded-xl'>
                    <button className='pr-2'>Explore Further</button>
                    <i className="ri-arrow-right-line text-xl"></i>
                </motion.div>
            </div>
        </div>
    )
}

export default HomeContent

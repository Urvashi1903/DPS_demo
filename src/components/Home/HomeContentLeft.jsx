import React from 'react'
import { motion } from "framer-motion";

const HomeContentLeft = ({ activeIndex }) => {

    const schoolInfo = [
        {
            id: 1,
            name: "DPS School, Jaipur",
            para: "Jaipur Delhi Public School, founded in 1982, takes great pride in its rich 42 year legacy of educational excellence reflected through comprehensive holistic programmes..."
        },
        {
            id: 2,
            name: "DPS School, Mathura",
            para: "Mathura Delhi Public School, founded in 1982, takes great pride in its rich 42 year legacy of educational excellence reflected through comprehensive holistic programmes..."
        },
        {
            id: 3,
            name: "DPS School, Greater Noida",
            para: "Noida Delhi Public School, founded in 1982, takes great pride in its rich 42 year legacy of educational excellence reflected through comprehensive holistic programmes..."
        },
        {
            id: 4,
            name: "DPS School, Rohini",
            para: "Rohini Delhi Public School, founded in 1982, takes great pride in its rich 42 year legacy of educational excellence reflected through comprehensive holistic programmes..."
        },
        {
            id: 5,
            name: "DPS School, R.K Puram",
            para: "R.K Puram Delhi Public School, founded in 1982, takes great pride in its rich 42 year legacy of educational excellence reflected through comprehensive holistic programmes..."
        },
        {
            id: 6,
            name: "DPS School, Dwarka",
            para: "Dwarka Delhi Public School, founded in 1982, takes great pride in its rich 42 year legacy of educational excellence reflected through comprehensive holistic programmes..."
        },
        {
            id: 7,
            name: "DPS School, Navi Mumbai",
            para: "Navi Mumbai Delhi Public School, founded in 1982, takes great pride in its rich 42 year legacy of educational excellence reflected through comprehensive holistic programmes..."
        },
        {
            id: 8,
            name: "DPS School, Vasant Kunj",
            para: "Vasant Kunj Delhi Public School, founded in 1982, takes great pride in its rich 42 year legacy of educational excellence reflected through comprehensive holistic programmes..."
        },
        {
            id: 9,
            name: "DPS School, Faridabad",
            para: "Faridabad Delhi Public School, founded in 1982, takes great pride in its rich 42 year legacy of educational excellence reflected through comprehensive holistic programmes..."
        },
        {
            id: 10,
            name: "DPS School, International Saket",
            para: "International Saket Delhi Public School, founded in 1982, takes great pride in its rich 42 year legacy of educational excellence reflected through comprehensive holistic programmes..."
        }
    ]

    const currentData = schoolInfo[activeIndex % schoolInfo.length]

    return (
        <div className='lg:w-[40%] absolute bottom-10 left-10 z-10 text-white mx-2 lg:mr-20'>

            <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className='w-full flex flex-col'>
                    <motion.h2
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-[30px] md:text-[45px] text-left font-bold'>{currentData.name}
                    </motion.h2>
                    <motion.p
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='text-[15px] md:text-[17px] pt-5 leading-loose'>{currentData.para}
                    </motion.p>
                </div>
                <div className='flex'>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }} className='mt-10 lg:mb-10 bg-[#1E7B3C] p-4 w-45 rounded-xl'>
                        <button className='pr-2'>Explore Further</button>
                        <i className="ri-arrow-right-line text-xl"></i>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    )
}

export default HomeContentLeft

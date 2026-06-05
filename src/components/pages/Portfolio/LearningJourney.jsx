import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const LearningJourney = () => {
    return (
        <div className='mt-[50px] md:mt-[120px]'>
            {/* text */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-[#fff] text-center leading-10 md:leading-normal text-[40px]'><p>Learning Journey</p></motion.div>
            {/* description */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-[15px] text-[#53576e] epilogue-font text-center pt-[30px] md:pt-[10px]'><p>"My journey of becoming a MERN Stack Developer"</p></motion.div>
            {/* timeline */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='flex flex-col items-center gap-7 md:flex-row md:items-start justify-evenly md:gap-10 pt-[50px]'>
                {/* 2025 */}
                <div className='px-5 py-2'>
                    <div className='text-center text-xl text-[#4F9CF9] pb-[10px]'><p>2025</p></div>
                    <div className='border-l-3 border-[#4F9CF9] text-[#F5F5F5] pl-2 tracking-wider flex flex-col gap-3'>
                        <p>Started Web Development</p>
                        <p>Learned HTML, CSS and responsive design</p>
                        <p>Learned JavaScript</p>
                        <p>Built multiple frontend projects</p>
                    </div>
                </div>
                {/* 2026 */}
                <div className='px-5 py-2'>
                    <div className='text-center text-xl text-[#4F9CF9] pb-[10px]'><p>2026</p></div>
                    <div className='border-l-3 text-[#F5F5F5] border-[#4F9CF9] pl-2 tracking-wider flex flex-col gap-3'>
                        <p>Learned Tailwind CSS</p>
                        <p>Learned React</p>
                        <p>Created dynamic and responsive UIs</p>
                        <p>Learning Framer Motion</p>
                    </div>
                </div>
            </motion.div>
            {/* cards */}
            <div className='flex flex-col md:flex-row items-center md:items-start justify-evenly gap-10 pt-[50px]'>
                {/* currently-exploring */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='px-5 md:px-14 py-4 bg-[#363434]'>
                    <div className='text-[25px] font-medium text-[#4F9CF9] text-center pb-[10px]'><p>Currently Exploring</p></div>
                    <div className='tracking-wider flex flex-col gap-3'>
                        <p>Framer Motion</p>
                        <p>Advanced React Patterns</p>
                        <p>React Router</p>
                    </div>
                </motion.div>
                {/* future-goals */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='px-5 md:px-14 py-4 bg-[#363434]'>
                    <div className='text-[25px] font-medium text-[#4F9CF9] text-center pb-[10px]'><p>Future Goals</p></div>
                    <div className='tracking-wider flex flex-col gap-3'>
                        <p>MERN Stack Development</p>
                        <p>API Integration</p>
                        <p>Performance Optimization</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default LearningJourney

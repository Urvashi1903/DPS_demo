import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Skills = () => {
    return (
        <div className='mt-[50px] md:mt-[120px]'>
            {/* text */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <p className='text-[#fff] text-[40px] text-center'>Skills</p>
            </motion.div>
            {/* divider */}
            <div className='flex flex-col gap-7 md:flex-row items-start justify-evenly md:gap-10 mt-[35px]'>
                {/* frontend */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='w-full md:w-[50%] lg:w-[30%] h-auto md:h-[180px] lg:h-[200px] bg-[#363434] py-5 md:py-1 px-3 rounded-2xl'>
                    <div className='text-[20px] text-center text-[#4F9CF9] mb-4'><p>Frontend</p></div>
                    {/* tags */}
                    <div className='flex items-center justify-center flex-wrap gap-2'>
                        {/* 1 */}
                        <div className='border border-white rounded-xl w-auto px-3 py-1 flex'>
                            <div className='text-[#4F9CF9] pr-2'><i className="ri-html5-fill"></i></div>
                            <div>HTML5</div>
                        </div>
                        {/* 2 */}
                        <div className='border border-white rounded-xl w-auto px-3 py-1 flex'>
                            <div className='text-[#4F9CF9] pr-2'><i className="ri-css3-fill"></i></div>
                            <div>CSS3</div>
                        </div>
                        {/* 3 */}
                        <div className='border border-white rounded-xl w-auto px-3 py-1 flex'>
                            <div className='text-[#4F9CF9] pr-2'><i className="ri-javascript-fill"></i></div>
                            <div>JavaScript</div>
                        </div>
                        {/* 4 */}
                        <div className='border border-white rounded-xl w-auto px-3 py-1 flex'>
                            <div className='text-[#4F9CF9] pr-2'><i className="ri-tailwind-css-fill"></i></div>
                            <div>Tailwind CSS</div>
                        </div>
                        {/* 5 */}
                        <div className='border border-white rounded-xl w-auto px-3 py-1 flex'>
                            <div className='text-[#4F9CF9] pr-2'><i className="ri-reactjs-line"></i></div>
                            <div>React</div>
                        </div>
                    </div>
                </motion.div>
                {/* tools */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='w-full md:w-[50%] lg:w-[30%] h-auto md:h-[180px] lg:h-[200px] bg-[#363434] py-5 md:py-1 px-3 rounded-2xl'>
                    <div className='text-[20px] text-center text-[#4F9CF9] mb-4'><p>Tools</p></div>
                    {/* tags */}
                    <div className='flex items-center justify-center flex-wrap gap-2'>
                        {/* 1 */}
                        <div className='border border-white rounded-xl w-auto px-3 py-1 flex'>
                            <div className='text-[#4F9CF9] pr-2'><i className="ri-git-commit-fill"></i></div>
                            <div>Git</div>
                        </div>
                        {/* 2 */}
                        <div className='border border-white rounded-xl w-auto px-3 py-1 flex'>
                            <div className='text-[#4F9CF9] pr-2'><i className="ri-github-fill"></i></div>
                            <div>GitHub</div>
                        </div>
                        {/* 3 */}
                        <div className='border border-white rounded-xl w-auto px-3 py-1 flex'>
                            <div className='text-[#4F9CF9] pr-2'><i className="ri-code-line"></i></div>
                            <div>VS Code</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills

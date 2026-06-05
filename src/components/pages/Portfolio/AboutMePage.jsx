import React from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'
import Nav from './Nav'

const AboutMe = () => {
    return (
        <div className='bg-zinc-900 text-[#e7e0e0] ubuntu-font overflow-hidden'>
            {/* header-full-part */}
            <div className='p-[10px] md:p-[25px]'>
                <Nav />

                <div className='my-[40px] md:my-[60px]'>
                    {/* profile-pic */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='opacity-60 flex items-center justify-center'>
                        <img className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full' src='https://plus.unsplash.com/premium_photo-1671829480432-9b0f10d869ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D' alt=''></img>
                    </motion.div>
                    {/* text */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <p className='text-[#fff] text-[50px] text-center capitalize mt-6'>Who am I?</p>
                    </motion.div>
                    {/* subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <p className=' text-[14px] text-center uppercase text-[#B3B3B3] mt-10'>From mathematics to modern web development</p>
                    </motion.div>
                    {/* Short-intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <p className=' text-[17px] text-center uppercase text-[#4F9CF9] tracking-wider mt-10'>MCA Student | React Developer |
                            Aspiring Full Stack Developer</p>
                    </motion.div>

                    {/* my-story */}
                    <div className='flex flex-col w-full mt-30'>

                        <div className='relative mb-10 flex flex-col items-center justify-center shadow-2xl text-center shadow-zinc-900'>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className=' text-[42px] md:text-[50px] whitespace-nowrap'>My Journey
                            </motion.div>
                            <motion.div
                                initial={{ y: 50 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.5 }}
                                className='absolute text-[44px] md:text-[52px] top-0 font-bold opacity-20 whitespace-nowrap'>My Journey
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className='pt-10 text-[#B3B3B3]'>How I got into development?
                            </motion.div>
                            <div className='text-zinc-400 '>-------------</div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='leading-7 bg-zinc-900 border border-zinc-800 p-6 md:p-12 text-zinc-300 tracking-wider text-[15px]'>
                            <p className='text-center'>My journey into technology began with curiosity about how websites and digital products are built.

                                Coming from a<span className='text-[#4F9CF9] font-mono'> Mathematics</span>  background, I developed strong logical reasoning and problem-solving skills, which naturally led me toward programming and web development.
                                <br /><br />
                                I started by learning <span className='text-[#4F9CF9] font-mono'> HTML</span> and <span className='text-[#4F9CF9] font-mono'> CSS</span>, gradually explored <span className='text-[#4F9CF9] font-mono'> JavaScript</span>, and later moved into <span className='text-[#4F9CF9] font-mono'> React</span> development. As I built projects and gained confidence, web development became more than just a learning experience—it became a field I genuinely enjoy.
                                <br /><br />
                                Today, while pursuing my Master of Computer Applications, I am focused on expanding my knowledge of the <span className='text-[#4F9CF9] font-mono'> Mern Stack</span> and building practical projects that strengthen my development skills.</p>
                            <div className='flex flex-col md:flex-row gap-4 pt-[60px] items-center justify-center'>
                                <div className='w-auto px-4 py-2 rounded-3xl border border-zinc-800 bg-zinc-700'>Mathematics</div>
                                <div>
                                    <i className="hidden md:block ri-arrow-right-fill"></i>
                                    <i className="md:hidden ri-arrow-down-fill"></i>
                                </div>
                                <div className='w-auto px-4 py-2 rounded-3xl border border-zinc-800 bg-zinc-700'>HTML</div>
                                <div>
                                    <i className="hidden md:block ri-arrow-right-fill"></i>
                                    <i className="md:hidden ri-arrow-down-fill"></i>
                                </div>
                                <div className='w-auto px-4 py-2 rounded-3xl border border-zinc-800 bg-zinc-700'>CSS</div>
                                <div>
                                    <i className="hidden md:block ri-arrow-right-fill"></i>
                                    <i className="md:hidden ri-arrow-down-fill"></i>
                                </div>
                                <div className='w-auto px-4 py-2 rounded-3xl border border-zinc-800 bg-zinc-700'>JavaScript</div>
                                <div>
                                    <i className="hidden md:block ri-arrow-right-fill"></i>
                                    <i className="md:hidden ri-arrow-down-fill"></i>
                                </div>
                                <div className='w-auto px-4 py-2 rounded-3xl border border-zinc-800 bg-[#4F9CF9]'>React</div>
                                <div>
                                    <i className="hidden md:block ri-arrow-right-fill"></i>
                                    <i className="md:hidden ri-arrow-down-fill"></i>
                                </div>
                                <div className='w-auto px-4 py-2 rounded-3xl border border-zinc-800 bg-zinc-700'>MERN</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* education-qualification-timeline */}
                <div>
                    {/* text */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mt-30 pb-[40px]'>
                        <div className='text-[#fff] text-[40px] md:text-[60px] text-center capitalize'>Education</div>
                    </motion.div>
                    {/* timeline */}
                    <div className='flex flex-col md:items-center tracking-wider'>

                        {/* BSc */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='flex flex-col gap-4 border-l-5 border-[#4F9CF9] pl-2 md:w-[50%]'>
                            <p className='text-zinc-400 text-[20px]'>(2020 - 2023) - Bachelor of Science (Mathematics)</p>

                            <p>Graduated with 72%.</p>

                            <p className='text-[15px]'>My Mathematics degree strengthened my logical reasoning, analytical thinking, and problem-solving skills. Working with mathematical concepts taught me how to approach complex problems systematically, a mindset that now helps me in programming and software development.</p>
                        </motion.div>
                        {/* MCA */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className='flex flex-col gap-4 border-l-5 border-[#4F9CF9] pl-2 md:w-[50%]'>
                            <p className='text-zinc-400 text-[20px] pt-[50px]'>(2024 - 2026) - Master of Computer Applications</p>

                            <p>Current SGPA: 9.15</p>

                            <p className='text-[15px]'>Pursuing MCA has allowed me to build a strong foundation in computer science and software development. During this journey, I started learning web technologies, explored JavaScript and React, and began creating practical projects that transformed my curiosity into a passion for development.</p>
                        </motion.div>
                        {/* future */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className='flex flex-col gap-4 border-l-5 border-[#4F9CF9] pl-2 md:w-[50%]'>
                            <p className='text-zinc-400 text-[20px] pt-[50px]'>2026 & Beyond</p>

                            <p>Aspiring MERN Stack Developer</p>

                            <p className='text-[15px]'>Currently focused on expanding my knowledge of React, Node.js, Express.js, and MongoDB while building projects that strengthen my full-stack development skills.</p>
                        </motion.div>
                    </div>
                </div>

                {/* experience */}
                <div className=''>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mt-30 pb-[40px]'>
                        <div className='text-[#fff] text-[40px] md:text-[50px] text-center capitalize'>experience & growth</div>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    className='bg-zinc-700 p-10 text-center shadow-lg shadow-zinc-600 tracking-wider'><p>Previous Experience

                        Worked in <i className='text-[#4F9CF9]'>Stay Future Buildcon Privated Limited </i> where I developed communication, adaptability, and problem-solving skills.

                        These skills now help me approach software development with a user-centric mindset.</p>
                        </motion.div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default AboutMe

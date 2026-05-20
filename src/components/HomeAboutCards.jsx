import React from 'react'
import bg1 from '../assets/bg1.png'

const HomeAboutCards = () => {
    return (
        <div>
            {/* before 1440px */}
            <div className='md:mt-20 xl:hidden'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                    <div>
                        <div className='bg-white hover:bg-[#1E7B3C] hover:transition-all duration-500 px-10 py-5 m-5 flex flex-col lg:flex-row gap-3 lg:gap-5 lg:items-center justify-center group'>
                            <div className='text-[45px] bg-[#1E7B3C] group-hover:bg-white text-white group-hover:text-[#1E7B3C] w-[80px] h-[80px] text-center rounded-full group-hover:transition-all duration-500'>
                                <i className="ri-school-line"></i>
                            </div>
                            <div className='font-bold text-[#0E2A46] group-hover:text-white group-hover:transition-all duration-500'>
                                <h4 className='text-[21px]'>CORE SCHOOLS</h4>
                                <h2 className='text-[32px]'>32</h2>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='bg-white hover:bg-[#1E7B3C] hover:transition-all duration-500 px-10 py-5 m-5 flex flex-col lg:flex-row gap-3 lg:gap-5 lg:items-center justify-center group'>
                            <div className='text-[45px] bg-[#1E7B3C] group-hover:bg-white text-white group-hover:text-[#1E7B3C] w-[80px] h-[80px] text-center rounded-full group-hover:transition-all duration-500'>
                                <i className="ri-school-line"></i>
                            </div>
                            <div className='font-bold text-[#0E2A46] group-hover:text-white group-hover:transition-all duration-500'>
                                <h4 className='text-[21px]'>SCHOOLS IN INDIA</h4>
                                <h2 className='text-[32px]'>203</h2>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='bg-white hover:bg-[#1E7B3C] hover:transition-all duration-500 px-10 py-5 m-5 flex flex-col lg:flex-row gap-3 lg:gap-5 lg:items-center justify-center group'>
                            <div className='text-[45px] bg-[#1E7B3C] group-hover:bg-white text-white group-hover:text-[#1E7B3C] w-[80px] h-[80px] text-center rounded-full group-hover:transition-all duration-500'>
                                <i className="ri-school-line"></i>
                            </div>
                            <div className='font-bold text-[#0E2A46] group-hover:text-white group-hover:transition-all duration-500'>
                                <h4 className='text-[21px]'>SCHOOLS ABROAD</h4>
                                <h2 className='text-[32px]'>5</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

{/* from 1440px */}
            <div className='hidden xl:block relative md:mt-20'>
                {/* background image */}
                <div className='absolute bottom-[-80px] right-0 h-[320px] w-[700px] bg-[#27c26a] hidden lg:block' style={{
                    clipPath:"polygon(35%0%, 100%0%, 100%100%, 0%100%)"
                }}>
                </div>

                {/* overlay cards */}
                <div className='xxl:mx-30 absolute top-[-190px] inset-0 '>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                        <div>
                            <div className='bg-white hover:bg-[#1E7B3C] hover:transition-all duration-500 px-10 py-5 m-5 flex flex-col lg:flex-row gap-3 lg:gap-5 lg:items-center justify-center group'>
                                <div className='text-[45px] bg-[#1E7B3C] group-hover:bg-white text-white group-hover:text-[#1E7B3C] w-[80px] h-[80px] text-center rounded-full group-hover:transition-all duration-500'>
                                    <i className="ri-school-line"></i>
                                </div>
                                <div className='font-bold text-[#0E2A46] group-hover:text-white group-hover:transition-all duration-500'>
                                    <h4 className='text-[21px]'>CORE SCHOOLS</h4>
                                    <h2 className='text-[32px]'>32</h2>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='bg-white hover:bg-[#1E7B3C] hover:transition-all duration-500 px-10 py-5 m-5 flex flex-col lg:flex-row gap-3 lg:gap-5 lg:items-center justify-center group'>
                                <div className='text-[45px] bg-[#1E7B3C] group-hover:bg-white text-white group-hover:text-[#1E7B3C] w-[80px] h-[80px] text-center rounded-full group-hover:transition-all duration-500'>
                                    <i className="ri-school-line"></i>
                                </div>
                                <div className='font-bold text-[#0E2A46] group-hover:text-white group-hover:transition-all duration-500'>
                                    <h4 className='text-[21px]'>SCHOOLS IN INDIA</h4>
                                    <h2 className='text-[32px]'>203</h2>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='bg-white hover:bg-[#1E7B3C] hover:transition-all duration-500 px-10 py-5 m-5 flex flex-col lg:flex-row gap-3 lg:gap-5 lg:items-center justify-center group'>
                                <div className='text-[45px] bg-[#1E7B3C] group-hover:bg-white text-white group-hover:text-[#1E7B3C] w-[80px] h-[80px] text-center rounded-full group-hover:transition-all duration-500'>
                                    <i className="ri-school-line"></i>
                                </div>
                                <div className='font-bold text-[#0E2A46] group-hover:text-white group-hover:transition-all duration-500'>
                                    <h4 className='text-[21px]'>SCHOOLS ABROAD</h4>
                                    <h2 className='text-[32px]'>5</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default HomeAboutCards

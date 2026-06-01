import React from 'react'

const Contact = () => {
    return (
        <div className='pt-[50px] lg:pt-[100px] overflow-x-hidden w-full bg-[#1435573b]'>
            {/* header-content */}
            <div className='mx-[25px] lg:mx-[100px] xl:mx-[200px] flex flex-col md:flex-row justify-center gap-10'>
                {/* left */}
                <section className='lg:w-[50%]'>
                    <div className='leading-6 md:leading-9'>
                        <h2 className='uppercase text-[#0E2A46] font-bold tracking-widest pb-3 md:pb-0'>contact me</h2>
                        <p className='text-[25px] font-[700] pb-3 md:pb-0'>How can I help you?</p>
                        <p className='text-sm md:text-[15px]'>Fill in the form or drop an email<i className="ri-mail-send-line pl-2"></i></p>
                    </div>
                    <div className='mt-7'>
                        {/* 1-box */}
                        <div className='border border-gray-700 hover:bg-[#0E2A46] hover:text-white hover:border-[#0E2A46] transition-all duration-300 delay-150 hover:translate-x-2 cursor-pointer lg:max-w-[50%] p-2 mb-7 flex items-center justify-center gap-2 '>
                            <i className="ri-smartphone-line text-2xl "></i>
                            <p>+91 00000 00000</p>
                        </div>
                        {/* 2 */}
                        <div className='border border-gray-700 hover:bg-[#0E2A46] hover:text-white hover:border-[#0E2A46] transition-all duration-300 delay-150 hover:translate-x-2 cursor-pointer lg:max-w-[50%] p-2 mb-7 flex items-center justify-center gap-2 '>
                            <i className="ri-mail-line text-2xl"></i>
                            <p>abcd@gmail.com</p>
                        </div>
                        {/* 3 */}
                       <div className='border border-gray-700 hover:bg-[#0E2A46] hover:text-white hover:border-[#0E2A46] transition-all duration-300 delay-150 hover:translate-x-2 cursor-pointer lg:max-w-[50%] p-2 mb-7 flex items-center justify-center gap-2 '>
                            <i class="ri-instagram-line text-2xl"></i>
                            <p>webflow</p>
                        </div>
                    </div>
                </section>
                {/* right */}
                <section className='bg-gray-200 md:w-[50%] p-5 lg:p-7 shadow-2xl'>
                    <form>
                        <div className='mb-4'>
                            <input type='text' placeholder='Name' className='font-[500] w-full p-2 bg-white outline-none border border-gray-300'></input>
                        </div>
                        <div className='mb-4'>
                            <input type='email' placeholder='Email' className='font-[500] w-full p-2 bg-white outline-none border border-gray-300'></input>
                        </div>
                        <div className='mb-4'>
                            <input type='text' placeholder='Subject' className='font-[500] w-full p-2 bg-white outline-none border border-gray-300'></input>
                        </div>
                        <div className='mb-4'>
                            <textarea type='text' placeholder='Message' className='font-[500] w-full p-2 bg-white outline-none border border-gray-300'></textarea>
                        </div>
                        <button className='cursor-pointer bg-[#143557] transition-all duration-300 delay-150 hover:scale-98 text-white font-bold w-full p-2'>Submit</button>
                    </form>
                </section>
            </div>
            {/* footer-content */}
            <div className='mt-20 h-full'>
                <section className='py-7 md:py-15 px-10 lg:px-30 flex flex-col lg:flex-row gap-5 items-center justify-between'>
                    <div className='flex gap-2 items-center justify-center'>
                        <div className='w-[40px] h-[40px] rounded-full bg-green-900 flex items-center justify-between shrink-0'><i className="ri-mail-send-line pl-2 text-white text-xl cursor-pointer"></i></div>
                        <p className='font-[600]'>Join the newsletter and read the new posts first</p>
                    </div>
                    <div>
                        <form>
                            <input type='text' placeholder='Email' className='font-[500] mr-5 p-2 outline-none border border-gray-400 bg-white'></input>
                            <button className='cursor-pointer bg-green-900 text-white hover:bg-white hover:text-green-900 transition-all duration-300 delay-150 p-2 mt-5 lg:mt-0'>Subscribe</button>
                        </form>
                    </div>
                </section>
            </div>
            {/* map */}
            <div className='w-full h-[400px] relative'>

                <iframe src='https://www.google.com/maps?q=Jaipur&output=embed' className='w-full h-full'>    
                </iframe>

                {/* overlay-container */}
                    <div className='cursor-pointer bg-white absolute top-1/4 right-5 lg:right-[150px] p-7 hidden md:block md:w-[40%] lg:w-[25%] shadow-2xl hover:-translate-y-4 transition-all duration-300 delay-200'>
                    <div className='border-b border-[#0E2A46] mb-4'>
                        <div className='text-[18px] pb-1 font-bold'><p>Where to find us</p></div>
                        <div className='text-[12px] pb-1'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex quas, quis quisquam.</p></div>
                    </div>
                        <div className='flex gap-5 text-[15px]'>
                            <div>
                                <p className='font-[500]'>Address</p>
                            <p className='text-[12px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quidem.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div>
                                    <p className='font-[500]'>Telephone</p>
                                    <p className='text-[12px]'>8980283792837</p>
                                </div>
                                <div>
                                    <p className='font-[500]'>Email</p>
                                    <p className='text-[12px]'>abcd@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Contact
// #0E2A46
// [#1435573b]
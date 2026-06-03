import React, { useState } from 'react'
import '../Css/FlipCard.css'
import { transform } from 'framer-motion'

const FlipCard2 = () => {

    const [activeCard, setActiveCard] = useState(null)
    function cardRotate(num) {
        if (num === 1) {
            setActiveCard(1)
        } else if (num === 2) {
            setActiveCard(2)
        } else if (num === 3) {
            setActiveCard(3)
        } else {
            setActiveCard(null)
        }
    }

    return (
        <div className='inter-font bg-[#1a1a1a] text-white overflow-x-hidden'>
            <div className='bg-[#363535] m-[20px]'>

                {/* header */}
                <div>
                    {/* container 1 */}
                    <div className='flex flex-col md:flex-row items-start justify-between min-h-[150px]'>
                        <div className='flex-nowrap uppercase text-[14px] p-[12px] leading-3.5 lg:leading-3 font-medium'>
                            <p className='!whitespace-nowrap'>studio productive</p>
                            <p className='!whitespace-nowrap'>modern design</p>
                        </div>
                        <div className='flex-wrap uppercase p-[12px] font-medium flex justify-end items-start gap-0 text-[15px]'>
                            <div className='border rounded-2xl px-[5px] m-[2px] '>
                                Layouts
                            </div>
                            <div className='border rounded-2xl px-[5px] m-[2px] whitespace-nowrap '>
                                About concepts
                            </div>
                            <div className='border rounded-2xl px-[5px] m-[2px] '>
                                portfolio
                            </div>
                        </div>
                    </div>
                    {/* container 2 */}
                    <div className='flex flex-col md:flex-row items-start justify-between min-h-[150px]'>
                        <div className=' mb-[60px] md:mb-0 flex flex-col md:block lg:flex lg:flex-row uppercase p-[12px] leading-11 text-[52px] md:text-[60px] font-medium w-full md:w-[50%]'>
                            <p className='mr-[12px]'>Magic</p>
                            <p className='mr-[9px]'>layout</p>
                        </div>
                        <div className=' pt-[60px] md:pt-0 p-[12px] text-[18px] md:text-[20px] border-t lg:border-t-2 border-white flex items-end font-medium w-full h-[50%] md:w-[50%]'>
                            <p>Discover modern methods <u>creating websites</u>  based on the magic grid and minimalist layout with cards.</p>
                        </div>
                    </div>
                    {/* container 3 */}
                    <div className='hidden md:flex items-start justify-between min-h-[150px]'>
                        <div className='w-[50%]'></div>
                        <div className='flex p-[12px] uppercase items-end justify-between w-[50%]'>
                            <p className='text-[14px] text-[#ffffff83]'>flip cards</p>
                            <p className='text-[32px]'>3</p>
                        </div>
                    </div>
                </div>

                {/* cards */}
                <div className='min-h-[700px] bg-[#363535]'>
                    <div className='flex justify-center gap-5 flex-wrap'>
                        {/* 1st */}
                        <div onClick={() => {
                            cardRotate(1)
                        }}
                            className='p-[12px] perspective flex-[1_1_300px] max-w-[100%]'>
                            {/* inner */}
                            <div className={`w-full h-[520px] relative origin-center transform-3d hover:rotate-y-180 duration-500 delay-150 ${activeCard === 1 ? "rotate-y-180" : ""}`}>
                                {/* front */}
                                <div className='bg-[#555] p-[24px] w-full h-full rounded-2xl flex flex-col justify-between border-2 border-white absolute inset-0 backface-hidden'>
                                    <div className='w-auto flex justify-start'>
                                        <p className='border rounded-2xl px-[10px] m-[3px] font-medium uppercase text-[17px]'>skin care</p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className='text-[200px] font-medium'>1</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-end'>
                                            <p className='text-[14px] uppercase mr-[28px]'>shop products</p>
                                        </div>
                                        <div className='w-[50px] h-[50px] rounded-full border-2 border-white flex items-center justify-center'>
                                            <i className="ri-arrow-right-line text-2xl"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* back */}
                                <div className='bg-[#d3dd44] w-full h-full rounded-2xl flex flex-col justify-between text-black font-bold absolute inset-0 backface-hidden rotate-y-180'>
                                    <div className='flex flex-col justify-between h-[35%] p-[24px]'>
                                        <div className='w-auto flex justify-start'>
                                            <p className='border rounded-2xl px-[10px] m-[3px] font-medium uppercase text-[14px]'>skin care</p>
                                        </div>
                                        <div>
                                            <p className='text-[20px]'>Reliable <u>skin protection</u> against weather conditions. Check out the latest products in our store.</p>
                                        </div>
                                    </div>

                                    <div className='relative h-[60%] w-full text-white'>
                                        <img className='h-full w-full object-cover rounded-b-2xl rounded-t-4xl opacity-95' src='https://images.unsplash.com/photo-1672763057302-6090a32d5d36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3115&q=80'></img>

                                        <div className='flex items-end justify-between p-[20px] absolute inset-0 bottom-0'>
                                            <div className='flex'>
                                                <p className='text-[14px] uppercase mr-[28px] font-bold'>shop products</p>
                                            </div>
                                            <div className='w-[50px] h-[50px] rounded-full border border-black bg-white flex items-center justify-center'>
                                                <i className="ri-arrow-right-line text-2xl text-black"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* 2nd */}
                        <div onClick={() => {
                            cardRotate(2)
                        }}
                            className='p-[12px] perspective flex-[1_1_300px] max-w-[100%]'>
                            {/* inner */}
                            <div className={`w-full h-[520px] relative origin-center transform-3d hover:rotate-y-180 duration-500 delay-150 ${activeCard === 2 ? "rotate-y-180" : ""}`}>
                                {/* front */}
                                <div className='bg-[#909090] p-[24px] w-full h-full rounded-2xl flex flex-col justify-between border-2 border-white absolute inset-0 backface-hidden'>
                                    <div className='w-auto flex justify-start'>
                                        <p className='border rounded-2xl px-[10px] m-[3px] font-medium uppercase text-[17px]'>editorial</p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className='text-[200px] font-medium'>2</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-end'>
                                            <p className='text-[14px] uppercase mr-[28px]'>outdoor photography</p>
                                        </div>
                                        <div className='w-[50px] h-[50px] rounded-full border-2 border-white flex items-center justify-center'>
                                            <i className="ri-arrow-right-line text-2xl"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* back */}
                                <div className='bg-[#d3dd44] w-full h-full rounded-2xl flex flex-col justify-between text-black font-bold absolute inset-0 backface-hidden rotate-y-180'>
                                    <div className='flex flex-col justify-between h-[35%] p-[24px]'>
                                        <div className='w-auto flex justify-start'>
                                            <p className='border rounded-2xl px-[10px] m-[3px] font-medium uppercase text-[14px]'>editorial</p>
                                        </div>
                                        <div>
                                            <p className='text-[20px]'>Follow the trends and browse the <u>popular collection</u>  of free photos to publish on your website.</p>
                                        </div>
                                    </div>

                                    <div className='relative h-[60%] w-full text-white'>
                                        <img className='h-full w-full object-cover rounded-b-2xl rounded-t-4xl opacity-95' src='https://images.unsplash.com/photo-1647136398366-160694959b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxjb2xsZWN0aW9ufDF8TWxYODVUREhobWd8fHx8fDJ8fDE2NzgxMTc3NDc&ixlib=rb-4.0.3&q=80&w=1080'></img>

                                        <div className='flex items-end justify-between p-[20px] absolute inset-0 bottom-0'>
                                            <div className='flex'>
                                                <p className='text-[14px] uppercase mr-[28px] font-bold'>outdoor photography</p>
                                            </div>
                                            <div className='w-[50px] h-[50px] rounded-full border border-black bg-white flex items-center justify-center'>
                                                <i className="ri-arrow-right-line text-2xl text-black"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* 3rd */}
                        <div onClick={() => {
                            cardRotate(3)
                        }}
                            className='p-[12px] perspective flex-[1_1_300px] max-w-[100%]'>
                            {/* inner */}
                            <div className={`w-full h-[520px] relative origin-center transform-3d hover:rotate-y-180 duration-500 delay-150 ${activeCard === 3 ? "rotate-y-180" : ""}`}>
                                {/* front */}
                                <div className='bg-[#1a1a1a] p-[24px] w-full h-full rounded-2xl flex flex-col justify-between border-2 border-white absolute inset-0 backface-hidden'>
                                    <div className='w-auto flex justify-start'>
                                        <p className='border rounded-2xl px-[10px] m-[3px] font-medium uppercase text-[17px]'>fashion</p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className='text-[200px] font-medium'>3</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-end'>
                                            <p className='text-[14px] uppercase mr-[28px]'>creative photography</p>
                                        </div>
                                        <div className='w-[50px] h-[50px] rounded-full border-2 border-white flex items-center justify-center'>
                                            <i className="ri-arrow-right-line text-2xl"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* back */}
                                <div className='bg-[#d3dd44] w-full h-full rounded-2xl flex flex-col justify-between text-black font-bold absolute inset-0 backface-hidden rotate-y-180'>
                                    <div className='flex flex-col justify-between h-[35%] p-[24px]'>
                                        <div className='w-auto flex justify-start'>
                                            <p className='border rounded-2xl px-[10px] m-[3px] font-medium uppercase text-[14px]'>fashion</p>
                                        </div>
                                        <div>
                                            <p className='text-[20px]'>Explore modern places and create a many <u>talented photographers</u> from around the world photography.</p>
                                        </div>
                                    </div>

                                    <div className='relative h-[60%] w-full text-white'>
                                        <img className='h-full w-full object-cover rounded-b-2xl rounded-t-4xl opacity-95' src='https://images.unsplash.com/photo-1627322417317-c98fc87e0e0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8MTEzfHxmYXNoaW9uJTIwZWRpdG9yaWFsfGVufDB8fHx8MTY3ODExODA3Ng&ixlib=rb-4.0.3&q=80&w=1080'></img>

                                        <div className='flex items-end justify-between p-[20px] absolute inset-0 bottom-0'>
                                            <div className='flex'>
                                                <p className='text-[14px] uppercase mr-[28px] font-bold'>creative photography</p>
                                            </div>
                                            <div className='w-[50px] h-[50px] rounded-full border border-black bg-white flex items-center justify-center'>
                                                <i className="ri-arrow-right-line text-2xl text-black"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default FlipCard2

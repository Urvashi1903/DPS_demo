import React from 'react'

const DesigningSpaces = () => {
    return (
        <div className='w-full h-full ubuntu-font md:flex gap-20 lg:gap-10 items-start justify-center overflow-hidden pt-[40px] pb-[80px]'>
            {/* img-part */}
            <div className='w-full md:w-[30%] h-full relative group '>

                <div className='h-[80vw] w-[80vw] md:h-[500px] md:w-[250px] bg-transparent bg-cover absolute top-[10%] left-[18%] lg:top-[50px] lg:left-[50px] xl:top-[30px] xl:left-[150px] group-hover:shadow-xl group-hover:shadow-black/90 transition-all duration-500 delay-150'>
                    <img src='https://img.freepik.com/free-photo/greyscale-roof-modern-building-with-glass-windows-sunlight_181624-23298.jpg?semt=ais_hybrid&w=740&q=80' className='w-full h-full md:h-[500px] md:w-[250px]'></img>
                </div>
                <div className='h-[80vw] w-[80vw] md:h-[500px] md:w-[250px] bg-transparent bg-cover group-hover:shadow-2xl group-hover:shadow-black/90 transition-all duration-500 delay-150'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9xkg8xU0I0Yj4ZVutBTQ1Ya36IlmxdURiA&s' className='w-full h-full md:h-[500px] md:w-[250px]'></img>
                </div>

            </div>
            {/* content-part */}
            <div className='w-full mt-[70px] md:mt-0 md:w-[50%] h-full flex flex-col gap-7'>
                <div className='flex flex-col items-center md:items-start mx-[20px] md:mx-0'>
                    <span className='bg-gray-300 text-gray-950 text-[10px] md:text-[11px] lg:text-[12px] px-2 py-1 uppercase'>About architon</span>
                    <h2 className='capitalize text-center font-medium md:text-start text-[30px] md:text-[35px] lg:text-[40px] tracking-wide pt-[20px] md:leading-13'><span className='text-gray-700'>designing spaces</span><br /> creating experience</h2>
                    <p className='capitalize text-center md:text-start text-[13px] tracking-wider lg:leading-6 text-gray-900 pt-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusantium officiis est et iste cumque a vel, nesciunt amet magnam assumenda rerum omnis in ad repudiandae adipisci nam obcaecati quod illum autem dolores suscipit! Dolor aliquid voluptatum officia possimus autem molestiae quos, saepe, laboriosam laudantium libero eveniet unde, modi et?</p>
                </div>
                <div className='flex justify-evenly md:justify-start gap-1 md:gap-5 lg:gap-30 text-gray-950 mt-[20px]'>
                    {/* box-1 */}
                    <span className='flex flex-col gap-1 items-center justify-center px-2 md:px-3 py-1 bg-gray-200'>
                        <p className='text-[25px] md:text-[30px] font-medium'>450</p>
                        <p className='text-sm capitalize tracking-wide whitespace-nowrap'>furniture project</p>
                    </span>
                    {/* box-2 */}
                    <span className='flex flex-col gap-1 items-center justify-center px-3 py-1 bg-gray-200'>
                        <p className='text-[25px] md:text-[30px] font-medium'>156</p>
                        <p className='text-sm capitalize tracking-wide whitespace-nowrap'>satisfied clients</p>
                    </span>
                </div>
                <div className='mt-[20px] flex justify-center md:block'>
                    <button className='uppercase text-[12px] bg-gray-800 text-white px-5 py-3 hover:scale-95 transition-all duration-300 delay-150'>Learn More</button>
                </div>

            </div>
        </div>
    )
}

export default DesigningSpaces

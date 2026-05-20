import React from 'react'
import HomeAboutCards from './HomeAboutCards'

const HomeAbout = () => {
    return (
        <div className='bg-gray-200 pb-20'>
            <div className='text-center px-6 lg:px-20 py-10 xl:pb-80'>
                <div className='font-bold'>
                    <h3 className='text-[25px] lg:text-[40px] text-[#1E7B3C] '>SPANNING 75 YEARS</h3>
                    <h3 className='text-[28px] lg:text-[45px] text-[#0E2A46]'>LEGACY OF EXCELLENCE</h3>
                </div>
                <div className='mt-5'>
                    <p className='text-[17px] leading-9'>From its inception at the President’s Estate in 1941 as Church High School, through its transformation into Naveen Bharat School in 1947, and culminating in the establishment of DPS Mathura Road in 1949, the journey of DPS has been one of vision, growth, and revolutionising education in India. As India embarked on its journey of independence, The DPS Society emerged to fulfill the educational needs of a rapidly progressing nation . With its flagship school at DPS Mathura Road, followed by the establishment of DPS R.K. Puram in 1972, and now spanning the country with 222 schools, the DPS network continues to grow steadfastly in its commitment to serve the society.</p>
                </div>
            </div>

            {/* cards */}
            <HomeAboutCards/>

        </div>
    )
}

export default HomeAbout

import React from 'react'

const MarqueeNav = () => {
    return (
        <div className='px-15 text-white bg-[#1E7B3C] font-semibold tracking-wider'>
            <marquee scrollamount="10">
                <ul className='flex gap-50'>
                    <li><a href='#'># Injunction Order of Hon’ble Supreme Court of India, Dated 24 July, 2018<span className='text-red-600 italic'> Click Here</span> </a></li>
                    <li><a href='#'># Beware of fake / unauthorized / illegal schools operating under the name of Delhi Public Schools / DPS. For court order(s)<span className='text-red-600 italic'> Click Here</span> </a></li>
                </ul>
            </marquee>
        </div>
    )
}

export default MarqueeNav

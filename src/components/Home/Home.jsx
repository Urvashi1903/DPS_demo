import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'

import { EffectFade, Autoplay } from 'swiper/modules';

import dps1 from '../../assets/dps-1.png'
import dps2 from '../../assets/dps-2.png'
import dps3 from '../../assets/dps-3.png'
import dps4 from '../../assets/dps-4.png'
import dps5 from '../../assets/dps-5.png'

import HomeContentLeft from './HomeContentLeft';
import HomeContentRight from './HomeContentRight';

const Home = () => {
    return (
        <div className='overflow-x-hidden relative'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                modules={[EffectFade, Autoplay]}
                className="mySwiper h-145 w-screen"
            >
                <SwiperSlide>
                    <div className='relative h-145 w-full'>
                        <div className='absolute top-0 left-0 bg-black/50 w-full h-full'></div>
                        <img src={dps1} className='w-full h-full object-cover' />
                    </div>
                    {/* overlay-container */}
                    <HomeContentLeft />

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-145 w-full'>
                        <div className='absolute top-0 left-0 bg-black/50 w-full h-full'></div>
                        <img src={dps2} className='w-full h-full object-cover' />
                    </div>
                    {/* overlay-container */}
                    <HomeContentLeft />

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-145 w-full'>
                        <div className='absolute top-0 left-0 bg-black/50 w-full h-full'></div>
                        <img src={dps3} className='w-full h-full object-cover' />
                    </div>
                    {/* overlay-container */}
                    <HomeContentLeft />

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-145 w-full'>
                        <div className='absolute top-0 left-0 bg-black/50 w-full h-full'></div>
                        <img src={dps4} className='w-full h-full object-cover' />
                    </div>
                    {/* overlay-container */}
                    <HomeContentLeft />

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-145 w-full'>
                        <div className='absolute top-0 left-0 bg-black/50 w-full h-full'></div>
                        <img src={dps5} className='w-full h-full object-cover' />
                    </div>
                    {/* overlay-container */}
                    <HomeContentLeft />

                </SwiperSlide>

            </Swiper>

            {/* right side content */}
            <HomeContentRight/>

        </div>
    )
}

export default Home

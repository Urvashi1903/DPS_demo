import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules';

import dps1 from '../../assets/dps-1.png'
import dps2 from '../../assets/dps-2.png'
import dps3 from '../../assets/dps-3.png'
import dps4 from '../../assets/dps-4.png'
import dps5 from '../../assets/dps-5.png'

import '../Css/HomeContentRight.css'

const HomeContentRight = () => {
    return (
        <div className='hidden lg:block lg:w-[50%] absolute bottom-10 right-8 z-10 ml-5 mr-2'>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                centeredSlides={false}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                modules={[Autoplay]}
                className="mySwiper max-w-full"
            >
                <SwiperSlide>
                    <div className='w-[150px] xl:w-[230px] h-[180px] overflow-hidden'>
                        <img src={dps1} className='w-full h-full object-cover'></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[150px] xl:w-[230px] h-[180px] overflow-hidden'>
                        <img src={dps2} className='w-full h-full object-cover'></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[150px] xl:w-[230px] h-[180px] overflow-hidden'>
                        <img src={dps3} className='w-full h-full object-cover'></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[150px] xl:w-[230px] h-[180px] overflow-hidden'>
                        <img src={dps4} className='w-full h-full object-cover'></img>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[150px] xl:w-[230px] h-[180px] overflow-hidden'>
                        <img src={dps5} className='w-full h-full object-cover'></img>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default HomeContentRight

import React, { useState } from 'react';
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

    const slide = [
        { id: 1, img: dps1 },
        { id: 2, img: dps2 },
        { id: 3, img: dps3 },
        { id: 4, img: dps4 },
        { id: 5, img: dps5 },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='overflow-x-hidden relative'>
            <Swiper
            loop={true}
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                modules={[EffectFade, Autoplay]}
                onSlideChange={(swiper) => {
                    setCurrentIndex(swiper.realIndex)
                }}
                className="mySwiper h-145 w-screen"
            >
                {slide.map((slide) => (

                    <SwiperSlide key={slide.id}>
                        <div className='relative h-145 w-full'>
                            <div className='absolute top-0 left-0 bg-black/50 w-full h-full'></div>
                            <img src={slide.img} className='w-full h-full object-cover' />
                        </div>
                        {/* overlay-container */}
                        <HomeContentLeft activeIndex={currentIndex} />

                    </SwiperSlide>
                ))}

            </Swiper>

            {/* right side content */}
            <HomeContentRight />

        </div>
    )
}

export default Home

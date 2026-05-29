import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const Freelance = () => {
  return (
    <div className='lg:h-screen bg-[#e685aa] text-white py-[30px] lg:py-[100px] px-[40px] lg:px-[100px] xl:px-[250px] w-full flex flex-col items-center justify-center lg:flex-row gap-10 overflow-x-hidden'>
      {/* left-content */}
      <div className='flex flex-col lg:items-start lg:w-[50%]'>

        <div className='flex gap-6 items-center justify-center mb-[25px]'>
          <img className='w-[50px] h-[50px] rounded-full object-cover' src='https://images.unsplash.com/photo-1659356576046-843970eec9d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
          <p className='capitalize text-[20px] font-bold'>celia almeda</p>
        </div>
        <div className='flex flex-col items-center justify-center lg:items-start gap-5 text-center lg:text-justify'>
          <h2 className='text-[40px] font-extrabold mb-[15px]'>Freelance Designer</h2>
          <p className='text-[20px] font-light mb-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquam iure maiores quia id quidem reiciendis iste dolore laborum corporis, error consequuntur tempora asperiores, molestias placeat! Nostrum repudiandae iure porro!</p>
          <p className='text-[17px] font-light mb-[20px]'>Lorem ipsum dolor sit amet.</p>
          <button className='p-3 rounded-xl border-2 border-white hover:bg-white hover:text-[#e685aa] transition-all duration-300 w-50 mb-[25px] uppercase text-[14px] font-bold'>Contact Me</button>
        </div>

      </div>
      {/* right-swiper */}
      <div className='shadow-2xl shadow-black w-[80vw] lg:w-[50%] lg:h-full h-[80vw] align-middle'>
        <Swiper
          loop={true}
          pagination={true}
          navigation={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className='mySwiper w-full h-full'>

          <SwiperSlide>
            <div className='relative group w-full h-full'>
              {/* overlay div */}
              <div className='absolute inset-0 bg-transparent group-hover:bg-black/90'>
              </div>
              {/* image */}
              <img className='w-full h-full object-cover transition-all duration-500 delay-150 group-hover:opacity-80 group-hover:scale-110' src='https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='relative group w-full h-full'>
              {/* overlay div */}
              <div className='absolute inset-0 bg-transparent group-hover:bg-black/90'>
              </div>
              {/* image */}
              <img className='w-full h-full object-cover transition-all duration-500 delay-150 group-hover:opacity-80 group-hover:scale-110' src='https://plus.unsplash.com/premium_photo-1670590785994-ab5e8a2ccd61?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='relative group w-full h-full'>
              {/* overlay div */}
              <div className='absolute inset-0 bg-transparent group-hover:bg-black/90'>
              </div>
              {/* image */}
              <img className='w-full h-full object-cover transition-all duration-500 delay-150 group-hover:opacity-80 group-hover:scale-110' src='https://plus.unsplash.com/premium_photo-1664006988924-16f386bcd40e?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='relative group w-full h-full'>
              {/* overlay div */}
              <div className='absolute inset-0 bg-transparent group-hover:bg-black/90'>
              </div>
              {/* image */}
              <img className='w-full h-full object-cover transition-all duration-500 delay-150 group-hover:opacity-80 group-hover:scale-110' src='https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=692&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='relative group w-full h-full'>
              {/* overlay div */}
              <div className='absolute inset-0 bg-transparent group-hover:bg-black/90'>
              </div>
              {/* image */}
              <img className='w-full h-full object-cover transition-all duration-500 delay-150 group-hover:opacity-80 group-hover:scale-110' src='https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='relative group w-full h-full'>
              {/* overlay div */}
              <div className='absolute inset-0 bg-transparent group-hover:bg-black/90'>
              </div>
              {/* image */}
              <img className='w-full h-full object-cover transition-all duration-500 delay-150 group-hover:opacity-80 group-hover:scale-110' src='https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='relative group w-full h-full'>
              {/* overlay div */}
              <div className='absolute inset-0 bg-transparent group-hover:bg-black/90'>
              </div>
              {/* image */}
              <img className='w-full h-full object-cover transition-all duration-500 delay-150 group-hover:opacity-80 group-hover:scale-110' src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

    </div>
  )
}

export default Freelance


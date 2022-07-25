import React from 'react'
import {IoMdRadioButtonOff} from 'react-icons/io'
import Image from 'next/image'
import {useEffect, useState, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import {Autoplay, EffectFade, Pagination, Navigation} from 'swiper'

const SliderSmall = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div>
            <img
              src='/Images/heroImage.png'
              className='  h-screen'
              alt='hero image 1'
            />
            <div className='absolute bottom-[40px] left-[40px] text-white'>
              <h3 className='font-bold text-xl capitalize'>quality </h3>
              <h3 className='font-bold text-xl capitalize'>healthcare</h3>
              <p className='w-[24rem]'>
                The new design of our healthcare system emphasizes the primary
                healthcare system so that you can have healthcare services not
                more than five kilometers from where you live
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src='/Images/info - 005.png'
              className='  h-screen'
              alt='hero image 2'
            />
            <div className='absolute bottom-[40px] left-[40px] text-white'>
              <h3 className='font-bold text-xl capitalize'>quality </h3>
              <h3 className='font-bold text-xl capitalize'>healthcare</h3>{' '}
              <p className='w-[24rem]'>
                The new design of our healthcare system emphasizes the primary
                healthcare system so that you can have healthcare services not
                more than five kilometers from where you live
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src='/Images/info - 006.png'
              className=' h-screen'
              alt='hero image 2'
            />
            <div className='absolute bottom-[40px] left-[40px] text-white'>
              <h3 className='font-bold text-xl capitalize'>quality </h3>
              <h3 className='font-bold text-xl capitalize'>healthcare</h3>
              <p className='w-[24rem]'>
                The new design of our healthcare system emphasizes the primary
                healthcare system so that you can have healthcare services not
                more than five kilometers from where you live
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default SliderSmall

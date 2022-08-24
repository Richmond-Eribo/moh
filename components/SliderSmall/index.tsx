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

const sliderImages = [
  {
    url: '/heroSliderImages/1.jpg',
    heading: 'Quality healthCare',
    subtext:
      'The new design of our healthcare system emphasizes the primary healthcare system so that you can have healthcare services not more than five kilometers from where you live',
  },
  {
    url: '/heroSliderImages/2.jpg',
    heading: 'Quality healthCare',
    subtext:
      'The new design of our healthcare system emphasizes the primary healthcare system so that you can have healthcare services not more than five kilometers from where you live',
  },
]

const SliderSmall = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className='mySwiper'
      >
        {sliderImages.map(sliderImage => (
          <SwiperSlide key={sliderImage.url}>
            <div>
              <div className='w-full h-[27rem] relative'>
                <Image
                  src={sliderImage.url}
                  layout='fill'
                  alt='hero image 1'
                  objectFit='cover'
                />
              </div>

              <div className='absolute bottom-[40px] left-[40px] text-white'>
                <h3 className='font-bold text-xl text-left capitalize'>
                  quality <br /> healthcare
                </h3>
                {/* <p className='w-[24rem]'>
                The new design of our healthcare system emphasizes the primary
                healthcare system so that you can have healthcare services not
                more than five kilometers from where you live
              </p> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
export default SliderSmall

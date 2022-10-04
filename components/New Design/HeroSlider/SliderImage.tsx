import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

// import "./styles.css"

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper"
import Slides from "./Slides"

const SlideImage = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        // navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className='mySwiper'
      >
        {["bg-slide1", "bg-slide2", "bg-slide3", "bg-slide4"].map(
          (slide, index) => (
            <SwiperSlide key={index}>
              <Slides image={slide} />
              {/* <img src='https://swiperjs.com/demos/images/nature-1.jpg' /> */}
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  )
}

export default SlideImage

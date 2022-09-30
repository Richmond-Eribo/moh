import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper"
import Reach from "components/OldDesign/Reach"

const sliderImages = [
  {
    url: "/heroSliderImages/1.jpg",
    heading: "Quality healthCare",
    subtext: "The nt more than five kilometers from where you live",
  },
  {
    url: "/heroSliderImages/2.jpg",
    heading: "Quality healthCare",
    subtext:
      "The new design of our healthcare system emphasizes the primary healthcare system so that you can have healthcare services not more than five kilometers from where you live",
  },
]

const SliderLarge = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className='mySwiper index hidden lg:block'
      >
        {sliderImages.map((sliderImage) => (
          <SwiperSlide key={sliderImage.url}>
            <div className='relative  index'>
              <Image
                src={sliderImage.url}
                width={1000}
                height={800}
                className='hidden -z-50 lg:block h-screen '
                alt='hero image  1'
              />

              {/* <div className='absolute bottom-[40px] left-[40px] text-white'>
                <h3 className='font-bold text-xl capitalize'>
                  {sliderImage.heading}{' '}
                </h3>

                <p className=' text-lg capitalize'>{sliderImage.subtext}</p>
              </div> */}

              {/* <div className='hidden lg:block absolute bottom-[1rem] right-4'>
                <Reach setIsOpen={false} />
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
export default SliderLarge

//class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">

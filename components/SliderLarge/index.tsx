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

// {
//   url: '/Images/heroImage.png',
//   heading: 'Quality healthCare',
//   subtext:
//     'The new design of our healthcare system emphasizes the primary healthcare system so that you can have healthcare services not more than five kilometers from where you live',
// },
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

const SliderLarge = () => {
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
        className='mySwiper hidden lg:block'
      >
        {sliderImages.map(sliderImage => (
          <SwiperSlide key={sliderImage.url}>
            <div>
              <Image
                // src='/Images/heroImage.png'
                src={sliderImage.url}
                width={1000}
                height={800}
                className='hidden lg:block h-screen'
                alt='hero image  1'
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
        ))}
      </Swiper>
    </>
  )
}
export default SliderLarge

// const Slider = () => {
//   const [heroImageNum, setHeroImageNum] = useState(1);

//   const [heroImage, setHeroImage] = useState('/Images/heroImage.png');

//   // const intervalId = setInterval(() => {
//   //   // console.log('cleariing');
//   //   if (heroImageNum === 1) {
//   //     setHeroImageNum(heroImageNum + 1);
//   //   } else if (heroImageNum === 2) {
//   //     setHeroImageNum(heroImageNum + 1);
//   //   } else if (heroImageNum === 3) {
//   //     setHeroImageNum(1);
//   //   }
//   //   clearInterval(intervalId);
//   // }, 6000);

//   const interval = () => {
//     if (heroImageNum === 1) {
//       setHeroImageNum(heroImageNum + 1);
//     } else if (heroImageNum === 2) {
//       setHeroImageNum(heroImageNum + 1);
//     } else if (heroImageNum === 3) {
//       setHeroImageNum(1);
//     }
//     clearInterval(myTimer);
//   };

//   let myTimer = setInterval(interval, 2000);

//   useEffect(() => {
//     if (heroImageNum === 1) {
//       setHeroImage('/Images/heroImage.png');
//     } else if (heroImageNum === 2) {
//       setHeroImage('/Images/info - 005.png');
//     } else if (heroImageNum === 3) {
//       setHeroImage('/Images/info - 006.png');
//     }
//   }, [heroImageNum]);

//   // const myFun = () => {
//   //   console.log('fnccledhj');
//   // };

//   // let myTimer = setInterval(myFun, 1000);
//   // clearInterval(myTimer);

//   return (
//     <div className='relative -translate-y-4 lg:translate-y-0 '>
//       <div className=' w-[842px] hidden lg:block h-screen relative'>
//         <Image src={heroImage} layout='fill' alt='hero image' />

//         {heroImageNum === 1 ? (
//           <div className='absolute bottom-[40px] left-[40px] text-white'>
//             <h3 className='font-bold text-xl capitalize'>quality </h3>
//             <h3 className='font-bold text-xl capitalize'>healthcare</h3>
//             <p className='w-[24rem]'>
//               The new design of our healthcare system emphasizes the primary
//               healthcare system so that you can have healthcare services not
//               more than five kilometers from where you live
//             </p>
//           </div>
//         ) : heroImageNum === 2 ? (
//           <div className='absolute bottom-[40px] left-[40px] text-white'>
//             <h3 className='font-bold text-xl capitalize'> </h3>
//             <h3 className='font-bold text-xl capitalize'>healthcare</h3>
//             <p className='w-[24rem]'>
//               The new design of our healthcare system emphasizes the primary
//               healthcare system so that you can have healthcare services not
//               more than five kilometers from where you live
//             </p>
//           </div>
//         ) : null}
//         <div className='absolute right-1/2 translate-x-1 flex items-center gap-2 bottom-5'>
//           <span>
//             {' '}
//             <IoMdRadioButtonOff
//               className={`cursor-pointer w-3 h-3 rounded-full ${
//                 heroImageNum === 1 ? 'bg-green-700' : null
//               }`}
//             />
//           </span>{' '}
//           <span>
//             {' '}
//             <IoMdRadioButtonOff
//               className={`cursor-pointer w-3 h-3 rounded-full ${
//                 heroImageNum === 2 ? 'bg-green-700' : null
//               }`}
//             />
//           </span>{' '}
//           <span>
//             {' '}
//             <IoMdRadioButtonOff
//               // onClick={() => {
//               //   setHeroImageNum(3);
//               //   clearInterval(myTimer);

//               //   setInterval(interval, 2000);
//               // }}
//               onClick={() => clearInterval(myTimer)}
//               className={`cursor-pointer  w-3 h-3 rounded-full ${
//                 heroImageNum === 3 ? 'bg-green-700' : null
//               }`}
//             />
//           </span>
//         </div>
//       </div>

//       {/* <div className='w-screen lg:hidden h-[585px] '>
//             <Image src='/Images/heroImage.png' layout='fill' alt='heroimage' />
//           </div> */}

//       {/* <div className='absolute hidden bottom-[40px] left-[40px] text-white'>
//             <h3 className='font-bold text-xl capitalize'>quality </h3>
//             <h3 className='font-bold text-xl capitalize'>healthcare</h3>
//             <p className='w-[24rem]'>
//               The new design of our healthcare system emphasizes the primary
//               healthcare system so that you can have healthcare services not
//               more than five kilometers from where you live
//             </p>
//           </div> */}
//     </div>
//   );
// };

// export default Slider;

{
  /* <Swiper
       
         spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className='-translate-y-4 lg:translate-y-0 '>
            <div>
              <img
                src='/Images/heroImage.png'
                className=' w-[65rem] hidden lg:block h-screen'
                alt='hero image 1'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src='/Images/info - 005.png'
            className=' w-[65rem] hidden lg:block h-screen'
            alt='hero image 2'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/Images/info - 006.png'
            className=' w-[65rem] hidden lg:block h-screen'
            alt='hero image 2'
          />
        </SwiperSlide>
      </Swiper>
    </> */
}

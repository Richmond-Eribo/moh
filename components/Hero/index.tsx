import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoMdRadioButtonOff } from 'react-icons/io';
import { Fade } from 'react-awesome-reveal';

const Hero = function () {
  const [heroImageNum, setHeroImageNum] = useState(1);

  const [heroImage, setHeroImage] = useState('/Images/heroImage.png');

  const intervalId = setInterval(() => {
    // console.log('cleariing');
    if (heroImageNum === 1) {
      setHeroImageNum(heroImageNum + 1);
    } else if (heroImageNum === 2) {
      setHeroImageNum(heroImageNum + 1);
    } else if (heroImageNum === 3) {
      setHeroImageNum(1);
    }
    clearInterval(intervalId);
  }, 5000);

  useEffect(() => {
    if (heroImageNum === 1) {
      setHeroImage('/Images/heroImage.png');
    } else if (heroImageNum === 2) {
      setHeroImage('/Images/info - 005.png');
    } else if (heroImageNum === 3) {
      setHeroImage('/Images/info - 006.png');
    }
  }, [heroImageNum]);

  return (
    <section className=' lg:block mb-10  lg:mt-0 lg:mb-0 px-4'>
      <div className='flex flex-col text-center lg:text-left lg:flex-row items-center  gap-x-7 lg:pl-[5rem]'>
        {/* for laptop */}
        <div className='lg:w-[36rem] hidden lg:block w-full'>
          <h3 className='font-bold capitalize text-4xl text-black mb-4'>
            edo state ministry of health
          </h3>
          <p className='mb-4'>
            The Ministry of health is responsible for health policy formulation
            and implementation in the state. The Ministry is under the
            leadership of an Honourable commission who oversees all the
            activities in the health sector
            {/* and is supported by the Permanent
            Secretary, who is the accounting and reporting officer of the
            Ministry. */}
          </p>
          <button className='bg-[#005410] text-white w-32  py-3 px-4 rounded-md capitalize'>
            read more
          </button>
        </div>

        <div className='relative -translate-y-4 lg:translate-y-0 '>
          <div className=' w-[842px] hidden lg:block h-screen relative'>
            <Image src={heroImage} layout='fill' alt='hero image' />

            {heroImageNum === 1 ? (
              <div className='absolute bottom-[40px] left-[40px] text-white'>
                <h3 className='font-bold text-xl capitalize'>quality </h3>
                <h3 className='font-bold text-xl capitalize'>healthcare</h3>
                <p className='w-[24rem]'>
                  The new design of our healthcare system emphasizes the primary
                  healthcare system so that you can have healthcare services not
                  more than five kilometers from where you live
                </p>
              </div>
            ) : heroImageNum === 2 ? (
              <div className='absolute bottom-[40px] left-[40px] text-white'>
                <h3 className='font-bold text-xl capitalize'> </h3>
                <h3 className='font-bold text-xl capitalize'>healthcare</h3>
                <p className='w-[24rem]'>
                  The new design of our healthcare system emphasizes the primary
                  healthcare system so that you can have healthcare services not
                  more than five kilometers from where you live
                </p>
              </div>
            ) : null}
            <div className='absolute right-1/2 translate-x-1 flex items-center gap-2 bottom-5'>
              <span>
                {' '}
                <IoMdRadioButtonOff
                  className={`cursor-pointer w-3 h-3 rounded-full ${
                    heroImageNum === 1 ? 'bg-green-700' : null
                  }`}
                />
              </span>{' '}
              <span>
                {' '}
                <IoMdRadioButtonOff
                  className={`cursor-pointer w-3 h-3 rounded-full ${
                    heroImageNum === 2 ? 'bg-green-700' : null
                  }`}
                />
              </span>{' '}
              <span>
                {' '}
                <IoMdRadioButtonOff
                  className={`cursor-pointer  w-3 h-3 rounded-full ${
                    heroImageNum === 3 ? 'bg-green-700' : null
                  }`}
                />
              </span>
            </div>
          </div>

          {/* <div className='w-screen lg:hidden h-[585px] '>
            <Image src='/Images/heroImage.png' layout='fill' alt='heroimage' />
          </div> */}

          {/* <div className='absolute hidden bottom-[40px] left-[40px] text-white'>
            <h3 className='font-bold text-xl capitalize'>quality </h3>
            <h3 className='font-bold text-xl capitalize'>healthcare</h3>
            <p className='w-[24rem]'>
              The new design of our healthcare system emphasizes the primary
              healthcare system so that you can have healthcare services not
              more than five kilometers from where you live
            </p>
          </div> */}
        </div>

        {/* for mobile */}
        <div className='lg:w-[36rem] lg:hidden w-full'>
          <h3 className='font-bold capitalize text-4xl text-black mb-4'>
            edo state ministry of health
          </h3>
          <p className='mb-4'>
            The Ministry of health is responsible for health policy formulation
            and implementation in the state. The Ministry is under the
            leadership of an Honourable commission who oversees all the
            activities in the health sector and is supported by the Permanent
            Secretary, who is the accounting and reporting officer of the
            Ministry.
          </p>
          <button className='bg-[#005410] text-white w-32  py-3 px-4 rounded-md capitalize'>
            read more
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;

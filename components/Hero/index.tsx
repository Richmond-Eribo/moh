import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoMdRadioButtonOff } from 'react-icons/io';
import { Fade } from 'react-awesome-reveal';
import SliderLarge from 'components/SliderLarge';
import SliderSmall from 'components/SliderSmall';

const Hero = function () {
  return (
    <section className=' lg:block mb-10  lg:mt-0 lg:mb-0 px-4'>
      <div className='flex flex-col text-center lg:text-left lg:flex-row items-center  gap-x-[3rem] lg:pl-[5rem]'>
        {/* for laptop */}
        <div className='lg:w-[60rem] hidden lg:block w-full'>
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

        <SliderLarge />

        {/* for mobile */}
        <div className='lg:w-[36rem] lg:hidden w-full'>
          <div className='lg:hidden mb-2'>
            <SliderSmall />
          </div>
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

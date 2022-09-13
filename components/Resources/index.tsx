import React from 'react';
import Link from 'next/link';

const Resources = () => {
  return (
    <section className='resource-bg py-[6rem] lg:py-[12rem] mb-20'>
      <div className='text-center container text-white '>
        <h3 className=' font-bold text-3xl lg:text-5xl mb-10'>
          Ministry of Resources
        </h3>
        <p className='mb-10  lg:w-[30rem] mx-auto text-lg'>
          Get information on the various registration process and the minimum
          registration requirements for the ministry.
        </p>
        <Link href='./resources'>
          <button className='bg-[#005410]  cursor-pointer rounded-md text-white py-2 px-2 lg:px-4 capitalize'>
            <a>GO TO RESOURCES</a>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Resources;

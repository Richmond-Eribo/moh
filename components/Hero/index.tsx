import Image from 'next/image';

const Hero = function () {
  return (
    <section className='hidden lg:block'>
      <div className='flex items-center  gap-x-7 pl-[5rem]'>
        <div className='w-[36rem]'>
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
          <button className='bg-[#005410] text-white py-3 px-6 rounded-sm capitalize'>
            read more
          </button>
        </div>
        <div className='relative'>
          <div className=' w-[842px] h-screen'>
            <Image src='/Images/heroImage.png' layout='fill' alt='hero image' />
          </div>
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
      </div>
    </section>
  );
};
export default Hero;

import Image from 'next/image';
import { Slide } from 'react-awesome-reveal';

const registration = './Files/registration.doc';

const index = () => {
  return (
    <div>
      <div className='mb-20 lg:mt-10  '>
        {/* deskstop news */}
        <div className='hidden lg:block relative  h-[19rem] w-[19rem] md:w-full md:h-[600px]'>
          <div className='lg:w-full lg:h-[600px]'>
            <Image
              src='/Images/image 2.png'
              layout='fill'
              alt='application'
              className=' rounded-3xl  '
            />
          </div>

          <div className='absolute top-[4rem] left-[5rem]  md:top-[10rem] md:left-[3rem]'>
            <Slide direction='left' duration={1000} triggerOnce delay={300}>
              <div className='text-left'>
                <h3 className='font-semibold leading-snug w-[30rem]   text-5xl text-black mb-7'>
                  Application form for Private Health Institution
                </h3>
                <button className='bg-[#005410] w-32 cursor-pointer rounded-md text-white py-2 px-2 lg:px-4 capitalize'>
                  <a href={registration} download>
                    Download
                  </a>
                </button>
              </div>
            </Slide>
          </div>
        </div>
        {/* mobile news */}
        <div className=' relative lg:hidden '>
          <div className='w-full h-[13rem] md:h-[20rem] lg:[13rem]'>
            <Image
              src='/Images/mobile.png'
              layout='fill'
              alt='application'
              className=' rounded-3xl  '
            />
          </div>

          <div className='absolute top-[2rem] left-[2rem] '>
            <div className='text-left'>
              <h3 className='font-semibold w-[10rem]   text-black mb-3 '>
                Application form for Private Health Institution
              </h3>
              {/* <button > */}
              <a
                className='  bg-[#005410]  cursor-pointer rounded-md text-white py-2 px-4 lg:px-4 capitalize'
                href={registration}
                download
              >
                Download
              </a>
              {/* </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className='mb-10 md:mb-20 lg:mb-10'>
        <div className='h-[20rem] mx-auto md:h-[35rem] lg:w-[40rem]   overflow-clip'>
          <Image
            src='/Qoutes/GodwinObaseki.png'
            // layout='fill'
            width={591 * 2}
            height={391 * 2}
            alt='obaseki portrait'
          />
        </div>
      </div>
    </div>
  );
};

export default index;

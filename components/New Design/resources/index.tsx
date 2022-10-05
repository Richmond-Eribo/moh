import Image from "next/image"
import Link from "next/link"
import AnimatedHeading from "../Animations/AnimateHeading"

const Resource = () => {
  return (
    <section className='lg:px-400 py-120half px-5 bg-dullgreen flex flex-col lg:flex-row justify-between'>
      <div className='text-white lg:mr-20 flex flex-col justify-center'>
        <AnimatedHeading
          ClassNames='lg:text-4xl text-2xl font-bold'
          text='Resources'
        />
        {/* <h3 className=' lg:text-4xl text-2xl font-bold'>Resources</h3> */}

        <p className='my-5 lg:text-xl'>
          Access health related resources and publications.
          {/* <br className='hidden lg:block' /> on the Ministry of Health */}
        </p>
        <div>
          <Link href='/resources'>
            <a className='roundBtn text-center cursor-pointer py-2 lg:mt-10'>
              get resources
            </a>
          </Link>
        </div>
      </div>

      <div className='flex-1 mt-10 lg:mt-0 lg:ml-20 grid grid-cols-3 gap-3 grid-rows-2'>
        <div className='col-span-3 relative bg-white h-48 rounded-t-[20px] overflow-clip'>
          <Image
            src='/New/image30.png'
            layout='fill'
            objectFit='cover'
            alt='image'
          />
        </div>
        <div className='col-span-2 bg-white h-48 rounded-bl-[20px]'></div>
        <div className=' bg-white h-48 rounded-br-[20px]'></div>
      </div>
    </section>
  )
}

export default Resource

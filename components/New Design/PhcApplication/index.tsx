import Image from "next/image"
import Link from "next/link"
import AnimatedHeading from "../Animations/AnimateHeading"

const PhcApplication = () => {
  return (
    <section className='py-120small px-5 lg:px-400 lg:py-120half '>
      {/* <h3 className='text-center font-bold text-4xl text-text pb-120small lg:pb-120half'> */}
      <AnimatedHeading
        ClassNames='text-center font-bold text-4xl text-text  pb-120small lg:pb-120half'
        text='Registration'
      />
      {/* Registration
      </h3> */}
      <div className='flex lg:flex-row overflow-hidden flex-col bg-white rounded-[20px] shadow-5xl lg:h-[428px]'>
        <figure className=' relative w-full h-[300px]  bg-slate-400 lg:w-[40%] lg:h-full'>
          <div className='absolute inset-0 bg-newgreen/75 z-40'>
            <Image
              src='/New/file.png'
              width={4000}
              height={4000}
              alt='file'
              className='z-50'
            />
          </div>
          <div className=''>
            <Image
              // width={500}
              // height={500}
              objectFit='cover'
              layout='fill'
              src='/New/resourcebg.webp'
              alt='Album'
            />
          </div>
        </figure>
        <div className='flex-1  flex flex-col p-3  lg:justify-center lg:pl-12'>
          <p className='text-newgreen font-bold text-2xl lg:text-4xl lg:mb-5'>
            Requirements for registration of <br /> Private Health Institutions
          </p>
          <div>
            <Link href='/registration'>
              <button className='roundBtn my-5'>View</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhcApplication

import Image from "next/image"

const PhcApplication = () => {
  return (
    <section className='lg:px-400 lg:py-120half '>
      <div className='flex bg-white rounded-[40px] shadow-5xl overflow-clip lg:h-[428px]'>
        <figure className=' relative  bg-slate-400 lg:w-[40%] h-full'>
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
              src='/New/resourcebg.jpg'
              alt='Album'
            />
          </div>
        </figure>
        <div className='flex-1 flex flex-col justify-center lg:pl-12'>
          <p className='text-newgreen font-bold lg:text-4xl lg:mb-5'>
            Application form for <br /> Private Health Institution
          </p>
          <div>
            <button className='roundBtn'>Download</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhcApplication

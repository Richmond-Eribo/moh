import Image from "next/image"
import Link from "next/link"

const Resource = () => {
  return (
    <section className='lg:px-400 py-120half px-5 bg-dullgreen flex flex-col lg:flex-row justify-between'>
      <div className='text-white lg:mr-20 flex flex-col justify-center'>
        <h3 className=' lg:text-4xl text-2xl font-bold'>Resources</h3>

        <p className='my-5 lg:text-xl'>
          Get information on the various registration process and the
          <br className='hidden lg:block' />
          minimum registration requirements for the ministry.
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
        <div className='col-span-3 relative bg-white h-48 rounded-t-[40px] overflow-clip'>
          <Image src='/New/image30.png' layout='fill' alt='image' />
        </div>
        <div className='col-span-2 bg-red-400 h-48 rounded-bl-[40px]'>4 .</div>
        <div className=' bg-green-500 h-48 rounded-br-[40px]'>4 .</div>
      </div>
    </section>
  )
}

export default Resource

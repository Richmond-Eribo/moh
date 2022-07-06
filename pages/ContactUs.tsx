const ContactUs = () => {
  return (
    <section>
      <div className='bg-[#005410]'>
        <h1 className='text-[#fff] container font-semibold text-3xl uppercase py-8'>
          contact us
        </h1>
      </div>
      <div className='flex  flex-col lg:flex-row container  justify-between py-10'>
        <form className='flex flex-col w-full lg:w-[40%]  capitalize'>
          <div className='col-span-2'>
            <input
              type='text'
              className='border input input-bordered focus:outline-primary  w-full focus:border-primary active:border-primary   h-[2rem] p-1  rounded'
              placeholder='Name'
            />
          </div>
          <div className=''>
            <input
              type='text'
              className='border input input-bordered my-4 focus:outline-primary  w-full focus:border-primary active:border-primary   h-[2rem] p-1  rounded'
              placeholder='Email'
            />
          </div>

          <textarea
            name=''
            id=''
            className='border  focus:outline-primary  w-full focus:border-primary active:border-primary h-[18rem] text-justify leading-normal p-1 rounded'
            placeholder='Message'
          ></textarea>
          <button className='bg-[#005410] mt-5 w-32 rounded-md text-white py-2 px-2 lg:px-4 capitalize'>
            SEND
          </button>
        </form>

        <div className='text-5xl mt-10 lg:mt-0 w-full lg:w-[600px] font-bold'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5384621206304!2d5.623467414449059!3d6.324185927203592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3980f0d1c9b%3A0x9b42525df0075a7b!2sPalm%20House%20Building!5e0!3m2!1sen!2sng!4v1657129931790!5m2!1sen!2sng'
            width='100%'
            height='450'
            style={{border: 0}}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default ContactUs

// lg:grid-cols-2

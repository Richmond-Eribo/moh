const ContactUs = () => {
  return (
    <section>
      <div className='bg-[#005410]'>
        <h1 className='text-[#fff] container font-semibold text-3xl uppercase py-8'>
          contact us
        </h1>
      </div>
      <div className='flex container  justify-between'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-7   capitalize'>
          <div className='mr-0 lg:mr-3'>
            <input
              type='text'
              className='border border-gray-400 h-[2rem] p-1  rounded'
              placeholder='Name'
            />
          </div>
          <div className='ml-0 lg:ml-3'>
            <input
              type='text'
              className='border border-gray-400 h-[2rem] p-1 block  rounded'
              placeholder='Email'
            />
          </div>

          <textarea
            name=''
            id=''
            className='border col-span-1 lg:col-span-3  border-gray-400 h-[18rem] text-justify leading-normal p-1 rounded'
            placeholder='Message'
          ></textarea>
        </div>

        <div className='text-5xl font-bold'>map</div>
      </div>
    </section>
  );
};

export default ContactUs;

// lg:grid-cols-2

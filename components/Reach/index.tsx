import React from 'react';
import phone from '../../public/Images/phone.png';
import whatsapp from '../../public/Images/whatsapp.png';
import Image from 'next/image';
import contact from '../../public/Images/contact.png';

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>> | any;
}

const Reach = ({ setIsOpen }: Props) => {
  return (
    <section className='z-50 w-[24rem]  lg:w-[23rem] flex flex-col'>
      <main className=' bg-gray-200 p-4 rounded-md mb-3 shadow-lg'>
        <h3 className='text-center font-bold text-xl mb-4'>You can reach us</h3>
        <form className='flex flex-col text-lg '>
          <input
            id='name'
            type='name'
            required
            placeholder='Name'
            className=' mb-2 px-3 text-sm rounded h-8 focus:outline-secondary'
          />

          <input
            id='email'
            type='email'
            required
            placeholder='Email'
            className='mb-2 px-3 rounded h-8 text-sm'
          />

          <textarea
            id='message'
            name='message'
            required
            placeholder='Message'
            className=' mb-7 px-3 rounded h-[4rem] text-sm'
          />
          <button
            type='submit'
            className='bg-[#005410] text-gray-200 py-2 rounded'
          >
            SEND MESSAGE
          </button>
        </form>
        <h3 className='text-center my-3'>OR</h3>
        <div className='flex items-center gap-3 justify-center mb-3'>
          <a
            href='tel:090-348-126-75'
            className='bg-[#fff] px-3 py-2 flex gap-1 items-center'
          >
            {' '}
            <Image src={phone} alt='phone' width={22} height={22} />
            <span>09034812675</span>
          </a>

          <a
            href='https://api.whatsapp.com/send?phone=09034812675'
            className='bg-[#fff] px-3 py-2 flex gap-1 items-center'
          >
            {' '}
            <Image src={whatsapp} alt='whatsapp' width={22} height={22} />
            <span>09034812675</span>
          </a>
        </div>
        <div className='text-end '>
          <button
            className='bg-red-700 text-white px-4 py-1 rounded-sm'
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </main>
      {/* <div className='self-end bg-white hidden lg:block rounded-sm p-2 '>
        <Image src={contact} alt='contact-icon ' width={55} height={38} />
      </div> */}
    </section>
  );
};
export default Reach;

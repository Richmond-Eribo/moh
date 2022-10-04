import Logo from "../Logo"
import { FaRegAddressCard, FaPhoneAlt, FaMailBulk } from "react-icons/fa"
import Input from "../FormFields/Input"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className='lg:px-400 p-5 lg:pt-120half bg-newgreen'>
      <div className='bg-white rounded-[40px] py-3 px-2 lg:p-10  ju flex lg:flex-row flex-col justify-around'>
        <div className=' lg:w-1/3 w-full mb-16 lg:mb-0'>
          {/* <Link href='/'> */}
          <Logo color='black' />
          {/* </Link> */}
          <h3 className='mt-10 mb-7 capitalize font-bold lg:text-3xl text-2xl  text-newgreen'>
            Contact Us
          </h3>
          <form className='grid grid-cols-1 gap-6'>
            <Input textColor='newgreen' id='name' label='your name' />
            <Input textColor='newgreen' id='email' label='your email' />
            <Input
              textColor='newgreen'
              id='message'
              label='your message'
              textarea
            />

            <div>
              <button className='roundBtn'>Send message</button>
            </div>
          </form>
        </div>

        <div className='flex  flex-col'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5384621206304!2d5.623467414449059!3d6.324185927203592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3980f0d1c9b%3A0x9b42525df0075a7b!2sPalm%20House%20Building!5e0!3m2!1sen!2sng!4v1657129931790!5m2!1sen!2sng'
            width='100%'
            height='400'
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
            className='rounded-[40px] shadow-5xl'
          ></iframe>
          <div className='mt-10 mb-10   text-newgreen'>
            <h3 className='capitalize font-bold lg:text-3xl text-2xl my-2'>
              contact address
            </h3>
            <ul className='font-medium'>
              <li className='flex items-center gap-x-2'>
                <FaRegAddressCard className='text-newgreen w-10 h-10 lg:w-6 lg:h-6' />
                3rd and 4th floor, Block D, Behind Palm House, Sapele Road
                <br /> Benin City.
              </li>
              <li className='flex items-center gap-x-2 my-4'>
                <FaPhoneAlt className=' w-5 text-newgreen-5 place-content-start' />
                +1230 000000000
              </li>
              <li className='flex items-center gap-x-2'>
                <FaMailBulk className=' w-5 text-newgreen-5' />
                Health@Edostate.gov.ng
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className='text-center text-white text-sm mt-5 lg:py-10'>
        Copyright – Ministry of Health, Edo State Government
      </p>
    </footer>
  )
}

export default Footer

import ContactUs from "components/OldDesign/ContactUs"
import { FaRegAddressCard, FaPhoneAlt, FaMailBulk } from "react-icons/fa"

const Footer = function () {
  return (
    <section className='bg-secondary py-10  lg:text-base text-gray-100 '>
      <div className='container'>
        <div className='grid grid-cols-1 lg:flex gap-x-11 gap-y-9 lg:gap-y-0'>
          <div className='lg:w-[35rem] '>
            <h3 className='capitalize font-bold text-xl mb-2'>about us</h3>
            <p className='w-[360px] lg:w-full'>
              The Ministry of health is responsible for health policy
              formulation and implementation in the state. The Ministry is under
              the leadership of an Honourable commission who oversees all the
              activities in the health sector.
            </p>
          </div>
          {/* <div className=' lg:w-[35rem]'>
            <h3 className='capitalize font-bold text-xl mb-2'>useful links</h3>
            <p>
              STATE BEHAVIOURAL CHANGE TUBERCULOSIS CONTROL PROGRAMME MALARIA
              UNIT BRIEF 2022 CHARGES FOR HEALTH FACILITY
            </p>
          </div> */}
          <div className='mb-5 lg:mb-0'>
            <h3 className='capitalize font-bold text-xl mb-2'>
              contact address
            </h3>
            <ul>
              <li className='flex items-center gap-x-2'>
                <FaRegAddressCard className='text-gray-300 w-10 h-10 lg:w-6 lg:h-6' />
                3rd and 4th floor, Block D, Behind Palm House, Sapele Road Benin
                City.
              </li>
              <li className='flex items-center gap-x-2 my-4'>
                <FaPhoneAlt className='text-gray-300 w-5 h-5 place-content-start' />
                +1230 000000000
              </li>
              <li className='flex items-center gap-x-2'>
                <FaMailBulk className='text-gray-300 w-5 h-5' />
                Health@Edostate.gov.ng
              </li>
            </ul>
          </div>
        </div>
        <ContactUs />
        <p className='text-center text-gray-400 text-sm mt-5 lg:mt-10'>
          Copyright – Ministry of Health, Edo State Government
        </p>
      </div>
    </section>
  )
}

export default Footer

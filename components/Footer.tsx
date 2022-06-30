import { FaRegAddressCard, FaPhoneAlt, FaMailBulk } from 'react-icons/fa';

const Footer = function () {
  return (
    <section className='bg-[#0f0f0f] py-10 text-gray-100'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:flex gap-x-11 gap-y-9 lg:gap-y-0'>
          <div className='lg:w-[35rem] '>
            <h3 className='capitalize font-bold text-xl mb-2'>about us</h3>
            <p>
              The Ministry of health is responsible for health policy
              formulation and implementation in the state. The Ministry is under
              the leadership of an Honourable commission who oversees all the
              activities in the health sector and is supported by the Permanent
              Secretary, who is the accounting and reporting officer of the
              Ministry.
            </p>
          </div>
          <div className=' lg:w-[35rem]'>
            <h3 className='capitalize font-bold text-xl mb-2'>useful links</h3>
            <p>
              STATE BEHAVIOURAL CHANGE TUBERCULOSIS CONTROL PROGRAMME MALARIA
              UNIT BRIEF 2022 CHARGES FOR HEALTH FACILITY
            </p>
          </div>
          <div className='mb-5 lg:mb-0'>
            <h3 className='capitalize font-bold text-xl mb-2'>
              contact address
            </h3>
            <ul>
              <li className='flex items-center gap-x-2'>
                <FaRegAddressCard className='text-red-500 w-10 h-10' />
                3RD AND FOURTH FLOOR, BLOCK D, BEHINDPALM HOUSE , SAPELE ROAD
                EBNIN CITY
              </li>
              <li className='flex items-center gap-x-2'>
                {' '}
                <FaPhoneAlt className='text-red-500 w-7 h-7' />
                +1230
              </li>
              <li className='flex items-center gap-x-2'>
                {' '}
                <FaMailBulk className='text-red-500 w-7 h-7' />{' '}
                HEALTH@EDOSTATE.GOV.NG
              </li>
            </ul>
          </div>
        </div>
        <p className='text-center text-gray-400 text-sm'>
          Copyright – Ministry of Health, Edo State Government
        </p>
      </div>
    </section>
  );
};

export default Footer;

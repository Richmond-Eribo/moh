import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import React, { useState } from 'react';
const Navigation = function () {
  const [status, setStatus] = useState(false);
  function handleChange() {
    setStatus(!status);
  }

  return (
    <section className=''>
      <nav className='flex justify-between items-center mx-auto px-[1rem]  py-2 lg:w-[90%]  text-[#685A5A]'>
        <span className='hidden lg:block'>
          <Link href='/'>
            <Image
              src='/Images/logo.png'
              height={70}
              width={295}
              alt='logo '
              className='cursor-pointer'
            />
          </Link>
        </span>
        <span className='lg:hidden'>
          <Image
            src='/Images/logo.png'
            height={70 / 1.3}
            width={295 / 1.3}
            alt='logo '
          />
        </span>

        {/* large screen navigation */}
        <ul className='hidden lg:flex capitalize  gap-x-5 '>
          {[
            { name: 'ministry of health', url: '/ministryOfHealth' },
            { name: 'primary health care', url: '/primaryHealthCare' },

            { name: 'specialist care', url: '/specialistCare' },
            { name: 'health insurance', url: '/primaryHealthCare' },
            { name: 'traditional medicine', url: '/traditionalMedicine' },
            { name: 'news', url: '/news' },
            { name: 'about', url: '/AboutUs' },
          ].map((nav) => (
            <Link key={nav.name} href={nav.url}>
              <div className='dropdown dropdown-hover'>
                <a
                  tabindex='0'
                  className='cursor-pointer  text-[0.9rem] font-bold hover:text-[#005410] duration-150 ease-in-out'
                >
                  {nav.name}
                </a>
                <ul
                  tabindex='0'
                  class='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </ul>
        <button onClick={handleChange} className='lg:hidden'>
          {status ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>
      </nav>

      {/* Nav links for mobile */}
      {
        <ul
          className={`lg:hidden duration-100 ease-in-out mb-2 z-50 ${
            status ? 'h-76 ' : 'invisible h-0 '
          } container flex flex-col capitalize  gap-x-7`}
        >
          {[
            { name: 'ministry of health', url: '/ministryOfHealth' },
            { name: 'primary health care', url: '/primaryHealthCare' },
            { name: 'specialist care', url: '/specialistCare' },
            { name: 'health insurance', url: '/primaryHealthCare' },
            { name: 'traditional medicine', url: '/traditionalMedicine' },
            { name: 'news', url: '/news' },
            { name: 'about', url: '/AboutUs' },
          ].map((nav) => (
            <Link key={nav.name} href={nav.url}>
              <a
                className={`cursor-pointer text-xl mb-4 font-semibold hover:text-[#005410] ${
                  status ? '' : 'hidden'
                } duration-150 ease-in-out`}
              >
                {nav.name}
              </a>
            </Link>
          ))}
        </ul>
      }
    </section>
  );
};

export default Navigation;

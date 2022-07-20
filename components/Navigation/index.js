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
      <nav className=' items-center mx-auto px-[1rem]  py-2 lg:w-[90%]  text-[#685A5A]'>
        <span className='hidden lg:flex items-center justify-between'>
          <Link href='/'>
            <Image
              src='/Images/logo.png'
              height={70}
              width={295}
              alt='logo '
              className='cursor-pointer'
            />
          </Link>
          <ul className='hidden lg:flex  items-center py-5 gap-x-7 justify-between text-lg'>
            {[
              { name: 'home', url: '/' },

              { name: 'news', url: '/news' },
              { name: 'about', url: '/AboutUs' },
            ].map((nav) => (
              <Link key={nav.name} href={nav.url}>
                <a className='font-bold capitalize hover:text-[#005410] duration-150 ease-in-out'>
                  {nav.name}
                </a>
              </Link>
            ))}
          </ul>
        </span>
        <span className='flex items-center justify-between lg:hidden'>
          <Image
            src='/Images/logo.png'
            height={70 / 1.3}
            width={295 / 1.3}
            alt='logo '
          />
          <button onClick={handleChange} className='lg:hidden'>
            {status ? (
              <AiOutlineClose size={25} />
            ) : (
              <AiOutlineMenu size={25} />
            )}
          </button>
        </span>

        {/* large screen navigation */}
        <ul className='hidden lg:flex  items-center py-5 justify-between text-lg'>
          {[
            // { name: 'home', url: '/' },
            {
              name: 'ministry of health',
              url: '/ministryOfHealth',
              item: 'Public health',
              item2: 'Regulation and monitoring',
              item3: 'Health planning, policy, research and statistics',
            },
            {
              name: 'primary health care',
              url: '/primaryHealthCare',
              item: 'Diseases Control and Immunization',
              item2: 'Community and Family Health Services',
              item3: 'Planning, monitoring and evaluation',
            },

            {
              name: 'specialist care',
              url: '/specialistCare',
              item: 'Hospitals ',
              item2: 'Essential Drugs Programme',
              item3: 'Sickle cell centre',
              item4: ' Integrated services',
            },
            { name: 'health insurance', url: '/primaryHealthCare' },
            { name: 'traditional medicine', url: '/traditionalMedicine' },
          ].map((nav) => (
            <Link key={nav.name} href={nav.url}>
              <div className='dropdown dropdown-hover'>
                <a
                  tabindex='0'
                  className='cursor-pointer capitalize  font-bold hover:text-[#005410] duration-150 ease-in-out'
                >
                  {nav.name}
                </a>
                <ul
                  tabindex='0'
                  class='dropdown-content menu p-2 shadow bg-base-100 rounded-sm w-44'
                >
                  <li>
                    <a>{nav.item && nav.item}</a>
                  </li>
                  <li>
                    <a>{nav.item2 && nav.item2}</a>
                  </li>
                  <li>
                    <a>{nav.item3 && nav.item3}</a>
                  </li>
                  <li>
                    <a>{nav.item4 && nav.item4}</a>
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </ul>
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

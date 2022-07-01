import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
const Navigation = function () {
  const [status, setStatus] = useState(false);
  function handleChange() {
    setStatus(!status);
  }

  return (
    <section>
      <nav className='flex justify-between items-center container text-[#685A5A]'>
        <div className='capitalize flex items-center justify-center gap-x-1'>
          <span>
            <Image src='/Images/logo.png' height={70} width={70} alt='logo ' />
          </span>{' '}
          <div className='font-bold '>
            <h3> edo state</h3>
            <h3> ministry of health</h3>
          </div>
        </div>
        <ul className='hidden lg:flex capitalize  gap-x-7'>
          {[
            { name: 'home', url: '/' },
            { name: 'about', url: '/AboutUs' },
            { name: 'departments', url: '/Departments' },
            { name: 'directors', url: '/Directors' },
            { name: 'contact us', url: '/ContactUs' },
          ].map((nav) => (
            <Link key={nav.name} href={nav.url}>
              <a className='cursor-pointer hover:text-[#005410] duration-150 ease-in-out'>
                {nav.name}
              </a>
            </Link>
          ))}
        </ul>
        <button onClick={handleChange} className='lg:hidden'>
          {status ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>
      {status && (
        <ul className='container flex flex-col capitalize  gap-x-7'>
          {[
            { name: 'home', url: '/' },
            { name: 'about', url: '/AboutUs' },
            { name: 'departments', url: '/Departments' },
            { name: 'directors', url: '/Directors' },
            { name: 'contact us', url: '/ContactUs' },
          ].map((nav) => (
            <Link key={nav.name} href={nav.url}>
              <a className='cursor-pointer hover:text-[#005410] duration-150 ease-in-out'>
                {nav.name}
              </a>
            </Link>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Navigation;

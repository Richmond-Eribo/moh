import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'
const Navigation = function () {
  const [status, setStatus] = useState(false)
  function handleChange() {
    setStatus(!status)
  }

  return (
    <section className=''>
      <nav className='flex justify-between items-center mx-auto px-[1rem]  py-2 lg:w-[90%]  text-[#685A5A]'>
        <span className='hidden lg:block'>
          <Image src='/Images/logo.png' height={70} width={295} alt='logo ' />
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
        <ul className='hidden lg:flex capitalize  gap-x-7'>
          {[
            {name: 'home', url: '/'},
            {name: 'about', url: '/AboutUs'},
            // {name: 'departments', url: '/Departments'},
            // {name: 'directors', url: '/Directors'},
            {name: 'contact us', url: '/ContactUs'},
          ].map(nav => (
            <Link key={nav.name} href={nav.url}>
              <a className='cursor-pointer hover:text-[#005410] duration-150 ease-in-out'>
                {nav.name}
              </a>
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
            status ? 'h-36 ' : 'invisible h-0 '
          } container flex flex-col capitalize  gap-x-7`}
        >
          {[
            {name: 'home', url: '/'},
            {name: 'about', url: '/AboutUs'},
            // {name: 'departments', url: '/Departments'},
            // {name: 'directors', url: '/Directors'},
            {name: 'contact us', url: '/ContactUs'},
          ].map(nav => (
            <Link key={nav.name} href={nav.url}>
              <a
                onClick={handleChange}
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
  )
}

export default Navigation

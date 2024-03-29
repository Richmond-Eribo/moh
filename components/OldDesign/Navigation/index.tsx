import Image from "next/image"
import Link from "next/link"

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import React, { useState } from "react"
// import CollapseNav from "../../New Design/Navigation/CollapseNav"
const Navigation = function () {
  const [status, setStatus] = useState(false)
  function handleChange() {
    setStatus(!status)
  }

  return (
    <section className=''>
      <nav className=' items-center mx-auto px-[1rem]  pt-2 lg:w-[90%]  text-[#685A5A]'>
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
              { name: "home", url: "/" },

              { name: "news", url: "/News" },
              { name: "about", url: "/AboutUs" },
              { name: "resources", url: "/resources" },
            ].map((nav) => (
              <Link key={nav.name} href={nav.url}>
                <a className='font-semibold capitalize hover:text-[#005410] duration-150 ease-in-out'>
                  {nav.name}
                </a>
              </Link>
            ))}
          </ul>
        </span>
        <span className='flex items-center justify-between lg:hidden'>
          <Link href='/'>
            <Image
              src='/Images/logo.png'
              height={70 / 1.3}
              width={295 / 1.3}
              alt='logo '
            />
          </Link>
          <button onClick={handleChange} className='lg:hidden'>
            {status ? (
              <AiOutlineClose size={25} />
            ) : (
              <AiOutlineMenu size={25} />
            )}
          </button>
        </span>

        {/* large screen navigation */}
        <ul className='hidden lg:flex border-t-2 border-b-2 mt-5  items-center py-5 justify-between text-lg'>
          {[
            // { name: 'home', url: '/' },
            {
              name: "ministry of health",
              // url: "/ministryOfHealth",
              item: "Public health",
              item2: "Regulation and monitoring",
              item3: "Health planning, policy, research and statistics",
            },
            {
              name: "primary health care",
              // url: "/primaryHealthCare",
              item: "Diseases Control and Immunization",
              item2: "Community and Family Health Services",
              item3: "Planning, monitoring and evaluation",
            },

            {
              name: "hospitals management",
              url: "https://www.edohmb.org",
              // item: "Hospitals ",
              // item2: "Essential Drugs Programme",
              // item3: "Sickle cell centre",
              // item4: " Integrated services",
            },
            { name: "health insurance", url: "https://edhic@edostate.gov.ng" },
            {
              name: "traditional medicine",
              // url: "/traditionalMedicine"
            },
          ].map((nav) => (
            // <Link key={nav.name} href={nav.url ? "www.edohmb.org" : "/"}>
            <div
              key={nav.name}
              className={`${
                nav.item && "dropdown dropdown-hover dropdown-top "
              }`}
            >
              <a
                href={nav.url ? nav.url : "#"}
                tabIndex={0}
                className='cursor-pointer capitalize   hover:text-[#005410] duration-150 ease-in-out'
              >
                {nav.name}
              </a>
              {nav.item && (
                <ul
                  tabIndex={0}
                  className='dropdown-content text-sm menu p-2 shadow bg-base-100 rounded-sm w-64'
                >
                  <li>
                    <a>{nav.item}</a>
                  </li>
                  <li>
                    <a>{nav.item2}</a>
                  </li>
                  <li>
                    <a>{nav.item3}</a>
                  </li>
                  {/* <li>
                    <a>{nav.item4}</a>
                  </li> */}
                </ul>
              )}
            </div>
            // </Link>
          ))}
        </ul>
      </nav>

      {/* Nav links for mobile */}
      {
        // <ul
        //   className={`lg:hidden duration-100 ease-in-out mb-2 z-50 ${
        //     status ? "h-screen " : "invisible h-0 "
        //   } container flex flex-col capitalize  gap-x-7`}
        // >
        //   {[
        //     {
        //       name: "ministry of health",
        //       url: "/ministryOfHealth",
        //       items: [
        //         "Public health",
        //         "Regulation and monitoring",
        //         "Health planning, policy, research and statistics",
        //       ],
        //     },
        //     {
        //       name: "primary health care",
        //       url: "/primaryHealthCare",
        //       items: [
        //         "Diseases Control and Immunization",
        //         "Community and Family Health Services",
        //         "Planning, monitoring and evaluation",
        //       ],
        //     },
        //     {
        //       name: "hospital management",
        //       url: "/specialistCare",
        //       items: [
        //         "Hospitals ",
        //         "Essential Drugs Programme",
        //         "Sickle cell centre",
        //         " Integrated services",
        //       ],
        //     },
        //     {
        //       name: "health insurance",
        //       // url: '/primaryHealthCare',
        //       url: "/",
        //     },
        //     {
        //       name: "traditional medicine",
        //       //  url: '/traditionalMedicine',
        //       url: "/",
        //     },
        //     { name: "news", url: "/News" },
        //     { name: "about", url: "/AboutUs" },
        //     { name: "resources", url: "/resources" },
        //   ].map((nav) => (
        //     <div key={nav.name} className={` ${status ? "" : "hidden"} `}>
        //       <CollapseNav
        //         setStatus={setStatus}
        //         status={status}
        //         title={nav.name}
        //         url={nav.url}
        //         items={nav.items}
        //       />
        //     </div>
        //   ))}
        // </ul>
      }
    </section>
  )
}

export default Navigation

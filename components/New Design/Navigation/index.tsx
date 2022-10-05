import CollapseNav from "components/OldDesign/Navigation/CollapseNav"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useRef, useEffect } from "react"
import Logo from "../Logo"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { stat } from "fs"

type Props = {
  navColor: string
}
const Navigation = ({ navColor }: Props) => {
  const router = useRouter()
  const pathname = router.pathname
  const [status, setStatus] = useState(false)

  function handleChange() {
    setStatus((current) => !current)
  }

  return (
    <div className='absolute flex top-0 w-full z-50 lg:px-400 lg:py-[2rem]  justify-between text-white py-5 px-5'>
      <Logo color={navColor} />

      <div className={`relative lg:hidden`}>
        <label
          tabIndex={0}
          className='btn m-1 lg:hidden'
          onClick={handleChange}
        >
          {/* <button className='lg:hidden'> */}
          {status ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          {/* </button> */}
        </label>
      </div>
      <ul
        className={`lg:hidden  ${
          status ? "absolute" : "hidden"
        } right-24  w-80 z-50 bg-white  menu p-2 shadow text-black rounded-box duration-100 ease-in-out mb-2  flex flex-col capitalize  gap-x-7`}
      >
        {[
          { name: "news", url: "/news" },
          { name: "about", url: "/about" },
          { name: "resources", url: "/resources" },
          { name: "registration", url: "/registration" },

          {
            name: "Ministry of Health",
            // url: "/ministryOfHealth",
            items: [
              {
                item: "Public health",
                url: "/mda/directorate-of-public-health",
              },
              {
                item: "Regulation and monitoring",
                url: "/mda/directorate-of-regulation-and-monitoring",
              },
              {
                item: "Health planning, policy, research and statistics",
                url: "/mda/directorate-of-policy-research-and-statistics",
              },
              {
                item: "Finance and account",
                url: "/mda/finance-and-account",
              },
            ],
            url: "/",
          },
          { name: "Primary Health Care", url: "/phc" },
          { name: "Hospitals Management", url: "https://www.edohmb.org" },
          {
            name: "Health Insurance",
            url: "https://edhic@edostate.gov.ng",
          },
          { name: "Traditional Medicine", url: "/tr" },
        ].map((nav) => (
          <div key={nav.name} className={` `}>
            <CollapseNav
              setStatus={setStatus}
              status={status}
              title={nav.name}
              url={nav.url}
              items={nav.items}
            />
          </div>
        ))}
      </ul>

      {/* Laptop Navigation */}
      <nav className='hidden lg:flex justify-between items-center  lg:w-[26rem]'>
        {[
          { name: "home", url: "/" },
          { name: "news", url: "/news" },
          { name: "about", url: "/about" },
          { name: "resources", url: "/resources" },
          { name: "registration", url: "/registration" },
        ].map((link) => (
          <Link key={link.name} href={link.url}>
            <a
              className={`${
                pathname === link.url
                  ? "bg-active text-white"
                  : "text-" + navColor
              } capitalize  p-1 px-2 rounded-md hover:text-active/40 `}
            >
              {link.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Navigation

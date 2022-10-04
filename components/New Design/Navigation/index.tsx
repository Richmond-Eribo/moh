import CollapseNav from "components/OldDesign/Navigation/CollapseNav"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import Logo from "../Logo"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

type Props = {
  navColor: string
}
const Navigation = ({ navColor }: Props) => {
  const router = useRouter()
  const pathname = router.pathname

  const [status, setStatus] = useState(false)
  function handleChange() {
    setStatus(!status)
  }
  console.log(status)

  return (
    <div className='absolute flex top-0 w-full z-50 lg:px-400 lg:py-[2rem]  justify-between text-white py-5 px-5'>
      <Link href='/'>
        <Logo color={navColor} />
      </Link>

      <div
        className={`dropdown lg:hidden dropdown-left ${
          status ? "dropdown-open" : ""
        }`}
      >
        <label tabIndex={0} className='btn m-1'>
          <button onClick={handleChange} className='lg:hidden'>
            {status ? (
              <AiOutlineClose size={25} />
            ) : (
              <AiOutlineMenu size={25} />
            )}
          </button>
        </label>
        <ul
          className={`lg:hidden w-80 z-50 bg-gray-400 dropdown-content  menu p-2 shadow text-black rounded-box duration-100 ease-in-out mb-2  flex flex-col capitalize  gap-x-7`}
        >
          {[
            { name: "news", url: "/news" },
            { name: "about", url: "/about" },
            { name: "resources", url: "/resources" },
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
      </div>

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

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import Logo from "../Logo"

const Navigation = () => {
  const router = useRouter()
  const pathname = router.pathname
  return (
    <div className='absolute top-0 w-full z-50 lg:px-400 lg:py-[2rem]  flex justify-between text-white'>
      <Logo color='white' />

      <nav className='flex justify-between items-center  lg:w-[26rem]'>
        {[
          { name: "home", url: "/" },
          { name: "news", url: "/news" },
          { name: "about", url: " /about" },
          { name: "resources", url: "/resources" },
        ].map((link) => (
          <Link key={link.name} href='/'>
            <a
              className={`${
                pathname === link.url ? "bg-active text-white" : ""
              } capitalize  p-1 px-2 rounded-md`}
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

import Link from "next/link"
import { useRouter } from "next/router"
import SlideImage from "./SliderImage"

const HeroSlider = () => {
  const router = useRouter()
  const pathname = router.pathname

  return (
    <section className='h-[108vh] relative bg-zinc-800 '>
      <div className='absolute w-full bottom-16'>
        <div className='flex text-white  justify-between sectionPadding'>
          {[
            { name: "Ministry Of Health", url: "/" },
            { name: "Primary Health Care", url: "/phc" },
            { name: "Hospitals Management", url: "/hm" },
            { name: "Health Insurance", url: "/hi" },
            { name: "Traditional Medicine", url: "/tm" },
          ].map((mda) => (
            <Link key={mda.name} href='/'>
              <a
                className={`${
                  pathname === mda.url ? "px-2 bg-activeblue" : ""
                } rounded-md z-50`}
              >
                {mda.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className='uppercase text-center text-white z-50 absolute translate-y-[50% translate-x-[50%] right-[50%] top-[40%] lg:text-5xl'>
          welcome to <br /> <strong className='lg:text-8xl'> health</strong>
        </p>
      </div>
      <SlideImage />
      <div className='absolute bottom-0 w-full z-50'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 223.82'>
          <defs></defs>
          <g id='Layer_2' data-name='Layer 2'>
            <g id='Layer_1-2' data-name='Layer 1'>
              <path
                className='cls-1'
                d='M0,223.82V42.21s244-69,632,0c156.54,27.84,303,68.66,458.7,90.8C1289,161.21,1690-30.79,1920,4.3V223.82Z'
              />
            </g>
          </g>
        </svg>
      </div>

      <style jsx>
        {`
          .cls-1 {
            fill: #f2f2f2;
          }
        `}
      </style>
    </section>
  )
}

export default HeroSlider

import Link from "next/link"
import { useRouter } from "next/router"
import SlideImage from "./SliderImage"

const HeroSlider = () => {
  const router = useRouter()
  const pathname = router.pathname

  return (
    <section className='lg:h-[108vh] h-[90vh] overflow-clip relative bg-zinc-800 '>
      <div className='absolute hidden lg:flex w-full bottom-16  text-white bg-slate-900 flex-row  justify-between sectionPadding'>
        {/* <div className=''> */}
        {[
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
          { name: "Health Insurance", url: "https://edhic@edostate.gov.ng" },
          { name: "Traditional Medicine", url: "/tr" },
        ].map((mda) => (
          <Link key={mda.name} href={mda.url}>
            <a
              className={`${
                pathname === mda.url
                  ? "px-2 bg-activeblue"
                  : "hover:text-active"
              } ${
                mda.items && "dropdown dropdown-hover dropdown-top "
              } rounded-md z-50 ease-in-out duration-200`}
            >
              {mda.name}

              {mda.items && (
                <ul
                  tabIndex={0}
                  className='dropdown-content rounded-[20px] text-black  text-sm menu p-2 shadow bg-base-100  w-80 -translate-x-2'
                >
                  {mda.items.map((item, index) => (
                    <li key={index}>
                      <Link href={item.url}>
                        <p>{item.item}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </a>
          </Link>
        ))}
        {/* </div> */}
      </div>
      <div>
        <p className='uppercase text-center text-white z-30 absolute translate-y-[50% translate-x-[50%] right-[50%] top-[40%] text-3xl lg:text-5xl w-full'>
          welcome to Edo State <br />{" "}
          <strong className='lg:text-6xl text-4xl'>Ministry of health</strong>
        </p>
      </div>
      <SlideImage />
      <div className='absolute translate-y-2 lg:translate-y-0 bottom-0 w-full z-30'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 223.82'>
          {/* <defs></defs> */}
          {/* <g id='Layer_2' data-name='Layer 2'>
            <g id='Layer_1-2' data-name='Layer 1'> */}
          <path
            className='cls-1'
            d='M0,223.82V42.21s244-69,632,0c156.54,27.84,303,68.66,458.7,90.8C1289,161.21,1690-30.79,1920,4.3V223.82Z'
          />
          {/* </g>
          </g> */}
        </svg>
      </div>

      <style jsx>
        {`
          .cls-1 {
            fill: #f2f2f2;
            border: none;
          }
        `}
      </style>
    </section>
  )
}

export default HeroSlider

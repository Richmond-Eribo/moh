import { MetaTagsWrapper } from "components"
import AnimatedHeading from "components/New Design/Animations/AnimateHeading"
import Image from "next/image"
import Link from "next/link"
import { NewsPageMetaTags } from "utils/metaTags"

// This page is not in use
const Registration = () => {
  return (
    <section className='pt-28 '>
      <MetaTagsWrapper tags={NewsPageMetaTags} />
      <div className=' text-white flex flex-col justify-center w-full lg:h-40 bg-[url("/New/image31.png")] bg-cover'>
        {/* <h1 className='text-[#fff] font-semibold text-3xl uppercase py-8 container'>
          Registration
        </h1> */}
        <AnimatedHeading
          text='Registration'
          ClassNames='text-[#fff] font-semibold text-3xl uppercase py-8 container'
        />
      </div>
      <main className='flex flex-col lg:flex-row justify-between  bg- container'>
        <div>
          <h1 className=' font-semibold text-xl uppercase  '>
            Steps to follow for a PHC registration
          </h1>

          <ul className='steps steps-vertical shadow-xl lg:w-[500px] p-5 rounded-[20px]'>
            <li className='step   text-xl capitalize '>
              Read the guidelines for registration
              {/* <Link href='/'>
              <a>here</a>
            </Link>
            to read guidelines */}
            </li>
            <li className='step   text-xl capitalize'>
              Complete registration form
            </li>
            <li className='step   text-xl capitalize '>Upload documents</li>
            {/* <li className='step'>Receive Product</li> */}
          </ul>
        </div>
        <div>
          <h1 className='font-semibold text-xl uppercase  '>Documents </h1>
          <ol className='list-disc shadow-xl  p-10 rounded-[20px] text-xl lg:w-[600px] md:w-[70%] w-11/12 mb-12'>
            <li>
              Certificate of full registration, certificate of annual practicing
              licence, degree certificate and other relevant credentials as
              applicable to staff
            </li>
            <li>2 passport photograph</li>
            <li>Newspaper change of name for married females</li>
            <li>
              Tax clearance certificate (3 years tax clearance prior to the
              current year or tax identification number certificate)
            </li>
            <li>Building layout of the facility (4 copies)</li>
            <li>Building plan of the facility (4 copies</li>
            <li>List of equipment</li>
            <li>Direction to the facility (4 copies)</li>
            <li>CAC certificate</li>
            <li>
              A letter of commitment to share patients attendance, morbidity,
              mortality statistics and any other relevant data with the ministry
              of health on a monthly basis.
            </li>
          </ol>
        </div>
      </main>
    </section>
  )
}

export default Registration

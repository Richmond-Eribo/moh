import { MetaTagsWrapper } from "components"
import Image from "next/image"
import { AboutPageMetaTags } from "utils/metaTags"

const AboutUs = () => {
  return (
    <div className='pt-28'>
      <MetaTagsWrapper tags={AboutPageMetaTags} />
      <div className=' text-center w-full lg:h-72 bg-[url("/New/image31.webp")] bg-cover'>
        <h1 className='text-[#fff] font-semibold text-3xl uppercase py-8 container'>
          about us
        </h1>
        <p className='mb-4 text-lg lg:w-1/3 mx-auto text-white'>
          The Ministry of health is responsible for health policy formulation
          and implementation in the state. The Ministry is under the leadership
          of an Honourable commission who oversees all the activities in the
          health sector
        </p>
      </div>
      <article className='px-4 lg:px-20 mt-10 mb-10'>
        {/* <p className='font-bold'>More info </p> */}
      </article>
      <div className='px-4 lg:px-20'>
        <Image
          src='/Images/image 1.jpg'
          height={775}
          width={1440}
          alt='about'
        />
      </div>
    </div>
  )
}

export default AboutUs

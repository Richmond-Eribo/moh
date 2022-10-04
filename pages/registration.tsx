import { MetaTagsWrapper } from "components"
import Image from "next/image"
import Link from "next/link"
import { NewsPageMetaTags } from "utils/metaTags"

// This page is not in use
const Registration = () => {
  return (
    <section className='pt-28 h-screen'>
      <MetaTagsWrapper tags={NewsPageMetaTags} />
      <div className=' text-white flex flex-col justify-center w-full lg:h-40 bg-[url("/New/image31.png")] bg-cover'>
        <h1 className='text-[#fff] font-semibold text-3xl uppercase py-8 container'>
          Registration
        </h1>
      </div>
    </section>
  )
}

export default Registration

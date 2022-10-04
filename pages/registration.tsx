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
      <main>
        <h3>Intructions for registration</h3>

        <ul className='steps steps-vertical'>
          <li className='step step-primary'>Register</li>
          <li className='step step-primary'>Choose plan</li>
          <li className='step'>Purchase</li>
          <li className='step'>Receive Product</li>
        </ul>
      </main>
    </section>
  )
}

export default Registration

import { MetaTagsWrapper } from "components"
import Image from "next/image"
import Link from "next/link"
import { NewsPageMetaTags } from "utils/metaTags"

// This page is not in use
const Registration = () => {
  return (
    <section className='pt-28 '>
      <MetaTagsWrapper tags={NewsPageMetaTags} />
      <div className=' text-white flex flex-col justify-center w-full lg:h-40 bg-[url("/New/image31.png")] bg-cover'>
        <h1 className='text-[#fff] font-semibold text-3xl uppercase py-8 container'>
          Registration
        </h1>
      </div>
      <main className='flex flex-col items-center'>
        <h1 className=' font-semibold text-3xl uppercase py-8 '>
          Steps to follow for a PHC registration
        </h1>

        <ul className='steps steps-vertical'>
          <li className='step step-primary'>
            Application letter to the honourable commissioner for health
          </li>
          <li className='step step-primary'>
            Non refundable fee of N10,000 application fee payable to Edo State
            IGR account
          </li>
          <li className='step'>
            Application fee must be returned within 90days of collection with
            the following documents attached;
          </li>
          {/* <li className='step'>Receive Product</li> */}
        </ul>

        <h1 className='font-semibold text-xl uppercase py-8 '>Documents </h1>
        <ol className='list-disc lg:w-[600px] md:w-[70%] w-11/12 mb-12'>
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
      </main>
    </section>
  )
}

export default Registration

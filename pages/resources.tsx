import { MetaTagsWrapper, RegistrationModal } from "components"
import useGetDocuments from "hooks/useGetDocuments"
import Image from "next/image"
import { useState } from "react"
import { resourcesPageMetaTags } from "utils/metaTags"
import pdf from "../public/Images/pdf image.png"

const Resources = () => {
  const [skipQuery, setSkipQuery] = useState(0)
  const { data } = useGetDocuments(skipQuery)
  const [documentTitle, setDocumentTitle] = useState("")

  console.log(data)
  return (
    <div className='pt-28'>
      <MetaTagsWrapper tags={resourcesPageMetaTags} />
      <div className=' text-white flex flex-col justify-center w-full lg:h-40 bg-[url("/New/image31.png")] bg-cover'>
        <h1 className='font-semibold text-3xl uppercase  container'>
          Resources
        </h1>
        <p className='text-lg container'>
          Get Publications from the Ministry of Health
        </p>
        {/* <p className='mb-4 text-lg lg:w-1/3 mx-auto text-white'>
        
        </p> */}
      </div>
      <div className='container'>
        {/* <h3 className=' font-bold text-4xl text-black mb-5'>
          Ministry of Health Resources
        </h3> */}
        <div className=' border py-4 border-black mb-10 rounded-lg'>
          {/* <div className='flex flex-col lg:flex-row mb-5 text-xl px-4 justify-between items-center'>
            <h3>
              Display{' '}
              <select
                id='numbers'
                className='mr-2 text-lg p-2 border border-black rounded-sm'
              >
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
                <option value='50'>50</option>
                <option value='all'>all</option>
              </select>
              downloads per page
            </h3>
            <span className='mt-5 lg:mt-0'>
              Search:{' '}
              <input
                type='text'
                className='border-black border-b p-2 text-lg'
              />
            </span>
          </div> */}
          <div className='hidden lg:grid grid-cols-5 px-4 text-sm font-bold bg-[#e9ecef] py-4 gap-7  items-center justify-between'>
            <h3 className='col-span-3'>Title</h3>
            {/* <h3>Categories</h3> */}
            <h3>Update Date</h3>
            <h3>Download</h3>
          </div>
          {data &&
            data.map((data, index) => (
              <div
                key={index}
                className='grid-col-1 grid lg:grid-cols-5 border gap-7 px-4  items-center  py-4 justify-between'
              >
                <div className='lg:col-span-3 text-[#36597C]  font-semibold hover:underline cursor-pointer'>
                  <div className='flex gap-2 items-center '>
                    <Image src={pdf} width={30} height={30} alt='pdf image' />
                    <h3 className='capitalize '>
                      {data.fields.publication?.fields.title}
                    </h3>
                  </div>
                </div>
                {/* <h3>Categories</h3> */}
                <h3>June 7, 2022</h3>
                {/* <p>{data.fields.documentName?.fields.file.url}</p> */}
                <RegistrationModal
                  SetDocumentTitle={setDocumentTitle}
                  DocumentTitle={documentTitle}
                  DownloadLink={data.fields.publication?.fields.file.url}
                />
              </div>
            ))}

          {/* <div className='grid-col-1 grid lg:grid-cols-5 border gap-7 px-4  items-center  py-4 justify-between'>
            <div className='lg:col-span-2 text-[#36597C]  font-semibold hover:underline cursor-pointer'>
              <div className='flex gap-2 items-center'>
                <Image src={pdf} width={60} height={60} alt='pdf image' />
                <h3>
                  IMPROVED HEALTH SERVICE DELIVERY: THREE YEARS OF PURPOSEFUL
                  GOVERNANCE IN OYO STATE
                </h3>
              </div>
            </div>
            <h3>Categories</h3>
            <h3>September 4, 2020</h3>
            <a className='  bg-[#005410]  text-center cursor-pointer rounded-md text-white py-2 px-4 lg:px-4 '>
              DOWNLOAD
            </a>
          </div>
          <div className='flex flex-col lg:flex-row  border-t pt-4 text-lg px-4 justify-between items-center'>
            <h3 className='mb-2 lg:mb-0'>Showing 1 to 2 of 2 downloads</h3>
            <div className='flex items-center gap-1'>
              <button className='   text-center cursor-pointer rounded-md text-[#005410] border  py-2 px-4 lg:px-4 '>
                Previous
              </button>
              <button className='   text-center cursor-pointer rounded-md text-[#005410] border  py-2 px-4 lg:px-4 '>
                1
              </button>
              <button className='   text-center cursor-pointer rounded-md text-[#005410] border  py-2 px-4 lg:px-4 '>
                Next
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Resources

import { MetaTagsWrapper, RegistrationModal } from "components"
import AnimatedHeading from "components/New Design/Animations/AnimateHeading"
import useGetDocuments from "hooks/useGetDocuments"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { resourcesPageMetaTags } from "utils/metaTags"
import pdf from "../public/Images/pdf image.png"

const Resources = () => {
  const [skipQuery, setSkipQuery] = useState(0)
  const { data } = useGetDocuments(skipQuery)
  const [documentTitle, setDocumentTitle] = useState("")

  // const router = useRouter()
  // const { res } = router.query
  // console.log(data)

  return (
    <div className='pt-28'>
      <MetaTagsWrapper tags={resourcesPageMetaTags} />
      <div className=' text-white flex flex-col justify-center w-full lg:h-40 bg-[url("/New/image31.png")] bg-cover'>
        {/* <h1 className='font-semibold text-3xl uppercase  container'>
          Resources
        </h1> */}
        <AnimatedHeading
          text='Resources'
          ClassNames='font-semibold text-3xl uppercase  container'
        />
        <p className='text-lg container'>
          Access health related resources and publications.
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
            <h3>Category</h3>
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
                <h3 className='capitalize'>{data.fields.tag}</h3>
                {/* <p>{data.fields.documentName?.fields.file.url}</p> */}
                <RegistrationModal
                  SetDocumentTitle={setDocumentTitle}
                  DocumentTitle={documentTitle}
                  DownloadLink={data.fields.publication?.fields.file.url}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Resources
